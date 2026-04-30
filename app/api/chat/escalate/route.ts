import { createServerClient } from '@/lib/supabase-server'
import { sendNewChatLeadEmail } from '@/lib/emails/chat-emails'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type ConversationMessage = { role: 'user' | 'assistant'; content: string }

export async function POST(request: Request) {
  let body: { name?: unknown; email?: unknown; message?: unknown; page?: unknown; conversation?: unknown }
  try {
    body = await request.json()
  } catch {
    return Response.json({ error: 'Invalid request.' }, { status: 400 })
  }

  const name = typeof body.name === 'string' ? body.name.trim() : ''
  const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : ''
  const message = typeof body.message === 'string' ? body.message.trim() : ''
  const page = typeof body.page === 'string' ? body.page.trim().slice(0, 200) : ''
  const conversation = sanitizeConversation(body.conversation)

  if (!name || name.length > 80) {
    return Response.json({ error: 'Please enter your name.' }, { status: 400 })
  }
  if (!EMAIL_RE.test(email) || email.length > 254) {
    return Response.json({ error: 'Please enter a valid email.' }, { status: 400 })
  }
  if (!message || message.length > 4000) {
    return Response.json({ error: 'Please enter a message (max 4000 chars).' }, { status: 400 })
  }

  const supabase = createServerClient()
  if (!supabase) {
    return Response.json({ error: 'Server configuration error.' }, { status: 500 })
  }

  const { error: insertError } = await supabase.from('chat_leads').insert({
    name,
    email,
    message,
    page,
    conversation,
  })

  if (insertError) {
    console.error('[chat/escalate] insert error', insertError)
    return Response.json({ error: 'Could not save your message. Please try again.' }, { status: 500 })
  }

  try {
    await sendNewChatLeadEmail({ name, email, message, page, conversation })
  } catch (e) {
    console.error('[chat/escalate] email failed', e)
    // Lead is saved — return success even if email failed.
    return Response.json({
      status: 'saved',
      message: "Got it — we'll be in touch within 24 hours.",
    })
  }

  return Response.json({
    status: 'sent',
    message: "Got it — we'll be in touch within 24 hours.",
  })
}

function sanitizeConversation(raw: unknown): ConversationMessage[] {
  if (!Array.isArray(raw)) return []
  const out: ConversationMessage[] = []
  for (const m of raw) {
    if (!m || typeof m !== 'object') continue
    const role = (m as { role?: unknown }).role
    const content = (m as { content?: unknown }).content
    if ((role === 'user' || role === 'assistant') && typeof content === 'string') {
      out.push({ role, content: content.slice(0, 4000) })
    }
  }
  return out.slice(-30)
}
