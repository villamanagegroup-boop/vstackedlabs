'use server'

import { createServerClient } from '@/lib/supabase-server'

export type SignupResult = { success: true } | { success: false; error: string }

export async function submitStoreSignup(formData: FormData): Promise<SignupResult> {
  const email = (formData.get('email') as string)?.trim()
  const product = (formData.get('product') as string | null)?.trim() || null

  if (!email) {
    return { success: false, error: 'Please enter your email address.' }
  }

  const supabase = createServerClient()

  if (!supabase) {
    return { success: false, error: 'Service unavailable. Please try again later.' }
  }

  // Try insert with product. If the column doesn't exist yet, fall back
  // to email-only so existing schemas keep working.
  const payload: Record<string, string> = { email }
  if (product) payload.product = product

  const { error } = await supabase.from('store_signups').insert([payload])

  if (error) {
    if (error.code === '23505') {
      // Unique constraint — already signed up
      return { success: true }
    }
    // Column not in schema — retry email-only so the signup still lands.
    if (product && (error.code === '42703' || /column.*product/i.test(error.message))) {
      const { error: retryError } = await supabase
        .from('store_signups')
        .insert([{ email }])
      if (!retryError || retryError.code === '23505') return { success: true }
      console.error('Supabase store_signups retry error:', retryError)
      return { success: false, error: 'Something went wrong. Please try again.' }
    }
    console.error('Supabase store_signups insert error:', error)
    return { success: false, error: 'Something went wrong. Please try again.' }
  }

  return { success: true }
}
