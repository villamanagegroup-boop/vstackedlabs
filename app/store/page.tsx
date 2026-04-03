import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Store — Stackd Studio',
  description: 'Prompt packs, templates, courses, and tools from Stackd Studio. Coming soon.',
}

export default function StorePage() {
  return (
    <div className="bg-[#F6F4EF] pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-[#E2DED8]">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#888580] mb-3">Store</p>
        <h1
          className="text-[clamp(36px,5vw,64px)] text-[#0C0C0C]"
          style={{ fontFamily: 'var(--font-anton)' }}
        >
          DIGITAL PRODUCTS
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="inline-block bg-[#1A1A2E] text-[#E8C547] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
          Coming Soon
        </div>
        <h2
          className="text-3xl text-[#0C0C0C] mb-4"
          style={{ fontFamily: 'var(--font-anton)' }}
        >
          PROMPT PACKS, TEMPLATES &amp; TOOLS
        </h2>
        <p className="text-[#888580] text-lg max-w-xl mx-auto mb-10">
          We&apos;re building out a library of AI prompt packs, workflow templates, mini-courses, and deployment-ready tools. Check back soon.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-[#1A1A2E] text-[#F6F4EF] font-semibold px-7 py-3.5 rounded-xl transition-all hover:bg-[#0f0f1a]"
        >
          Get notified when we launch →
        </Link>
      </div>
    </div>
  )
}
