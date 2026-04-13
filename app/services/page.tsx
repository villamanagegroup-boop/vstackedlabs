import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

const CheckIcon = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true" className="shrink-0 mt-0.5">
    <path d="M2.5 7.5l3.5 3.5 6.5-7" stroke="#1A1A2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const trackA = [
  {
    tier: 'T1',
    name: 'AI Quick Setup',
    price: 'Starting at $297',
    contactSales: false,
    turnaround: '3–5 business days',
    bestFor: 'Business owners taking their first AI step',
    description:
      'A custom Claude prompt library built around your business, one automated workflow, and an orientation call so you know exactly how to use everything.',
    includes: [
      'Custom Claude prompt library (10–15 prompts)',
      '1 workflow automation build',
      '1-hour orientation & training call',
      'Google Drive folder delivery',
      'Email support for 7 days post-delivery',
    ],
  },
  {
    tier: 'T2',
    name: 'AI Business Build-Out',
    price: 'Starting at $797',
    contactSales: false,
    turnaround: '1–2 weeks',
    bestFor: 'Business owners ready for a full AI system',
    description:
      'A comprehensive AI system built across three workflows, with two strategy calls to align everything with how you actually run your business.',
    includes: [
      'Full AI system across 3 workflows',
      '2 strategy calls included',
      'Prompt library (20–30 prompts)',
      'SOP documentation for each workflow',
      'Google Drive folder delivery',
      '14-day email support',
    ],
  },
  {
    tier: 'T3',
    name: 'Micro Tool Build',
    price: 'Starting at $500',
    contactSales: false,
    turnaround: '1 week',
    bestFor: 'Businesses that need a specific tool built fast',
    description:
      'A single-function app or tool — built, tested, deployed, and in your hands in one week. Calculators, intake forms, dashboards, booking tools, and more.',
    includes: [
      'Single-function tool or app',
      'Mobile responsive design',
      'Built & deployed in 1 week',
      'Full source code handoff',
      'Documentation & how-to guide',
    ],
  },
  {
    tier: 'T4',
    name: 'AI Retainer',
    price: '',
    contactSales: true,
    turnaround: 'Ongoing',
    bestFor: 'Business owners who want AI support every month',
    description:
      'Your AI system doesn\'t stop growing — and neither does your support. Every month includes new prompts, workflow updates, team training, and async help.',
    includes: [
      'Monthly workflow updates & optimization',
      'New prompt development (5–10/month)',
      'Team training sessions (async)',
      'Priority async support via email',
      'Monthly check-in call (optional)',
    ],
    popular: true,
  },
]

const trackB = [
  {
    tier: 'T5',
    name: 'Strategy Session',
    price: 'Starting at $297',
    contactSales: false,
    turnaround: 'Book within 48 hours',
    bestFor: 'Founders with an idea ready to be stress-tested',
    description:
      'A 90-minute working session to architect your idea. Walk away with a clear business model, validated concept, competitive positioning, and a product roadmap you can act on immediately.',
    includes: [
      '90-minute idea architecture session',
      'Business model document (delivered after)',
      'Concept validation framework',
      'Competitive landscape analysis',
      'Product roadmap (phases 1–3)',
    ],
  },
  {
    tier: 'T6',
    name: 'Founder Build Sprint',
    price: 'Starting at $2,500',
    contactSales: false,
    turnaround: '2 weeks',
    bestFor: 'Founders ready to go from idea to working MVP',
    description:
      'Two weeks. Idea to working product. We handle the business model, brand direction, product build, and launch — you show up ready to sell.',
    includes: [
      'Business model & positioning',
      'Brand direction & visual identity',
      'Working MVP build & deployment',
      'Launch strategy & messaging',
      '2-week check-in calls (3x)',
      '30-day post-launch support',
    ],
    popular: true,
  },
  {
    tier: 'T7',
    name: 'Venture Launch Package',
    price: '',
    contactSales: true,
    turnaround: '4–8 weeks',
    bestFor: 'Business owners & founders ready to go all-in',
    description:
      'The full venture build — strategy, complete tech stack, brand, product, and launch execution. This is for clients who are serious about building something that lasts.',
    includes: [
      'Full strategy & business model development',
      'Complete tech stack architecture & build',
      'Brand identity (logo, colors, type, copy)',
      'Product development & deployment',
      'Launch strategy & execution',
      'Post-launch retainer (1 month included)',
    ],
    both: true,
  },
]

