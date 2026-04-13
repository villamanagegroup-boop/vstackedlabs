'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

const projects = [
  {
    track: 'Track A',
    client: 'Business Owner',
    tags: ['Next.js', 'Supabase', 'Admin Portal', 'Tailwind CSS'],
    title: 'Capital Core Dance Studio',
    what: 'Full studio management platform with public website and admin dashboard',
    outcome: 'Studio owner went from managing everything in spreadsheets to a fully automated booking and admin system. Saves ~5 hours/week.',
    description:
      'A full studio management platform with a public-facing website, admin dashboard, class scheduling, student roster, and Supabase-powered backend with row-level security. Built and deployed in under 4 weeks.',
    status: 'Live',
    link: '#',
  },
  {
    track: 'Track A',
    client: 'Business Owner',
    tags: ['Claude API', 'Next.js', 'Automation', 'Supabase'],
    title: 'Client Intake Agent',
    what: 'AI-powered intake system that qualifies leads and auto-generates proposals',
    outcome: 'Eliminated 3+ hours/day of manual lead qualification. Response time dropped from 24–48 hours to under 5 minutes.',
    description:
      'An AI-powered intake system that qualifies leads, matches them to the right service tier, auto-generates tailored proposals, and books discovery calls — 24/7, without any human involvement. Built on Claude and Next.js server actions.',
    status: 'Live',
    link: '#',
  },
  {
    track: 'Track B',
    client: 'Founder',
    tags: ['SaaS', 'Multi-tenant', 'Next.js', 'Supabase'],
    title: 'FieldOS — Operations Platform',
    what: 'Modular multi-tenant SaaS for small business owners and multi-venture operators',
    outcome: 'MVP in development. Targeting Q3 2025 beta launch with 3 pilot business owners across different industries.',
    description:
      'A modular, multi-tenant SaaS operations platform with a universal core and industry-specific modules. Built for small business owners who run multiple ventures and need one place to manage them all.',
    status: 'In Progress',
    link: null,
  },
  {
    track: 'Track A',
    client: 'Business Owner',
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    title: 'Stackd Studio Website',
    what: 'Full marketing website for the Stackd Studio brand',
    outcome: 'Flagship example of our design and development capabilities — the site you\'re on right now.',
    description:
      'The Stackd Studio marketing site — built entirely in-house using our own stack. Next.js 16 App Router, Tailwind CSS v4, Framer Motion, Anton typography, navy and gold design system.',
    status: 'Live',
    link: '/',
  },
]

type Filter = 'All' | 'Track A' | 'Track B'

export default function WorkPage() {
  const [filter, setFilter] = useState<Filter>('All')

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
            <div className="flex gap-3 mb-12" role="tablist" aria-label="Filter projects by track">
              {(['All', 'Track A', 'Track B'] as Filter[]).map((f) => (
                <button
                  key={f}
                  role="tab"
                  aria-selected={filter === f}
                  onClick={() => setFilter(f)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
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
            <div className="grid md:grid-cols-2 gap-6">
              {filtered.map((project) => (
                <div
                  key={project.title}
                  className="bg-white rounded-2xl border border-[#E2DED8] overflow-hidden flex flex-col hover:border-[#0C0C0C]/30 transition-all duration-300 hover:-translate-y-1"
                  style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}
                >
                  {/* Card top — dark */}
                  <div className="bg-[#0C0C0C] p-7 flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-[10px] font-semibold uppercase tracking-[0.1em] px-2.5 py-1 rounded-full ${
                          project.track === 'Track A'
                            ? 'bg-[#1A4A7A]/40 text-[#93C5FD]'
                            : 'bg-[#F97316]/20 text-[#FDB975]'
                        }`}
                      >
                        {project.track} — {project.client}
                      </span>
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

                    <h2 className="text-white text-2xl leading-tight">{project.title}</h2>
                  </div>

                  {/* Card bottom — light */}
                  <div className="p-7 flex flex-col gap-5 flex-1">
                    <div>
                      <p className="text-[#888580] text-xs font-semibold uppercase tracking-[0.1em] mb-1">What we built</p>
                      <p className="text-[#0C0C0C] text-sm font-medium">{project.what}</p>
                    </div>

                    <div>
                      <p className="text-[#888580] text-xs font-semibold uppercase tracking-[0.1em] mb-1">Outcome</p>
                      <p className="text-[#0C0C0C] text-sm leading-relaxed">{project.outcome}</p>
                    </div>

                    <p className="text-[#888580] text-sm leading-relaxed flex-1">{project.description}</p>

                    <div className="mt-auto">
                      {project.link ? (
                        <Link
                          href={project.link}
                          className="inline-flex items-center gap-2 text-[#0C0C0C] font-semibold text-sm hover:text-[#E8C547] transition-colors"
                        >
                          View Project
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                            <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </Link>
                      ) : (
                        <span className="text-[#888580] text-sm">Coming soon</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
