'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const projects = [
  {
    track: 'Track A — Business Owner',
    trackColor: '#1A4A7A',
    tags: ['Next.js', 'Supabase', 'Admin Portal'],
    title: 'Capital Core Dance Studio',
    description: 'A full studio management platform with a public-facing website, admin dashboard, class scheduling, and Supabase-powered backend with row-level security.',
    cta: 'View Project',
    ctaHref: '#',
    active: true,
  },
  {
    track: 'Track A — Business Owner',
    trackColor: '#1A4A7A',
    tags: ['Claude API', 'Next.js', 'Automation'],
    title: 'Client Intake Agent',
    description: 'An AI-powered intake system that qualifies leads, matches them to the right service tier, auto-generates proposals, and books discovery calls — 24/7, no human needed.',
    cta: 'View Project',
    ctaHref: '#',
    active: true,
  },
  {
    track: 'Track B — Founder',
    trackColor: '#F97316',
    tags: ['SaaS', 'Multi-tenant', 'Next.js'],
    title: 'FieldOS — Operations Platform',
    description: 'A modular, multi-tenant SaaS operations platform built for small business owners and multi-venture entrepreneurs. Universal core with industry-specific modules.',
    cta: 'Coming Soon',
    ctaHref: null,
    active: false,
  },
]

export default function OurWork() {
  return (
    <section
      id="our-work"
      className="py-24 bg-[#F6F4EF]"
      aria-labelledby="our-work-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12"
        >
          <div>
            <p className="text-[#888580] text-xs font-semibold uppercase tracking-[0.12em] mb-4">
              Our Work
            </p>
            <h2
              id="our-work-heading"
              className="text-[clamp(28px,4.5vw,52px)] text-[#0C0C0C] leading-[1.1]"
            >
              Real products. Real clients.
              <br className="hidden sm:block" /> Built with AI from day one.
            </h2>
          </div>
          <Link
            href="/work"
            className="shrink-0 inline-flex items-center gap-2 border border-[#E2DED8] text-[#0C0C0C] hover:border-[#0C0C0C] text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-200"
          >
            View All Work
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -4 }}
              className="bg-[#0C0C0C] rounded-2xl p-7 flex flex-col gap-5 transition-all duration-300"
              style={{ boxShadow: '0 4px 24px rgba(26,26,46,0.2)' }}
            >
              {/* Track label */}
              <div
                className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.1em] px-2.5 py-1 rounded-full self-start"
                style={{ background: project.trackColor + '25', color: project.trackColor === '#1A4A7A' ? '#93C5FD' : '#FDB975' }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: project.trackColor === '#1A4A7A' ? '#93C5FD' : '#FDB975' }} aria-hidden="true" />
                {project.track}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[#E8C547] text-xs font-semibold px-2.5 py-1 rounded-md border border-[#E8C547]/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3 className="text-white text-xl leading-tight">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-[#9CA3AF] text-sm leading-relaxed flex-1">
                {project.description}
              </p>

              {/* CTA */}
              {project.active ? (
                <Link
                  href={project.ctaHref ?? '#'}
                  className="text-[#E8C547] font-semibold text-sm hover:text-white transition-colors mt-auto inline-flex items-center gap-2"
                  aria-label={`View ${project.title} project`}
                >
                  {project.cta}
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              ) : (
                <span className="text-[#6B7280] text-sm font-medium mt-auto">
                  {project.cta}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
