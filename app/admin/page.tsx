'use client'

import { useState } from 'react'
import Link from 'next/link'

const hasSupabase = Boolean(
  process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

function LoginForm({ onLogin }: { onLogin: () => void }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    if (!hasSupabase) {
      setError('Supabase is not configured. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to your environment.')
      setLoading(false)
      return
    }

    try {
      const { createClient } = await import('@supabase/supabase-js')
      const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
      )
      const { error: authError } = await supabase.auth.signInWithPassword({ email, password })
      if (authError) {
        setError(authError.message)
      } else {
        onLogin()
      }
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#F6F4EF] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="flex items-center gap-2.5 justify-center mb-8">
          <div className="w-8 h-8 bg-[#0C0C0C] rounded flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <rect x="1" y="1" width="5" height="5" fill="white" rx="0.5"/>
              <rect x="8" y="1" width="5" height="5" fill="white" rx="0.5"/>
              <rect x="1" y="8" width="5" height="5" fill="white" rx="0.5"/>
              <rect x="8" y="8" width="5" height="5" fill="white" rx="0.5"/>
            </svg>
          </div>
          <span className="text-[#0C0C0C] font-semibold text-lg font-[family-name:var(--font-instrument-sans)]">
            Stackd Studios AI Admin
          </span>
        </div>

        <div className="bg-white rounded-2xl border border-[#E2DED8] p-8 shadow-sm">
          <h1 className="text-2xl text-[#0C0C0C] mb-1">Sign In</h1>
          <p className="text-[#888580] text-sm mb-6">Admin access only</p>

          {!hasSupabase && (
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5 text-sm text-amber-800">
              <p className="font-semibold mb-1">Supabase not configured</p>
              <p>Add <code className="font-mono text-xs">NEXT_PUBLIC_SUPABASE_URL</code> and <code className="font-mono text-xs">NEXT_PUBLIC_SUPABASE_ANON_KEY</code> to your <code className="font-mono text-xs">.env.local</code> file.</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-[#0C0C0C] mb-2">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="admin@stackdstudios.com"
                className="w-full bg-[#F6F4EF] border border-[#E2DED8] rounded-xl px-4 py-3 text-[#0C0C0C] placeholder:text-[#888580] focus:outline-none focus:ring-2 focus:ring-[#0C0C0C] text-sm min-h-[44px]"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-[#0C0C0C] mb-2">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••"
                className="w-full bg-[#F6F4EF] border border-[#E2DED8] rounded-xl px-4 py-3 text-[#0C0C0C] placeholder:text-[#888580] focus:outline-none focus:ring-2 focus:ring-[#0C0C0C] text-sm min-h-[44px]"
              />
            </div>

            {error && (
              <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="bg-[#0C0C0C] hover:bg-[#FFD84D] disabled:opacity-60 text-white hover:text-[#0C0C0C] font-semibold py-3 rounded-xl transition-all duration-200 text-sm min-h-[44px]"
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>
        </div>

        <p className="text-center text-[#888580] text-sm mt-6">
          <Link href="/" className="hover:text-[#0C0C0C] transition-colors">
            ← Back to site
          </Link>
        </p>
      </div>
    </div>
  )
}

function Dashboard({ onLogout }: { onLogout: () => void }) {
  const [activeTab, setActiveTab] = useState<'leads' | 'orders' | 'products'>('leads')

  const tabs = [
    { id: 'leads' as const, label: 'Leads' },
    { id: 'orders' as const, label: 'Orders' },
    { id: 'products' as const, label: 'Products' },
  ]

  return (
    <div className="min-h-screen bg-[#F6F4EF]">
      {/* Admin nav */}
      <header className="bg-white border-b border-[#E2DED8] sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-[#0C0C0C] rounded flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <rect x="1" y="1" width="5" height="5" fill="white" rx="0.5"/>
                <rect x="8" y="1" width="5" height="5" fill="white" rx="0.5"/>
                <rect x="1" y="8" width="5" height="5" fill="white" rx="0.5"/>
                <rect x="8" y="8" width="5" height="5" fill="white" rx="0.5"/>
              </svg>
            </div>
            <span className="text-[#0C0C0C] font-semibold text-sm font-[family-name:var(--font-instrument-sans)]">
              Stackd Studios AI Admin
            </span>
            <span className="text-[#E2DED8]" aria-hidden="true">·</span>
            <span className="text-[#888580] text-sm">Dashboard</span>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/" className="text-[#888580] hover:text-[#0C0C0C] text-sm transition-colors">
              View Site
            </Link>
            <button
              onClick={onLogout}
              className="text-[#888580] hover:text-[#0C0C0C] text-sm transition-colors"
            >
              Sign Out
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          {[
            { label: 'Total Leads', value: '—', note: 'Connect Supabase to load' },
            { label: 'Total Orders', value: '—', note: 'Connect Stripe + Supabase' },
            { label: 'Active Products', value: '—', note: 'Add products to load' },
          ].map((stat) => (
            <div key={stat.label} className="bg-white rounded-2xl border border-[#E2DED8] p-5">
              <p className="text-[#888580] text-xs font-semibold uppercase tracking-[0.1em] mb-1">{stat.label}</p>
              <p className="text-3xl font-bold text-[#0C0C0C] font-[family-name:var(--font-instrument-sans)] mb-1">{stat.value}</p>
              <p className="text-[#888580] text-xs">{stat.note}</p>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-[#0C0C0C] text-white'
                  : 'bg-white border border-[#E2DED8] text-[#888580] hover:border-[#0C0C0C] hover:text-[#0C0C0C]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Table placeholder */}
        <div className="bg-white rounded-2xl border border-[#E2DED8] overflow-hidden">
          <div className="px-6 py-4 border-b border-[#E2DED8] flex items-center justify-between">
            <h2 className="text-base text-[#0C0C0C]">
              {activeTab === 'leads' && 'Contact Form Submissions'}
              {activeTab === 'orders' && 'Store Orders'}
              {activeTab === 'products' && 'Store Products'}
            </h2>
            {activeTab === 'products' && (
              <button className="bg-[#0C0C0C] hover:bg-[#FFD84D] text-white hover:text-[#0C0C0C] text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-200">
                + Add Product
              </button>
            )}
          </div>

          <div className="px-6 py-12 text-center">
            <p className="text-[#888580] text-sm mb-2">
              {!hasSupabase
                ? 'Configure Supabase environment variables to load data.'
                : `No ${activeTab} yet. Data will appear here once your Supabase tables are populated.`}
            </p>
            {!hasSupabase && (
              <p className="text-[#888580] text-xs font-mono bg-[#F6F4EF] rounded-lg px-4 py-2 inline-block mt-2">
                NEXT_PUBLIC_SUPABASE_URL · NEXT_PUBLIC_SUPABASE_ANON_KEY · SUPABASE_SERVICE_ROLE_KEY
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function AdminPage() {
  const [authed, setAuthed] = useState(false)

  if (!authed) {
    return <LoginForm onLogin={() => setAuthed(true)} />
  }

  return <Dashboard onLogout={() => setAuthed(false)} />
}
