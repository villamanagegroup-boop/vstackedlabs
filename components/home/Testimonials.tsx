const testimonials = [
  {
    quote: "Stackd Studio helped us cut our client intake process from two days to two hours. The AI workflow they built just works — I don't have to think about it.",
    name: 'Marcus T.',
    role: 'Operations Director',
    company: 'Relocation Services Co.',
    initials: 'MT',
  },
  {
    quote: "I came in with a half-baked idea and left with a real product. The Founder Build Sprint was the best investment I made for my startup this year.",
    name: 'Priya S.',
    role: 'Founder',
    company: 'SaaS Platform (Stealth)',
    initials: 'PS',
  },
  {
    quote: "The Micro Tool they built for our scheduling workflow saved my team at least 6 hours a week. Delivered in 5 days, exactly as scoped.",
    name: 'Jordan L.',
    role: 'Studio Owner',
    company: 'Creative Agency',
    initials: 'JL',
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-white" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2
            id="testimonials-heading"
            className="text-[clamp(28px,4vw,44px)] text-[#0C0C0C] mb-4"
            style={{ fontFamily: 'var(--font-anton)' }}
          >
            WHAT CLIENTS SAY
          </h2>
          <p className="text-[#888580] text-lg">Real results from real builds.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-[#F6F4EF] rounded-2xl p-8 border border-[#E2DED8] flex flex-col"
            >
              <blockquote className="text-[#0C0C0C] text-sm leading-relaxed flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1A1A2E] flex items-center justify-center flex-shrink-0">
                  <span
                    className="text-[#E8C547] text-xs font-bold"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    {t.initials}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#0C0C0C]">{t.name}</p>
                  <p className="text-xs text-[#888580]">{t.role} · {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-[#888580] text-xs mt-8">
          * Placeholder testimonials — real client stories coming soon.
        </p>
      </div>
    </section>
  )
}
