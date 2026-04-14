import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

const tiers = [
  {
    tier: 'T1',
    track: 'A',
    name: 'AI Quick Setup',
    price: 'Starting at $297',
    contactSales: false,
    turnaround: '3–5 days',
    bestFor: 'Business owners taking their first AI step',
    includes: ['Custom Claude prompt library', '1 workflow automation', 'Orientation call', 'Drive folder delivery'],
    cta: 'Get Started',
    accentColor: '#1A4A7A',
    accentLight: '#EEF4FB',
  },
  {
    tier: 'T2',
    track: 'A',
    name: 'AI Business Build-Out',
    price: 'Starting at $797',
    contactSales: false,
    turnaround: '1–2 weeks',
    bestFor: 'Business owners ready for a full AI system',
    includes: ['AI system across 3 workflows', '2 strategy calls', 'Prompt library + SOP docs', 'Drive folder delivery'],
    cta: 'Get Started',
    accentColor: '#1A4A7A',
    accentLight: '#EEF4FB',
  },
  {
    tier: 'T3',
    track: 'A',
    name: 'Micro Tool Build',
    price: 'Starting at $500',
    contactSales: false,
    turnaround: '1 week',
    bestFor: 'Businesses that need a specific tool built fast',
    includes: ['Single-function tool or app', 'Mobile responsive', 'Deployed in 1 week', 'Full handoff + docs'],
    cta: 'Get Started',
    accentColor: '#1A4A7A',
    accentLight: '#EEF4FB',
  },
  {
    tier: 'T4',
    track: 'A',
    name: 'AI Retainer',
    price: '',
    contactSales: true,
    turnaround: 'Ongoing',
    bestFor: 'Business owners who want consistent AI support',
    includes: ['Monthly workflow updates', '5–10 new prompts/month', 'Team training (async)', 'Priority email support'],
    cta: 'Contact Sales Team',
    accentColor: '#1A4A7A',
    accentLight: '#EEF4FB',
    popular: true,
  },
  {
    tier: 'T5',
    track: 'B',
    name: 'Strategy Session',
    price: 'Starting at $297',
    contactSales: false,
    turnaround: 'Book within 48 hours',
    bestFor: 'Founders with an idea to stress-test',
    includes: ['90-min architecture session', 'Business model document', 'Concept validation', 'Product roadmap'],
    cta: 'Book a Session',
    accentColor: '#F97316',
    accentLight: '#FFF4ED',
  },
  {
    tier: 'T6',
    track: 'B',
    name: 'Founder Build Sprint',
    price: 'Starting at $2,500',
    contactSales: false,
    turnaround: '2 weeks',
    bestFor: 'Founders ready to go from idea to working MVP',
    includes: ['Business model + brand', 'Working MVP built & deployed', 'Launch strategy', '30-day post-launch support'],
    cta: 'Start a Sprint',
    accentColor: '#F97316',
    accentLight: '#FFF4ED',
    popular: true,
  },
  {
    tier: 'T7',
    track: 'Both',
    name: 'Venture Launch Package',
    price: '',
    contactSales: true,
    turnaround: '4–8 weeks',
    bestFor: 'Clients ready to build and launch a full venture',
    includes: ['Full strategy & business model', 'Complete tech stack build', 'Brand + product + launch', '1 month retainer included'],
    cta: 'Contact Sales Team',
    accentColor: '#0C0C0C',
    accentLight: '#F6F4EF',
    flagship: true,
  },
]

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="shrink-0 mt-0.5">
    <path d="M2 7l3.5 3.5 6.5-6.5" stroke="#0C0C0C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#F6F4EF]">
        {/* Hero */}
        <section className="pt-32 pb-16 bg-white border-b border-[#E2DED8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-[#888580] text-xs font-semibold uppercase tracking-[0.12em] mb-4">Pricing</p>
            <h1 className="text-[clamp(40px,6vw,72px)] text-[#0C0C0C] leading-[1.0] mb-6">
              Simple, transparent pricing.
            </h1>
            <p className="text-[#888580] text-xl leading-relaxed max-w-2xl mx-auto mb-6">
              Seven tiers across two tracks. No retainer traps, no hidden fees, no surprises. Just the right tier for where you are right now.
            </p>
            <p className="text-[#888580] text-sm max-w-xl mx-auto mb-8 leading-relaxed">
              <span className="font-semibold text-[#0C0C0C]">Base pricing starts at $297.</span>{' '}
              Final project cost may vary depending on scope, complexity, and custom feature requirements. All pricing is confirmed before any work begins.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#E8C547] hover:bg-[#d4b03d] text-[#0C0C0C] font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 hover:scale-[1.02] min-h-[44px]"
              >
                Book a Free Call
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 border-2 border-[#0C0C0C] text-[#0C0C0C] hover:bg-[#0C0C0C] hover:text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 min-h-[44px]"
              >
                Full Service Details
              </Link>
            </div>
          </div>
        </section>

        {/* Track comparison */}
        <section className="py-8 bg-white border-b border-[#E2DED8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-[#EEF4FB] border border-[#1A4A7A]/20">
                <span className="w-2 h-2 rounded-full bg-[#1A4A7A] shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-[#1A4A7A] text-sm font-semibold">Track A — Business Owners</p>
                  <p className="text-[#888580] text-xs">T1, T2, T3, T4 — AI setup, automation, tools, retainers</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-[#FFF4ED] border border-[#F97316]/20">
                <span className="w-2 h-2 rounded-full bg-[#F97316] shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-[#F97316] text-sm font-semibold">Track B — Founders</p>
                  <p className="text-[#888580] text-xs">T5, T6, T7 — strategy sessions, build sprints, venture launches</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* T1–T4 */}
            <div className="mb-14">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-xs font-semibold uppercase tracking-[0.1em] text-[#1A4A7A]">Track A — Business Owners</span>
                <div className="flex-1 h-px bg-[#E2DED8]" aria-hidden="true" />
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {tiers.filter(t => t.track === 'A').map((tier) => (
                  <PricingCard key={tier.tier} tier={tier} />
                ))}
              </div>
            </div>

            {/* T5–T6 */}
            <div className="mb-14">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-xs font-semibold uppercase tracking-[0.1em] text-[#F97316]">Track B — Founders</span>
                <div className="flex-1 h-px bg-[#E2DED8]" aria-hidden="true" />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                {tiers.filter(t => t.track === 'B').map((tier) => (
                  <PricingCard key={tier.tier} tier={tier} />
                ))}
              </div>
            </div>

            {/* T7 — flagship */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <span className="text-xs font-semibold uppercase tracking-[0.1em] text-[#0C0C0C]">Both Tracks</span>
                <div className="flex-1 h-px bg-[#E2DED8]" aria-hidden="true" />
              </div>
              {tiers.filter(t => t.track === 'Both').map((tier) => (
                <div
                  key={tier.tier}
                  className="bg-[#0C0C0C] rounded-2xl p-8 md:p-10 grid md:grid-cols-2 gap-8 items-center"
                >
                  <div>
                    <div className="inline-flex items-center gap-2 bg-[#E8C547]/20 text-[#E8C547] text-xs font-semibold uppercase tracking-[0.1em] px-3 py-1.5 rounded-full mb-5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E8C547]" />
                      {tier.tier} — Both Tracks
                    </div>
                    <h2 className="text-[clamp(28px,3.5vw,44px)] text-white leading-tight mb-3">{tier.name}</h2>
                    <p className="text-xl font-semibold text-[#E8C547] mb-3 font-[family-name:var(--font-instrument-sans)]">
                      Contact Sales Team
                    </p>
                    <p className="text-white/60 text-sm mb-1">Turnaround: <span className="text-white font-medium">{tier.turnaround}</span></p>
                    <p className="text-white/60 text-sm">Best for: <span className="text-white font-medium">{tier.bestFor}</span></p>
                  </div>
                  <div className="flex flex-col gap-6">
                    <ul className="flex flex-col gap-3" role="list">
                      {tier.includes.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-white/80">
                          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true" className="shrink-0 mt-0.5">
                            <path d="M2.5 7.5l3.5 3.5 6.5-7" stroke="#E8C547" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center bg-[#E8C547] hover:bg-[#d4b03d] text-[#0C0C0C] font-bold py-3.5 px-7 rounded-xl transition-all duration-200 hover:scale-[1.02] min-h-[44px]"
                    >
                      {tier.cta}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ strip */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-[clamp(24px,3.5vw,40px)] text-[#0C0C0C] leading-tight mb-10 text-center">
              Common questions
            </h2>
            <div className="flex flex-col gap-6">
              {[
                {
                  q: 'Do you offer payment plans?',
                  a: 'Yes. For projects over $1,000, we offer a 50% deposit + 50% on delivery split. For retainers and larger packages, we can discuss a custom payment structure.',
                },
                {
                  q: "What if I'm not sure which tier is right?",
                  a: 'Book a free discovery call. We\'ll listen to what you need, ask the right questions, and recommend the right tier — or tell you honestly if we\'re not the right fit.',
                },
                {
                  q: 'Can I upgrade from one tier to another?',
                  a: 'Absolutely. Many clients start with T1 or T3 and grow into a retainer or full build. Credit from previous tiers is applied where applicable.',
                },
                {
                  q: 'What do turnaround times include?',
                  a: 'Turnaround is from signed agreement + deposit received to delivery. It does not include revision rounds, which are scoped per project.',
                },
              ].map((faq) => (
                <div key={faq.q} className="border-b border-[#E2DED8] pb-6">
                  <h3 className="text-base text-[#0C0C0C] mb-2">{faq.q}</h3>
                  <p className="text-[#888580] text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#0C0C0C]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-[clamp(28px,4vw,48px)] text-white leading-[1.1] mb-4">
              Not sure which tier fits?
            </h2>
            <p className="text-white/60 text-lg mb-8">
              Book a free 20-minute call and we&apos;ll figure it out together.
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

function PricingCard({ tier }: { tier: typeof tiers[0] }) {
  return (
    <div
      className={`relative bg-white rounded-2xl p-7 border flex flex-col gap-4 ${
        tier.popular
          ? tier.accentColor === '#1A4A7A'
            ? 'border-[#1A4A7A] shadow-[0_0_0_1px_#1A4A7A]'
            : 'border-[#F97316] shadow-[0_0_0_1px_#F97316]'
          : 'border-[#E2DED8]'
      }`}
    >
      {tier.popular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span
            className="text-white text-xs font-semibold px-4 py-1 rounded-full whitespace-nowrap"
            style={{ background: tier.accentColor }}
          >
            Most Popular
          </span>
        </div>
      )}

      <div className={`flex items-center justify-between ${tier.popular ? 'mt-2' : ''}`}>
        <span
          className="text-[10px] font-bold uppercase tracking-[0.12em] px-2 py-0.5 rounded"
          style={{ background: tier.accentLight, color: tier.accentColor }}
        >
          {tier.tier}
        </span>
        <span className="text-[#888580] text-xs">{tier.turnaround}</span>
      </div>

      <div>
        <h3 className="text-lg text-[#0C0C0C] leading-tight mb-1">{tier.name}</h3>
        {tier.contactSales ? (
          <p className="text-base font-semibold font-[family-name:var(--font-instrument-sans)]" style={{ color: tier.accentColor }}>
            Contact Sales Team
          </p>
        ) : (
          <p className="text-2xl font-bold text-[#0C0C0C] font-[family-name:var(--font-instrument-sans)]">{tier.price}</p>
        )}
      </div>

      <p className="text-[#888580] text-xs">Best for: {tier.bestFor}</p>

      <ul className="flex flex-col gap-2 flex-1" role="list">
        {tier.includes.map((item) => (
          <li key={item} className="flex items-start gap-2 text-xs text-[#0C0C0C]">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="shrink-0 mt-0.5">
              <path d="M2 7l3.5 3.5 6.5-6.5" stroke="#0C0C0C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {item}
          </li>
        ))}
      </ul>

      <Link
        href="/contact"
        className="inline-flex items-center justify-center bg-[#0C0C0C] hover:bg-[#E8C547] text-white hover:text-[#0C0C0C] font-semibold py-3 px-5 rounded-xl transition-all duration-200 hover:scale-[1.02] min-h-[44px] text-sm mt-2"
      >
        {tier.cta}
      </Link>
    </div>
  )
}
