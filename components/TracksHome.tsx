'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const tracks = [
  {
    letter: 'A',
    label: 'Track A',
    title: 'For Business Owners',
    accent: '#1A4A7A',
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
  },
  {
    letter: 'B',
    label: 'Track B',
    title: 'For Founders',
    accent: '#F97316',
    description:
      "Have an idea you're ready to build? We help you architect the model, build the product, and launch the venture — from first conversation to first customer.",
    services: [
      'Strategy Session',
      'Founder Build Sprint',
      'Venture Launch Package',
    ],
    cta: 'See Founder Plans',
    ctaHref: '/services#track-b',
  },
]

export default function TracksHome() {
  return (
    <section
      id="tracks"
      className="py-24 bg-white"
      aria-labelledby="tracks-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[#888580] text-xs font-semibold uppercase tracking-[0.12em] mb-4">
            Two Ways to Work With Us
          </p>
          <h2
            id="tracks-heading"
            className="text-[clamp(30px,4.5vw,52px)] text-[#0C0C0C] leading-[1.1]"
          >
            Which track are you on?
          </h2>
        </motion.div>

        {/* Tracks */}
        <div className="flex flex-col divide-y divide-[#E2DED8]">
          {tracks.map((track, i) => (
            <motion.div
              key={track.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="grid md:grid-cols-[80px_1fr_1fr] gap-x-10 gap-y-6 py-12 group"
            >
              {/* Large letter */}
              <div
                className="text-[72px] font-black leading-none select-none"
                style={{ color: track.accent, opacity: 0.15 }}
                aria-hidden="true"
              >
                {track.letter}
              </div>

              {/* Left: title + description */}
              <div
                className="flex flex-col gap-4 border-l-[3px] pl-8"
                style={{ borderColor: track.accent }}
              >
                <span
                  className="text-[10px] font-bold uppercase tracking-[0.15em]"
                  style={{ color: track.accent }}
                >
                  {track.label}
                </span>
                <h3 className="text-[clamp(22px,2.5vw,32px)] text-[#0C0C0C] leading-tight">
                  {track.title}
                </h3>
                <p className="text-[#888580] text-base leading-relaxed max-w-md">
                  {track.description}
                </p>
                <Link
                  href={track.ctaHref}
                  className="inline-flex items-center gap-2 font-semibold text-sm mt-2 transition-all duration-200 hover:gap-3 w-fit"
                  style={{ color: track.accent }}
                >
                  {track.cta}
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>

              {/* Right: services */}
              <ul className="flex flex-col gap-3 md:pt-10" role="list">
                {track.services.map((svc) => (
                  <li
                    key={svc}
                    className="flex items-center gap-3 text-sm text-[#0C0C0C]"
                  >
                    <span
                      className="w-5 h-px shrink-0"
                      style={{ background: track.accent }}
                      aria-hidden="true"
                    />
                    {svc}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Both tracks note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-4 pt-8 border-t border-[#E2DED8]"
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
