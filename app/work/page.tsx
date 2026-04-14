'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { motion } from 'framer-motion'
type Track = 'All' | 'Track A' | 'Track B'

const projects = [
  {
    track: 'Track A' as Track,
    trackColor: '#1A4A7A',
    trackTextColor: '#93C5FD',
    tags: ['Claude API', 'Next.js', 'Automation'],
    title: 'Client Intake Agent',
    what: 'AI lead qualification and automated proposal generation',
    description: 'Qualifies leads, matches them to the right service tier, auto-generates tailored proposals, and books discovery calls — 24/7, without any human involvement. Eliminated 3+ hours/day of manual admin work.',
    url: 'intake.stackd.app',
    status: 'Live',
    imageUrl: '/work/intake-agent.jpg',
  },
  {
    track: 'Track B' as Track,
    trackColor: '#F97316',
    trackTextColor: '#FDB975',
    tags: ['Claude API', 'RAG', 'Next.js'],
    title: 'Business Brain App',
    what: 'AI knowledge base powered by your own business documents',
    description: 'Answers business questions using the owner\'s own SOPs, reports, and documents. Built with RAG architecture on top of Claude — no more digging through folders or asking the team for information.',
    url: 'brain.stackd.app',
    status: 'Live',
    imageUrl: '/work/business-brain.jpg',
  },
  {
    track: 'Track A' as Track,
    trackColor: '#1A4A7A',
    trackTextColor: '#93C5FD',
    tags: ['Claude API', 'Next.js', 'AI Audit'],
    title: 'Client Audit Tool',
    what: 'AI-powered business health scoring and gap analysis',
    description: 'An AI-powered client audit platform that surfaces gaps, scores business health, and generates actionable reports — giving owners clarity in minutes instead of weeks.',
    url: 'audit.stackd.app',
    status: 'Live',
    imageUrl: '/work/client-audit-tool.png',
  },
  {
    track: 'Track A' as Track,
    trackColor: '#1A4A7A',
    trackTextColor: '#93C5FD',
    tags: ['Booking', 'Stripe', 'Supabase'],
    title: 'Salon Booking System',
    what: 'Online booking with staff scheduling and automated reminders',
    description: 'Online booking with staff scheduling, automated confirmation and rebooking reminders, service menu management, and a client history dashboard — all branded to the salon experience.',
    url: 'book.salon.app/schedule',
    status: 'Live',
    imageUrl: '/work/salon-booking.jpg',
  },
  {
    track: 'Track A' as Track,
    trackColor: '#1A4A7A',
    trackTextColor: '#93C5FD',
    tags: ['LMS', 'Stripe', 'Progress Tracking'],
    title: 'Coaching Program Portal',
    what: 'Gated curriculum with session scheduling and progress milestones',
    description: 'Structured coaching portal with gated curriculum, session scheduling, progress milestone tracking, and a private client dashboard — giving coaches a professional delivery system without any custom dev overhead.',
    url: 'coach.portal.app/program',
    status: 'Live',
    imageUrl: '/work/coaching-portal.jpg',
  },
  {
    track: 'Track B' as Track,
    trackColor: '#F97316',
    trackTextColor: '#FDB975',
    tags: ['SaaS', 'Multi-tenant', 'Next.js'],
    title: 'Operations Platform',
    what: 'Multi-tenant SaaS for small business operators and founders',
    description: 'Modular, multi-tenant SaaS with a universal core and industry-specific modules. Built for small business owners who run multiple ventures and need one place to manage them all. Currently in beta.',
    url: 'ops.platform/dashboard',
    status: 'In Progress',
    imageUrl: '/work/operations-platform.png',
  },
  {
    track: 'Track A' as Track,
    trackColor: '#1A4A7A',
    trackTextColor: '#93C5FD',
    tags: ['Supabase', 'Auth', 'Next.js'],
    title: 'Client Portal',
    what: 'Quiz-gated membership portal with locked content and daily cards',
    description: 'Quiz-gated membership portal with progress tracking, locked content modules, resource vaults, and daily card delivery — built for coaches and service businesses offering ongoing digital programs.',
    url: 'portal.client.app/dashboard',
    status: 'Live',
    imageUrl: '/work/coaching-portal.jpg',
  },
  {
    track: 'Track B' as Track,
    trackColor: '#F97316',
    trackTextColor: '#FDB975',
    tags: ['Analytics', 'Multi-view', 'Supabase'],
    title: 'Business Ops Dashboard',
    what: 'Centralized KPI and operations tracking for multi-revenue businesses',
    description: 'Centralized hub with KPI tracking, task management, revenue charts, and team activity feeds. Purpose-built for small business owners running multiple revenue streams who need one clear view of everything.',
    url: 'ops.dashboard/overview',
    status: 'Live',
    imageUrl: '/work/operations-platform.png',
  },
  {
    track: 'Track A' as Track,
    trackColor: '#1A4A7A',
    trackTextColor: '#93C5FD',
    tags: ['Memberships', 'Stripe', 'Next.js'],
    title: 'Gym Membership Platform',
    what: 'Membership tiers, class sign-ups, and check-in tracking',
    description: 'Membership tiers, class sign-ups, check-in tracking, and automated renewal flows — giving gym owners a full operations view from one clean dashboard. Stripe-powered with email automation.',
    url: 'members.gym.app/dashboard',
    status: 'Live',
    imageUrl: '/work/coaching-portal.jpg',
  },
  {
    track: 'Track B' as Track,
    trackColor: '#F97316',
    trackTextColor: '#FDB975',
    tags: ['E-commerce', 'Stripe', 'Next.js'],
    title: 'Digital Product Store',
    what: 'Instant-download storefront with Stripe and automated delivery',
    description: 'Instant-download storefront with product filtering, Stripe Checkout, and automated delivery via email. No marketplace fees, fully owned by the business — with an admin panel for managing products and orders.',
    url: 'shop.brand.app/products',
    status: 'Live',
    imageUrl: '/work/client-audit-tool.png',
  },
  {
    track: 'Track A' as Track,
    trackColor: '#1A4A7A',
    trackTextColor: '#93C5FD',
    tags: ['Registration', 'Supabase', 'Admin'],
    title: 'Sports Program Registration',
    what: 'Season registration, team rosters, and game schedule management',
    description: 'Season registration, team roster management, game schedules, and payment collection — giving youth sports programs a professional digital presence without the complexity of off-the-shelf platforms.',
    url: 'register.league.app/season',
    status: 'Live',
    imageUrl: '/work/coaching-portal.jpg',
  },
]

