'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useCart } from '@/components/CartContext'

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Business Brain', href: '/business-brain' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Careers', href: '/careers' },
  { label: 'Store', href: '/store' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { totalItems } = useCart()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

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
            aria-label="Stackd Studios AI home"
          >
            <Image
              src="/logo.png"
              alt="Stackd Studios AI"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <span className="text-[#0C0C0C] font-semibold text-base tracking-tight font-[family-name:var(--font-instrument-sans)]">
              Stackd Studios AI
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[#888580] hover:text-[#0C0C0C] text-sm font-medium transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Cart icon */}
          <Link
            href="/cart"
            className="hidden md:flex items-center justify-center relative w-10 h-10 rounded-lg hover:bg-[#E2DED8] transition-colors"
            aria-label={`Cart — ${totalItems} item${totalItems !== 1 ? 's' : ''}`}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M2 2h2l2.5 10h9l1.5-7H6" stroke="#0C0C0C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="9" cy="16.5" r="1.5" fill="#0C0C0C"/>
              <circle cx="14" cy="16.5" r="1.5" fill="#0C0C0C"/>
            </svg>
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#FFD84D] text-[#0C0C0C] text-[10px] font-bold rounded-full flex items-center justify-center leading-none">
                {totalItems}
              </span>
            )}
          </Link>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center gap-2 bg-[#0C0C0C] hover:bg-[#FFD84D] text-white hover:text-[#0C0C0C] text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 hover:scale-[1.02]"
            aria-label="Book a free discovery call with Stackd Studios AI"
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
              className={`block w-5 h-0.5 bg-[#0C0C0C] transition-all duration-300 ${
                menuOpen ? 'rotate-45 translate-y-[7px]' : ''
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-[#0C0C0C] transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-[#0C0C0C] transition-all duration-300 ${
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
        {/* Drawer header */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-[#E2DED8]">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2.5"
            aria-label="Stackd Studios AI home"
          >
            <Image src="/logo.png" alt="Stackd Studios AI" width={36} height={36} className="rounded-lg" />
            <span className="text-[#0C0C0C] font-semibold text-sm tracking-tight font-[family-name:var(--font-instrument-sans)]">
              Stackd Studios AI
            </span>
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="w-10 h-10 flex items-center justify-center rounded-md hover:bg-[#E2DED8] transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M4 4l12 12M16 4L4 16" stroke="#0C0C0C" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        <nav className="flex-1 flex flex-col justify-start pt-8 px-8 overflow-y-auto" aria-label="Mobile navigation">
          <ul className="flex flex-col gap-3" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-[#0C0C0C] text-[clamp(22px,6vw,34px)] font-[family-name:var(--font-anton)] hover:text-[#FFD84D] transition-colors block leading-tight py-1"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 mb-4 flex flex-col gap-3">
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="inline-flex items-center justify-center bg-[#0C0C0C] hover:bg-[#FFD84D] text-white hover:text-[#0C0C0C] text-base font-semibold px-8 py-4 rounded-xl transition-all duration-200 w-full min-h-[44px]"
            >
              Book a Call
            </Link>
            <Link
              href="/cart"
              onClick={() => setMenuOpen(false)}
              className="inline-flex items-center justify-center gap-2 border-2 border-[#0C0C0C] text-[#0C0C0C] text-base font-semibold px-8 py-4 rounded-xl transition-all duration-200 w-full min-h-[44px] relative"
            >
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M2 2h2l2.5 10h9l1.5-7H6" stroke="#0C0C0C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="9" cy="16.5" r="1.5" fill="#0C0C0C"/>
                <circle cx="14" cy="16.5" r="1.5" fill="#0C0C0C"/>
              </svg>
              Cart
              {totalItems > 0 && (
                <span className="bg-[#FFD84D] text-[#0C0C0C] text-xs font-bold px-2 py-0.5 rounded-full">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </nav>
      </div>
    </>
  )
}
