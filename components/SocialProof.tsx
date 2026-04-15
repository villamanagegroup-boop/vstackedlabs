'use client'

import { motion } from 'framer-motion'

const stats = [
  { value: '7', label: 'Service Tiers' },
  { value: '2', label: 'Client Tracks' },
  { value: '10+', label: 'Projects Launched' },
  { value: 'AI-Native', label: 'From Day One' },
]

export default function SocialProof() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className="border-t border-b border-[#E2DED8] bg-white py-6"
      aria-label="Studio stats"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <p className="text-[#888580] text-sm font-medium shrink-0">
            Trusted by founders &amp; business owners across the DMV
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-3 sm:justify-end">
            {stats.map((stat, i) => (
              <div key={i} className="flex items-center gap-2">
                {i > 0 && (
                  <span className="hidden sm:inline text-[#E2DED8]" aria-hidden="true">·</span>
                )}
                <span className="text-[#0C0C0C] font-semibold text-sm">{stat.value}</span>
                <span className="text-[#888580] text-sm">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}
