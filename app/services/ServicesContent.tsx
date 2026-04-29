'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'


// ─── Data ─────────────────────────────────────────────────────────────────────

const trackA = [
  {
    tier: 'T1',
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
    cta: 'Get Started',
  },
  {
    tier: 'T2',
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
    cta: 'Get Started',
  },
  {
    tier: 'T3',
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
    cta: 'Get Started',
  },
  {
    tier: 'T4',
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
    cta: 'Get Started',
    popular: true,
  },
]

const trackB = [
  {
    tier: 'T5',
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
    cta: 'Book a Session',
  },
  {
    tier: 'T6',
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
    cta: 'Start a Sprint',
    popular: true,
  },
  {
    tier: 'T7',
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
    cta: "Let's Talk",
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

// ─── Service Row ──────────────────────────────────────────────────────────────

function ServiceRow({
  svc,
  accent,
  accentLight,
  i,
}: {
  svc: typeof trackA[0] & { popular?: boolean; both?: boolean }
  accent: string
  accentLight: string
  i: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.08 }}
      className="grid md:grid-cols-[100px_1fr] lg:grid-cols-[120px_1fr_220px] gap-x-8 gap-y-4 py-10 border-t border-[#E2DED8]"
    >
      {/* Left: tier + badges */}
      <div className="flex flex-col gap-3 pt-1">
        <span
          className="text-[11px] font-bold uppercase tracking-[0.15em]"
          style={{ color: accent }}
        >
          {svc.tier}
        </span>
        {svc.popular && (
          <span
            className="text-[10px] font-bold uppercase tracking-[0.1em] px-2 py-0.5 rounded-full w-fit"
            style={{ background: accent, color: '#fff' }}
          >
            Popular
          </span>
        )}
        {svc.both && (
          <span className="text-[10px] font-bold uppercase tracking-[0.1em] px-2 py-0.5 rounded-full w-fit bg-[#FFD84D] text-[#0C0C0C]">
            Both Tracks
          </span>
        )}
        <span className="text-[#888580] text-xs leading-snug">{svc.turnaround}</span>
      </div>

      {/* Middle: content */}
      <div className="border-l-[3px] pl-8" style={{ borderColor: accent }}>
        <h3 className="text-[clamp(20px,2.2vw,28px)] text-[#0C0C0C] leading-tight mb-1">
          {svc.name}
        </h3>
        <p className="text-xs font-medium mb-4" style={{ color: accent }}>
          Best for: {svc.bestFor}
        </p>
        <p className="text-[#888580] text-sm leading-relaxed mb-6 max-w-xl">
          {svc.description}
        </p>
        <ul className="flex flex-col gap-2" role="list">
          {svc.includes.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-[#0C0C0C]">
              <span className="w-4 h-px mt-[9px] shrink-0" style={{ background: accent }} aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Right: CTA */}
      <div className="flex flex-col justify-start items-start lg:items-end lg:col-start-3 pt-1">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 font-semibold text-sm transition-all duration-200 hover:gap-3"
          style={{ color: accent }}
        >
          {svc.cta}
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>
    </motion.div>
  )
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function ServicesContent() {
  return (
    <>
      <Navbar yellowHero />
      <main>

        {/* ── Hero ────────────────────────────────────────────────────────── */}
        <section className="bg-[#FFD84D] pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-end mb-16">
              <div className="max-w-2xl">
                <p className="text-[#0C0C0C]/50 text-xs font-semibold uppercase tracking-[0.12em] mb-4">Services</p>
                <h1 className="text-[clamp(40px,6vw,72px)] text-[#0C0C0C] leading-[1.0] mb-5">
                  Pick your track.<br className="hidden sm:block"/> We&apos;ll build the rest.
                </h1>
                <p className="text-[#0C0C0C]/65 text-base sm:text-xl leading-relaxed mb-10">
                  Two tracks. Every tier is scoped, defined, and built to deliver results — not just deliverables.
                </p>
              </div>

              <div
                className="relative w-[220px] h-[328px] lg:w-[300px] lg:h-[447px] mx-auto lg:mx-0 shrink-0 rounded-3xl overflow-hidden border-2 border-[#0C0C0C]/10 shadow-[0_20px_50px_rgba(12,12,12,0.18)]"
                aria-hidden="true"
              >
                <Image
                  src="/stacka-laptop.png"
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 300px, 220px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Track jump links */}
            <div className="flex flex-wrap gap-8 border-t border-[#0C0C0C]/15 pt-8">
              <a href="#track-a" className="group flex items-center gap-3">
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#1A4A7A]">Track A</span>
                <span className="text-[#0C0C0C] font-semibold text-lg group-hover:underline underline-offset-4">Business Owners</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="text-[#1A4A7A] group-hover:translate-x-1 transition-transform">
                  <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#track-b" className="group flex items-center gap-3">
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#F97316]">Track B</span>
                <span className="text-[#0C0C0C] font-semibold text-lg group-hover:underline underline-offset-4">Founders</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="text-[#F97316] group-hover:translate-x-1 transition-transform">
                  <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* ── Track A ─────────────────────────────────────────────────────── */}
        <section id="track-a" className="bg-[#F6F4EF] py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <p className="text-[#1A4A7A] text-[10px] font-bold uppercase tracking-[0.15em] mb-3">Track A — Business Owners</p>
              <h2 className="text-[clamp(24px,3.5vw,42px)] text-[#0C0C0C] leading-tight mb-2">
                AI setup, automation &amp; tools for your business
              </h2>
              <p className="text-[#888580] text-lg max-w-2xl">
                You don&apos;t need to rebuild everything. You need the right layer of AI on top of what you already have.
              </p>
            </motion.div>

            {trackA.map((svc, i) => (
              <ServiceRow key={svc.tier} svc={svc} accent="#1A4A7A" accentLight="#EEF4FB" i={i} />
            ))}
          </div>
        </section>

        {/* ── Track B ─────────────────────────────────────────────────────── */}
        <section id="track-b" className="bg-[#F6F4EF] py-24 border-t-4 border-[#E2DED8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <p className="text-[#F97316] text-[10px] font-bold uppercase tracking-[0.15em] mb-3">Track B — Founders</p>
              <h2 className="text-[clamp(24px,3.5vw,42px)] text-[#0C0C0C] leading-tight mb-2">
                Strategy, sprints &amp; venture launches
              </h2>
              <p className="text-[#888580] text-lg max-w-2xl">
                From the first idea to the first customer — we help founders build and launch the right way.
              </p>
            </motion.div>

            {trackB.map((svc, i) => (
              <ServiceRow key={svc.tier} svc={svc} accent="#F97316" accentLight="#FFF4ED" i={i} />
            ))}
          </div>
        </section>

        {/* ── Other ways to start (Self-Serve + Free Resource) ───────────── */}
        <section className="bg-[#F6F4EF] py-20 md:py-24 border-t-4 border-[#E2DED8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-10 max-w-2xl"
            >
              <p className="text-[#0C0C0C]/60 text-[10px] font-bold uppercase tracking-[0.15em] mb-3">
                // Other ways to start
              </p>
              <h2 className="text-[clamp(24px,3.5vw,42px)] text-[#0C0C0C] leading-tight">
                Not ready for a custom build?
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-5">
              {/* Self-Serve card */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5 }}
                className="bg-[#0C0C0C] rounded-2xl p-8 md:p-10 flex flex-col text-white"
              >
                <p className="text-[#FFD84D] text-xs font-semibold uppercase tracking-[0.16em] mb-3">
                  // Self-Serve
                </p>
                <h3 className="text-[clamp(26px,3.6vw,40px)] uppercase leading-[1.0] mb-3">
                  Skip the call. Grab a <span className="text-[#FFD84D]">starter pack.</span>
                </h3>
                <p className="text-white/75 text-base md:text-lg leading-relaxed mb-5 flex-grow">
                  Instant-download digital products built by Stackd Studios — starter
                  packs, templates, courses, and Claude skills. Self-serve, no scoping
                  required.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['Starter Packs', 'Templates', 'Courses', 'Claude Skills'].map((tag) => (
                    <span
                      key={tag}
                      className="bg-white/10 border border-white/15 text-white text-xs px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href="/store"
                  className="inline-flex items-center justify-center bg-[#FFD84D] hover:bg-white text-[#0C0C0C] font-bold px-7 py-4 rounded-xl text-base transition-all duration-200 hover:scale-[1.02] min-h-[48px] self-start"
                >
                  Browse the Store →
                </Link>
              </motion.div>

              {/* Free Resource card */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: 0.08 }}
                className="bg-[#0C0C0C] rounded-2xl p-8 md:p-10 flex flex-col text-white"
              >
                <p className="text-[#FFD84D] text-xs font-semibold uppercase tracking-[0.16em] mb-3">
                  // Free Resource
                </p>
                <h3 className="text-[clamp(26px,3.6vw,40px)] uppercase leading-[1.0] mb-3">
                  The AI toolkit for <span className="text-[#FFD84D]">small business.</span>
                </h3>
                <p className="text-white/75 text-base md:text-lg leading-relaxed mb-5 flex-grow">
                  50+ tools curated, ranked, and updated quarterly. Yours free —
                  permanent access link, no credit card.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['50+ tools', '6 categories', 'Updated quarterly', 'Free'].map((tag) => (
                    <span
                      key={tag}
                      className="bg-white/10 border border-white/15 text-white text-xs px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href="/ai-toolkit"
                  className="inline-flex items-center justify-center bg-[#FFD84D] hover:bg-white text-[#0C0C0C] font-bold px-7 py-4 rounded-xl text-base transition-all duration-200 hover:scale-[1.02] min-h-[48px] self-start"
                >
                  Get the toolkit →
                </Link>
              </motion.div>
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
              className="mb-4"
            >
              <p className="text-[#0C0C0C]/50 text-xs font-semibold uppercase tracking-[0.12em] mb-3">Add-Ons</p>
              <h2 className="text-[clamp(24px,3.5vw,42px)] text-[#0C0C0C] leading-tight mb-2">
                Extend any package
              </h2>
              <p className="text-[#0C0C0C]/60 text-lg">Available with any Track A or Track B service.</p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-0 mt-8">
              {addOns.map((addon, i) => (
                <motion.div
                  key={addon.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (i % 2) * 0.06 }}
                  className="flex gap-6 py-7 border-t border-[#0C0C0C]/15"
                >
                  <span className="w-4 h-px mt-[11px] shrink-0 bg-[#0C0C0C]/40" aria-hidden="true" />
                  <div>
                    <h3 className="text-[#0C0C0C] font-normal text-base mb-1">{addon.name}</h3>
                    <p className="text-[#0C0C0C]/55 text-sm leading-relaxed">{addon.description}</p>
                  </div>
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
