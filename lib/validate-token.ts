import { createServerClient } from '@/lib/supabase-server'

export interface Purchase {
  id: string
  email: string
  product_id: string
  product_name: string
  stripe_payment_intent_id: string | null
  stripe_session_id: string | null
  access_token: string
  amount_paid: number | null
  created_at: string
  expires_at: string | null
  is_active: boolean
}

export interface TokenValidationResult {
  valid: boolean
  purchase: Purchase | null
}

export async function validateToken(
  product_id: string,
  token: string
): Promise<TokenValidationResult> {
  const supabase = createServerClient()

  if (!supabase) {
    console.error('validateToken: Supabase client unavailable')
    return { valid: false, purchase: null }
  }

  const { data, error } = await supabase
    .from('purchases')
    .select('*')
    .eq('access_token', token)
    .eq('product_id', product_id)
    .eq('is_active', true)
    .single()

  if (error || !data) {
    return { valid: false, purchase: null }
  }

  const purchase = data as Purchase

  if (purchase.expires_at && new Date(purchase.expires_at) < new Date()) {
    return { valid: false, purchase: null }
  }

  return { valid: true, purchase }
}
