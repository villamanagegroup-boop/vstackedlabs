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

const bbSteps = [
  {
    number: '01',
    label: 'Collect',
    description:
      'We gather all your operational docs — handbooks, SOPs, menus, forms, vendor contacts, and training guides.',
  },
  {
    number: '02',
    label: 'Build',
    description:
      "We build your custom private AI assistant, trained only on your business's knowledge.",
  },
  {
    number: '03',
    label: 'Deploy',
    description:
      'Your team gets a simple chat link — no installs, no logins, no learning curve.',
  },
  {
    number: '04',
    label: 'Maintain',
    description:
      'We review and update your AI monthly to keep it accurate as your business evolves.',
  },
]

const bbNiches = [
  {
    industry: 'Restaurants',
    pain: 'Staff always asking about allergens, specials, and prep procedures.',
    solution: 'Instant answers from your own menu and kitchen SOPs.',
  },
  {
    industry: 'Gyms',
    pain: 'Members and staff asking about class schedules, memberships, and policies.',
    solution: '24/7 knowledge base for front desk and floor staff.',
  },
  {
    industry: 'Salons & Spas',
    pain: 'Inconsistent service info, pricing confusion, and booking questions.',
    solution: 'One source of truth for services, pricing, and protocols.',
  },
  {
    industry: 'Retail Stores',
    pain: 'Product questions, return policies, and vendor info scattered across docs.',
    solution: 'Staff gets answers in seconds, not after hunting through binders.',
  },
  {
    industry: 'Hotels',
    pain: 'Guest services, amenities, and local info spread across staff inboxes.',
    solution: 'A concierge-grade AI your front desk can actually trust.',
  },
  {
    industry: 'Medical & Dental Offices',
    pain: 'Compliance docs, intake forms, and billing FAQs buried in folders.',
    solution: 'Fast, accurate answers for staff without touching patient records.',
  },
]