export default function WorkPage() {
  const [filter, setFilter] = useState<Track>('All')

  const filtered = filter === 'All' ? projects : projects.filter((p) => p.track === filter)

  return (
    <>
      <Navbar />
      <main className="bg-[#F6F4EF]">
        {/* Hero */}
        <section className="pt-32 pb-16 bg-white border-b border-[#E2DED8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-[#888580] text-xs font-semibold uppercase tracking-[0.12em] mb-4">Our Work</p>
              <h1 className="text-[clamp(40px,6vw,72px)] text-[#0C0C0C] leading-[1.0] mb-6">
                Real products. Real clients. Built with AI from day one.
              </h1>
              <p className="text-[#888580] text-xl leading-relaxed">
                Every project on this page was built in-house using our full-stack AI development process — from strategy to deployment.
              </p>
            </div>
          </div>
        </section>

        {/* Filter + Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Filter tabs */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-10 sm:mb-12" role="tablist" aria-label="Filter projects by track">
              {(['All', 'Track A', 'Track B'] as Track[]).map((f) => (
                <button
                  key={f}
                  role="tab"
                  aria-selected={filter === f}
                  onClick={() => setFilter(f)}
                  className={`px-4 sm:px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
                    filter === f
                      ? 'bg-[#0C0C0C] text-white'
                      : 'bg-white border border-[#E2DED8] text-[#888580] hover:border-[#0C0C0C] hover:text-[#0C0C0C]'
                  }`}
                >
                  {f === 'Track A' ? 'Track A — Business' : f === 'Track B' ? 'Track B — Founders' : f}
                </button>
              ))}
            </div>

            {/* Project cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((project, i) => {
                return (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
                    className="bg-[#0C0C0C] rounded-2xl overflow-hidden flex flex-col group hover:-translate-y-1 transition-transform duration-300"
                    style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.3)' }}
                  >
                    {/* Browser chrome + image */}
                    <div className="relative">
                      <div className="flex items-center gap-1.5 px-4 py-3 bg-[#1a1a1a] border-b border-white/5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                        <div className="ml-3 flex-1 bg-[#0f0f0f] rounded-md px-3 py-1 flex items-center gap-2">
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                            <circle cx="5" cy="5" r="4" stroke="#444" strokeWidth="1"/>
                            <path d="M3 5h4M5 3v4" stroke="#444" strokeWidth="1"/>
                          </svg>
                          <span className="text-[#555] text-[10px] font-mono truncate">{project.url}</span>
                        </div>
                      </div>
                      <div className="overflow-hidden h-48">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={project.imageUrl}
                          alt={project.title}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#0C0C0C] to-transparent pointer-events-none" aria-hidden="true"/>
                    </div>

                    {/* Card body */}
                    <div className="p-6 flex flex-col gap-3 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <div
                          className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.1em] px-2.5 py-1 rounded-full"
                          style={{ background: project.trackColor + '25', color: project.trackTextColor }}
                        >
                          <span className="w-1.5 h-1.5 rounded-full" style={{ background: project.trackTextColor }} aria-hidden="true" />
                          {project.track}
                        </div>
                        <span
                          className={`text-[10px] font-semibold uppercase tracking-[0.1em] px-2.5 py-1 rounded-full ${
                            project.status === 'Live'
                              ? 'bg-green-900/30 text-green-400'
                              : 'bg-[#E8C547]/20 text-[#E8C547]'
                          }`}
                        >
                          {project.status}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span key={tag} className="text-[#E8C547] text-xs font-semibold px-2 py-0.5 rounded-md border border-[#E8C547]/30">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <h2 className="text-white text-lg leading-tight">{project.title}</h2>
                      <p className="text-[#9CA3AF] text-xs font-semibold uppercase tracking-[0.08em]">{project.what}</p>
                      <p className="text-[#6B7280] text-sm leading-relaxed flex-1">{project.description}</p>

                      <Link
                        href="/contact"
                        className="text-[#E8C547] font-semibold text-sm hover:text-white transition-colors mt-2 inline-flex items-center gap-2 group-hover:gap-3 duration-200"
                        aria-label={`Start a project like ${project.title}`}
                      >
                        Start My Project
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                          <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </Link>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Privacy statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-12 flex items-start gap-3 bg-white border border-[#E2DED8] rounded-2xl px-6 py-5"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0 mt-0.5" aria-hidden="true">
                <path d="M9 1.5L2.25 4.5v5.25c0 4.125 2.925 7.988 6.75 8.25 3.825-.262 6.75-4.125 6.75-8.25V4.5L9 1.5z" stroke="#888580" strokeWidth="1.4" strokeLinejoin="round"/>
                <path d="M6 9l2 2 4-4" stroke="#888580" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p className="text-[#888580] text-sm leading-relaxed">
                <span className="font-semibold text-[#0C0C0C]">We protect our clients&apos; privacy.</span>{' '}
                The work shown above represents the types of systems we build. Out of respect for our clients, we do not publicly display their brand names, proprietary systems, or business data. All details are generalized to illustrate scope and capability.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#0C0C0C]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-[clamp(28px,4vw,48px)] text-white leading-[1.1] mb-4">
              Want us to build yours next?
            </h2>
            <p className="text-white/60 text-lg mb-8">
              Book a free 20-minute discovery call to get started.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[#E8C547] hover:bg-[#d4b03d] text-[#0C0C0C] font-bold px-8 py-4 rounded-xl text-base transition-all duration-200 hover:scale-[1.02] min-h-[44px]"
            >
              Book a Free Call
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
