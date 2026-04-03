'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#F6F4EF]"
      aria-label="Hero section"
    >
      {/* Dot grid */}
      <div className="dot-grid absolute inset-0 pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block bg-[#1A1A2E] text-[#E8C547] text-xs font-semibold uppercase tracking-[0.12em] px-3 py-1.5 rounded-full mb-6">
                Build Lab &amp; Creative Venture Studio
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[clamp(40px,6vw,72px)] leading-[1.02] text-[#0C0C0C] mb-6"
              style={{ fontFamily: 'var(--font-anton)' }}
            >
              DESIGN. BUILD.<br />
              <span className="text-[#1A1A2E]">LAUNCH SMARTER.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#888580] text-xl leading-relaxed mb-10 max-w-[520px]"
            >
              Stackd Studio builds intelligent systems and ventures — giving business owners and founders the power to operate smarter, move faster, and build something that lasts.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#1A1A2E] hover:bg-[#0f0f1a] text-[#F6F4EF] font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 hover:scale-[1.02] min-h-[44px] text-base"
              >
                Book a Call →
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 border-2 border-[#1A1A2E] text-[#1A1A2E] hover:bg-[#1A1A2E] hover:text-[#F6F4EF] font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 hover:scale-[1.02] min-h-[44px] text-base"
              >
                View Services
              </Link>
            </motion.div>
          </div>

          {/* Right — code card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="hidden lg:block"
            aria-hidden="true"
          >
            <div
              className="float-anim bg-[#1A1A2E] rounded-2xl p-6 border border-white/10 shadow-2xl w-full max-w-[480px] ml-auto"
              style={{ boxShadow: '0 24px 80px rgba(26,26,46,0.2), 0 8px 32px rgba(0,0,0,0.15)' }}
            >
              {/* Window chrome */}
              <div className="flex items-center gap-2 mb-6">
                <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                <span className="w-3 h-3 rounded-full bg-[#28C840]" />
                <span className="ml-3 text-[#888580] text-xs" style={{ fontFamily: 'var(--font-mono)' }}>
                  stackd-agent.ts
                </span>
              </div>

              {/* Code */}
              <div className="text-sm leading-7" style={{ fontFamily: 'var(--font-mono)' }}>
                <div className="text-[#5A6A7A]">{'// Stackd Studio — Build Engine'}</div>
                <div className="h-3" />
                <div>
                  <span className="text-[#E8C547]">const</span>
                  <span className="text-white/80"> studio = </span>
                  <span className="text-[#E8C547]">new</span>
                  <span className="text-[#60C8A8]"> StackdStudio</span>
                  <span className="text-white/80">{'({'}</span>
                </div>
                <div>
                  <span className="text-[#93C5FD]">{'  track'}</span>
                  <span className="text-white/80">{': '}</span>
                  <span className="text-[#F9A8B2]">{'"business-owner"'}</span>
                  <span className="text-white/80">,</span>
                </div>
                <div>
                  <span className="text-[#93C5FD]">{'  goal'}</span>
                  <span className="text-white/80">{': '}</span>
                  <span className="text-[#F9A8B2]">{'"automate operations"'}</span>
                  <span className="text-white/80">,</span>
                </div>
                <div>
                  <span className="text-[#93C5FD]">{'  timeline'}</span>
                  <span className="text-white/80">{': '}</span>
                  <span className="text-[#F9A8B2]">{'"2 weeks"'}</span>
                  <span className="text-white/80">,</span>
                </div>
                <div className="text-white/80">{'}'});</div>
                <div className="h-3" />
                <div>
                  <span className="text-[#E8C547]">await</span>
                  <span className="text-white/80"> studio.</span>
                  <span className="text-[#60C8A8]">build</span>
                  <span className="text-white/80">(</span>
                </div>
                <div>
                  <span className="text-[#F9A8B2]">{'  "something that lasts"'}</span>
                </div>
                <div className="text-white/80">);</div>
              </div>

              {/* Terminal output */}
              <div className="mt-6 pt-4 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <span className="text-[#28C840] text-xs" style={{ fontFamily: 'var(--font-mono)' }}>✓</span>
                  <span className="text-[#888580] text-xs" style={{ fontFamily: 'var(--font-mono)' }}>
                    System initialized. Ready to build.
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[#E8C547] text-xs" style={{ fontFamily: 'var(--font-mono)' }}>→</span>
                  <span className="text-[#E8C547] text-xs" style={{ fontFamily: 'var(--font-mono)' }}>
                    Proposal generated in 0.4s
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
