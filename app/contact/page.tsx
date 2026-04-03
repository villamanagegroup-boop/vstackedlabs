import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact — Stackd Studio',
  description: 'Book a free 20-minute discovery call with Stackd Studio or send us a message.',
}

export default function ContactPage() {
  return (
    <div className="bg-[#F6F4EF] pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-[#E2DED8]">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#888580] mb-3">Contact</p>
        <h1
          className="text-[clamp(36px,5vw,64px)] text-[#0C0C0C]"
          style={{ fontFamily: 'var(--font-anton)' }}
        >
          LET&apos;S BUILD TOGETHER
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
          BOOKING &amp; CONTACT FORM
        </h2>
        <p className="text-[#888580] text-lg max-w-xl mx-auto mb-10">
          The full contact form and Calendly booking embed are coming in Phase 2. In the meantime, reach us directly at{' '}
          <a href="mailto:hello@stackdstudio.com" className="text-[#1A1A2E] font-semibold hover:underline">
            hello@stackdstudio.com
          </a>
        </p>
      </div>
    </div>
  )
}
