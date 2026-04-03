const steps = [
  {
    number: '01',
    title: 'DISCOVERY CALL',
    description: 'We start with a free 20-minute call to understand your situation, your goals, and what track makes sense for you.',
  },
  {
    number: '02',
    title: 'STRATEGY & SCOPE',
    description: 'We map out exactly what gets built, in what order, and at what investment level. No surprises.',
  },
  {
    number: '03',
    title: 'BUILD SPRINT',
    description: 'We build fast and with intention — async updates throughout, real deliverables at the end of every sprint.',
  },
  {
    number: '04',
    title: 'LAUNCH & HAND-OFF',
    description: 'You get the finished product, full documentation, and a clean hand-off so you can operate it with confidence.',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-24 bg-[#F6F4EF]" aria-labelledby="how-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            id="how-heading"
            className="text-[clamp(28px,4vw,44px)] text-[#0C0C0C] mb-4"
            style={{ fontFamily: 'var(--font-anton)' }}
          >
            HOW IT WORKS
          </h2>
          <p className="text-[#888580] text-lg max-w-xl mx-auto">
            A clear process from first conversation to finished product.
          </p>
        </div>

        {/* Desktop: horizontal with connector line */}
        <div className="hidden md:grid md:grid-cols-4 gap-0 relative">
          <div
            className="absolute top-8 left-[12.5%] right-[12.5%] h-px"
            style={{ background: 'linear-gradient(to right, #E8C547, #1A1A2E)' }}
            aria-hidden="true"
          />
          {steps.map((step) => (
            <div key={step.number} className="relative flex flex-col items-center text-center px-6">
              <div className="w-16 h-16 rounded-full bg-[#1A1A2E] flex items-center justify-center mb-6 relative z-10 border-4 border-[#F6F4EF]">
                <span
                  className="text-[#E8C547] text-lg"
                  style={{ fontFamily: 'var(--font-anton)' }}
                >
                  {step.number}
                </span>
              </div>
              <h3
                className="text-base text-[#0C0C0C] mb-3"
                style={{ fontFamily: 'var(--font-anton)' }}
              >
                {step.title}
              </h3>
              <p className="text-[#888580] text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Mobile: vertical stack */}
        <div className="md:hidden flex flex-col gap-8">
          {steps.map((step, i) => (
            <div key={step.number} className="flex gap-5">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-[#1A1A2E] flex items-center justify-center flex-shrink-0">
                  <span
                    className="text-[#E8C547] text-sm"
                    style={{ fontFamily: 'var(--font-anton)' }}
                  >
                    {step.number}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px flex-1 bg-[#E2DED8] mt-2" aria-hidden="true" />
                )}
              </div>
              <div className="pb-8">
                <h3
                  className="text-base text-[#0C0C0C] mb-2"
                  style={{ fontFamily: 'var(--font-anton)' }}
                >
                  {step.title}
                </h3>
                <p className="text-[#888580] text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
