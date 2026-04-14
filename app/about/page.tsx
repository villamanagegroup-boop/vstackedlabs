import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

const values = [
  {
    title: 'Craft over shortcuts',
    description:
      'AI makes us faster — but it doesn\'t replace judgment. Every deliverable is reviewed, refined, and held to a standard we\'d put our name on.',
  },
  {
    title: 'Clarity over complexity',
    description:
      'We don\'t build to impress. We build what works. Simple systems that your team can actually use, understand, and grow with.',
  },
  {
    title: 'Strategy before code',
    description:
      'A great product built on a weak model still fails. We always start with why before we touch a line of code.',
  },
  {
    title: 'Speed without chaos',
    description:
      'Two-week sprints. Same-day proposals. AI-assisted builds. We move fast because we\'ve built the process to support it — not because we\'re cutting corners.',
  },
]

const stack = [
  { category: 'Frontend', items: ['Next.js (App Router)', 'React 19', 'Tailwind CSS v4', 'Framer Motion'] },
  { category: 'Backend & Database', items: ['Supabase (Postgres + Auth + RLS)', 'Next.js Server Actions', 'Vercel Edge Functions'] },
  { category: 'AI & Automation', items: ['Claude API (Anthropic)', 'Claude prompt engineering', 'n8n / Zapier workflows', 'Custom AI agents'] },
  { category: 'Payments & Email', items: ['Stripe Checkout', 'Resend (transactional email)', 'Calendly (scheduling)'] },
  { category: 'Deployment', items: ['Vercel (primary)', 'Custom domains', 'CI/CD via GitHub Actions'] },
]


export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#F6F4EF]">
        {/* Hero */}
        <section className="pt-32 pb-20 bg-white border-b border-[#E2DED8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <p className="text-[#888580] text-xs font-semibold uppercase tracking-[0.12em] mb-4">
                  About
                </p>
                <h1 className="text-[clamp(40px,6vw,72px)] text-[#0C0C0C] leading-[1.0] mb-6">
                  Build Lab. Venture Studio. Powered by AI.
                </h1>
                <p className="text-[#888580] text-xl leading-relaxed mb-8">
                  Stackd Studios AI is an AI-powered Build Lab &amp; Creative Venture Studio helping business owners and founders design, build, and launch intelligent systems — so they can operate smarter, move faster, and build something that lasts.
                </p>
                <p className="text-[#888580] text-lg leading-relaxed">
                  We work in two tracks: AI systems and tools for business owners, and strategy + venture builds for founders. Every project is grounded in craft, strategy, and a genuine belief that the right technology — built thoughtfully — changes businesses.
                </p>
              </div>

              {/* Founder card */}
              <div className="bg-[#0C0C0C] rounded-2xl p-6 sm:p-8 flex flex-col gap-5">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-[#E8C547] flex items-center justify-center text-[#0C0C0C] text-2xl font-bold">
                    CH
                  </div>
                  <div>
                    <h2 className="text-white text-xl leading-tight">Chanel Gray</h2>
                    <p className="text-[#E8C547] text-sm font-medium">Founder &amp; CEO</p>
                    <p className="text-[#888580] text-sm">United States</p>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-5">
                  <p className="text-[#9CA3AF] text-sm leading-relaxed mb-4">
                    Chanel founded Stackd Studios AI under Hicks Virtual Solutions LLC with a clear mission: give business owners and founders access to the same AI-powered infrastructure that big companies take for granted — without the enterprise price tag or the bloat.
                  </p>
                  <p className="text-[#9CA3AF] text-sm leading-relaxed">
                    With a background in product development, systems design, and AI implementation, Chanel leads every project with a bias toward clarity, craft, and results.
                  </p>
                </div>

                <div className="flex gap-3">
                  <Link
                    href="/contact"
                    className="flex-1 inline-flex items-center justify-center bg-[#E8C547] hover:bg-[#d4b03d] text-[#0C0C0C] font-semibold py-2.5 px-4 rounded-lg text-sm transition-all duration-200"
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-[#888580] text-xs font-semibold uppercase tracking-[0.12em] mb-4">Mission</p>
              <blockquote className="text-[clamp(22px,3vw,32px)] text-[#0C0C0C] leading-[1.3] font-[family-name:var(--font-instrument-sans)]">
                &ldquo;To design, build, and launch intelligent systems and ventures — giving business owners and founders the power to operate smarter, move faster, and build something that lasts, powered by AI, craft, and strategic thinking.&rdquo;
              </blockquote>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <p className="text-[#888580] text-xs font-semibold uppercase tracking-[0.12em] mb-4">How We Work</p>
              <h2 className="text-[clamp(28px,4vw,48px)] text-[#0C0C0C] leading-[1.1]">
                The principles behind every build
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((value, i) => (
                <div
                  key={value.title}
                  className="bg-[#F6F4EF] rounded-2xl p-8 border border-[#E2DED8]"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[#E8C547] text-sm font-bold font-[family-name:var(--font-instrument-sans)]">0{i + 1}</span>
                    <h3 className="text-xl text-[#0C0C0C] leading-tight">{value.title}</h3>
                  </div>
                  <p className="text-[#888580] text-base leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <p className="text-[#888580] text-xs font-semibold uppercase tracking-[0.12em] mb-4">Tech Stack</p>
              <h2 className="text-[clamp(28px,4vw,48px)] text-[#0C0C0C] leading-[1.1] mb-4">
                We build on the best tools available.
              </h2>
              <p className="text-[#888580] text-lg max-w-xl">
                Our stack is chosen for speed, reliability, and scale — the same tools powering some of the best products on the internet.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {stack.map((group) => (
                <div
                  key={group.category}
                  className="bg-white rounded-2xl p-6 border border-[#E2DED8]"
                >
                  <h3 className="text-base text-[#0C0C0C] leading-tight mb-4">{group.category}</h3>
                  <ul className="flex flex-col gap-2" role="list">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-[#888580]">
                        <span className="w-1 h-1 rounded-full bg-[#E8C547] shrink-0" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#0C0C0C]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-[clamp(28px,4vw,48px)] text-white leading-[1.1] mb-4">
              Want to work with us?
            </h2>
            <p className="text-white/60 text-lg mb-8">
              Book a free discovery call and let&apos;s figure out what to build together.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[#E8C547] hover:bg-[#d4b03d] text-[#0C0C0C] font-bold px-8 py-4 rounded-xl text-base transition-all duration-200 hover:scale-[1.02] min-h-[44px]"
              >
                Book a Free Call
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center border-2 border-white/30 hover:border-white text-white font-bold px-8 py-4 rounded-xl text-base transition-all duration-200 hover:scale-[1.02] min-h-[44px]"
              >
                View Services
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
