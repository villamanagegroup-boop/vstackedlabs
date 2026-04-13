'use server'

import { createServerClient } from '@/lib/supabase-server'

export type SignupResult = { success: true } | { success: false; error: string }

export async function submitStoreSignup(formData: FormData): Promise<SignupResult> {
  const email = (formData.get('email') as string)?.trim()

  if (!email) {
    return { success: false, error: 'Please enter your email address.' }
  }

  const supabase = createServerClient()

  if (!supabase) {
    return { success: false, error: 'Service unavailable. Please try again later.' }
  }

  const { error } = await supabase.from('store_signups').insert([{ email }])

  if (error) {
    if (error.code === '23505') {
      // Unique constraint — already signed up
      return { success: true }
    }
    console.error('Supabase store_signups insert error:', error)
    return { success: false, error: 'Something went wrong. Please try again.' }
  }

  return { success: true }
}
