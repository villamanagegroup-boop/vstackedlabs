'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Work', href: '/work' },
  { label: 'Store', href: '/store' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#F6F4EF]/90 backdrop-blur-[12px] border-b border-[#E2DED8] shadow-sm'
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
            className="flex items-center gap-2 group"
            aria-label="Stackd Studio home"
          >
            <div
              className="w-7 h-7 rounded-md flex items-center justify-center text-[#F6F4EF] text-xs font-bold"
              style={{ background: '#1A1A2E', fontFamily: 'var(--font-anton)' }}
              aria-hidden="true"
            >
              S
            </div>
            <span
              className="text-[#0C0C0C] text-lg tracking-tight"
              style={{ fontFamily: 'var(--font-anton)' }}
            >
              STACKD STUDIO
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm transition-colors duration-200 ${
                    pathname === link.href
                      ? 'text-[#1A1A2E] font-semibold'
                      : 'text-[#888580] hover:text-[#0C0C0C] font-medium'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center gap-2 bg-[#1A1A2E] hover:bg-[#0f0f1a] text-[#F6F4EF] text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 hover:scale-[1.02]"
            aria-label="Book a call with Stackd Studio"
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
            <span className={`block w-5 h-0.5 bg-[#0C0C0C] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block w-5 h-0.5 bg-[#0C0C0C] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-[#0C0C0C] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
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
                  className="text-[#0C0C0C] text-3xl tracking-tight hover:text-[#1A1A2E] transition-colors"
                  style={{ fontFamily: 'var(--font-anton)' }}
                >
                  {link.label.toUpperCase()}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[#1A1A2E] text-[#F6F4EF] text-lg font-semibold px-8 py-4 rounded-xl w-full min-h-[44px]"
            >
              Book a Call
            </Link>
          </div>
        </nav>
      </div>
    </>
  )
}
