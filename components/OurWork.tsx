'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

// ─── SVG Browser Mockups ────────────────────────────────────────────────────

function MockupDanceStudio() {
  return (
    <svg viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" aria-hidden="true">
      {/* bg */}
      <rect width="400" height="220" fill="#0f0f0f"/>
      {/* sidebar */}
      <rect width="80" height="220" fill="#1a1a1a"/>
      {/* sidebar items */}
      {[30, 58, 86, 114, 142].map((y, i) => (
        <rect key={i} x="12" y={y} width={i === 0 ? 56 : 44} height="10" rx="3" fill={i === 0 ? '#E8C547' : '#333'}/>
      ))}
      {/* logo area */}
      <rect x="12" y="10" width="56" height="14" rx="3" fill="#E8C547" opacity="0.15"/>
      <rect x="16" y="13" width="30" height="8" rx="2" fill="#E8C547"/>
      {/* main area header */}
      <rect x="96" y="14" width="120" height="14" rx="3" fill="#2a2a2a"/>
      <rect x="300" y="12" width="68" height="18" rx="6" fill="#E8C547"/>
      {/* class schedule grid */}
      {/* day headers */}
      {['M','T','W','T','F','S'].map((_, i) => (
        <rect key={i} x={96 + i * 50} y="40" width="44" height="12" rx="2" fill="#222"/>
      ))}
      {/* class blocks */}
      <rect x="96" y="58" width="44" height="32" rx="4" fill="#E8C547" opacity="0.9"/>
      <rect x="96" y="58" width="44" height="8" rx="4" fill="#E8C547"/>
      <rect x="96" y="66" width="44" height="24" rx="0" fill="#E8C547" opacity="0.2"/>
      <rect x="146" y="72" width="44" height="18" rx="4" fill="#1A4A7A" opacity="0.8"/>
      <rect x="196" y="58" width="44" height="44" rx="4" fill="#E8C547" opacity="0.5"/>
      <rect x="246" y="64" width="44" height="26" rx="4" fill="#1A4A7A" opacity="0.6"/>
      <rect x="296" y="58" width="44" height="18" rx="4" fill="#E8C547" opacity="0.3"/>
      <rect x="96" y="104" width="44" height="22" rx="4" fill="#1A4A7A" opacity="0.5"/>
      <rect x="146" y="104" width="44" height="38" rx="4" fill="#E8C547" opacity="0.7"/>
      <rect x="196" y="110" width="44" height="18" rx="4" fill="#333"/>
      <rect x="246" y="104" width="44" height="30" rx="4" fill="#E8C547" opacity="0.4"/>
      <rect x="296" y="104" width="44" height="44" rx="4" fill="#1A4A7A" opacity="0.4"/>
      {/* bottom stats bar */}
      <rect x="96" y="165" width="88" height="42" rx="6" fill="#1a1a1a"/>
      <rect x="108" y="173" width="40" height="8" rx="2" fill="#E8C547" opacity="0.6"/>
      <rect x="108" y="186" width="60" height="6" rx="2" fill="#333"/>
      <rect x="196" y="165" width="88" height="42" rx="6" fill="#1a1a1a"/>
      <rect x="208" y="173" width="40" height="8" rx="2" fill="#E8C547" opacity="0.6"/>
      <rect x="208" y="186" width="60" height="6" rx="2" fill="#333"/>
      <rect x="296" y="165" width="88" height="42" rx="6" fill="#1a1a1a"/>
      <rect x="308" y="173" width="40" height="8" rx="2" fill="#E8C547" opacity="0.6"/>
      <rect x="308" y="186" width="60" height="6" rx="2" fill="#333"/>
    </svg>
  )
}