const bbPricing = [
  {
    name: 'Starter',
    setup: '$500',
    monthly: '$149/mo',
    popular: false,
    bestFor: 'Small teams with a single location and a core set of docs.',
  },
  {
    name: 'Pro',
    setup: '$1,500',
    monthly: '$349/mo',
    popular: true,
    bestFor: 'Growing businesses with multiple departments or locations.',
  },
  {
    name: 'Enterprise',
    setup: '$3,000+',
    monthly: '$600+/mo',
    popular: false,
    bestFor: 'Multi-location operations needing advanced customization and SLAs.',
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

        {/* ── Business Brain ── */}
        <div id="business-brain" aria-label="Business Brain product section">

          {/* Hero strip */}
          <section className="py-20 bg-[#1A1A2E]" aria-labelledby="bb-hero-heading">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] px-3 py-1.5 rounded-full bg-[#E8C547] text-[#1A1A2E] mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1A1A2E]" />
                  New Product
                </div>
                <h2 id="bb-hero-heading" className="text-[clamp(36px,5vw,64px)] text-white leading-[1.0] mb-5">
                  Your staff. Smarter. 24/7.
                </h2>
                <p className="text-white/60 text-xl leading-relaxed mb-8 max-w-2xl">
                  We collect your operational docs and build a custom private AI your team can query around the clock — no training required.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-[#E8C547] hover:bg-[#d4b03d] text-[#1A1A2E] font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 hover:scale-[1.02] min-h-[44px]"
                  >
                    Get Your Brain Built
                  </Link>
                  <a
                    href="#bb-how-it-works"
                    className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 min-h-[44px]"
                  >
                    See How It Works
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section id="bb-how-it-works" className="py-20 bg-white" aria-labelledby="bb-hiw-heading">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-10">
                <p className="text-[#888580] text-xs font-semibold uppercase tracking-[0.12em] mb-4">
                  How It Works
                </p>
                <h2 id="bb-hiw-heading" className="text-[clamp(24px,3vw,36px)] text-[#1A1A2E] leading-tight mb-2">
                  Four steps. One smart system.
                </h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {bbSteps.map((step) => (
                  <div
                    key={step.number}
                    className="bg-white rounded-2xl p-6 border border-[#E2DED8] flex flex-col gap-3"
                  >
                    <span className="text-[#E8C547] text-3xl font-[family-name:var(--font-anton)] leading-none">
                      {step.number}
                    </span>
                    <h3 className="text-lg text-[#1A1A2E] leading-tight">{step.label}</h3>
                    <p className="text-[#888580] text-sm leading-relaxed">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Who It's For */}
          <section className="py-20 bg-[#F6F4EF]" aria-labelledby="bb-niches-heading">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-10">
                <p className="text-[#888580] text-xs font-semibold uppercase tracking-[0.12em] mb-4">
                  Industries We Serve
                </p>
                <h2 id="bb-niches-heading" className="text-[clamp(24px,3vw,36px)] text-[#1A1A2E] leading-tight mb-2">
                  Built for businesses with real operational complexity.
                </h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {bbNiches.map((niche) => (
                  <div
                    key={niche.industry}
                    className="bg-white rounded-2xl p-6 border border-[#E2DED8] flex flex-col gap-3"
                  >
                    <h3 className="text-lg text-[#1A1A2E] leading-tight">{niche.industry}</h3>
                    <p className="text-[#888580] text-sm leading-relaxed">{niche.pain}</p>
                    <p className="text-[#1A4A7A] text-sm font-medium">{niche.solution}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing */}
          <section className="py-20 bg-white" aria-labelledby="bb-pricing-heading">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-10">
                <p className="text-[#888580] text-xs font-semibold uppercase tracking-[0.12em] mb-4">
                  Pricing
                </p>
                <h2 id="bb-pricing-heading" className="text-[clamp(24px,3vw,36px)] text-[#1A1A2E] leading-tight mb-2">
                  Simple, transparent pricing.
                </h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {bbPricing.map((tier) => (
                  <div
                    key={tier.name}
                    className={`relative bg-white rounded-2xl p-8 border flex flex-col gap-5 ${
                      tier.popular
                        ? 'border-[#1A1A2E] shadow-[0_0_0_1px_#1A1A2E]'
                        : 'border-[#E2DED8]'
                    }`}
                  >
                    {tier.popular && (
                      <div className="absolute -top-3.5 left-8">
                        <span className="bg-[#1A1A2E] text-[#E8C547] text-xs font-semibold px-4 py-1 rounded-full">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <div className={tier.popular ? 'mt-2' : ''}>
                      <h3 className="text-2xl text-[#1A1A2E] leading-tight mb-1">{tier.name}</h3>
                      <p className="text-3xl font-bold text-[#1A1A2E] mb-1 font-[family-name:var(--font-instrument-sans)]">
                        {tier.setup} <span className="text-base font-normal text-[#888580]">setup</span>
                      </p>
                      <p className="text-[#888580] text-sm">{tier.monthly}</p>
                    </div>
                    <p className="text-[#1A4A7A] text-xs font-medium">Best for: {tier.bestFor}</p>
                    <div className="flex-1" />
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center bg-[#1A1A2E] hover:bg-[#E8C547] text-white hover:text-[#1A1A2E] font-semibold py-3 px-6 rounded-xl transition-all duration-200 hover:scale-[1.02] min-h-[44px] text-sm"
                    >
                      Get Started
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA strip */}
          <section className="py-16 bg-[#E8C547]" aria-labelledby="bb-cta-heading">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 id="bb-cta-heading" className="text-[clamp(28px,4vw,48px)] text-[#1A1A2E] leading-[1.1] mb-4">
                Ready to build your Business Brain?
              </h2>
              <p className="text-[#1A1A2E]/60 text-lg mb-8">
                Book a free call and we&apos;ll scope your system in 20 minutes.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[#1A1A2E] hover:bg-[#0d0d1e] text-white font-bold px-8 py-4 rounded-xl text-base transition-all duration-200 hover:scale-[1.02] min-h-[44px]"
              >
                Get Your Brain Built
              </Link>
            </div>
          </section>

        </div>
        {/* ── End Business Brain ── */}

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
