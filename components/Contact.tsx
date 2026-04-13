'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const budgetOptions = [
  { value: '', label: 'Select your budget range' },
  { value: '500-1500', label: '$500 – $1,500 (AI Quick Setup)' },
  { value: '1500-4000', label: '$1,500 – $4,000 (AI Integration)' },
  { value: '4000-10000', label: '$4,000 – $10,000 (Full App Build)' },
  { value: '10000+', label: '$10,000+ (Custom Development)' },
]

const socialLinks = [
  {
    label: 'Twitter / X',
    href: '#',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: '#',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: 'TikTok',
    href: '#',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.77a4.85 4.85 0 01-1.01-.08z"/>
      </svg>
    ),
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: '',
    budget: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const mailtoHref = `/contact?name=${encodeURIComponent(formData.name)}&email=${encodeURIComponent(formData.email)}&budget=${encodeURIComponent(formData.budget)}&description=${encodeURIComponent(formData.description)}`

  return (
    <section
      id="contact"
      className="py-24 bg-white"
      aria-labelledby="contact-heading"
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
            Contact
          </p>
          <h2
            id="contact-heading"
            className="text-[clamp(28px,4vw,48px)] font-bold tracking-[-0.02em] text-[#0A0A0A] mb-4"
          >
            Let&apos;s build something together.
          </h2>
          <p className="text-[#6B6B6B] text-lg">
            Tell us about your project and we&apos;ll get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              action={mailtoHref}
              method="get"
              className="flex flex-col gap-5"
              aria-label="Project inquiry form"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-[#0A0A0A] mb-2">
                  Full Name <span className="text-[#7C3AED]" aria-hidden="true">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                  placeholder="Jane Smith"
                  className="w-full border border-[#E5E5E5] rounded-xl px-4 py-3 text-[#0A0A0A] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#7C3AED] focus:border-transparent transition-all min-h-[44px] text-sm"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-[#0A0A0A] mb-2">
                  Email Address <span className="text-[#7C3AED]" aria-hidden="true">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                  placeholder="jane@company.com"
                  className="w-full border border-[#E5E5E5] rounded-xl px-4 py-3 text-[#0A0A0A] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#7C3AED] focus:border-transparent transition-all min-h-[44px] text-sm"
                />
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-semibold text-[#0A0A0A] mb-2">
                  Project Description <span className="text-[#7C3AED]" aria-hidden="true">*</span>
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell us what you want to build, your timeline, and any context that would help us understand your vision..."
                  className="w-full border border-[#E5E5E5] rounded-xl px-4 py-3 text-[#0A0A0A] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#7C3AED] focus:border-transparent transition-all resize-none text-sm"
                />
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-semibold text-[#0A0A0A] mb-2">
                  Budget Range
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full border border-[#E5E5E5] rounded-xl px-4 py-3 text-[#0A0A0A] focus:outline-none focus:ring-2 focus:ring-[#7C3AED] focus:border-transparent transition-all min-h-[44px] text-sm bg-white appearance-none"
                >
                  {budgetOptions.map((opt) => (
                    <option key={opt.value} value={opt.value} disabled={opt.value === ''}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className="bg-[#7C3AED] hover:bg-[#5B21B6] text-white font-semibold py-3.5 px-8 rounded-xl transition-all duration-200 hover:scale-[1.02] min-h-[44px] text-base w-full mt-1"
                aria-label="Send project inquiry message"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col gap-8"
          >
            <div className="bg-[#FAFAFA] rounded-2xl p-8 border border-[#E5E5E5]">
              <div className="flex flex-col gap-6">
                {/* Response time */}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#6B6B6B] mb-1">
                    Response Time
                  </p>
                  <p className="text-[#0A0A0A] font-medium">We respond within 24 hours</p>
                </div>

                {/* Trust note */}
                <div className="border-t border-[#E5E5E5] pt-5">
                  <p className="text-[#6B6B6B] text-sm leading-relaxed italic">
                    &ldquo;Every project starts with a conversation. No pressure, no commitment.&rdquo;
                  </p>
                </div>

                {/* Socials */}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#6B6B6B] mb-3">
                    Follow Us
                  </p>
                  <div className="flex items-center gap-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        aria-label={`Follow VStacked Labs on ${social.label}`}
                        className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#E5E5E5] text-[#6B6B6B] hover:text-[#7C3AED] hover:border-[#7C3AED] transition-all duration-200"
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick stat strip */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Projects Launched', value: '10+' },
                { label: 'Avg. Response Time', value: '< 24h' },
                { label: 'Service Tiers', value: '4' },
                { label: 'Stack', value: 'Next.js + Supabase' },
              ].map((stat) => (
                <div key={stat.label} className="bg-[#EDE9FE] rounded-xl p-4">
                  <p className="text-[#7C3AED] text-xl font-bold">{stat.value}</p>
                  <p className="text-[#6B6B6B] text-xs mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