function MockupIntakeAgent() {
  return (
    <svg viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" aria-hidden="true">
      <rect width="400" height="220" fill="#0f0f0f"/>
      {/* chat window left */}
      <rect x="0" y="0" width="160" height="220" fill="#141414"/>
      {/* lead list */}
      <rect x="8" y="10" width="100" height="10" rx="3" fill="#333"/>
      {[32, 64, 96, 128, 160, 192].map((y, i) => (
        <g key={i}>
          <rect x="8" y={y} width="28" height="28" rx="14" fill={i % 2 === 0 ? '#E8C547' : '#1A4A7A'} opacity="0.8"/>
          <rect x="44" y={y + 4} width="80" height="8" rx="2" fill="#2a2a2a"/>
          <rect x="44" y={y + 16} width="56" height="6" rx="2" fill="#222"/>
        </g>
      ))}
      {/* active indicator */}
      <rect x="4" y="32" width="3" height="28" rx="2" fill="#E8C547"/>
      {/* chat area */}
      <rect x="160" y="0" width="240" height="220" fill="#0f0f0f"/>
      {/* chat header */}
      <rect x="168" y="10" width="28" height="28" rx="14" fill="#E8C547" opacity="0.8"/>
      <rect x="204" y="14" width="80" height="8" rx="2" fill="#2a2a2a"/>
      <rect x="204" y="26" width="50" height="6" rx="2" fill="#222"/>
      {/* messages */}
      {/* AI message */}
      <rect x="168" y="52" width="160" height="36" rx="8" fill="#1a1a1a"/>
      <rect x="176" y="60" width="120" height="6" rx="2" fill="#444"/>
      <rect x="176" y="72" width="90" height="6" rx="2" fill="#333"/>
      {/* user message */}
      <rect x="248" y="100" width="120" height="24" rx="8" fill="#E8C547" opacity="0.15"/>
      <rect x="256" y="108" width="90" height="6" rx="2" fill="#E8C547" opacity="0.6"/>
      {/* AI message */}
      <rect x="168" y="136" width="180" height="48" rx="8" fill="#1a1a1a"/>
      <rect x="176" y="144" width="140" height="6" rx="2" fill="#444"/>
      <rect x="176" y="156" width="110" height="6" rx="2" fill="#333"/>
      <rect x="176" y="168" width="80" height="6" rx="2" fill="#333"/>
      {/* typing indicator */}
      <rect x="168" y="196" width="60" height="16" rx="8" fill="#1a1a1a"/>
      <circle cx="182" cy="204" r="3" fill="#555"/>
      <circle cx="194" cy="204" r="3" fill="#666"/>
      <circle cx="206" cy="204" r="3" fill="#444"/>
      {/* input */}
      <rect x="168" y="196" width="180" height="0" rx="0" fill="transparent"/>
    </svg>
  )
}

function MockupFieldOS() {
  return (
    <svg viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" aria-hidden="true">
      <rect width="400" height="220" fill="#0f0f0f"/>
      {/* top nav */}
      <rect width="400" height="36" fill="#141414"/>
      <rect x="12" y="11" width="60" height="14" rx="3" fill="#E8C547" opacity="0.2"/>
      <rect x="16" y="14" width="36" height="8" rx="2" fill="#E8C547"/>
      {['96','148','200','252'].map((x, i) => (
        <rect key={i} x={Number(x)} y="14" width="36" height="8" rx="2" fill={i === 0 ? '#2a2a2a' : '#1e1e1e'}/>
      ))}
      <rect x="340" y="10" width="48" height="16" rx="6" fill="#E8C547"/>
      {/* stat cards row */}
      {[0,1,2,3].map((i) => (
        <g key={i}>
          <rect x={8 + i * 97} y="44" width="90" height="52" rx="6" fill="#141414"/>
          <rect x={16 + i * 97} y="52" width={40 + i * 4} height="6" rx="2" fill="#333"/>
          <rect x={16 + i * 97} y="64" width="50" height="14" rx="2" fill={i === 0 ? '#E8C547' : i === 1 ? '#1A4A7A' : i === 2 ? '#22c55e' : '#f97316'} opacity={i === 0 ? 1 : 0.7}/>
          <rect x={16 + i * 97} y="84" width="60" height="6" rx="2" fill="#222"/>
        </g>
      ))}
      {/* chart area */}
      <rect x="8" y="104" width="250" height="108" rx="6" fill="#141414"/>
      <rect x="16" y="112" width="80" height="8" rx="2" fill="#2a2a2a"/>
      {/* bar chart */}
      {[
        { h: 40, x: 20 },
        { h: 60, x: 50 },
        { h: 30, x: 80 },
        { h: 70, x: 110 },
        { h: 50, x: 140 },
        { h: 80, x: 170 },
        { h: 45, x: 200 },
      ].map((bar, i) => (
        <g key={i}>
          <rect x={16 + bar.x} y={196 - bar.h} width="22" height={bar.h} rx="3"
            fill={i === 5 ? '#E8C547' : '#1A4A7A'} opacity={i === 5 ? 0.9 : 0.4}/>
        </g>
      ))}
      <line x1="16" y1="196" x2="250" y2="196" stroke="#333" strokeWidth="1"/>
      {/* side panel */}
      <rect x="266" y="104" width="126" height="108" rx="6" fill="#141414"/>
      <rect x="274" y="112" width="60" height="8" rx="2" fill="#2a2a2a"/>
      {[0,1,2,3,4].map((i) => (
        <g key={i}>
          <rect x="274" y={128 + i * 18} width="8" height="8" rx="2" fill={i < 3 ? '#E8C547' : '#333'} opacity={i < 3 ? 0.8 : 1}/>
          <rect x="288" y={130 + i * 18} width="80" height="6" rx="2" fill="#2a2a2a"/>
          <rect x="356" y={130 + i * 18} width="24" height="6" rx="2" fill={i < 3 ? '#22c55e' : '#333'} opacity="0.6"/>
        </g>
      ))}
    </svg>
  )
}

