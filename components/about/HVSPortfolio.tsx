const projects = [
  { name: 'Capital Core Dance Studio', type: 'Website & Booking' },
  { name: 'Evolution Production Company', type: 'Brand & Web Platform' },
  { name: 'Villa Concierge Co', type: 'Operations Platform' },
]

export default function HVSPortfolio() {
  return (
    <section className="py-16" aria-labelledby="hvs-heading">
      <h2
        id="hvs-heading"
        className="text-[clamp(28px,4vw,44px)] text-[#0C0C0C] mb-4"
        style={{ fontFamily: 'var(--font-anton)' }}
      >
        PART OF THE HVS PORTFOLIO
      </h2>
      <p className="text-[#888580] text-base leading-relaxed max-w-2xl mb-8">
        Stackd Studio is the build lab within Hicks Virtual Solutions — a portfolio of ventures, tools, and client solutions built and operated by Chanel Hicks. HVS exists to create businesses and build systems that generate lasting value for the communities and clients it serves.
      </p>

      <div className="flex flex-wrap gap-3">
        {projects.map((project) => (
          <div
            key={project.name}
            className="bg-white border border-[#E2DED8] rounded-lg px-4 py-3"
          >
            <p className="text-sm font-semibold text-[#0C0C0C]">{project.name}</p>
            <p className="text-xs text-[#888580] mt-0.5">{project.type}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
