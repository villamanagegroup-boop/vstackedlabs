import Link from 'next/link'

type DemoSlug = 'smart-intake' | 'ai-assistant' | 'ops-dashboard'

type DemoMeta = {
  slug: DemoSlug
  number: string
  title: string
  tagline: string
}

const DEMOS: DemoMeta[] = [
  {
    slug: 'smart-intake',
    number: '01',
    title: 'Smart Intake',
    tagline: 'Parse messy customer messages in real time',
  },
  {
    slug: 'ai-assistant',
    number: '02',
    title: 'AI Business Assistant',
    tagline: 'Pre-built prompts that draft your work for you',
  },
  {
    slug: 'ops-dashboard',
    number: '03',
    title: 'Live Ops Dashboard',
    tagline: 'KPIs, charts, and a full app sidebar',
  },
]

export default function DemoNav({ currentSlug }: { currentSlug: DemoSlug }) {
  const idx = DEMOS.findIndex((d) => d.slug === currentSlug)
  if (idx < 0) return null

  const prev = DEMOS[(idx - 1 + DEMOS.length) % DEMOS.length]
  const next = DEMOS[(idx + 1) % DEMOS.length]

  return (
    <nav aria-label="Demo navigation" className="grid sm:grid-cols-2 gap-3 sm:gap-4">
      <DemoNavCard demo={prev} direction="prev" />
      <DemoNavCard demo={next} direction="next" />
    </nav>
  )
}

function DemoNavCard({ demo, direction }: { demo: DemoMeta; direction: 'prev' | 'next' }) {
  const isNext = direction === 'next'
  return (
    <Link
      href={`/lab/${demo.slug}`}
      className={`group flex items-center gap-4 rounded-2xl border-2 border-[#0C0C0C] bg-white hover:bg-[#0C0C0C] hover:text-white transition-colors p-4 sm:p-5 ${
        isNext ? 'sm:flex-row-reverse sm:text-right' : ''
      }`}
    >
      <span
        className={`inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#0C0C0C] text-[#FFD84D] group-hover:bg-[#FFD84D] group-hover:text-[#0C0C0C] shrink-0 transition-colors`}
        aria-hidden="true"
      >
        {isNext ? (
          <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
            <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
            <path d="M11 7H3M7 3L3 7l4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </span>
      <div className={`flex-1 min-w-0 ${isNext ? 'sm:text-right' : ''}`}>
        <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#0C0C0C]/55 group-hover:text-[#FFD84D] transition-colors">
          {isNext ? 'Next demo' : 'Previous demo'}
        </p>
        <p className="font-[family-name:var(--font-anton)] text-lg sm:text-xl text-[#0C0C0C] group-hover:text-white uppercase leading-tight mt-1 transition-colors">
          <span className="text-[#0C0C0C]/40 group-hover:text-[#FFD84D] mr-1.5 transition-colors">
            {demo.number}
          </span>
          {demo.title}
        </p>
        <p className="text-xs text-[#0C0C0C]/65 group-hover:text-white/65 leading-snug mt-0.5 transition-colors">
          {demo.tagline}
        </p>
      </div>
    </Link>
  )
}
