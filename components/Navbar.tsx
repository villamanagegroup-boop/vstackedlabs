'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Business Brain', href: '/business-brain' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Careers', href: '/careers' },
  { label: 'Store', href: '/store' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#F6F4EF]/95 backdrop-blur-[12px] border-b border-[#E2DED8] shadow-sm'
            : 'bg-transparent'
        }`}
        role="banner"
      >
        <nav
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group"
            aria-label="Stackd Studio home"
          >
            <div className="w-7 h-7 bg-[#1A1A2E] rounded flex items-center justify-center group-hover:bg-[#E8C547] transition-colors duration-200">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <rect x="1" y="1" width="5" height="5" fill="white" rx="0.5"/>
                <rect x="8" y="1" width="5" height="5" fill="white" rx="0.5"/>
                <rect x="1" y="8" width="5" height="5" fill="white" rx="0.5"/>
                <rect x="8" y="8" width="5" height="5" fill="white" rx="0.5"/>
              </svg>
            </div>
            <span className="text-[#1A1A2E] font-semibold text-base tracking-tight font-[family-name:var(--font-instrument-sans)]">
              Stackd Studio
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[#888580] hover:text-[#1A1A2E] text-sm font-medium transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center gap-2 bg-[#1A1A2E] hover:bg-[#E8C547] text-white hover:text-[#1A1A2E] text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 hover:scale-[1.02]"
            aria-label="Book a free discovery call with Stackd Studio"
          >
            Book a Call
          </Link>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] rounded-md hover:bg-[#E2DED8] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <span
              className={`block w-5 h-0.5 bg-[#1A1A2E] transition-all duration-300 ${
                menuOpen ? 'rotate-45 translate-y-[7px]' : ''
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-[#1A1A2E] transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-[#1A1A2E] transition-all duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-[7px]' : ''
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 bg-[#F6F4EF] flex flex-col transition-all duration-300 md:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="h-16" aria-hidden="true" />
        <nav className="flex-1 flex flex-col justify-center px-8" aria-label="Mobile navigation">
          <ul className="flex flex-col gap-6" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-[#1A1A2E] text-4xl font-[family-name:var(--font-anton)] hover:text-[#E8C547] transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="inline-flex items-center justify-center bg-[#1A1A2E] hover:bg-[#E8C547] text-white hover:text-[#1A1A2E] text-lg font-semibold px-8 py-4 rounded-xl transition-all duration-200 w-full min-h-[44px]"
            >
              Book a Call
            </Link>
          </div>
        </nav>
      </div>
    </>
  )
}
