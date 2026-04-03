import type { Metadata } from 'next'
import Link from 'next/link'
import Story from '@/components/about/Story'
import Values from '@/components/about/Values'
import TechStack from '@/components/about/TechStack'
import HVSPortfolio from '@/components/about/HVSPortfolio'

export const metadata: Metadata = {
  title: 'About — Stackd Studio',
  description: 'Stackd Studio is a Build Lab and Creative Venture Studio founded by Chanel Hicks. We build intelligent systems and ventures for business owners and founders.',
}

export default function AboutPage() {
  return (
    <div className="bg-[#F6F4EF] pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-[#E2DED8]">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#888580] mb-3">About</p>
        <h1
          className="text-[clamp(36px,5vw,64px)] text-[#0C0C0C]"
          style={{ fontFamily: 'var(--font-anton)' }}
        >
          BUILD LAB &amp;<br />VENTURE STUDIO
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Story />
        <Values />
        <TechStack />
        <HVSPortfolio />
      </div>

      <div className="bg-[#1A1A2E] py-16 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl text-white mb-4"
            style={{ fontFamily: 'var(--font-anton)' }}
          >
            READY TO WORK TOGETHER?
          </h2>
          <p className="text-[#888580] text-base mb-8 max-w-lg mx-auto">
            Book a free discovery call and let&apos;s figure out what we can build.
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
