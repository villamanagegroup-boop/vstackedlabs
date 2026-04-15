'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

// ─── Icons ───────────────────────────────────────────────────────────────────

const GoldCheck = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true" className="shrink-0 mt-0.5">
    <path d="M2.5 7.5l3.5 3.5 6.5-7" stroke="#FFD84D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const IconLightning = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
    <path d="M13 2L4 13h7l-2 7 9-11h-7l2-7z" stroke="#93C5FD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const IconBuild = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
    <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="#93C5FD" strokeWidth="1.5"/>
    <rect x="12" y="3" width="7" height="7" rx="1.5" stroke="#93C5FD" strokeWidth="1.5"/>
    <rect x="3" y="12" width="7" height="7" rx="1.5" stroke="#93C5FD" strokeWidth="1.5"/>
    <rect x="12" y="12" width="7" height="7" rx="1.5" stroke="#93C5FD" strokeWidth="1.5"/>
  </svg>
)

const IconTool = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
    <path d="M14.7 3a4 4 0 00-4 6.3L3.3 16.7a1.5 1.5 0 002.1 2.1l7.4-7.4A4 4 0 0019 7.3l-2.6 2.6-2-2L17 5.3A4 4 0 0014.7 3z" stroke="#93C5FD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const IconRetainer = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
    <circle cx="11" cy="11" r="8" stroke="#93C5FD" strokeWidth="1.5"/>
    <path d="M11 7v4l3 2" stroke="#93C5FD" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M3.5 18.5l1.5-1.5" stroke="#93C5FD" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

const IconCompass = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
    <circle cx="11" cy="11" r="8" stroke="#FDB975" strokeWidth="1.5"/>
    <path d="M14.5 7.5l-2.5 5.5-5.5 2.5 2.5-5.5 5.5-2.5z" stroke="#FDB975" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="11" cy="11" r="1" fill="#FDB975"/>
  </svg>
)

const IconRocket = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
    <path d="M11 3c0 0 5 2 5 9l-5 7-5-7c0-7 5-9 5-9z" stroke="#FDB975" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 14.5c-1.5 1-3 1-3 1s0-1.5 1-3" stroke="#FDB975" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M14 14.5c1.5 1 3 1 3 1s0-1.5-1-3" stroke="#FDB975" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="11" cy="10" r="1.5" fill="#FDB975"/>
  </svg>
)

const IconFlag = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
    <path d="M4 3v16" stroke="#FFD84D" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M4 4h12l-3 4.5 3 4.5H4" stroke="#FFD84D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

// ─── Data ─────────────────────────────────────────────────────────────────────

const trackA = [
  {
    tier: 'T1',
    icon: IconLightning,
    name: 'AI Quick Setup',
    turnaround: '3–5 business days',
    bestFor: 'Business owners taking their first AI step',
    description: 'A custom Claude prompt library built around your business, one automated workflow, and an orientation call so you know exactly how to use everything.',
    includes: [
      'Custom Claude prompt library (10–15 prompts)',
      '1 workflow automation build',
      '1-hour orientation & training call',
      'Google Drive folder delivery',
      'Email support for 7 days post-delivery',
    ],
  },
  {
    tier: 'T2',
    icon: IconBuild,
    name: 'AI Business Build-Out',
    turnaround: '1–2 weeks',
    bestFor: 'Business owners ready for a full AI system',
    description: 'A comprehensive AI system built across three workflows, with two strategy calls to align everything with how you actually run your business.',
    includes: [
      'Full AI system across 3 workflows',
      '2 strategy calls included',
      'Prompt library (20–30 prompts)',
      'SOP documentation for each workflow',
      'Google Drive folder delivery',
      '14-day email support',
    ],
  },
  {
    tier: 'T3',
    icon: IconTool,
    name: 'Micro Tool Build',
    turnaround: '1 week',
    bestFor: 'Businesses that need a specific tool built fast',
    description: 'A single-function app or tool — built, tested, deployed, and in your hands in one week. Calculators, intake forms, dashboards, booking tools, and more.',
    includes: [
      'Single-function tool or app',
      'Mobile responsive design',
      'Built & deployed in 1 week',
      'Full source code handoff',
      'Documentation & how-to guide',
    ],
  },
  {
    tier: 'T4',
    icon: IconRetainer,
    name: 'AI Retainer',
    turnaround: 'Ongoing',
    bestFor: 'Business owners who want AI support every month',
    description: "Your AI system doesn't stop growing — and neither does your support. Every month includes new prompts, workflow updates, team training, and async help.",
    includes: [
      'Monthly workflow updates & optimization',
      'New prompt development (5–10/month)',
      'Team training sessions (async)',
      'Priority async support via email',
      'Monthly check-in call (optional)',
    ],
    popular: true,
  },
]

