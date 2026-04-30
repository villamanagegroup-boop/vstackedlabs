import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const FROM = 'Stackd Studios AI <chanel@stackdstudiosai.com>'
const TO = process.env.CHAT_LEADS_TO_EMAIL ?? 'chanel@stackdstudiosai.com'

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

interface NewLeadEmailParams {
  name: string
  email: string
  message: string
  page: string
  conversation: Array<{ role: 'user' | 'assistant'; content: string }>
}

export async function sendNewChatLeadEmail({
  name,
  email,
  message,
  page,
  conversation,
}: NewLeadEmailParams): Promise<void> {
  const safeName = escapeHtml(name)
  const safeEmail = escapeHtml(email)
  const safeMessage = escapeHtml(message)
  const safePage = escapeHtml(page || 'unknown')

  const conversationHtml = conversation
    .map((m) => {
      const role = m.role === 'user' ? 'Visitor' : 'Bot'
      const color = m.role === 'user' ? '#0C0C0C' : '#888580'
      return `<div style="margin:0 0 12px;padding:10px 12px;border-left:3px solid ${color};background:#F6F4EF;border-radius:6px;">
        <div style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;color:${color};margin-bottom:4px;">${role}</div>
        <div style="font-size:14px;line-height:1.5;color:#0C0C0C;white-space:pre-wrap;">${escapeHtml(m.content)}</div>
      </div>`
    })
    .join('')

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New chat lead from ${safeName}</title>
</head>
<body style="margin:0;padding:0;background:#F6F4EF;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;color:#0C0C0C;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F6F4EF;padding:40px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="640" cellpadding="0" cellspacing="0" style="max-width:640px;width:100%;background:#FFFFFF;border:1px solid #E2DED8;border-radius:12px;overflow:hidden;">
          <tr>
            <td style="background:#0C0C0C;color:#FFD84D;padding:14px 24px;font-size:13px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;">
              New Chat Lead · Stackd Studios AI
            </td>
          </tr>
          <tr>
            <td style="padding:24px;">
              <h1 style="margin:0 0 18px;font-size:24px;line-height:1.2;color:#0C0C0C;">${safeName} wants a follow-up</h1>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F6F4EF;border:1px solid #E2DED8;border-radius:8px;padding:16px;margin-bottom:20px;">
                <tr><td style="padding:4px 0;font-size:13px;color:#888580;width:90px;">Email</td><td style="padding:4px 0;font-size:14px;font-weight:600;color:#0C0C0C;"><a href="mailto:${safeEmail}" style="color:#0C0C0C;text-decoration:none;">${safeEmail}</a></td></tr>
                <tr><td style="padding:4px 0;font-size:13px;color:#888580;">On page</td><td style="padding:4px 0;font-size:14px;color:#0C0C0C;font-family:monospace;">${safePage}</td></tr>
              </table>

              <p style="margin:0 0 8px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.14em;color:#888580;">Their message</p>
              <div style="background:#FFF8DD;border:1px solid #FFE89A;border-radius:8px;padding:14px;font-size:15px;line-height:1.55;color:#0C0C0C;white-space:pre-wrap;margin-bottom:24px;">${safeMessage}</div>

              <p style="margin:0 0 12px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.14em;color:#888580;">Chat transcript</p>
              ${conversationHtml || '<p style="font-size:13px;color:#888580;font-style:italic;">No prior conversation.</p>'}

              <hr style="border:none;border-top:1px solid #E2DED8;margin:24px 0;" />
              <p style="margin:0;font-size:12px;color:#888580;">Generated automatically by the website chatbot. Reply directly to ${safeEmail} to respond.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`

  const { error } = await resend.emails.send({
    from: FROM,
    to: TO,
    replyTo: email,
    subject: `[Chat lead] ${name} — ${page}`,
    html,
  })

  if (error) {
    throw new Error(`Resend (chat lead) failed: ${JSON.stringify(error)}`)
  }
}
