import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

type Job = {
  id: string
  title: string
  type: 'Full-Time' | 'Part-Time' | 'Contract' | 'Freelance'
  location: 'Remote — USA' | 'Remote'
  track: 'Engineering' | 'Design' | 'Strategy' | 'Operations' | 'Growth'
  summary: string
  responsibilities: string[]
  requirements: string[]
  nice: string[]
}

// Sorted by type: Contract → Part-Time → Freelance
const jobs: Job[] = [
  // ── Contract ──────────────────────────────────
  {
    id: 'fullstack-engineer',
    title: 'Full Stack Engineer',
    type: 'Contract',
    location: 'Remote — USA',
    track: 'Engineering',
    summary:
      'We\'re looking for a full stack engineer who thrives on building fast, clean, production-ready products. You\'ll work directly on client builds and internal Stackd Studios AI ventures using our standard stack: Next.js, Supabase, Tailwind, and Stripe.',
    responsibilities: [
      'Build and ship client products from design to deployment',
      'Implement Supabase schemas, RLS policies, and server actions',
      'Integrate AI APIs (Claude, OpenAI) into production applications',
      'Collaborate with the founder on architecture and scope decisions',
      'Maintain code quality across multiple concurrent client projects',
    ],
    requirements: [
      '3+ years building with React or Next.js',
      'Solid experience with TypeScript',
      'Familiarity with Supabase or another Postgres-based backend',
      'Understanding of authentication, RLS, and data security patterns',
      'Ability to scope and estimate your own work accurately',
    ],
    nice: [
      'Experience integrating Claude or OpenAI APIs',
      'Framer Motion or animation experience',
      'Prior work at an agency or venture studio',
      'Comfort with Vercel deployments and edge functions',
    ],
  },
  {
    id: 'venture-strategist',
    title: 'Venture Strategist',
    type: 'Contract',
    location: 'Remote — USA',
    track: 'Strategy',
    summary:
      'Stackd Studios AI works with founders to validate, model, and launch new ventures. We\'re looking for a strategist who can run idea architecture sessions, produce business model documentation, and help founders stress-test their concepts before we build.',
    responsibilities: [
      'Lead 90-minute Strategy Sessions with Track B clients',
      'Produce business model documents, roadmaps, and positioning frameworks',
      'Facilitate concept validation — market sizing, competitive analysis, risk mapping',
      'Collaborate with the team on Founder Build Sprint scoping',
      'Contribute to Stackd Studios AI\'s internal venture pipeline and IP',
    ],
    requirements: [
      '3+ years in strategy, consulting, product management, or venture building',
      'Experience working with early-stage founders or startups',
      'Strong written communication — you produce documents clients act on',
      'Comfortable facilitating fast-paced working sessions',
      'Ability to synthesize ambiguous information into clear decisions',
    ],
    nice: [
      'Experience with the lean startup or jobs-to-be-done frameworks',
      'Background in SaaS, fintech, or marketplace businesses',
      'Prior work at a VC, accelerator, or venture studio',
      'Comfort with AI-assisted research and synthesis tools',
    ],
  },
  // ── Part-Time ─────────────────────────────────
  {
    id: 'client-success-manager',
    title: 'Client Success Manager',
    type: 'Part-Time',
    location: 'Remote — USA',
    track: 'Operations',
    summary:
      'As we grow, we need someone to own the client relationship from onboarding through delivery. You\'ll be the point of contact for clients, keep projects on track, and make sure every delivery lands the way it should.',
    responsibilities: [
      'Onboard new clients and set clear expectations from day one',
      'Manage project timelines and communicate status updates proactively',
      'Coordinate between clients and the Stackd Studios AI build team',
      'Handle post-delivery support requests and escalations',
      'Identify opportunities to expand client relationships into retainers or upgrades',
    ],
    requirements: [
      '2+ years in client success, account management, or project management',
      'Exceptional written communication — clear, professional, and warm',
      'Organized with strong follow-through — nothing slips through the cracks',
      'Comfortable managing multiple projects at different stages simultaneously',
      'Proactive mindset — you solve problems before clients notice them',
    ],
    nice: [
      'Experience in a digital agency or software studio',
      'Familiarity with project tools like Linear, Notion, or Asana',
      'Understanding of web development timelines and constraints',
      'Experience upselling or expanding client accounts',
    ],
  },
  {
    id: 'growth-content-lead',
    title: 'Growth & Content Lead',
    type: 'Part-Time',
    location: 'Remote — USA',
    track: 'Growth',
    summary:
      'Stackd Studios AI needs a voice. We\'re building in public, selling AI services to business owners and founders, and launching a digital store. We need someone who can create content that educates, converts, and builds a community around what we\'re doing.',
    responsibilities: [
      'Own Stackd Studios AI\'s content calendar across LinkedIn, X (Twitter), and TikTok',
      'Write educational content about AI tools, workflows, and business building',
      'Produce short-form video content (scripting + filming or coordination)',
      'Write and send a weekly email newsletter to the Stackd Studios AI list',
      'Contribute copy for landing pages, product descriptions, and store listings',
    ],
    requirements: [
      'Strong writing skills — educational, not salesy',
      'Understanding of AI tools and how they apply to real businesses',
      'Experience creating content for LinkedIn or Twitter that builds an audience',
      'Ability to translate technical concepts into plain, compelling language',
      'Self-directed — you don\'t need to be managed into producing',
    ],
    nice: [
      'Short-form video experience (TikTok, Reels, YouTube Shorts)',
      'Email marketing experience (Resend, Mailchimp, ConvertKit)',
      'Background in agency, SaaS, or creator businesses',
      'Existing audience in the AI, business, or tech space',
    ],
  },
  {
    id: 'social-media-manager',
    title: 'Social Media Manager',
    type: 'Part-Time',
    location: 'Remote — USA',
    track: 'Growth',
    summary:
      'We need someone who lives on social media and knows how to build an engaged audience around AI, business, and tech. You\'ll own our day-to-day presence on LinkedIn, TikTok, Instagram, and X — turning our work into content that actually gets seen.',
    responsibilities: [
      'Plan and execute daily/weekly content across LinkedIn, TikTok, X, and Instagram',
      'Repurpose builds, client wins, and behind-the-scenes moments into engaging posts',
      'Grow followers and engagement through consistent, value-driven content',
      'Monitor comments, DMs, and mentions — respond and build community',
      'Track performance metrics and iterate on what works',
    ],
    requirements: [
      'Proven track record growing social accounts in business, AI, or tech niches',
      'Strong visual instincts — you know what stops the scroll',
      'Comfortable writing sharp, concise copy for multiple platforms',
      'Self-directed and consistent — you post without being reminded',
      'Familiarity with scheduling tools (Buffer, Metricool, Later, etc.)',
    ],
    nice: [
      'Short-form video creation and editing (CapCut, Premiere, etc.)',
      'Experience with AI-generated content workflows',
      'Existing following in the business or AI creator space',
      'Graphic design chops (Canva, Figma)',
    ],
  },
  // ── Freelance ─────────────────────────────────
  {
    id: 'ai-prompt-engineer',
    title: 'AI Prompt Engineer',
    type: 'Freelance',
    location: 'Remote — USA',
    track: 'Engineering',
    summary:
      'We build custom AI prompt libraries and workflows for business owner clients. We need someone who understands how to design reliable, structured prompts using Claude — and can document and deliver them clearly to non-technical clients.',
    responsibilities: [
      'Build prompt libraries tailored to each client\'s business and voice',
      'Design multi-step Claude workflows for intake, communication, and operations',
      'Document prompt logic in plain language for client handoff',
      'Test and iterate on prompts based on real-world client feedback',
      'Collaborate with the team on AI system architecture for Track A clients',
    ],
    requirements: [
      'Deep experience working with Claude or GPT-4 in production contexts',
      'Ability to write clear, structured prompts with consistent output formatting',
      'Strong written communication — you\'ll write prompts clients use daily',
      'Understanding of business operations and workflows',
      'Organized and detail-oriented — prompt libraries need to be airtight',
    ],
    nice: [
      'Experience with Claude Projects and custom system prompts',
      'Background in copywriting, operations, or business consulting',
      'Familiarity with n8n, Zapier, or Make for workflow automation',
      'Experience building AI tools for small business clients',
    ],
  },
  {
    id: 'ui-ux-designer',
    title: 'UI/UX Designer',
    type: 'Freelance',
    location: 'Remote — USA',
    track: 'Design',
    summary:
      'We need a designer who can move fast and make things that look and feel premium. You\'ll work on client-facing products, Stackd Studios AI\'s own brand assets, and digital store products. Our aesthetic is clean, minimal, and structured — no generic templates.',
    responsibilities: [
      'Design interfaces for web apps, marketing sites, and dashboards',
      'Create and maintain Stackd Studios AI\'s brand design system',
      'Produce Figma files ready for direct developer handoff',
      'Design digital products for the Stackd Studios AI store (prompt pack covers, course assets)',
      'Review implemented designs and flag deviations from spec',
    ],
    requirements: [
      'Strong Figma proficiency — components, auto-layout, variables',
      'Portfolio showing clean, production-quality UI work',
      'Ability to work within an existing design system and extend it',
      'Understanding of responsive design and mobile-first layouts',
      'Experience designing for web apps, not just marketing pages',
    ],
    nice: [
      'Motion design experience (Framer, After Effects)',
      'Familiarity with Tailwind CSS utility patterns',
      'Experience designing for SaaS or fintech products',
      'Brand identity and typography chops',
    ],
  },
  {
    id: 'creator-outreach-lead',
    title: 'Creator & Outreach Partner',
    type: 'Freelance',
    location: 'Remote',
    track: 'Growth',
    summary:
      'We\'re building a network of creators, influencers, and thought leaders who genuinely believe in AI-powered business tools. You\'ll identify, reach out to, and onboard partners who can amplify Stackd Studios AI\'s reach — from micro-influencers to podcasters to newsletter writers.',
    responsibilities: [
      'Research and identify creators, podcasters, and newsletters aligned with our audience',
      'Craft and send personalized outreach pitches to potential partners',
      'Manage ongoing relationships with active affiliates and creators',
      'Coordinate content collaborations, shoutouts, and sponsored integrations',
      'Track referral performance and provide partners with reporting',
    ],
    requirements: [
      'Experience in influencer marketing, partnerships, or creator outreach',
      'Excellent written communication — you write like a human, not a template',
      'Strong organizational skills — you\'re tracking many conversations at once',
      'Understanding of creator economics and what motivates partnerships',
      'Comfortable negotiating terms and managing expectations',
    ],
    nice: [
      'Existing relationships in the AI, SaaS, or business creator ecosystem',
      'Experience with affiliate platforms (Impact, PartnerStack, etc.)',
      'Background in B2B marketing or agency partnerships',
      'Comfort with CRM tools (Notion, HubSpot, Airtable)',
    ],
  },
  {
    id: 'brand-affiliate-partner',
    title: 'Brand Affiliate Partner',
    type: 'Freelance',
    location: 'Remote',
    track: 'Growth',
    summary:
      'Love what we\'re building? Earn commission by promoting Stackd Studios AI to your audience. Whether you\'re a content creator, business coach, consultant, or community builder — if your audience includes business owners or founders, there\'s a fit here. No minimum follower count required.',
    responsibilities: [
      'Share Stackd Studios AI services, products, and content with your audience',
      'Create authentic content (posts, videos, reviews, tutorials) showcasing our work',
      'Drive qualified leads to our site using your unique affiliate link',
      'Participate in launches, promotions, and affiliate-exclusive offers',
      'Provide feedback on what your audience responds to',
    ],
    requirements: [
      'Active presence on at least one platform (LinkedIn, TikTok, YouTube, Instagram, X, or email)',
      'Audience that includes business owners, entrepreneurs, or founders',
      'Genuine belief in AI tools and their impact on modern business',
      'Ability to create content consistently — at least 2–4 posts/month',
      'No prior affiliate experience required — we\'ll onboard you fully',
    ],
    nice: [
      'Established newsletter, podcast, or YouTube channel',
      'Experience as an affiliate for software or SaaS products',
      'Community leadership (Facebook Groups, Slack communities, Discord)',
      'Background in business consulting, coaching, or operations',
    ],
  },
]