const trackB = [
  {
    tier: 'T5',
    icon: IconCompass,
    name: 'Strategy Session',
    turnaround: 'Book within 48 hours',
    bestFor: 'Founders with an idea ready to be stress-tested',
    description: 'A 90-minute working session to architect your idea. Walk away with a clear business model, validated concept, and a product roadmap you can act on immediately.',
    includes: [
      '90-minute idea architecture session',
      'Business model document (delivered after)',
      'Concept validation framework',
      'Competitive landscape analysis',
      'Product roadmap (phases 1–3)',
    ],
  },
  {
    tier: 'T6',
    icon: IconRocket,
    name: 'Founder Build Sprint',
    turnaround: '2 weeks',
    bestFor: 'Founders ready to go from idea to working MVP',
    description: 'Two weeks. Idea to working product. We handle the business model, brand direction, product build, and launch — you show up ready to sell.',
    includes: [
      'Business model & positioning',
      'Brand direction & visual identity',
      'Working MVP build & deployment',
      'Launch strategy & messaging',
      '2-week check-in calls (3x)',
      '30-day post-launch support',
    ],
    popular: true,
  },
  {
    tier: 'T7',
    icon: IconFlag,
    name: 'Venture Launch Package',
    turnaround: '4–8 weeks',
    bestFor: 'Business owners & founders ready to go all-in',
    description: 'The full venture build — strategy, complete tech stack, brand, product, and launch execution. This is for clients who are serious about building something that lasts.',
    includes: [
      'Full strategy & business model development',
      'Complete tech stack architecture & build',
      'Brand identity (logo, colors, type, copy)',
      'Product development & deployment',
      'Launch strategy & execution',
      'Post-launch retainer (1 month included)',
    ],
    both: true,
  },
]

const addOns = [
  { name: 'Extra Workflow', description: 'Add an additional AI workflow to any T1 or T2 package.' },
  { name: 'Rush Delivery', description: 'Priority build for Micro Tool builds — delivered in 3 business days.' },
  { name: 'Team Training Session', description: 'A 60-minute live training session for your team on AI tools & workflows.' },
  { name: 'Brand Identity Add-On', description: 'Logo, color palette, and typography system for any Founder track build.' },
  { name: 'SEO Setup', description: 'Technical SEO, metadata, and sitemap setup for any web build.' },
  { name: 'Monthly Analytics Report', description: 'Monthly traffic and performance report for any deployed product.' },
]

// ─── Component ────────────────────────────────────────────────────────────────

