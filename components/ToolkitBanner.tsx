'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

/**
 * Compact CTA banner promoting the free AI Toolkit.
 * Drop into any page between sections.
 *
 * variant="yellow"  — yellow bg, dark text, white CTA
 * variant="dark"    — dark bg, white text, yellow CTA
 * variant="cream"   — cream bg, dark card, yellow CTA inside
 */
export default function ToolkitBanner({
  variant = 'yellow',
}: {
  variant?: 'yellow' | 'dark' | 'cream'
}) {
  if (variant === 'dark') {
    return (
      <section className="bg-[#0C0C0C] py-16 md:py-20" aria-label="Get the free AI toolkit">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="bg-[#FFD84D] rounded-2xl p-8 md:p-10 grid md:grid-cols-[1fr_auto] gap-6 items-center"
          >
            <div>
              <p className="text-[#0C0C0C] text-xs font-semibold uppercase tracking-[0.16em] mb-3">
                // Free Resource
              </p>
              <h3 className="text-[clamp(26px,3.6vw,40px)] text-[#0C0C0C] uppercase leading-[1.0] mb-3">
                Get the AI toolkit, free.
              </h3>
              <p className="text-[#0C0C0C] text-base md:text-lg leading-relaxed max-w-xl">
                50+ tools curated for small business. One email, permanent
                access, quarterly updates.
              </p>
            </div>
            <Link
              href="/ai-toolkit"
              className="inline-flex items-center justify-center bg-[#0C0C0C] hover:bg-white text-white hover:text-[#0C0C0C] font-bold px-7 py-4 rounded-xl text-base transition-all duration-200 hover:scale-[1.02] min-h-[48px] whitespace-nowrap"
            >
              Get the toolkit →
            </Link>
          </motion.div>
        </div>
      </section>
    )
  }

  if (variant === 'cream') {
    return (
      <section className="bg-[#F6F4EF] py-16 md:py-20" aria-label="Get the free AI toolkit">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="bg-[#0C0C0C] rounded-2xl p-8 md:p-10 grid md:grid-cols-[1fr_auto] gap-6 items-center text-white"
          >
            <div>
              <p className="text-[#FFD84D] text-xs font-semibold uppercase tracking-[0.16em] mb-3">
                // Free Resource
              </p>
              <h3 className="text-[clamp(26px,3.6vw,40px)] uppercase leading-[1.0] mb-3">
                The AI toolkit for <span className="text-[#FFD84D]">small business.</span>
              </h3>
              <p className="text-white/75 text-base md:text-lg leading-relaxed max-w-xl">
                50+ tools curated, ranked, and updated quarterly. Yours free —
                permanent access link.
              </p>
            </div>
            <Link
              href="/ai-toolkit"
              className="inline-flex items-center justify-center bg-[#FFD84D] hover:bg-white text-[#0C0C0C] font-bold px-7 py-4 rounded-xl text-base transition-all duration-200 hover:scale-[1.02] min-h-[48px] whitespace-nowrap"
            >
              Get the toolkit →
            </Link>
          </motion.div>
        </div>
      </section>
    )
  }

  // default: yellow
  return (
    <section className="bg-[#FFD84D] py-16 md:py-20 relative overflow-hidden" aria-label="Get the free AI toolkit">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-[1fr_auto] gap-6 items-center"
        >
          <div>
            <p className="text-[#0C0C0C] text-xs font-semibold uppercase tracking-[0.16em] mb-3">
              // Free Resource
            </p>
            <h3 className="text-[clamp(28px,4vw,48px)] text-[#0C0C0C] uppercase leading-[1.0] mb-3">
              Free AI toolkit, built for owners.
            </h3>
            <p className="text-[#0C0C0C] text-base md:text-lg leading-relaxed max-w-xl font-medium">
              50+ tools organized by use case. Permanent access link. Updated
              quarterly. We pick what works.
            </p>
          </div>
          <Link
            href="/ai-toolkit"
            className="inline-flex items-center justify-center bg-[#0C0C0C] hover:bg-white text-white hover:text-[#0C0C0C] font-bold px-7 py-4 rounded-xl text-base transition-all duration-200 hover:scale-[1.02] min-h-[48px] whitespace-nowrap shadow-[0_4px_0_rgba(0,0,0,0.18)]"
          >
            Get the toolkit →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