const addOns = [
  { name: 'Extra Workflow', price: '+$150', description: 'Add an additional AI workflow to any T1 or T2 package.' },
  { name: 'Rush Delivery', price: '+$200', description: 'Priority build for Micro Tool builds — delivered in 3 business days.' },
  { name: 'Team Training Session', price: '$150/session', description: 'A 60-minute live training session for your team on AI tools & workflows.' },
  { name: 'Brand Identity Add-On', price: '$500', description: 'Logo, color palette, and typography system for any Founder track build.' },
  { name: 'SEO Setup', price: '$300', description: 'Technical SEO, metadata, and sitemap setup for any web build.' },
  { name: 'Monthly Analytics Report', price: '$100/mo', description: 'Monthly traffic and performance report for any deployed product.' },
]

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#F6F4EF]">
        {/* Hero */}
        <section className="pt-32 pb-16 border-b border-[#E2DED8] bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-[#888580] text-xs font-semibold uppercase tracking-[0.12em] mb-4">
                Services
              </p>
              <h1 className="text-[clamp(40px,6vw,72px)] text-[#1A1A2E] leading-[1.0] mb-6">
                Every tier is built to match your budget and scope.
              </h1>
              <p className="text-[#888580] text-xl leading-relaxed mb-8 max-w-2xl">
                We serve two tracks — business owners who want AI in their operations, and founders who want to build and launch something new. Choose your path.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#E8C547] hover:bg-[#d4b03d] text-[#1A1A2E] font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 hover:scale-[1.02] min-h-[44px]"
                >
                  Book a Free Call
                </Link>
                <a
                  href="#track-a"
                  className="inline-flex items-center gap-2 border-2 border-[#1A1A2E] text-[#1A1A2E] hover:bg-[#1A1A2E] hover:text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 min-h-[44px]"
                >
                  View Tiers
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Track A */}
        <section id="track-a" className="py-20" aria-labelledby="track-a-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-10">
              <div
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] px-3 py-1.5 rounded-full"
                style={{ background: '#EEF4FB', color: '#1A4A7A' }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#1A4A7A]" />
                Track A — Business Owners
              </div>
              <div className="flex-1 h-px bg-[#E2DED8]" aria-hidden="true" />
            </div>

            <div className="mb-8">
              <h2 id="business-owners" className="text-[clamp(24px,3vw,36px)] text-[#1A1A2E] leading-tight mb-2">
                AI setup, automation &amp; tools for your business
              </h2>
              <p className="text-[#888580] text-lg">
                You don&apos;t need to rebuild everything. You need the right layer of AI on top of what you already have.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {trackA.map((svc) => (
                <div
                  key={svc.tier}
                  className={`relative bg-white rounded-2xl p-8 border flex flex-col gap-5 ${
                    svc.popular
                      ? 'border-[#1A1A2E] shadow-[0_0_0_1px_#1A1A2E]'
                      : 'border-[#E2DED8]'
                  }`}
                >
                  {svc.popular && (
                    <div className="absolute -top-3.5 left-8">
                      <span className="bg-[#1A1A2E] text-[#E8C547] text-xs font-semibold px-4 py-1 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className={`flex items-start justify-between ${svc.popular ? 'mt-2' : ''}`}>
                    <span className="text-[10px] font-bold uppercase tracking-[0.12em] px-2 py-0.5 rounded bg-[#EEF4FB] text-[#1A4A7A]">
                      {svc.tier}
                    </span>
                    <span className="text-[#888580] text-xs">{svc.turnaround}</span>
                  </div>

                  <div>
                    <h3 className="text-2xl text-[#1A1A2E] leading-tight mb-1">{svc.name}</h3>
                    {svc.contactSales ? (
                      <p className="text-lg font-semibold text-[#1A4A7A] mb-1 font-[family-name:var(--font-instrument-sans)]">Contact Sales Team</p>
                    ) : (
                      <p className="text-3xl font-bold text-[#1A1A2E] mb-1 font-[family-name:var(--font-instrument-sans)]">{svc.price}</p>
                    )}
                    <p className="text-[#1A4A7A] text-xs font-medium">Best for: {svc.bestFor}</p>
                  </div>

                  <p className="text-[#888580] text-sm leading-relaxed">{svc.description}</p>

                  <ul className="flex flex-col gap-2.5 flex-1" role="list">
                    {svc.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-[#1A1A2E]">
                        <CheckIcon />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center bg-[#1A1A2E] hover:bg-[#E8C547] text-white hover:text-[#1A1A2E] font-semibold py-3 px-6 rounded-xl transition-all duration-200 hover:scale-[1.02] min-h-[44px] text-sm"
                  >
                    {svc.contactSales ? 'Contact Sales Team' : 'Get Started'}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Track B */}
        <section id="track-b" className="py-20 bg-white" aria-labelledby="track-b-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-10">
              <div
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] px-3 py-1.5 rounded-full"
                style={{ background: '#FFF4ED', color: '#F97316' }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#F97316]" />
                Track B — Founders
              </div>
              <div className="flex-1 h-px bg-[#E2DED8]" aria-hidden="true" />
            </div>

            <div className="mb-8">
              <h2 id="founders" className="text-[clamp(24px,3vw,36px)] text-[#1A1A2E] leading-tight mb-2">
                Strategy, sprints &amp; venture launches
              </h2>
              <p className="text-[#888580] text-lg">
                From the first idea to the first customer — we help founders build and launch the right way.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {trackB.map((svc) => (
                <div
                  key={svc.tier}
                  className={`relative bg-[#F6F4EF] rounded-2xl p-8 border flex flex-col gap-5 ${
                    svc.popular
                      ? 'border-[#F97316] shadow-[0_0_0_1px_#F97316]'
                      : 'border-[#E2DED8]'
                  }`}
                >
                  {svc.popular && (
                    <div className="absolute -top-3.5 left-8">
                      <span className="bg-[#F97316] text-white text-xs font-semibold px-4 py-1 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  {svc.both && (
                    <div className="absolute -top-3.5 left-8">
                      <span className="bg-[#1A1A2E] text-[#E8C547] text-xs font-semibold px-4 py-1 rounded-full whitespace-nowrap">
                        Both Tracks
                      </span>
                    </div>
                  )}

                  <div className={`flex items-start justify-between ${svc.popular || svc.both ? 'mt-2' : ''}`}>
                    <span className="text-[10px] font-bold uppercase tracking-[0.12em] px-2 py-0.5 rounded bg-[#FFF4ED] text-[#F97316]">
                      {svc.tier}
                    </span>
                    <span className="text-[#888580] text-xs">{svc.turnaround}</span>
                  </div>

                  <div>
                    <h3 className="text-2xl text-[#1A1A2E] leading-tight mb-1">{svc.name}</h3>
                    {svc.contactSales ? (
                      <p className="text-lg font-semibold text-[#F97316] mb-1 font-[family-name:var(--font-instrument-sans)]">Contact Sales Team</p>
                    ) : (
                      <p className="text-3xl font-bold text-[#1A1A2E] mb-1 font-[family-name:var(--font-instrument-sans)]">{svc.price}</p>
                    )}
                    <p className="text-[#F97316] text-xs font-medium">Best for: {svc.bestFor}</p>
                  </div>

                  <p className="text-[#888580] text-sm leading-relaxed">{svc.description}</p>

                  <ul className="flex flex-col gap-2.5 flex-1" role="list">
                    {svc.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-[#1A1A2E]">
                        <CheckIcon />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center bg-[#1A1A2E] hover:bg-[#E8C547] text-white hover:text-[#1A1A2E] font-semibold py-3 px-6 rounded-xl transition-all duration-200 hover:scale-[1.02] min-h-[44px] text-sm"
                  >
                    {svc.contactSales ? 'Contact Sales Team' : svc.tier === 'T5' ? 'Book a Session' : 'Start a Sprint'}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Add-ons */}
        <section className="py-20" aria-labelledby="addons-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <p className="text-[#888580] text-xs font-semibold uppercase tracking-[0.12em] mb-4">Add-Ons</p>
              <h2 id="addons-heading" className="text-[clamp(24px,3vw,36px)] text-[#1A1A2E] leading-tight mb-2">
                Extend any package
              </h2>
              <p className="text-[#888580] text-lg">Available with any Track A or Track B service.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {addOns.map((addon) => (
                <div
                  key={addon.name}
                  className="bg-white rounded-2xl p-6 border border-[#E2DED8] flex flex-col gap-2"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-base text-[#1A1A2E] leading-tight">{addon.name}</h3>
                    <span className="text-[#E8C547] font-bold text-sm shrink-0 font-[family-name:var(--font-instrument-sans)]">
                      {addon.price}
                    </span>
                  </div>
                  <p className="text-[#888580] text-sm leading-relaxed">{addon.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16 bg-[#1A1A2E]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-[clamp(28px,4vw,48px)] text-white leading-[1.1] mb-4">
              Not sure which tier fits?
            </h2>
            <p className="text-white/60 text-lg mb-8">
              Book a free 20-minute call and we&apos;ll figure it out together.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[#E8C547] hover:bg-[#d4b03d] text-[#1A1A2E] font-bold px-8 py-4 rounded-xl text-base transition-all duration-200 hover:scale-[1.02] min-h-[44px]"
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
