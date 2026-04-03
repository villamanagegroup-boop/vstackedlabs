'use client'

import { useState } from 'react'
import CaseStudyCard, { CaseStudy } from './CaseStudyCard'

const studies: CaseStudy[] = [
  {
    id: '1',
    track: 'Business Owner',
    projectType: 'AI Automation',
    title: 'Insurance Ops Automation Platform',
    description: 'A mid-size relocation housing company was managing client placements, billing tracking, and communications entirely in email and spreadsheets. We built an internal platform that automated the intake-to-placement workflow and surfaced everything in a single dashboard.',
    outcome: 'Reduced placement processing time by 65%. Team of 4 now manages 3x the caseload.',
    isPlaceholder: true,
  },
  {
    id: '2',
    track: 'Founder',
    projectType: 'Founder Build Sprint',
    title: 'B2B SaaS Scheduling MVP',
    description: 'A founder came in with a validated problem, no product, and a tight runway. In 2 weeks we scoped the MVP, built the core scheduling and client management features, deployed to production, and set up the first acquisition channel.',
    outcome: 'MVP live in 12 days. First paying customer within 2 weeks of launch.',
    isPlaceholder: true,
  },
  {
    id: '3',
    track: 'Both',
    projectType: 'Venture Launch Package',
    title: 'Full-Stack Wellness Platform Launch',
    description: 'A founder with domain expertise but no technical background needed a complete venture build — brand, product, and go-to-market. We delivered a full-stack booking and content platform, a brand identity, and a launch plan in one engagement.',
    outcome: 'Launched to first 50 users in under 4 weeks. Revenue in month one.',
    isPlaceholder: true,
  },
]

type Filter = 'All' | 'Business Owner' | 'Founder'

export default function CaseStudyGrid() {
  const [activeFilter, setActiveFilter] = useState<Filter>('All')

  const filtered = studies.filter((s) => {
    if (activeFilter === 'All') return true
    if (activeFilter === 'Business Owner') return s.track === 'Business Owner' || s.track === 'Both'
    if (activeFilter === 'Founder') return s.track === 'Founder' || s.track === 'Both'
    return true
  })

  const filters: Filter[] = ['All', 'Business Owner', 'Founder']

  return (
    <div>
      <div className="flex items-center gap-3 mb-10 flex-wrap" role="group" aria-label="Filter case studies by track">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setActiveFilter(f)}
            className={`text-sm font-semibold px-4 py-2 rounded-full transition-all duration-200 ${
              activeFilter === f
                ? 'bg-[#1A1A2E] text-[#F6F4EF]'
                : 'bg-white border border-[#E2DED8] text-[#888580] hover:text-[#0C0C0C] hover:border-[#1A1A2E]'
            }`}
            aria-pressed={activeFilter === f}
          >
            {f}
          </button>
        ))}
      </div>

      {filtered.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((study) => (
            <CaseStudyCard key={study.id} study={study} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-[#888580] text-lg">More work coming soon.</p>
        </div>
      )}
    </div>
  )
}
