'use client'

import { motion } from 'framer-motion'

const tiers = [
  {
    name: 'AI Quick Setup',
    price: '$500 – $1,500',
    turnaround: '3–5 days',
    bestFor: 'Solopreneurs + small businesses',
    cta: 'Get Started',
    ctaStyle: 'outlined',
    popular: false,
  },
  {
    name: 'AI Integration',
    price: '$1,500 – $4,000',
    turnaround: '1–2 weeks',
    bestFor: 'Growing businesses with existing tools',
    cta: 'Get Started',
    ctaStyle: 'outlined',
    popular: false,
  },
  {
    name: 'Full App Build',
    price: '$4,000 – $10,000',
    turnaround: '3–6 weeks',
    bestFor: 'Founders ready to build a real product',
    cta: 'Start a Project',
    ctaStyle: 'filled',
    popular: true,
  },
  {
    name: 'Custom Development',
    price: '$10,000+',
    turnaround: 'Custom timeline',
    bestFor: 'Enterprises + complex platforms',
    cta: "Let's Talk",
    ctaStyle: 'black',
    popular: false,
  },
]

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-24 bg-[#FAFAFA]"
      aria-labelledby="pricing-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#7C3AED] text-xs font-semibold uppercase tracking-[0.1em] mb-4">
            Pricing
          </p>
          <h2
            id="pricing-heading"
            className="text-[clamp(28px,4vw,48px)] font-bold tracking-[-0.02em] text-[#0A0A0A] mb-4"
          >
            Simple, transparent pricing for every stage.
          </h2>
          <p className="text-[#6B6B6B] text-lg">
            No surprises. No retainer traps. Just the right tier for your project.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(124,58,237,0.12)' }}
              className={`relative bg-white rounded-2xl p-7 flex flex-col gap-4 border transition-all duration-300 ${
                tier.popular
                  ? 'border-[#7C3AED] shadow-[0_0_0_1px_#7C3AED]'
                  : 'border-[#E5E5E5]'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-[#7C3AED] text-white text-xs font-semibold px-4 py-1 rounded-full whitespace-nowrap">
                    Most Popular
                  </span>
                </div>
              )}

              <div className={tier.popular ? 'mt-2' : ''}>
                <h3 className="text-base font-bold text-[#0A0A0A] tracking-tight mb-1">
                  {tier.name}
                </h3>
                <p className="text-2xl font-bold text-[#0A0A0A] tracking-tight">
                  {tier.price}
                </p>
              </div>

              <div className="flex flex-col gap-2 text-sm flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-[#6B6B6B]">Turnaround:</span>
                  <span className="text-[#0A0A0A] font-semibold">{tier.turnaround}</span>
                </div>
                <div>
                  <span className="text-[#6B6B6B] text-xs">Best for:</span>
                  <p className="text-[#0A0A0A] text-sm font-medium mt-0.5">{tier.bestFor}</p>
                </div>
              </div>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className={`mt-2 inline-flex items-center justify-center font-semibold py-3 px-5 rounded-xl transition-all duration-200 hover:scale-[1.02] min-h-[44px] text-sm ${
                  tier.ctaStyle === 'filled'
                    ? 'bg-[#7C3AED] hover:bg-[#5B21B6] text-white'
                    : tier.ctaStyle === 'black'
                    ? 'bg-[#0A0A0A] hover:bg-[#1a1a1a] text-white'
                    : 'border-2 border-[#7C3AED] text-[#7C3AED] hover:bg-[#EDE9FE]'
                }`}
              >
                {tier.cta}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-[#6B6B6B] text-sm italic mt-10"
        >
          Not sure which tier fits?{' '}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="text-[#7C3AED] hover:underline not-italic font-medium"
          >
            Contact us
          </a>{' '}
          and we&apos;ll figure it out together.
        </motion.p>
      </div>
    </section>
  )
}
