import type { Metadata } from 'next'
import Link from 'next/link'
import TrackSection from '@/components/services/TrackSection'
import TierCard from '@/components/services/TierCard'
import AddOns from '@/components/services/AddOns'
import type { TierData } from '@/components/services/TierCard'

export const metadata: Metadata = {
  title: 'Services — Stackd Studio',
  description: 'Seven service tiers across two tracks. AI tools and automation for business owners, and venture builds for founders.',
}

const trackATiers: TierData[] = [
  {
    id: 'T1',
    name: 'AI Quick Setup',
    price: '$297',
    description: 'The fastest way to get AI working in your business. We build a custom Claude prompt library, automate one core workflow, and walk you through everything on an orientation call.',
    included: [
      'Custom Claude prompt library (10–15 prompts)',
      'One workflow automation built and deployed',
      '60-minute orientation call',
      'Setup documentation',
    ],
    track: 'A',
  },
  {
    id: 'T2',
    name: 'AI Business Build-Out',
    price: '$797',
    description: 'A full AI system built across three of your most important workflows. Two calls, complete delivery, and everything organized in a shared Drive folder.',
    included: [
      'AI system built across 3 workflows',
      'Two strategy and review calls',
      'Organized Google Drive delivery folder',
      'Team onboarding documentation',
    ],
    track: 'A',
  },
  {
    id: 'T3',
    name: 'Micro Tool Build',
    price: '$500–$1,200',
    description: 'A single-function tool or app built and deployed in one week. Perfect for automating a specific pain point or building a small internal utility.',
    included: [
      'Scoping call to define the tool',
      'Fully built and deployed app or automation',
      '1 round of revisions',
      'Hand-off with documentation',
    ],
    track: 'A',
  },
  {
    id: 'T4',
    name: 'AI Retainer',
    price: '$597/mo',
    description: 'Ongoing AI support so your systems stay current and your team stays capable. New prompts, workflow improvements, and async help every month.',
    included: [
      'New prompts and workflow updates monthly',
      'Team training session (once per quarter)',
      'Async support via shared workspace',
      'Monthly usage and performance review',
    ],
    track: 'A',
  },
]

const trackBTiers: TierData[] = [
  {
    id: 'T5',
    name: 'Strategy Session',
    price: '$297–$500',
    description: 'A 90-minute session to pressure-test your idea and build a real action plan. You leave with a business model doc, a roadmap, and a clear sense of what to build first.',
    included: [
      '90-minute live idea architecture session',
      'Business model canvas document',
      'Prioritized roadmap (3-month horizon)',
      'Follow-up summary with next steps',
    ],
    track: 'B',
  },
  {
    id: 'T6',
    name: 'Founder Build Sprint',
    price: '$2,500–$6,000',
    description: 'Your idea becomes a working product in two weeks. We cover business model, brand, core product build, and a launch-ready version — all in one sprint.',
    included: [
      'Business model and positioning',
      'Brand identity (name, colors, basic assets)',
      'MVP product built and deployed',
      'Launch strategy and first channel setup',
    ],
    track: 'B',
  },
]

const t7: TierData = {
  id: 'T7',
  name: 'Venture Launch Package',
  price: '$8,000–$15,000',
  description: 'The full venture build. Strategy, technology, brand, and launch execution — everything you need to go from vision to a real operating venture.',
  included: [
    'Full venture strategy and business model',
    'Complete tech stack built and deployed',
    'Brand identity and marketing foundation',
    'Launch execution and go-to-market support',
    'Post-launch check-ins (30 days)',
  ],
  track: 'Both',
}

export default function ServicesPage() {
  return (
    <div className="bg-[#F6F4EF] pt-24">
      {/* Page header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-[#E2DED8]">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#888580] mb-3">Services</p>
        <h1
          className="text-[clamp(36px,5vw,64px)] text-[#0C0C0C] mb-4"
          style={{ fontFamily: 'var(--font-anton)' }}
        >
          WHAT WE BUILD
        </h1>
        <p className="text-[#888580] text-xl max-w-2xl">
          Seven service tiers across two tracks — from AI quick wins to full venture launches. Every engagement is scoped, intentional, and built to last.
        </p>
      </div>

      {/* Sticky track nav (desktop) */}
      <div className="hidden md:block sticky top-16 z-30 bg-[#F6F4EF]/90 backdrop-blur border-b border-[#E2DED8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-4">
          <span className="text-xs text-[#888580] font-medium uppercase tracking-widest">Jump to:</span>
          <a
            href="#track-a"
            className="text-sm font-semibold text-[#1A4A7A] bg-[rgba(26,74,122,0.08)] px-4 py-1.5 rounded-full hover:bg-[rgba(26,74,122,0.15)] transition-colors"
          >
            Track A — Business Owners
          </a>
          <a
            href="#track-b"
            className="text-sm font-semibold text-[#F97316] bg-[rgba(249,115,22,0.08)] px-4 py-1.5 rounded-full hover:bg-[rgba(249,115,22,0.15)] transition-colors"
          >
            Track B — Founders
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TrackSection
          id="track-a"
          track="A"
          label="Track A"
          audience="For Business Owners"
          description="You have a running business and want to use AI to automate, streamline, and build tools that give you back time and reduce operational drag."
          tiers={trackATiers}
          accentColor="#1A4A7A"
          borderColor="#1A4A7A"
        />

        <TrackSection
          id="track-b"
          track="B"
          label="Track B"
          audience="For Founders"
          description="You have an idea ready to ship. We help you go from concept to working product with strategy, speed, and the technical depth to do it right."
          tiers={trackBTiers}
          accentColor="#F97316"
          borderColor="#F97316"
        />

        {/* T7 — Both Tracks */}
        <div className="py-16 border-t border-[#E2DED8]">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#888580] mb-6">
            Available to both tracks
          </p>
          <div className="max-w-2xl">
            <TierCard tier={t7} accentColor="#E8C547" isElevated />
          </div>
        </div>

        <AddOns />
      </div>

      {/* CTA */}
      <div className="bg-[#1A1A2E] py-16 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl text-white mb-4"
            style={{ fontFamily: 'var(--font-anton)' }}
          >
            NOT SURE WHICH TIER IS RIGHT?
          </h2>
          <p className="text-[#888580] text-base mb-8 max-w-lg mx-auto">
            Book a free discovery call. We&apos;ll figure it out together in 20 minutes.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#E8C547] hover:bg-[#d4b03e] text-[#1A1A2E] font-semibold px-8 py-3.5 rounded-xl transition-all duration-200"
          >
            Book a Free Call →
          </Link>
        </div>
      </div>
    </div>
  )
}
