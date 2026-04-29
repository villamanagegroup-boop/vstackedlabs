import { NextRequest } from 'next/server'
import crypto from 'crypto'
import { stripe } from '@/lib/stripe'
import { createServerClient } from '@/lib/supabase-server'
import { sendAccessEmail } from '@/lib/emails/send-access-email'
import { PRICE_ID_MAP } from '@/lib/products'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  const body = await request.text()
  const signature = request.headers.get('stripe-signature')

  if (!signature) {
    return new Response('Missing stripe-signature header', { status: 400 })
  }

  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET
  if (!webhookSecret) {
    console.error('Stripe webhook: STRIPE_WEBHOOK_SECRET is not configured')
    return new Response('Server misconfigured: missing STRIPE_WEBHOOK_SECRET', {
      status: 500,
    })
  }

  let event: ReturnType<typeof stripe.webhooks.constructEvent>

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    console.error('Stripe signature verification failed:', message)
    return new Response(`Webhook error: ${message}`, { status: 400 })
  }

  const supabase = createServerClient()

  if (event.type === 'checkout.session.completed') {
    const sessionId = (event.data.object as { id: string }).id

    try {
      const session = await stripe.checkout.sessions.retrieve(sessionId, {
        expand: ['line_items'],
      })

      const email = session.customer_details?.email
      if (!email) {
        throw new Error('No customer email on session')
      }

      const lineItems = session.line_items?.data ?? []

      for (const item of lineItems) {
        const priceId = item.price?.id
        if (!priceId) continue

        const product = PRICE_ID_MAP[priceId]
        if (!product) {
          console.warn(`Webhook: unknown price ID ${priceId} — skipping`)
          continue
        }

        const access_token = crypto.randomBytes(16).toString('hex')

        if (supabase) {
          await supabase.from('purchases').insert({
            email,
            product_id: product.product_id,
            product_name: product.product_name,
            stripe_payment_intent_id:
              typeof session.payment_intent === 'string'
                ? session.payment_intent
                : null,
            stripe_session_id: session.id,
            access_token,
            amount_paid: item.amount_total,
          })
        }

        await sendAccessEmail({
          to: email,
          product_id: product.product_id,
          product_name: product.product_name,
          access_token,
        })
      }

      if (supabase) {
        await supabase.from('webhook_logs').insert({
          event_id: event.id,
          event_type: event.type,
          status: 'success',
          session_id: sessionId,
        })
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Unknown error'
      console.error('Webhook processing error:', message)

      if (supabase) {
        await supabase.from('webhook_logs').insert({
          event_id: event.id,
          event_type: event.type,
          status: 'error',
          error_message: message,
          session_id: sessionId,
        })
      }

      // Always return 200 — Stripe must not retry
      return Response.json({ received: true, error: message }, { status: 200 })
    }
  }

  return Response.json({ received: true })
}
