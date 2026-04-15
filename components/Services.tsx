'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const CheckIcon = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true" className="shrink-0 mt-0.5">
    <path d="M2.5 7.5l3.5 3.5 6.5-7" stroke="#0C0C0C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const trackA = [
  {
    tier: 'T1',
    name: 'AI Quick Setup',
    price: '$297',
    priceNote: 'one-time',
    description: 'Custom Claude prompt library + 1 automated workflow + orientation call. Perfect for business owners taking their first AI step.',
    includes: [
      'Custom Claude prompt library',
      '1 workflow automation',
      'Orientation & training call',
      'Drive folder delivery',
    ],
    cta: 'Get Started',
    track: 'A',
  },
  {
    tier: 'T2',
    name: 'AI Business Build-Out',
    price: '$797',
    priceNote: 'one-time',
    description: 'Full AI system built across 3 workflows, 2 strategy calls, and delivered with everything documented and organized.',
    includes: [
      'Full AI system across 3 workflows',
      '2 strategy calls included',
      'Prompt library + SOP docs',
      'Google Drive folder delivery',
    ],
    cta: 'Get Started',
    track: 'A',
  },
  {
    tier: 'T3',
    name: 'Micro Tool Build',
    price: '$500–$1,200',
    priceNote: 'one-time',
    description: 'A single-function tool or app — built, deployed, and in your hands in one week. Calculators, intake forms, dashboards, and more.',
    includes: [
      'Single-function tool or app',
      'Built & deployed in 1 week',
      'Full handoff + documentation',
      'Mobile responsive',
    ],
    cta: 'Get Started',
    track: 'A',
  },
  {
    tier: 'T4',
    name: 'AI Retainer',
    price: '$597/mo',
    priceNote: 'monthly',
    description: 'Ongoing AI support for your business. New prompts, team training, workflow updates, and async help — every month.',
    includes: [
      'Monthly workflow updates',
      'New prompt development',
      'Team training support',
      'Async help via email/Slack',
    ],
    cta: 'Join Retainer',
    track: 'A',
    popular: true,
  },
]

const trackB = [
  {
    tier: 'T5',
    name: 'Strategy Session',
    price: '$297–$500',
    priceNote: 'one-time',
    description: '90-minute idea architecture session. Walk away with a business model doc, validated concept, and a clear product roadmap.',
    includes: [
      '90-min idea architecture session',
      'Business model document',
      'Concept validation framework',
      'Product roadmap',
    ],
    cta: 'Book a Session',
    track: 'B',
  },
  {
    tier: 'T6',
    name: 'Founder Build Sprint',
    price: '$2,500–$6,000',
    priceNote: 'one-time',
    description: 'Idea to working MVP in 2 weeks. We handle the model, brand, product build, and launch — you show up ready to sell.',
    includes: [
      'Business model & brand direction',
      'Working MVP in 2 weeks',
      'Product build & deployment',
      'Launch strategy & support',
    ],
    cta: 'Start a Sprint',
    track: 'B',
    popular: true,
  },
  {
    tier: 'T7',
    name: 'Venture Launch Package',
    price: '$8,000–$15,000',
    priceNote: 'project',
    description: 'Full venture build from strategy to launch. Complete tech stack, brand, product, and execution — for business owners and founders ready to go all-in.',
    includes: [
      'Full strategy & business model',
      'Complete tech stack build',
      'Brand + product + launch',
      'Both tracks welcome',
    ],
    cta: "Let's Talk",
    track: 'Both',
  },
]

function ServiceCard({ svc, i, accentColor, accentLight }: {
  svc: typeof trackA[0]
  i: number
  accentColor: string
  accentLight: string
}) {
  return (
    <motion.div
      key={svc.tier}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.08 }}
      className={`relative bg-white rounded-2xl p-7 border flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 ${
        svc.popular
          ? 'border-[#0C0C0C] shadow-[0_0_0_1px_#0C0C0C]'
          : 'border-[#E2DED8] hover:border-[#0C0C0C]/30'
      }`}
    >
      {svc.popular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="bg-[#0C0C0C] text-[#FFD84D] text-xs font-semibold px-4 py-1 rounded-full whitespace-nowrap">
            Most Popular
          </span>
        </div>
      )}

      {/* Tier badge */}
      <div className="flex items-center justify-between">
        <span
          className="text-[10px] font-bold uppercase tracking-[0.12em] px-2 py-0.5 rounded"
          style={{ background: accentLight, color: accentColor }}
        >
          {svc.tier}
        </span>
        <span
          className="text-[10px] font-semibold uppercase tracking-[0.1em] px-2 py-0.5 rounded-full border"
          style={{ color: accentColor, borderColor: accentColor + '40' }}
        >
          Track {svc.track}
        </span>
      </div>

      {/* Name + price */}
      <div className={svc.popular ? 'mt-2' : ''}>
        <h3 className="text-lg text-[#0C0C0C] leading-tight mb-1">{svc.name}</h3>
        <div className="flex items-baseline gap-1.5">
          <span className="text-2xl font-bold text-[#0C0C0C] font-[family-name:var(--font-instrument-sans)]">{svc.price}</span>
          <span className="text-[#888580] text-xs">{svc.priceNote}</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-[#888580] text-sm leading-relaxed">{svc.description}</p>

      {/* Includes */}
      <ul className="flex flex-col gap-2 flex-1" role="list">
        {svc.includes.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-[#0C0C0C]">
            <CheckIcon />
            {item}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Link
        href="/contact"
        className="mt-2 inline-flex items-center justify-center font-semibold py-3 px-5 rounded-xl transition-all duration-200 hover:scale-[1.02] min-h-[44px] text-sm bg-[#0C0C0C] hover:bg-[#FFD84D] text-white hover:text-[#0C0C0C]"
      >
        {svc.cta}
      </Link>
    </motion.div>
  )
}

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 bg-[#F6F4EF]"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#888580] text-xs font-semibold uppercase tracking-[0.12em] mb-4">
            All 7 Service Tiers
          </p>
          <h2
            id="services-heading"
            className="text-[clamp(30px,4.5vw,52px)] text-[#0C0C0C] leading-[1.1] mb-4"
          >
            Every tier is built to match your budget and scope.
          </h2>
          <p className="text-[#888580] text-lg max-w-xl mx-auto">
            From a single AI setup to a full venture launch — choose your path or let us help you find it.
          </p>
        </motion.div>

        {/* Track A */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#1A4A7A]" aria-hidden="true" />
            <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-[#1A4A7A]">
              Track A — Business Owners
            </h3>
            <div className="flex-1 h-px bg-[#E2DED8]" aria-hidden="true" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {trackA.map((svc, i) => (
              <ServiceCard key={svc.tier} svc={svc} i={i} accentColor="#1A4A7A" accentLight="#EEF4FB" />
            ))}
          </div>
        </div>

        {/* Track B */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#F97316]" aria-hidden="true" />
            <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-[#F97316]">
              Track B — Founders
            </h3>
            <div className="flex-1 h-px bg-[#E2DED8]" aria-hidden="true" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {trackB.map((svc, i) => (
              <ServiceCard key={svc.tier} svc={svc} i={i} accentColor="#F97316" accentLight="#FFF4ED" />
            ))}
          </div>
        </div>

        {/* View all CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 border-2 border-[#0C0C0C] text-[#0C0C0C] hover:bg-[#0C0C0C] hover:text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 hover:scale-[1.02]"
          >
            View Full Service Details
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
