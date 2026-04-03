import Link from 'next/link'

type Tier = {
  id: string
  name: string
  price: string
  description: string
  track: 'A' | 'B' | 'Both'
}

const tiers: Tier[] = [
  {
    id: 'T1',
    name: 'AI Quick Setup',
    price: '$297',
    description: 'Custom Claude prompt library, one workflow automation, and an orientation call.',
    track: 'A',
  },
  {
    id: 'T2',
    name: 'AI Business Build-Out',
    price: '$797',
    description: 'Full AI system across 3 workflows, two calls, and a complete Drive folder delivery.',
    track: 'A',
  },
  {
    id: 'T3',
    name: 'Micro Tool Build',
    price: '$500–$1,200',
    description: 'A single-function tool or app built and deployed in one week.',
    track: 'A',
  },
  {
    id: 'T4',
    name: 'AI Retainer',
    price: '$597/mo',
    description: 'Monthly AI support, new prompts, team training, and async help.',
    track: 'A',
  },
  {
    id: 'T5',
    name: 'Strategy Session',
    price: '$297–$500',
    description: '90-minute idea architecture session with a business model doc and roadmap.',
    track: 'B',
  },
  {
    id: 'T6',
    name: 'Founder Build Sprint',
    price: '$2,500–$6,000',
    description: 'Idea to working MVP in 2 weeks — model, brand, product, and launch.',
    track: 'B',
  },
  {
    id: 'T7',
    name: 'Venture Launch Package',
    price: '$8,000–$15,000',
    description: 'Full venture build — strategy, complete tech stack, and launch execution.',
    track: 'Both',
  },
]

const trackStyles = {
  A: {
    badge: 'Track A',
    badgeBg: 'rgba(26,74,122,0.08)',
    badgeColor: '#1A4A7A',
    isNavy: false,
  },
  B: {
    badge: 'Track B',
    badgeBg: 'rgba(249,115,22,0.08)',
    badgeColor: '#F97316',
    isNavy: false,
  },
  Both: {
    badge: 'Both Tracks',
    badgeBg: 'rgba(232,197,71,0.15)',
    badgeColor: '#E8C547',
    isNavy: true,
  },
}

export default function ServicesPreview() {
  return (
    <section className="py-24 bg-white" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2
            id="services-heading"
            className="text-[clamp(28px,4vw,44px)] text-[#0C0C0C] mb-4"
            style={{ fontFamily: 'var(--font-anton)' }}
          >
            WHAT WE OFFER
          </h2>
          <p className="text-[#888580] text-lg max-w-2xl mx-auto">
            Seven service tiers across two tracks — built for where you are and where you&apos;re going.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {tiers.map((tier) => {
            const style = trackStyles[tier.track]
            const { isNavy } = style
            return (
              <div
                key={tier.id}
                className={`rounded-xl p-6 border flex flex-col ${
                  isNavy ? 'bg-[#1A1A2E] border-[#1A1A2E]' : 'bg-white border-[#E2DED8]'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-xs font-bold tracking-widest"
                    style={{ fontFamily: 'var(--font-mono)', color: isNavy ? '#E8C547' : '#888580' }}
                  >
                    {tier.id}
                  </span>
                  <span
                    className="text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full"
                    style={{ background: style.badgeBg, color: style.badgeColor }}
                  >
                    {style.badge}
                  </span>
                </div>

                <h3
                  className={`text-lg mb-1 ${isNavy ? 'text-white' : 'text-[#0C0C0C]'}`}
                  style={{ fontFamily: 'var(--font-anton)' }}
                >
                  {tier.name}
                </h3>

                <p
                  className="text-xl font-semibold mb-3"
                  style={{ color: isNavy ? '#E8C547' : '#1A1A2E' }}
                >
                  {tier.price}
                </p>

                <p className={`text-sm leading-relaxed flex-1 ${isNavy ? 'text-white/60' : 'text-[#888580]'}`}>
                  {tier.description}
                </p>

                <Link
                  href="/services"
                  className={`mt-5 text-sm font-semibold transition-colors ${
                    isNavy ? 'text-[#E8C547] hover:text-white' : 'text-[#1A1A2E] hover:text-[#1A4A7A]'
                  }`}
                >
                  Learn more →
                </Link>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-[#1A1A2E] hover:bg-[#0f0f1a] text-[#F6F4EF] font-semibold px-8 py-3.5 rounded-xl transition-all duration-200"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}
