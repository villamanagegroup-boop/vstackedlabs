import { redirect } from 'next/navigation'
import { createServerClient } from '@/lib/supabase-server'
import ToolkitContent from '@/components/toolkit/ToolkitContent'
import ToolkitInvalidLink from '@/components/toolkit/ToolkitInvalidLink'

export const dynamic = 'force-dynamic'

interface SearchParams {
  token?: string | string[]
  preview?: string | string[]
  name?: string | string[]
}

export default async function ToolkitAccessPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>
}) {
  const { token: tokenParam, preview: previewParam, name: nameParam } = await searchParams

  // Dev-only bypass: ?preview=1 renders the toolkit without a real token.
  // Hard-disabled in production builds. Pass &name=Chanel to preview the
  // first-name variant; omit to preview the plain "AI Toolkit" heading.
  if (
    process.env.NODE_ENV !== 'production' &&
    (previewParam === '1' || previewParam === 'true')
  ) {
    const previewName = typeof nameParam === 'string' ? nameParam.trim() : ''
    return <ToolkitContent firstName={previewName || undefined} />
  }

  const token = typeof tokenParam === 'string' ? tokenParam.trim() : ''

  if (!token) {
    redirect('/free/toolkit')
  }

  // Token shape sanity: 40 hex chars (randomBytes(20).toString('hex'))
  if (!/^[a-f0-9]{40}$/i.test(token)) {
    return <ToolkitInvalidLink />
  }

  const supabase = createServerClient()
  if (!supabase) {
    return <ToolkitInvalidLink />
  }

  const { data: subscriber, error } = await supabase
    .from('toolkit_subscribers')
    .select('id, first_name, access_count')
    .eq('access_token', token)
    .maybeSingle()

  if (error) {
    console.error('[toolkit/access] lookup error', error)
    return <ToolkitInvalidLink />
  }

  if (!subscriber) {
    return <ToolkitInvalidLink />
  }

  // Update access stats. Errors here shouldn't block rendering the toolkit.
  const { error: updateError } = await supabase
    .from('toolkit_subscribers')
    .update({
      last_accessed_at: new Date().toISOString(),
      access_count: (subscriber.access_count ?? 0) + 1,
    })
    .eq('id', subscriber.id)

  if (updateError) {
    console.error('[toolkit/access] update error', updateError)
  }

  return <ToolkitContent firstName={subscriber.first_name} />
}