export default function ServicesContent() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── Hero ────────────────────────────────────────────────────────── */}
        <section className="bg-[#FFD84D] pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mb-16"
            >
              <p className="text-[#0C0C0C]/50 text-xs font-semibold uppercase tracking-[0.12em] mb-4">Services</p>
              <h1 className="text-[clamp(40px,6vw,72px)] text-[#0C0C0C] leading-[1.0] mb-5">
                Pick your track.<br className="hidden sm:block"/> We&apos;ll build the rest.
              </h1>
              <p className="text-[#0C0C0C]/65 text-base sm:text-xl leading-relaxed">
                Two tracks. Every tier is scoped, defined, and built to deliver results — not just deliverables.
              </p>
            </motion.div>

            {/* Track selector cards */}
            <div className="grid sm:grid-cols-2 gap-5">
              {/* Track A */}
              <motion.a
                href="#track-a"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                whileHover={{ y: -6 }}
                className="group relative bg-white border border-[#1A4A7A]/20 hover:border-[#1A4A7A] rounded-2xl p-8 flex flex-col gap-5 transition-all duration-300 overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.08)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#1A4A7A]/4 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="w-11 h-11 rounded-xl bg-[#EEF4FB] flex items-center justify-center">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                    <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="#1A4A7A" strokeWidth="1.5"/>
                    <rect x="12" y="11" width="7" height="7" rx="1.5" stroke="#1A4A7A" strokeWidth="1.5"/>
                    <path d="M6.5 10v2M10 6.5H8" stroke="#1A4A7A" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M12 14.5h2M15.5 12v2" stroke="#1A4A7A" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>

                <div>
                  <span className="text-[#1A4A7A] text-xs font-semibold uppercase tracking-[0.12em]">Track A</span>
                  <h2 className="text-[#0C0C0C] text-2xl mt-1">Business Owner</h2>
                </div>

                <p className="text-[#888580] text-sm leading-relaxed">
                  Add AI to your existing business. Automate workflows, build custom tools, and save hours every single week — without rebuilding everything from scratch.
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {['Quick Setup', 'Build-Out', 'Micro Tools', 'Retainer'].map((t) => (
                    <span key={t} className="text-[#1A4A7A] text-[11px] font-semibold px-2.5 py-1 rounded-full border border-[#1A4A7A]/30 bg-[#EEF4FB]">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-[#1A4A7A] group-hover:text-[#0C0C0C] text-sm font-semibold transition-colors">
                  View Track A services
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="group-hover:translate-x-1 transition-transform duration-200">
                    <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </motion.a>

              {/* Track B */}
              <motion.a
                href="#track-b"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                whileHover={{ y: -6 }}
                className="group relative bg-white border border-[#F97316]/20 hover:border-[#F97316] rounded-2xl p-8 flex flex-col gap-5 transition-all duration-300 overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.08)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#F97316]/4 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="w-11 h-11 rounded-xl bg-[#FFF4ED] flex items-center justify-center">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                    <path d="M11 3c0 0 5 2 5 9l-5 7-5-7c0-7 5-9 5-9z" stroke="#F97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 14.5c-1.5 1-3 1-3 1s0-1.5 1-3" stroke="#F97316" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M14 14.5c1.5 1 3 1 3 1s0-1.5-1-3" stroke="#F97316" strokeWidth="1.5" strokeLinecap="round"/>
                    <circle cx="11" cy="10" r="1.5" fill="#F97316"/>
                  </svg>
                </div>

                <div>
                  <span className="text-[#F97316] text-xs font-semibold uppercase tracking-[0.12em]">Track B</span>
                  <h2 className="text-[#0C0C0C] text-2xl mt-1">Founder</h2>
                </div>

                <p className="text-[#888580] text-sm leading-relaxed">
                  Go from idea to working product. Strategy sessions, 2-week sprints, and full venture launches — built for founders who are ready to ship something real.
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {['Strategy', 'Build Sprint', 'Venture Launch'].map((t) => (
                    <span key={t} className="text-[#F97316] text-[11px] font-semibold px-2.5 py-1 rounded-full border border-[#F97316]/30 bg-[#FFF4ED]">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-[#F97316] group-hover:text-[#0C0C0C] text-sm font-semibold transition-colors">
                  View Track B services
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="group-hover:translate-x-1 transition-transform duration-200">
                    <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </motion.a>
            </div>
          </div>
        </section>

        {/* ── Track A ─────────────────────────────────────────────────────── */}
        <section id="track-a" className="bg-[#F6F4EF] py-24 border-t border-[#E2DED8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-14"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] px-3 py-1.5 rounded-full bg-[#EEF4FB] text-[#1A4A7A]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1A4A7A]" />
                  Track A — Business Owners
                </span>
                <div className="flex-1 h-px bg-[#E2DED8]" aria-hidden="true" />
              </div>
              <h2 className="text-[clamp(24px,3.5vw,42px)] text-[#0C0C0C] leading-tight mb-3">
                AI setup, automation &amp; tools for your business
              </h2>
              <p className="text-[#888580] text-lg max-w-2xl">
                You don&apos;t need to rebuild everything. You need the right layer of AI on top of what you already have.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {trackA.map((svc, i) => {
                const Icon = svc.icon
                return (
                  <motion.div
                    key={svc.tier}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
                    className={`relative bg-white rounded-2xl overflow-hidden flex flex-col border transition-all duration-300 hover:-translate-y-1 ${
                      svc.popular
                        ? 'border-[#1A4A7A] shadow-[0_0_0_1px_rgba(26,74,122,0.15),0_4px_20px_rgba(0,0,0,0.08)]'
                        : 'border-[#E2DED8] shadow-[0_2px_12px_rgba(0,0,0,0.05)] hover:border-[#0C0C0C]/20 hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)]'
                    }`}
                  >
                    {svc.popular && (
                      <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#1A4A7A]" aria-hidden="true"/>
                    )}

                    {/* Card header */}
                    <div className="p-6 border-b border-[#E2DED8]">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-10 h-10 rounded-xl bg-[#EEF4FB] flex items-center justify-center shrink-0">
                          <Icon />
                        </div>
                        <div className="flex flex-col items-end gap-1">
                          {svc.popular && (
                            <span className="bg-[#1A4A7A] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-[0.08em]">
                              Popular
                            </span>
                          )}
                          <span className="text-[#888580] text-xs">{svc.turnaround}</span>
                        </div>
                      </div>

                      <span className="text-[10px] font-bold uppercase tracking-[0.12em] px-2 py-0.5 rounded bg-[#EEF4FB] text-[#1A4A7A] inline-block mb-3">
                        {svc.tier}
                      </span>
                      <h3 className="text-[#0C0C0C] text-lg leading-tight mb-2">{svc.name}</h3>
                      <p className="text-[#1A4A7A] text-xs font-medium mt-1.5">Best for: {svc.bestFor}</p>
                    </div>

                    {/* Card body */}
                    <div className="p-6 flex flex-col gap-4 flex-1">
                      <p className="text-[#888580] text-sm leading-relaxed">{svc.description}</p>

                      <ul className="flex flex-col gap-2 flex-1" role="list">
                        {svc.includes.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-[#0C0C0C]">
                            <GoldCheck />
                            {item}
                          </li>
                        ))}
                      </ul>

                      <Link
                        href="/contact"
                        className={`inline-flex items-center justify-center font-semibold py-2.5 px-5 rounded-xl transition-all duration-200 hover:scale-[1.02] min-h-[44px] text-sm mt-2 ${
                          svc.popular
                            ? 'bg-[#1A4A7A] hover:bg-[#FFD84D] text-white hover:text-[#0C0C0C]'
                            : 'bg-[#0C0C0C] hover:bg-[#FFD84D] text-white hover:text-[#0C0C0C]'
                        }`}
                      >
                        Get Started
                      </Link>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Track B ─────────────────────────────────────────────────────── */}
        <section id="track-b" className="bg-[#F6F4EF] py-24 border-t border-[#E2DED8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-14"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] px-3 py-1.5 rounded-full bg-[#FFF4ED] text-[#F97316]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F97316]" />
                  Track B — Founders
                </span>
                <div className="flex-1 h-px bg-[#E2DED8]" aria-hidden="true" />
              </div>
              <h2 className="text-[clamp(24px,3.5vw,42px)] text-[#0C0C0C] leading-tight mb-3">
                Strategy, sprints &amp; venture launches
              </h2>
              <p className="text-[#888580] text-lg max-w-2xl">
                From the first idea to the first customer — we help founders build and launch the right way.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {trackB.map((svc, i) => {
                const Icon = svc.icon
                return (
                  <motion.div
                    key={svc.tier}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className={`relative bg-white rounded-2xl overflow-hidden flex flex-col border transition-all duration-300 hover:-translate-y-1 ${
                      svc.popular
                        ? 'border-[#F97316] shadow-[0_0_0_1px_rgba(249,115,22,0.15),0_4px_20px_rgba(0,0,0,0.08)]'
                        : svc.both
                        ? 'border-[#FFD84D] shadow-[0_0_0_1px_rgba(232,197,71,0.2),0_4px_20px_rgba(0,0,0,0.08)]'
                        : 'border-[#E2DED8] shadow-[0_2px_12px_rgba(0,0,0,0.05)] hover:border-[#0C0C0C]/20 hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)]'
                    }`}
                  >
                    {svc.popular && (
                      <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#F97316]" aria-hidden="true"/>
                    )}
                    {svc.both && (
                      <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#FFD84D]" aria-hidden="true"/>
                    )}

                    {/* Card header */}
                    <div className="p-6 border-b border-[#E2DED8]">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-10 h-10 rounded-xl bg-[#FFF4ED] flex items-center justify-center shrink-0">
                          <Icon />
                        </div>
                        <div className="flex flex-col items-end gap-1">
                          {svc.popular && (
                            <span className="bg-[#F97316] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-[0.08em]">
                              Popular
                            </span>
                          )}
                          {svc.both && (
                            <span className="bg-[#FFD84D] text-[#0C0C0C] text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-[0.08em]">
                              Both Tracks
                            </span>
                          )}
                          <span className="text-[#888580] text-xs">{svc.turnaround}</span>
                        </div>
                      </div>

                      <span className={`text-[10px] font-bold uppercase tracking-[0.12em] px-2 py-0.5 rounded inline-block mb-3 ${
                        svc.both ? 'bg-[#FEF9E7] text-[#B8960A]' : 'bg-[#FFF4ED] text-[#F97316]'
                      }`}>
                        {svc.tier}
                      </span>
                      <h3 className="text-[#0C0C0C] text-lg leading-tight mb-2">{svc.name}</h3>
                      <p className="text-[#F97316] text-xs font-medium mt-1.5">Best for: {svc.bestFor}</p>
                    </div>

                    {/* Card body */}
                    <div className="p-6 flex flex-col gap-4 flex-1">
                      <p className="text-[#888580] text-sm leading-relaxed">{svc.description}</p>

                      <ul className="flex flex-col gap-2 flex-1" role="list">
                        {svc.includes.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-[#0C0C0C]">
                            <GoldCheck />
                            {item}
                          </li>
                        ))}
                      </ul>

                      <Link
                        href="/contact"
                        className={`inline-flex items-center justify-center font-semibold py-2.5 px-5 rounded-xl transition-all duration-200 hover:scale-[1.02] min-h-[44px] text-sm mt-2 ${
                          svc.popular
                            ? 'bg-[#F97316] hover:bg-[#ea6c0a] text-white'
                            : svc.both
                            ? 'bg-[#FFD84D] hover:bg-[#E8C030] text-[#0C0C0C]'
                            : 'bg-[#0C0C0C] hover:bg-[#FFD84D] text-white hover:text-[#0C0C0C]'
                        }`}
                      >
                        {svc.tier === 'T5' ? 'Book a Session' : svc.tier === 'T7' ? 'Let\'s Talk' : 'Start a Sprint'}
                      </Link>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Add-Ons ─────────────────────────────────────────────────────── */}
        <section className="bg-[#FFD84D] py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-10"
            >
              <p className="text-[#0C0C0C]/50 text-xs font-semibold uppercase tracking-[0.12em] mb-3">Add-Ons</p>
              <h2 className="text-[clamp(24px,3.5vw,42px)] text-[#0C0C0C] leading-tight mb-2">
                Extend any package
              </h2>
              <p className="text-[#0C0C0C]/60 text-lg">Available with any Track A or Track B service.</p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {addOns.map((addon, i) => (
                <motion.div
                  key={addon.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
                  className="bg-[#0C0C0C] rounded-2xl p-6 flex flex-col gap-3 hover:-translate-y-1 transition-transform duration-200"
                >
                  <h3 className="text-white text-base leading-tight">{addon.name}</h3>
                  <p className="text-[#9CA3AF] text-sm leading-relaxed">{addon.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ──────────────────────────────────────────────────── */}
        <section className="py-20 bg-[#0C0C0C]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-[clamp(28px,4vw,52px)] text-white leading-[1.1] mb-4">
                Not sure which tier fits?
              </h2>
              <p className="text-white/50 text-lg mb-10">
                Book a free 20-minute call and we&apos;ll figure it out together. No pressure, no pitch.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[#FFD84D] hover:bg-[#E8C030] text-[#0C0C0C] font-bold px-10 py-4 rounded-xl text-base transition-all duration-200 hover:scale-[1.02] min-h-[44px]"
              >
                Book a Free Call
              </Link>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
