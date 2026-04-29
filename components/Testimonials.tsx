'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: "Chanel took our messy manual intake process and turned it into a fully automated AI system in less than a week. We went from spending 3 hours a day on admin to about 20 minutes.",
    name: 'Marcus R.',
    role: 'Owner, Residential Services Company',
    initials: 'MR',
  },
  {
    quote: "I came in with a rough idea for a SaaS product. After the audit, I had a written roadmap, validated direction, and actual clarity for the first time. Worth every penny.",
    name: 'Tanya P.',
    role: 'Founder, EdTech Startup',
    initials: 'TP',
  },
  {
    quote: "Stackd built us a custom client reporting dashboard in 6 days. Our clients think we have a full engineering team. The Quick Setup paid for itself the first week.",
    name: 'Jordan K.',
    role: 'Agency Owner, Marketing & Brand',
    initials: 'JK',
  },
  {
    quote: "We had a broken signup flow that was losing leads every day. Stackd Studios AI rebuilt our entire onboarding in under a week. Conversions went up 40% in the first month. I wish I had done this sooner.",
    name: 'Alicia M.',
    role: 'Owner, Wellness Studio',
    initials: 'AM',
  },
  {
    quote: "I needed a partner who understood the business side as well as the tech side. Stackd got it. We trained my team on Claude in one afternoon and they're using it every day now.",
    name: 'Devon S.',
    role: 'Founder, B2B Software Startup',
    initials: 'DS',
  },
  {
    quote: "I came to Stackd Studios AI with a spreadsheet and a prayer. They turned it into a fully automated client management system. My team went from drowning in admin to actually focused on the work that matters.",
    name: 'Priya N.',
    role: 'Owner, Creative Agency',
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
          viewport={{ once: true, margin: '-80px' }}
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
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="bg-[#F6F4EF] rounded-2xl p-5 flex flex-col gap-4 border border-[#E2DED8] hover:border-[#0C0C0C]/20 transition-all duration-300"
            >
              {/* Quote mark */}
              <div className="text-[#FFD84D] text-4xl leading-none font-serif" aria-hidden="true">&ldquo;</div>

              {/* Quote */}
              <p className="text-[#0C0C0C] text-sm leading-relaxed flex-1">
                {t.quote}
              </p>

              {/* Attribution */}
              <div className="flex items-center gap-3 pt-2 border-t border-[#E2DED8]">
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-[#0C0C0C] text-[#FFD84D] text-[10px] font-bold shrink-0">
                  {t.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[#0C0C0C] text-xs font-semibold truncate">{t.name}</p>
                  <p className="text-[#888580] text-[11px] truncate">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
