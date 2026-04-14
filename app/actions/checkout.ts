'use server'

import { stripe } from '@/lib/stripe'
import { redirect } from 'next/navigation'
import { headers } from 'next/headers'

interface LineItem {
  priceId: string
  quantity: number
}

async function getBaseUrl() {
  const headersList = await headers()
  const host = headersList.get('host') || 'localhost:3000'
  const proto = host.startsWith('localhost') ? 'http' : 'https'
  return `${proto}://${host}`
}

export async function createCheckoutSession(items: LineItem | LineItem[]) {
  const baseUrl = await getBaseUrl()

  const lineItems = Array.isArray(items)
    ? items.map((i) => ({ price: i.priceId, quantity: i.quantity }))
    : [{ price: items.priceId, quantity: 1 }]

  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: lineItems,
    success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${baseUrl}/cart`,
    allow_promotion_codes: true,
  })

  if (!session.url) throw new Error('Failed to create Stripe checkout session')

  redirect(session.url)
}
