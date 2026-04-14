'use client'

import { useState, useRef, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { submitLead } from './actions'
import { useToast } from '@/components/ToastProvider'

const trackOptions = [
  { value: '', label: 'Which track are you on?' },
  { value: 'Track A — Business Owner', label: 'Track A — Business Owner' },
  { value: 'Track B — Founder', label: 'Track B — Founder' },
  { value: 'Both / Not sure', label: 'Both / Not sure yet' },
]

const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'loading'>('idle')
  const formRef = useRef<HTMLFormElement>(null)
  const { toast } = useToast()

  useEffect(() => {
    if (!calendlyUrl) return
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)
    return () => { document.body.removeChild(script) }
  }, [])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    const formData = new FormData(e.currentTarget)

    const result = await submitLead(formData)

    if (result.success) {
      setStatus('idle')
      formRef.current?.reset()
      toast("Message sent! We'll be in touch within 24 hours.", 'success')
    } else {
      setStatus('idle')
      toast(result.error, 'error')
    }
  }

  return (
    <>
      <Navbar />
      <main className="bg-[#F6F4EF]">
        {/* Hero */}
        <section className="pt-32 pb-16 bg-white border-b border-[#E2DED8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-[#888580] text-xs font-semibold uppercase tracking-[0.12em] mb-4">Contact</p>
              <h1 className="text-[clamp(40px,6vw,72px)] text-[#0C0C0C] leading-[1.0] mb-6">
                Let&apos;s build something together.
              </h1>
              <p className="text-[#888580] text-xl leading-relaxed">
                Book a free 20-minute discovery call or send us a message below. We respond within 24 hours.
              </p>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* Left — Calendly + Info */}
            <div className="flex flex-col gap-8">
              {/* Calendly embed */}
              <div>
                <h2 className="text-2xl text-[#0C0C0C] mb-2">Book a Free Discovery Call</h2>
                <p className="text-[#888580] text-sm mb-6">
                  20 minutes. No pitch, no pressure. Just a real conversation about what you&apos;re building.
                </p>

                {calendlyUrl ? (
                  <div
                    className="calendly-inline-widget rounded-2xl overflow-hidden border border-[#E2DED8] w-full"
                    data-url={calendlyUrl}
                    style={{ height: '660px' }}
                  />
                ) : (
                  <div className="bg-white rounded-2xl border border-[#E2DED8] p-8 text-center">
                    <div className="w-12 h-12 bg-[#F6F4EF] rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <rect x="3" y="4" width="18" height="18" rx="2" stroke="#888580" strokeWidth="1.5"/>
                        <path d="M3 9h18M8 2v4M16 2v4" stroke="#888580" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <h3 className="text-lg text-[#0C0C0C] mb-2">Send Us a Message</h3>
                    <p className="text-[#888580] text-sm mb-4">
                      Fill out the form below and we&apos;ll get back to you within 24 hours to set up a call.
                    </p>
                    <a
                      href="#send-message"
                      className="inline-flex items-center justify-center bg-[#0C0C0C] hover:bg-[#E8C547] text-white hover:text-[#0C0C0C] font-semibold px-6 py-3 rounded-xl text-sm transition-all duration-200 min-h-[44px]"
                    >
                      Send a Message
                    </a>
                  </div>
                )}
              </div>

              {/* Contact info */}
              <div className="bg-[#0C0C0C] rounded-2xl p-7 flex flex-col gap-5">
                <div>
                  <p className="text-[#888580] text-xs font-semibold uppercase tracking-[0.1em] mb-1">Location</p>
                  <p className="text-white font-medium">Remote — United States</p>
                </div>

                <div>
                  <p className="text-[#888580] text-xs font-semibold uppercase tracking-[0.1em] mb-1">Response Time</p>
                  <p className="text-white font-medium">Within 24 hours</p>
                </div>

                <div className="border-t border-white/10 pt-4">
                  <p className="text-[#9CA3AF] text-sm leading-relaxed italic">
                    &ldquo;Every project starts with a conversation. No pressure, no commitment — just clarity.&rdquo;
                  </p>
                  <p className="text-[#E8C547] text-sm font-medium mt-2">— Chanel Gray, Founder &amp; CEO</p>
                </div>
              </div>
            </div>

            {/* Right — Form */}
            <div id="send-message">
              <h2 className="text-2xl text-[#0C0C0C] mb-2">Send a Message</h2>
              <p className="text-[#888580] text-sm mb-8">
                Tell us about your project, your timeline, and which track you&apos;re on. We&apos;ll respond within 24 hours.
              </p>

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="flex flex-col gap-5"
                aria-label="Contact form"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-[#0C0C0C] mb-2">
                      Full Name <span className="text-[#E8C547]" aria-hidden="true">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      autoComplete="name"
                      placeholder="Jane Smith"
                      className="w-full bg-white border border-[#E2DED8] rounded-xl px-4 py-3 text-[#0C0C0C] placeholder:text-[#888580] transition-all min-h-[44px] text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-[#0C0C0C] mb-2">
                      Email Address <span className="text-[#E8C547]" aria-hidden="true">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      autoComplete="email"
                      placeholder="jane@company.com"
                      className="w-full bg-white border border-[#E2DED8] rounded-xl px-4 py-3 text-[#0C0C0C] placeholder:text-[#888580] transition-all min-h-[44px] text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="track" className="block text-sm font-semibold text-[#0C0C0C] mb-2">
                    Which track are you on?
                  </label>
                  <select
                    id="track"
                    name="track"
                    className="w-full bg-white border border-[#E2DED8] rounded-xl px-4 py-3 text-[#0C0C0C] transition-all min-h-[44px] text-sm appearance-none"
                  >
                    {trackOptions.map((opt) => (
                      <option key={opt.value} value={opt.value} disabled={opt.value === ''}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-[#0C0C0C] mb-2">
                    Tell us about your project <span className="text-[#E8C547]" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="What are you trying to build? What have you already tried? What's your timeline and budget range? The more you share, the better we can prepare."
                    className="w-full bg-white border border-[#E2DED8] rounded-xl px-4 py-3 text-[#0C0C0C] placeholder:text-[#888580] transition-all resize-none text-sm"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="bg-[#0C0C0C] hover:bg-[#E8C547] disabled:opacity-60 disabled:cursor-not-allowed text-white hover:text-[#0C0C0C] font-semibold py-3.5 px-8 rounded-xl transition-all duration-200 hover:scale-[1.02] min-h-[44px] text-base w-full"
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>

                <p className="text-[#888580] text-xs text-center">
                  We respond within 24 hours. Your info is never shared or sold.
                </p>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