const trackColors: Record<Job['track'], { bg: string; text: string }> = {
  Engineering: { bg: '#EEF4FB', text: '#1A4A7A' },
  Design: { bg: '#FFF4ED', text: '#F97316' },
  Strategy: { bg: '#F0FDF4', text: '#16A34A' },
  Operations: { bg: '#FDF4FF', text: '#9333EA' },
  Growth: { bg: '#FFFBEB', text: '#D97706' },
}

const typeColors: Record<Job['type'], { bg: string; text: string }> = {
  'Full-Time': { bg: '#0C0C0C', text: '#FFD84D' },
  'Part-Time': { bg: '#FDF4FF', text: '#7C3AED' },
  Contract: { bg: '#1A4A7A', text: '#FFFFFF' },
  Freelance: { bg: '#F0FDF4', text: '#15803D' },
}

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#F6F4EF]">
        {/* Hero */}
        <section className="pt-32 pb-16 bg-[#FFD84D]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-end">
              <div>
                <p className="text-[#0C0C0C]/60 text-xs font-semibold uppercase tracking-[0.12em] mb-4">
                  Careers
                </p>
                <h1 className="text-[clamp(40px,6vw,72px)] text-[#0C0C0C] leading-[1.0] mb-6">
                  Build the future of work with us.
                </h1>
                <p className="text-[#0C0C0C]/70 text-xl leading-relaxed">
                  Stackd Studios AI is a remote-first, AI-powered Build Lab & Venture Studio. We move fast, we care about craft, and we work on things that actually matter to business owners and founders.
                </p>
              </div>
              <div className="flex flex-col gap-5">
                {[
                  { value: '100%', label: 'Remote — work from anywhere in the US' },
                  { value: 'Fast', label: 'Async-first, no unnecessary meetings' },
                  { value: 'Real', label: 'Work on live products with real clients' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <span className="text-2xl font-bold text-[#0C0C0C] font-[family-name:var(--font-instrument-sans)] w-16 shrink-0">
                      {item.value}
                    </span>
                    <p className="text-[#0C0C0C]/60 text-sm">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Culture strip */}
        <section className="py-12 bg-[#0C0C0C]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-3 gap-8">
              {[
                {
                  title: 'Small team. Big output.',
                  body: 'We don\'t have layers of management. Everyone here ships. You\'ll have real ownership over the work you touch.',
                },
                {
                  title: 'AI-native by default.',
                  body: 'We use Claude, automation, and AI tools in our own workflows. We don\'t just sell AI — we live it.',
                },
                {
                  title: 'Craft is non-negotiable.',
                  body: 'We move fast because we\'re disciplined — not because we cut corners. Quality is built into the process.',
                },
              ].map((item) => (
                <div key={item.title}>
                  <h3 className="text-white text-lg leading-tight mb-2">{item.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open roles */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <p className="text-[#888580] text-xs font-semibold uppercase tracking-[0.12em] mb-4">
                Open Roles
              </p>
              <h2 className="text-[clamp(28px,4vw,48px)] text-[#0C0C0C] leading-[1.1]">
                {jobs.length} positions available
              </h2>
            </div>

            <div className="flex flex-col gap-4">
              {jobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          </div>
        </section>

        {/* Affiliate Program */}
        <section className="py-20 bg-[#FFD84D]" aria-labelledby="affiliate-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="max-w-2xl mb-14">
              <p className="text-[#0C0C0C]/60 text-xs font-semibold uppercase tracking-[0.12em] mb-4">
                Affiliate &amp; Creator Program
              </p>
              <h2
                id="affiliate-heading"
                className="text-[clamp(28px,4vw,52px)] text-[#0C0C0C] leading-[1.1] mb-5"
              >
                Get paid to spread the word.
              </h2>
              <p className="text-[#0C0C0C]/70 text-lg leading-relaxed">
                We&apos;re building an affiliate network of creators, coaches, consultants, and community builders who believe in AI-powered business. If your audience includes founders or business owners, you belong here — and you&apos;ll earn commission for every client you send our way.
              </p>
            </div>

            {/* How it works */}
            <div className="grid sm:grid-cols-3 gap-6 mb-14">
              {[
                {
                  step: '01',
                  title: 'Apply or get approved',
                  body: 'Fill out a quick application. We review your platform and audience fit — no minimum follower count required.',
                },
                {
                  step: '02',
                  title: 'Get your affiliate link',
                  body: 'You\'ll receive a unique tracking link, affiliate kit, and access to our private partner channel.',
                },
                {
                  step: '03',
                  title: 'Earn on every referral',
                  body: 'Every qualified lead or sale you drive earns you commission. We pay on time, every time.',
                },
              ].map((item) => (
                <div key={item.step} className="bg-[#0C0C0C]/8 border border-[#0C0C0C]/15 rounded-2xl p-6">
                  <span className="text-[#0C0C0C] text-xs font-bold font-[family-name:var(--font-instrument-sans)] mb-3 block">{item.step}</span>
                  <h3 className="text-[#0C0C0C] text-base leading-tight mb-2">{item.title}</h3>
                  <p className="text-[#0C0C0C]/60 text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>

            {/* Who we want */}
            <div className="mb-14">
              <h3 className="text-[#0C0C0C]/50 text-xs font-semibold uppercase tracking-[0.12em] mb-6">Who thrives in this program</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  'Content Creators',
                  'TikTok / Reels Creators',
                  'LinkedIn Thought Leaders',
                  'YouTube Educators',
                  'Podcast Hosts',
                  'Newsletter Writers',
                  'Business Coaches',
                  'Marketing Consultants',
                  'Community Builders',
                  'AI Enthusiasts',
                  'Agency Owners',
                  'Startup Advisors',
                ].map((label) => (
                  <span
                    key={label}
                    className="text-sm font-medium text-[#0C0C0C]/80 border border-[#0C0C0C]/20 px-4 py-2 rounded-full"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[#0C0C0C] hover:bg-[#1A1A2E] text-white font-bold px-8 py-4 rounded-xl text-base transition-all duration-200 hover:scale-[1.02] min-h-[44px]"
              >
                Apply to the Affiliate Program
              </Link>
              <p className="text-[#0C0C0C]/50 text-sm">
                Or scroll down to see affiliate-specific open roles below.
              </p>
            </div>
          </div>
        </section>

        {/* No fit CTA */}
        <section className="py-16 bg-white border-t border-[#E2DED8]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-[clamp(24px,3.5vw,40px)] text-[#0C0C0C] leading-[1.1] mb-4">
              Don&apos;t see the right fit?
            </h2>
            <p className="text-[#888580] text-lg mb-8">
              We&apos;re always open to hearing from talented people. Send us a note — tell us what you do and why you&apos;d be great at Stackd Studios AI.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[#0C0C0C] hover:bg-[#FFD84D] text-white hover:text-[#0C0C0C] font-semibold px-8 py-4 rounded-xl text-base transition-all duration-200 hover:scale-[1.02] min-h-[44px]"
            >
              Send an Open Application
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

function JobCard({ job }: { job: Job }) {
  const tc = trackColors[job.track]
  const tyc = typeColors[job.type]

  return (
    <details
      className="group bg-white rounded-2xl border border-[#E2DED8] overflow-hidden hover:border-[#0C0C0C]/30 transition-colors duration-200"
    >
      {/* Summary row — always visible */}
      <summary className="flex items-center gap-4 p-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
        <div className="flex-1 flex flex-wrap items-center gap-3">
          {/* Track badge */}
          <span
            className="text-[10px] font-bold uppercase tracking-[0.12em] px-2.5 py-1 rounded-full"
            style={{ background: tc.bg, color: tc.text }}
          >
            {job.track}
          </span>

          <h3 className="text-lg text-[#0C0C0C] font-[family-name:var(--font-anton)]">
            {job.title}
          </h3>

          <div className="flex items-center gap-2 ml-auto">
            {/* Type badge */}
            <span
              className="text-[10px] font-semibold uppercase tracking-[0.1em] px-2.5 py-1 rounded-full"
              style={{ background: tyc.bg, color: tyc.text }}
            >
              {job.type}
            </span>
            {/* Location */}
            <span className="text-[#888580] text-xs hidden sm:block">{job.location}</span>
          </div>
        </div>

        {/* Chevron */}
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
          className="shrink-0 text-[#888580] transition-transform duration-200 group-open:rotate-180"
        >
          <path d="M5 7.5l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </summary>

      {/* Expanded content */}
      <div className="px-6 pb-8 border-t border-[#E2DED8] pt-6">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left: summary + responsibilities */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <p className="text-[#888580] text-base leading-relaxed">{job.summary}</p>

            <div>
              <h4 className="text-sm font-semibold text-[#0C0C0C] uppercase tracking-[0.08em] mb-3">
                What you&apos;ll do
              </h4>
              <ul className="flex flex-col gap-2" role="list">
                {job.responsibilities.map((r) => (
                  <li key={r} className="flex items-start gap-2.5 text-sm text-[#0C0C0C]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFD84D] shrink-0 mt-1.5" aria-hidden="true" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: requirements + apply */}
          <div className="flex flex-col gap-6">
            <div>
              <h4 className="text-sm font-semibold text-[#0C0C0C] uppercase tracking-[0.08em] mb-3">
                Requirements
              </h4>
              <ul className="flex flex-col gap-2" role="list">
                {job.requirements.map((r) => (
                  <li key={r} className="flex items-start gap-2.5 text-xs text-[#0C0C0C]">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="shrink-0 mt-0.5">
                      <path d="M2 7l3.5 3.5 6.5-6.5" stroke="#0C0C0C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {r}
                  </li>
                ))}
              </ul>
            </div>

            {job.nice.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold text-[#888580] uppercase tracking-[0.08em] mb-3">
                  Nice to have
                </h4>
                <ul className="flex flex-col gap-2" role="list">
                  {job.nice.map((r) => (
                    <li key={r} className="flex items-start gap-2.5 text-xs text-[#888580]">
                      <span className="w-1 h-1 rounded-full bg-[#E2DED8] shrink-0 mt-1.5" aria-hidden="true" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[#0C0C0C] hover:bg-[#FFD84D] text-white hover:text-[#0C0C0C] font-semibold py-3 px-6 rounded-xl transition-all duration-200 hover:scale-[1.02] min-h-[44px] text-sm mt-auto"
            >
              Apply for This Role
            </Link>
          </div>
        </div>
      </div>
    </details>
  )
}