const projects = [
  {
    track: 'Track A — Business Owner',
    trackColor: '#1A4A7A',
    trackTextColor: '#93C5FD',
    tags: ['Next.js', 'Supabase', 'Admin Portal'],
    title: 'Capital Core Dance Studio',
    description: 'A full studio management platform with a public-facing website, admin dashboard, class scheduling, and Supabase-powered backend with row-level security.',
    cta: 'View Project',
    ctaHref: '#',
    active: true,
    mockup: MockupDanceStudio,
  },
  {
    track: 'Track A — Business Owner',
    trackColor: '#1A4A7A',
    trackTextColor: '#93C5FD',
    tags: ['Claude API', 'Next.js', 'Automation'],
    title: 'Client Intake Agent',
    description: 'An AI-powered intake system that qualifies leads, matches them to the right service tier, auto-generates proposals, and books discovery calls — 24/7, no human needed.',
    cta: 'View Project',
    ctaHref: '#',
    active: true,
    mockup: MockupIntakeAgent,
  },
  {
    track: 'Track B — Founder',
    trackColor: '#F97316',
    trackTextColor: '#FDB975',
    tags: ['SaaS', 'Multi-tenant', 'Next.js'],
    title: 'FieldOS — Operations Platform',
    description: 'A modular, multi-tenant SaaS operations platform built for small business owners and multi-venture entrepreneurs. Universal core with industry-specific modules.',
    cta: 'Coming Soon',
    ctaHref: null,
    active: false,
    mockup: MockupFieldOS,
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
          {projects.map((project, i) => {
            const Mockup = project.mockup
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                whileHover={{ y: -6 }}
                className="bg-[#0C0C0C] rounded-2xl overflow-hidden flex flex-col transition-all duration-300 group"
                style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.3)' }}
              >
                {/* Browser chrome + mockup */}
                <div className="relative">
                  {/* Browser chrome bar */}
                  <div className="flex items-center gap-1.5 px-4 py-3 bg-[#1a1a1a] border-b border-white/5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                    <div className="ml-3 flex-1 bg-[#0f0f0f] rounded-md px-3 py-1 flex items-center gap-2">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                        <circle cx="5" cy="5" r="4" stroke="#444" strokeWidth="1"/>
                        <path d="M3 5h4M5 3v4" stroke="#444" strokeWidth="1"/>
                      </svg>
                      <span className="text-[#555] text-[10px] font-mono truncate">
                        {project.title === 'Capital Core Dance Studio'
                          ? 'capitalcore.app/admin'
                          : project.title === 'Client Intake Agent'
                          ? 'intake-agent.stackd.app'
                          : 'fieldos.app/dashboard'}
                      </span>
                    </div>
                  </div>

                  {/* Mockup SVG */}
                  <div className="overflow-hidden">
                    <Mockup />
                  </div>

                  {/* Subtle overlay gradient at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#0C0C0C] to-transparent pointer-events-none" aria-hidden="true"/>
                </div>

                {/* Card body */}
                <div className="p-6 flex flex-col gap-4 flex-1">
                  {/* Track label */}
                  <div
                    className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.1em] px-2.5 py-1 rounded-full self-start"
                    style={{ background: project.trackColor + '25', color: project.trackTextColor }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: project.trackTextColor }} aria-hidden="true" />
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

                  {/* Title + description */}
                  <h3 className="text-white text-xl leading-tight">{project.title}</h3>
                  <p className="text-[#9CA3AF] text-sm leading-relaxed flex-1">{project.description}</p>

                  {/* CTA */}
                  {project.active ? (
                    <Link
                      href={project.ctaHref ?? '#'}
                      className="text-[#E8C547] font-semibold text-sm hover:text-white transition-colors mt-auto inline-flex items-center gap-2 group-hover:gap-3 duration-200"
                      aria-label={`View ${project.title} project`}
                    >
                      {project.cta}
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                        <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  ) : (
                    <span className="text-[#6B7280] text-sm font-medium mt-auto">{project.cta}</span>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
