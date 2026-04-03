export type CaseStudy = {
  id: string
  track: 'Business Owner' | 'Founder' | 'Both'
  projectType: string
  title: string
  description: string
  outcome: string
  isPlaceholder?: boolean
}

type Props = {
  study: CaseStudy
}

const trackStyles = {
  'Business Owner': { bg: 'rgba(26,74,122,0.08)', color: '#1A4A7A', bar: '#1A4A7A' },
  'Founder': { bg: 'rgba(249,115,22,0.08)', color: '#F97316', bar: '#F97316' },
  'Both': { bg: 'rgba(26,26,46,0.08)', color: '#1A1A2E', bar: '#1A1A2E' },
}

export default function CaseStudyCard({ study }: Props) {
  const ts = trackStyles[study.track]

  return (
    <div className="bg-white border border-[#E2DED8] rounded-2xl overflow-hidden flex flex-col">
      <div className="h-2 w-full" style={{ background: ts.bar }} aria-hidden="true" />

      <div className="p-7 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-4">
          <span
            className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full"
            style={{ background: ts.bg, color: ts.color }}
          >
            {study.track}
          </span>
          <span
            className="text-xs text-[#888580]"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            {study.projectType}
          </span>
        </div>

        <h3
          className="text-xl text-[#0C0C0C] mb-3"
          style={{ fontFamily: 'var(--font-anton)' }}
        >
          {study.title}
        </h3>

        <p className="text-[#888580] text-sm leading-relaxed flex-1 mb-5">
          {study.description}
        </p>

        <div className="bg-[#F6F4EF] rounded-lg px-4 py-3 mb-5 border border-[#E2DED8]">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#888580] mb-1">Outcome</p>
          <p className="text-sm font-semibold text-[#0C0C0C]">{study.outcome}</p>
        </div>

        <div className="flex items-center justify-between">
          <a
            href="#"
            className="text-sm font-semibold text-[#1A1A2E] hover:text-[#1A4A7A] transition-colors"
          >
            View Case Study →
          </a>
          {study.isPlaceholder && (
            <span className="text-xs text-[#888580] italic">Example Project</span>
          )}
        </div>
      </div>
    </div>
  )
}
