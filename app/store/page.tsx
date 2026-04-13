'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { submitStoreSignup } from './actions'

const categories = ['All', 'Prompt Packs', 'Templates', 'Courses', 'Skills']

const products = [
  {
    name: 'Business Owner AI Starter Pack',
    category: 'Prompt Packs',
    description: 'A curated collection of 25 Claude prompts for business owners — intake automation, client communication, proposal drafting, weekly planning, and more.',
    price: 27,
    comingSoon: true,
  },
  {
    name: 'Founder Strategy Toolkit',
    category: 'Prompt Packs',
    description: 'Prompts for idea validation, business model development, competitive analysis, and investor-ready summaries. Built for founders in early-stage mode.',
    price: 37,
    comingSoon: true,
  },
  {
    name: 'Next.js + Supabase SaaS Starter',
    category: 'Templates',
    description: 'Production-ready Next.js 16 App Router template with Supabase Auth, RLS policies, Stripe payments, and Resend email — all pre-configured.',
    price: 97,
    comingSoon: true,
  },
  {
    name: 'AI Intake System Template',
    category: 'Templates',
    description: 'A complete client intake system with lead capture form, qualification scoring, auto-response email, and Supabase backend. Deploy in under an hour.',
    price: 67,
    comingSoon: true,
  },
  {
    name: 'Build Your First AI Workflow',
    category: 'Courses',
    description: 'A self-paced course walking business owners through building their first automated AI workflow using Claude and Zapier. No code required.',
    price: 97,
    comingSoon: true,
  },
  {
    name: 'Prompt Engineering for Business',
    category: 'Courses',
    description: 'Learn how to write prompts that actually work — for client communication, content creation, internal ops, and customer service. With exercises.',
    price: 67,
    comingSoon: true,
  },
  {
    name: 'Claude Skill: Proposal Writer',
    category: 'Skills',
    description: 'A ready-to-import Claude skill that generates client-ready proposals from a simple intake form. Plug into your Claude Projects and go.',
    price: 19,
    comingSoon: true,
  },
  {
    name: 'Claude Skill: Content Repurposer',
    category: 'Skills',
    description: 'Turn one piece of content into 10. This Claude skill takes a single blog post or newsletter and repurposes it across email, social, and short-form.',
    price: 19,
    comingSoon: true,
  },
]

const hasStripe = Boolean(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

function StoreSignup() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    const formData = new FormData(e.currentTarget)
    const result = await submitStoreSignup(formData)
    if (result.success) {
      setStatus('success')
    } else {
      setStatus('error')
      setErrorMsg(result.error)
    }
  }

  return (
    <section className="py-16 bg-[#1A1A2E]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-[clamp(24px,3.5vw,40px)] text-white leading-[1.1] mb-4">
          Get notified when the store opens
        </h2>
        <p className="text-white/60 text-lg mb-8">
          We&apos;ll send you a note when products are live — plus an early access discount.
        </p>

        {status === 'success' ? (
          <div className="max-w-md mx-auto bg-white/10 border border-white/20 rounded-2xl px-6 py-5">
            <p className="text-white font-semibold mb-1">You&apos;re on the list.</p>
            <p className="text-white/60 text-sm">We&apos;ll email you when the store goes live.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              required
              className="flex-1 bg-white/10 border border-white/20 text-white placeholder:text-white/40 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#E8C547] transition-colors min-h-[44px]"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="bg-[#E8C547] hover:bg-[#d4b03d] disabled:opacity-60 text-[#1A1A2E] font-semibold px-6 py-3 rounded-xl text-sm transition-all duration-200 hover:scale-[1.02] min-h-[44px] whitespace-nowrap"
            >
              {status === 'loading' ? 'Saving...' : 'Notify Me'}
            </button>
          </form>
        )}

        {status === 'error' && (
          <p className="text-red-400 text-sm mt-3">{errorMsg}</p>
        )}
      </div>
    </section>
  )
}

export default function StorePage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#F6F4EF]">
        {/* Hero */}
        <section className="pt-32 pb-16 bg-white border-b border-[#E2DED8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-[#888580] text-xs font-semibold uppercase tracking-[0.12em] mb-4">Digital Store</p>
              <h1 className="text-[clamp(40px,6vw,72px)] text-[#1A1A2E] leading-[1.0] mb-6">
                Prompts, templates, courses &amp; skills.
              </h1>
              <p className="text-[#888580] text-xl leading-relaxed">
                Instant-download digital products built by Stackd Studio. Everything you need to add AI to your business or accelerate your build.
              </p>
            </div>
          </div>
        </section>

        {/* Store notice */}
        {!hasStripe && (
          <div className="bg-[#E8C547]/10 border-b border-[#E8C547]/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M8 2a6 6 0 100 12A6 6 0 008 2zm0 3.5v3M8 10.5v1" stroke="#E8C547" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <p className="text-[#1A1A2E] text-sm">
                <span className="font-semibold">Store coming soon.</span> Products are listed below — purchases will be enabled shortly.
              </p>
            </div>
          </div>
        )}

        {/* Products */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category filter */}
            <div className="flex flex-wrap gap-3 mb-12">
              {categories.map((cat) => (
                <span
                  key={cat}
                  className={`px-5 py-2 rounded-full text-sm font-semibold border transition-colors ${
                    cat === 'All'
                      ? 'bg-[#1A1A2E] text-white border-[#1A1A2E]'
                      : 'bg-white border-[#E2DED8] text-[#888580]'
                  }`}
                >
                  {cat}
                </span>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {products.map((product) => (
                <div
                  key={product.name}
                  className="bg-white rounded-2xl border border-[#E2DED8] flex flex-col overflow-hidden"
                >
                  {/* Thumbnail placeholder */}
                  <div className="bg-[#1A1A2E] h-32 flex items-center justify-center">
                    <div className="text-[#E8C547] text-xs font-semibold uppercase tracking-[0.1em] px-3 py-1 border border-[#E8C547]/40 rounded-full">
                      {product.category}
                    </div>
                  </div>

                  <div className="p-5 flex flex-col gap-3 flex-1">
                    <h3 className="text-base text-[#1A1A2E] leading-tight">{product.name}</h3>
                    <p className="text-[#888580] text-sm leading-relaxed flex-1">{product.description}</p>

                    <div className="flex items-center justify-between pt-2 border-t border-[#E2DED8]">
                      <span className="text-xl font-bold text-[#1A1A2E] font-[family-name:var(--font-instrument-sans)]">
                        ${product.price}
                      </span>
                      <button
                        disabled={product.comingSoon || !hasStripe}
                        className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                          product.comingSoon || !hasStripe
                            ? 'bg-[#F6F4EF] text-[#888580] cursor-not-allowed border border-[#E2DED8]'
                            : 'bg-[#1A1A2E] hover:bg-[#E8C547] text-white hover:text-[#1A1A2E] hover:scale-[1.02]'
                        }`}
                        aria-label={product.comingSoon ? `${product.name} — Coming Soon` : `Buy ${product.name}`}
                      >
                        {product.comingSoon || !hasStripe ? 'Coming Soon' : 'Buy Now'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Email signup */}
        <StoreSignup />
      </main>
      <Footer />
    </>
  )
}
