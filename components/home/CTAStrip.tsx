import Link from 'next/link'

export default function CTAStrip() {
  return (
    <section className="py-24 bg-[#1A1A2E]" aria-labelledby="cta-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          id="cta-heading"
          className="text-[clamp(32px,5vw,60px)] text-white mb-4"
          style={{ fontFamily: 'var(--font-anton)' }}
        >
          READY TO BUILD?
        </h2>
        <p className="text-[#888580] text-lg max-w-xl mx-auto mb-10">
          Book a free 20-minute discovery call and let&apos;s figure out exactly what you need — and how fast we can build it.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#E8C547] hover:bg-[#d4b03e] text-[#1A1A2E] font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 hover:scale-[1.02] min-h-[44px] text-base"
          >
            Book a Free Call →
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 border-2 border-white/30 text-white hover:border-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 min-h-[44px] text-base"
          >
            View Services
          </Link>
        </div>
      </div>
    </section>
  )
}
