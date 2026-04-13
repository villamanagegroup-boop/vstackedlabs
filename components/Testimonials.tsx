'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: "Chanel took our messy manual intake process and turned it into a fully automated AI system in less than a week. We went from spending 3 hours a day on admin to about 20 minutes.",
    name: 'Marcus R.',
    role: 'Owner, Residential Services Company',
    track: 'Track A',
    trackColor: '#1A4A7A',
    initials: 'MR',
  },
  {
    quote: "I came in with a rough idea for a SaaS product. After the Strategy Session, I had a full business model, a product roadmap, and actual clarity for the first time. Worth every penny.",
    name: 'Tanya P.',
    role: 'Founder, EdTech Startup',
    track: 'Track B',
    trackColor: '#F97316',
    initials: 'TP',
  },
  {
    quote: "The Micro Tool Build changed everything for our team. We had a custom client reporting dashboard live in 6 days. Our clients think we have a full engineering team.",
    name: 'Jordan K.',
    role: 'Agency Owner, Marketing & Brand',
    track: 'Track A',
    trackColor: '#1A4A7A',
    initials: 'JK',
  },
  {
    quote: "We had a broken signup flow that was losing leads every day. VStacked rebuilt our entire onboarding in under a week. Conversions went up 40% in the first month. I wish I had done this sooner.",
    name: 'Alicia M.',
    role: 'Owner, Wellness Studio',
    track: 'Track A',
    trackColor: '#1A4A7A',
    initials: 'AM',
  },
  {
    quote: "I needed a co-founder, not just a dev shop. VStacked understood the business side as well as the tech side. My SaaS went from a voice memo to a working prototype in three weeks.",
    name: 'Devon S.',
    role: 'Founder, B2B Software Startup',
    track: 'Track B',
    trackColor: '#F97316',
    initials: 'DS',
  },
  {
    quote: "I came to VStacked Labs with a spreadsheet and a prayer. They turned it into a fully automated client management system. My team went from drowning in admin to actually focused on the work that matters.",
    name: 'Priya N.',
    role: 'Owner, Creative Agency',
    track: 'Track A',
    trackColor: '#1A4A7A',
    initials: 'PN',
  },
]

export default function Testimonials() {
  return (
    <section
      className="py-24 bg-white"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-[#888580] text-xs font-semibold uppercase tracking-[0.12em] mb-4">
            What Clients Say
          </p>
          <h2
            id="testimonials-heading"
            className="text-[clamp(28px,4.5vw,52px)] text-[#0C0C0C] leading-[1.1]"
          >
            Built for results. Heard from clients.
          </h2>
        </motion.div>

        {/* Cards — 2 col on tablet, 3 col on desktop */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="bg-[#F6F4EF] rounded-2xl p-5 flex flex-col gap-4 border border-[#E2DED8] hover:border-[#0C0C0C]/20 transition-all duration-300"
            >
              {/* Quote mark */}
              <div className="text-[#E8C547] text-4xl leading-none font-serif" aria-hidden="true">&ldquo;</div>

              {/* Quote */}
              <p className="text-[#0C0C0C] text-sm leading-relaxed flex-1">
                {t.quote}
              </p>

              {/* Attribution */}
              <div className="flex items-center gap-3 pt-2 border-t border-[#E2DED8]">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white text-[10px] font-bold shrink-0"
                  style={{ background: t.trackColor }}
                >
                  {t.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[#0C0C0C] text-xs font-semibold truncate">{t.name}</p>
                  <p className="text-[#888580] text-[11px] truncate">{t.role}</p>
                </div>
                <span
                  className="text-[10px] font-semibold uppercase tracking-[0.1em] px-2 py-0.5 rounded-full shrink-0"
                  style={{
                    background: t.trackColor === '#1A4A7A' ? '#EEF4FB' : '#FFF4ED',
                    color: t.trackColor,
                  }}
                >
                  {t.track}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
