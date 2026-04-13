'use server'

import { createServerClient } from '@/lib/supabase-server'

export type LeadResult = { success: true } | { success: false; error: string }

export async function submitLead(formData: FormData): Promise<LeadResult> {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const message = formData.get('message') as string
  const track = formData.get('track') as string

  if (!name || !email || !message) {
    return { success: false, error: 'Please fill in all required fields.' }
  }

  const supabase = createServerClient()

  if (supabase) {
    const { error } = await supabase.from('leads').insert([
      { name, email, message, track },
    ])

    if (error) {
      console.error('Supabase lead insert error:', error)
      return { success: false, error: 'Something went wrong. Please email us directly.' }
    }
  }

  return { success: true }
}
