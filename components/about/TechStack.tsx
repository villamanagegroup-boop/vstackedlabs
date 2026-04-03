const pillars = [
  {
    label: 'AI-First Approach',
    description: "We lead every engagement by asking what AI can do here — then we build around the answer. Claude, custom agents, and intelligent workflows are the default, not an afterthought.",
    tags: ['Claude API', 'Prompt Engineering', 'AI Automation', 'Agent Design'],
  },
  {
    label: 'Modern Tech Stack',
    description: 'We build on tools that are fast to ship with and built to scale. Everything we deliver is production-ready, hosted, and maintainable by a small team.',
    tags: ['Next.js', 'Supabase', 'Vercel', 'TypeScript', 'Tailwind CSS', 'Stripe'],
  },
  {
    label: 'Sprint-Based Delivery',
    description: "We work in focused, time-boxed sprints with clear deliverables at every checkpoint. You always know what's being built, when it's due, and what it will do.",
    tags: ['2-Week Sprints', 'Async Updates', 'Clear Scope', 'Documented Hand-offs'],
  },
]

export default function TechStack() {
  return (
    <section className="py-16 border-b border-[#E2DED8]" aria-labelledby="how-we-work-heading">
      <h2
        id="how-we-work-heading"
        className="text-[clamp(28px,4vw,44px)] text-[#0C0C0C] mb-10"
        style={{ fontFamily: 'var(--font-anton)' }}
      >
        HOW WE WORK
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {pillars.map((pillar) => (
          <div key={pillar.label} className="bg-[#1A1A2E] rounded-xl p-7 flex flex-col">
            <h3
              className="text-[#E8C547] text-base mb-3"
              style={{ fontFamily: 'var(--font-anton)' }}
            >
              {pillar.label.toUpperCase()}
            </h3>
            <p className="text-white/60 text-sm leading-relaxed flex-1 mb-5">
              {pillar.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {pillar.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-white/70"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
