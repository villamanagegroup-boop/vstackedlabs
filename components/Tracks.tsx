'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const tracks = [
  {
    label: 'Track A',
    title: 'For Business Owners',
    accent: '#1A4A7A',
    accentLight: '#EEF4FB',
    description:
      'Ready to add AI to what you already have? We set up your systems, automate your workflows, and build the tools that let you run like a team of ten.',
    services: [
      'AI Quick Setup',
      'AI Business Build-Out',
      'Micro Tool Build',
      'AI Retainer',
    ],
    cta: 'See Business Owner Plans',
    ctaHref: '/services#track-a',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M4 22V10a2 2 0 012-2h16a2 2 0 012 2v12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M2 22h24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <rect x="10" y="14" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M14 8V4M10 4h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: 'Track B',
    title: 'For Founders',
    accent: '#F97316',
    accentLight: '#FFF4ED',
    description:
      'Have an idea you\'re ready to build? We help you architect the model, build the product, and launch the venture — from first conversation to first customer.',
    services: [
      'Strategy Session',
      'Founder Build Sprint',
      'Venture Launch Package',
    ],
    cta: 'See Founder Plans',
    ctaHref: '/services#track-b',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M14 3L17 10H24L18.5 14.5L21 22L14 17.5L7 22L9.5 14.5L4 10H11L14 3Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

export default function Tracks() {
  return (
    <section
      id="tracks"
      className="py-24 bg-white"
      aria-labelledby="tracks-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[#888580] text-xs font-semibold uppercase tracking-[0.12em] mb-4">
            Two Ways to Work With Us
          </p>
          <h2
            id="tracks-heading"
            className="text-[clamp(30px,4.5vw,52px)] text-[#0C0C0C] leading-[1.1] mb-4"
          >
            Which track are you on?
          </h2>
          <p className="text-[#888580] text-lg max-w-xl mx-auto">
            We serve two distinct types of clients — each with their own path, price points, and deliverables.
          </p>
        </motion.div>

        {/* Track cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {tracks.map((track, i) => (
            <motion.div
              key={track.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative rounded-2xl border border-[#E2DED8] p-8 flex flex-col gap-6 bg-white overflow-hidden group hover:border-transparent transition-all duration-300"
              style={{
                boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
              }}
            >
              {/* Accent bar top */}
              <div
                className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                style={{ background: track.accent }}
                aria-hidden="true"
              />

              {/* Label + icon */}
              <div className="flex items-start justify-between">
                <div
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.1em] px-2.5 py-1 rounded-full"
                  style={{ background: track.accentLight, color: track.accent }}
                >
                  {track.label}
                </div>
                <div style={{ color: track.accent }}>
                  {track.icon}
                </div>
              </div>

              {/* Title */}
              <div>
                <h3 className="text-[clamp(22px,2.5vw,30px)] text-[#0C0C0C] leading-tight mb-3">
                  {track.title}
                </h3>
                <p className="text-[#888580] text-base leading-relaxed">
                  {track.description}
                </p>
              </div>

              {/* Services list */}
              <ul className="flex flex-col gap-2.5" role="list">
                {track.services.map((svc) => (
                  <li key={svc} className="flex items-center gap-2.5 text-sm text-[#0C0C0C]">
                    <span
                      className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ background: track.accent }}
                      aria-hidden="true"
                    />
                    {svc}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-auto pt-2">
                <Link
                  href={track.ctaHref}
                  className="inline-flex items-center gap-2 font-semibold text-sm transition-all duration-200 hover:gap-3"
                  style={{ color: track.accent }}
                >
                  {track.cta}
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Both tracks note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 text-center"
        >
          <p className="text-[#888580] text-sm">
            The{' '}
            <span className="text-[#0C0C0C] font-semibold">Venture Launch Package</span>
            {' '}serves both tracks — for clients ready to go all-in.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
