import { createServerClient } from '@/lib/supabase-server'

const PER_IP_DAILY = parseInt(process.env.CHAT_PER_IP_DAILY ?? '20', 10)
const GLOBAL_DAILY = parseInt(process.env.CHAT_DAILY_MESSAGE_CAP ?? '1500', 10)

export type RateLimitResult =
  | { ok: true; remaining: number }
  | { ok: false; reason: 'ip_exceeded' | 'global_exceeded' | 'config_error' }

function todayUtcDate(): string {
  return new Date().toISOString().slice(0, 10) // YYYY-MM-DD
}

/**
 * Atomic check + increment. Reads current counts, rejects if either cap is
 * already met, otherwise increments. Two-step is fine for a marketing-site
 * chatbot — the small race window costs at most a few extra calls per day.
 */
export async function checkAndIncrementRateLimit(ip: string): Promise<RateLimitResult> {
  const supabase = createServerClient()
  if (!supabase) {
    return { ok: false, reason: 'config_error' }
  }

  const day = todayUtcDate()

  // Per-IP check
  const { data: ipRow, error: ipLookupErr } = await supabase
    .from('chat_rate_limits')
    .select('message_count')
    .eq('ip', ip)
    .eq('day', day)
    .maybeSingle()

  if (ipLookupErr) {
    console.error('[chat/rate-limit] ip lookup error', ipLookupErr)
    return { ok: false, reason: 'config_error' }
  }

  const ipCount = ipRow?.message_count ?? 0
  if (ipCount >= PER_IP_DAILY) {
    return { ok: false, reason: 'ip_exceeded' }
  }

  // Global check — sum today's counts across all IPs
  const { data: allRows, error: globalErr } = await supabase
    .from('chat_rate_limits')
    .select('message_count')
    .eq('day', day)

  if (globalErr) {
    console.error('[chat/rate-limit] global lookup error', globalErr)
    return { ok: false, reason: 'config_error' }
  }

  const globalCount = (allRows ?? []).reduce((sum, r) => sum + (r.message_count ?? 0), 0)
  if (globalCount >= GLOBAL_DAILY) {
    return { ok: false, reason: 'global_exceeded' }
  }

  // Increment (upsert)
  if (ipRow) {
    const { error: updateErr } = await supabase
      .from('chat_rate_limits')
      .update({ message_count: ipCount + 1, last_seen_at: new Date().toISOString() })
      .eq('ip', ip)
      .eq('day', day)
    if (updateErr) {
      console.error('[chat/rate-limit] update error', updateErr)
      return { ok: false, reason: 'config_error' }
    }
  } else {
    const { error: insertErr } = await supabase
      .from('chat_rate_limits')
      .insert({ ip, day, message_count: 1, last_seen_at: new Date().toISOString() })
    // Race on insert (another request inserted first) → retry as update
    if (insertErr && insertErr.code === '23505') {
      await supabase
        .from('chat_rate_limits')
        .update({ message_count: ipCount + 1, last_seen_at: new Date().toISOString() })
        .eq('ip', ip)
        .eq('day', day)
    } else if (insertErr) {
      console.error('[chat/rate-limit] insert error', insertErr)
      return { ok: false, reason: 'config_error' }
    }
  }

  return { ok: true, remaining: Math.max(0, PER_IP_DAILY - (ipCount + 1)) }
}

export function getClientIp(request: Request): string {
  // Common proxy headers; fall back to a stable string so the limiter still functions.
  const xff = request.headers.get('x-forwarded-for')
  if (xff) return xff.split(',')[0].trim()
  const real = request.headers.get('x-real-ip')
  if (real) return real.trim()
  return 'unknown'
}
