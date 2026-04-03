const values = [
  {
    number: '01',
    title: 'BUILD WITH INTENTION',
    description: 'Every system we build has a reason to exist. We scope carefully, design clearly, and deliver things that solve real problems — not impressive-looking tools that nobody uses.',
  },
  {
    number: '02',
    title: 'AI AS CRAFT, NOT SHORTCUT',
    description: "We use AI as a precision instrument, not a speed hack. The goal is always to produce something better — not just something faster. Quality and intelligence aren't in conflict.",
  },
  {
    number: '03',
    title: 'STRATEGY BEFORE EXECUTION',
    description: "We don't start building until we understand the problem fully. The right plan up front saves weeks of rework on the back end.",
  },
  {
    number: '04',
    title: 'SHIP AND IMPROVE',
    description: "Perfection is the enemy of progress. We launch working things, learn from real use, and iterate. A live product always beats a perfect prototype that never ships.",
  },
]

export default function Values() {
  return (
    <section className="py-16 border-b border-[#E2DED8]" aria-labelledby="values-heading">
      <h2
        id="values-heading"
        className="text-[clamp(28px,4vw,44px)] text-[#0C0C0C] mb-10"
        style={{ fontFamily: 'var(--font-anton)' }}
      >
        WHAT WE BELIEVE
      </h2>

      <div className="grid sm:grid-cols-2 gap-6">
        {values.map((value) => (
          <div
            key={value.number}
            className="bg-white border border-[#E2DED8] rounded-xl p-7"
          >
            <span
              className="text-[#E8C547] text-sm font-bold mb-3 block"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              {value.number}
            </span>
            <h3
              className="text-lg text-[#0C0C0C] mb-3"
              style={{ fontFamily: 'var(--font-anton)' }}
            >
              {value.title}
            </h3>
            <p className="text-[#888580] text-sm leading-relaxed">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
