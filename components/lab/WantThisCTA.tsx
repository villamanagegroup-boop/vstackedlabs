import Link from 'next/link'

type WantThisCTAProps = {
  headline?: string
  body?: string
}

export default function WantThisCTA({
  headline = 'Want this for your business?',
  body = 'Every demo here was built with the same stack we ship to paying clients. Book a free Discovery Call and we’ll scope yours.',
}: WantThisCTAProps) {
  return (
    <section className="bg-[#0C0C0C] text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-[11px] uppercase tracking-[0.25em] text-[#FFD84D] font-semibold mb-4">
          You just experienced what we build
        </p>
        <h2 className="font-[family-name:var(--font-anton)] text-[clamp(34px,6vw,56px)] leading-[1.05] mb-5">
          {headline}
        </h2>
        <p className="text-white/70 max-w-xl mx-auto mb-8 text-base sm:text-lg leading-relaxed">
          {body}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-[#FFD84D] hover:bg-white text-[#0C0C0C] font-semibold px-6 py-3.5 rounded-lg transition-colors"
          >
            Book a Discovery Call
          </Link>
          <Link
            href="/lab"
            className="inline-flex items-center justify-center border border-white/30 hover:border-white text-white font-semibold px-6 py-3.5 rounded-lg transition-colors"
          >
            Browse more demos
          </Link>
        </div>
      </div>
    </section>
  )
}
