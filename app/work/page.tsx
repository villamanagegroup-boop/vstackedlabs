import type { Metadata } from 'next'
import Link from 'next/link'
import CaseStudyGrid from '@/components/work/CaseStudyGrid'

export const metadata: Metadata = {
  title: 'Work — Stackd Studio',
  description: 'Case studies and example projects from Stackd Studio. AI automations, venture builds, micro tools, and more.',
}

export default function WorkPage() {
  return (
    <div className="bg-[#F6F4EF] pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-[#E2DED8]">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#888580] mb-3">Work</p>
        <h1
          className="text-[clamp(36px,5vw,64px)] text-[#0C0C0C] mb-4"
          style={{ fontFamily: 'var(--font-anton)' }}
        >
          WHAT WE&apos;VE BUILT
        </h1>
        <p className="text-[#888580] text-xl max-w-2xl">
          A growing portfolio of AI automations, product builds, and venture launches. Real work, real outcomes.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <CaseStudyGrid />
      </div>

      <div className="bg-[#1A1A2E] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl text-white mb-4"
            style={{ fontFamily: 'var(--font-anton)' }}
          >
            WANT TO BE NEXT?
          </h2>
          <p className="text-[#888580] text-base mb-8 max-w-lg mx-auto">
            Let&apos;s build something worth putting on this page.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#E8C547] hover:bg-[#d4b03e] text-[#1A1A2E] font-semibold px-8 py-3.5 rounded-xl transition-all"
          >
            Book a Free Call →
          </Link>
        </div>
      </div>
    </div>
  )
}
