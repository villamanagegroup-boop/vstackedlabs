'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { submitStoreSignup } from './actions'
import { useToast } from '@/components/ToastProvider'
import Link from 'next/link'
import { useCart } from '@/components/CartContext'

const categories = ['All', 'Prompt Packs', 'Templates', 'Courses', 'Skills']

const products = [
  {
    name: 'Business Owner AI Starter Pack',
    category: 'Prompt Packs',
    description: 'A curated collection of 25 Claude prompts for business owners — intake automation, client communication, proposal drafting, weekly planning, and more.',
    price: 27,
    priceId: 'price_1TMF5vAA0v91LtlWk5ofjrtI',
    available: true,
  },
  {
    name: 'Founder Strategy Toolkit',
    category: 'Prompt Packs',
    description: 'Prompts for idea validation, business model development, competitive analysis, and investor-ready summaries. Built for founders in early-stage mode.',
    price: 37,
    priceId: 'price_1TMF5wAA0v91LtlWpIKZpARe',
    available: false,
  },
  {
    name: 'Next.js + Supabase SaaS Starter',
    category: 'Templates',
    description: 'Production-ready Next.js 16 App Router template with Supabase Auth, RLS policies, Stripe payments, and Resend email — all pre-configured.',
    price: 97,
    priceId: 'price_1TMF5wAA0v91LtlWRlT13Qz5',
    available: false,
  },
  {
    name: 'AI Intake System Template',
    category: 'Templates',
    description: 'A complete client intake system with lead capture form, qualification scoring, auto-response email, and Supabase backend. Deploy in under an hour.',
    price: 67,
    priceId: 'price_1TMF5xAA0v91LtlW8fcxslKH',
    available: false,
  },
  {
    name: 'Build Your First AI Workflow',
    category: 'Courses',
    description: 'A self-paced course walking business owners through building their first automated AI workflow using Claude and Zapier. No code required.',
    price: 97,
    priceId: 'price_1TMF5xAA0v91LtlWXE4NsJMG',
    available: false,
  },
  {
    name: 'Prompt Engineering for Business',
    category: 'Courses',
    description: 'Learn how to write prompts that actually work — for client communication, content creation, internal ops, and customer service. With exercises.',
    price: 67,
    priceId: 'price_1TMF5yAA0v91LtlWR4nHQQ7B',
    available: false,
  },
  {
    name: 'Claude Skill: Proposal Writer',
    category: 'Skills',
    description: 'A ready-to-import Claude skill that generates client-ready proposals from a simple intake form. Plug into your Claude Projects and go.',
    price: 19,
    priceId: 'price_1TMF5yAA0v91LtlWFwJK6KLf',
    available: false,
  },
  {
    name: 'Claude Skill: Content Repurposer',
    category: 'Skills',
    description: 'Turn one piece of content into 10. This Claude skill takes a single blog post or newsletter and repurposes it across email, social, and short-form.',
    price: 19,
    priceId: 'price_1TMF5yAA0v91LtlWubvCvCBZ',
    available: false,
  },
]

function CartBar() {
  const { totalItems, totalPrice } = useCart()
  if (totalItems === 0) return null
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-sm px-4">
      <Link
        href="/cart"
        className="flex items-center justify-between bg-[#0C0C0C] text-white px-5 py-3.5 rounded-2xl shadow-xl w-full hover:bg-[#1a1a1a] transition-colors"
      >
        <span className="text-sm font-semibold">
          {totalItems} item{totalItems > 1 ? 's' : ''} in cart
        </span>
        <span className="text-[#E8C547] font-bold">${totalPrice.toFixed(2)} → View Cart</span>
      </Link>
    </div>
  )
}

function StoreSignup() {
  const [status, setStatus] = useState<'idle' | 'loading'>('idle')
  const { toast } = useToast()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    const formData = new FormData(e.currentTarget)
    const result = await submitStoreSignup(formData)
    setStatus('idle')
    if (result.success) {
      toast("You're on the list! We'll email you when new products drop.", 'success')
      ;(e.target as HTMLFormElement).reset()
    } else {
      toast(result.error, 'error')
    }
  }

  return (
    <section className="py-16 bg-[#0C0C0C]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-[clamp(24px,3.5vw,40px)] text-white leading-[1.1] mb-4">
          Get notified when new products drop
        </h2>
        <p className="text-white/60 text-lg mb-8">
          Join the list and get early access discounts on everything we release.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            name="email"
            placeholder="your@email.com"
            required
            className="flex-1 bg-white/10 border border-white/20 text-white placeholder:text-white/40 rounded-xl px-4 py-3 text-sm transition-colors min-h-[44px]"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="bg-[#E8C547] hover:bg-[#d4b03d] disabled:opacity-60 text-[#0C0C0C] font-semibold px-6 py-3 rounded-xl text-sm transition-all duration-200 hover:scale-[1.02] min-h-[44px] whitespace-nowrap"
          >
            {status === 'loading' ? 'Saving...' : 'Notify Me'}
          </button>
        </form>
      </div>
    </section>
  )
}

function ProductCard({ product }: { product: typeof products[0] }) {
  const { addItem, items } = useCart()
  const inCart = items.some((i) => i.priceId === product.priceId)

  function handleAdd() {
    addItem({ priceId: product.priceId, name: product.name, price: product.price })
  }

  if (!product.available) {
    return (
      <div className="bg-white rounded-2xl border border-[#E2DED8] flex flex-col overflow-hidden opacity-60">
        <div className="bg-[#0C0C0C] h-32 flex items-center justify-center relative">
          <div className="text-white/30 text-xs font-semibold uppercase tracking-[0.1em] px-3 py-1 border border-white/10 rounded-full">
            {product.category}
          </div>
          <div className="absolute top-3 right-3 bg-white/10 text-white/60 text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full">
            Coming Soon
          </div>
        </div>
        <div className="p-5 flex flex-col gap-3 flex-1">
          <h3 className="text-base text-[#0C0C0C] leading-tight">{product.name}</h3>
          <p className="text-[#888580] text-sm leading-relaxed flex-1">{product.description}</p>
          <div className="flex items-center justify-between pt-2 border-t border-[#E2DED8]">
            <span className="text-xl font-bold text-[#0C0C0C] font-[family-name:var(--font-instrument-sans)]">
              ${product.price}
            </span>
            <div className="px-4 py-2 rounded-lg text-sm font-semibold min-h-[44px] flex items-center bg-[#F6F4EF] text-[#888580]">
              Coming Soon
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl border border-[#E2DED8] flex flex-col overflow-hidden">
      <div className="bg-[#0C0C0C] h-32 flex items-center justify-center">
        <div className="text-[#E8C547] text-xs font-semibold uppercase tracking-[0.1em] px-3 py-1 border border-[#E8C547]/40 rounded-full">
          {product.category}
        </div>
      </div>
      <div className="p-5 flex flex-col gap-3 flex-1">
        <h3 className="text-base text-[#0C0C0C] leading-tight">{product.name}</h3>
        <p className="text-[#888580] text-sm leading-relaxed flex-1">{product.description}</p>
        <div className="flex items-center justify-between pt-2 border-t border-[#E2DED8]">
          <span className="text-xl font-bold text-[#0C0C0C] font-[family-name:var(--font-instrument-sans)]">
            ${product.price}
          </span>
          <button
            onClick={handleAdd}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 min-h-[44px] ${
              inCart
                ? 'bg-[#E8C547] text-[#0C0C0C]'
                : 'bg-[#0C0C0C] hover:bg-[#E8C547] text-white hover:text-[#0C0C0C] hover:scale-[1.02]'
            }`}
            aria-label={inCart ? `${product.name} added to cart` : `Add ${product.name} to cart`}
          >
            {inCart ? 'Added ✓' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default function StorePage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? products
    : products.filter((p) => p.category === activeCategory)

  return (
    <>
      <Navbar />
      <main className="bg-[#F6F4EF]">
        {/* Hero */}
        <section className="pt-32 pb-16 bg-white border-b border-[#E2DED8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-[#888580] text-xs font-semibold uppercase tracking-[0.12em] mb-4">Digital Store</p>
              <h1 className="text-[clamp(40px,6vw,72px)] text-[#0C0C0C] leading-[1.0] mb-6">
                Prompts, templates, courses &amp; skills.
              </h1>
              <p className="text-[#888580] text-xl leading-relaxed">
                Instant-download digital products built by Stackd Studios AI. Everything you need to add AI to your business or accelerate your build.
              </p>
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category filter */}
            <div className="flex flex-wrap gap-3 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold border transition-colors ${
                    activeCategory === cat
                      ? 'bg-[#0C0C0C] text-white border-[#0C0C0C]'
                      : 'bg-white border-[#E2DED8] text-[#888580] hover:border-[#0C0C0C] hover:text-[#0C0C0C]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {filtered.map((product) => (
                <ProductCard key={product.name} product={product} />
              ))}
            </div>
          </div>
        </section>

        <CartBar />
        <StoreSignup />
      </main>
      <Footer />
    </>
  )
}
