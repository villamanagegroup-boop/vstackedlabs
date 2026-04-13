'use client'

import Link from 'next/link'

const footerColumns = [
  {
    heading: 'Studio',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Our Work', href: '/work' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Careers', href: '/careers' },
      { label: 'Store', href: '/store' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    heading: 'Track A — Business',
    links: [
      { label: 'AI Quick Setup', href: '/services#business-owners' },
      { label: 'AI Business Build-Out', href: '/services#business-owners' },
      { label: 'Micro Tool Build', href: '/services#business-owners' },
      { label: 'AI Retainer', href: '/services#business-owners' },
    ],
  },
  {
    heading: 'Track B — Founders',
    links: [
      { label: 'Strategy Session', href: '/services#founders' },
      { label: 'Founder Build Sprint', href: '/services#founders' },
      { label: 'Venture Launch Package', href: '/services#founders' },
    ],
  },
  {
    heading: 'Connect',
    links: [
      { label: 'hello@stackdstudio.com', href: 'mailto:hello@stackdstudio.com' },
      { label: 'Twitter / X', href: '#' },
      { label: 'LinkedIn', href: '#' },
      { label: 'TikTok', href: '#' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-[#0C0C0C] text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-5 gap-10">
          {/* Logo + tagline */}
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2.5 mb-4 group"
              aria-label="Stackd Studio home"
            >
              <div className="w-7 h-7 bg-[#E8C547] rounded flex items-center justify-center group-hover:bg-white transition-colors duration-200">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <rect x="1" y="1" width="5" height="5" fill="#0C0C0C" rx="0.5"/>
                  <rect x="8" y="1" width="5" height="5" fill="#0C0C0C" rx="0.5"/>
                  <rect x="1" y="8" width="5" height="5" fill="#0C0C0C" rx="0.5"/>
                  <rect x="8" y="8" width="5" height="5" fill="#0C0C0C" rx="0.5"/>
                </svg>
              </div>
              <span className="font-semibold text-base tracking-tight font-[family-name:var(--font-instrument-sans)]">
                Stackd Studio
              </span>
            </Link>
            <p className="text-[#6B7280] text-sm leading-relaxed mb-3">
              Build Lab &amp; Venture Studio
            </p>
            <p className="text-[#4B4F55] text-xs">
              A Hicks Virtual Solutions company
            </p>
            <p className="text-[#4B4F55] text-xs mt-1">
              United States
            </p>
          </div>

          {/* Footer columns */}
          {footerColumns.map((col) => (
            <div key={col.heading}>
              <h3 className="text-white text-xs font-semibold uppercase tracking-[0.1em] mb-5 font-[family-name:var(--font-instrument-sans)]">
                {col.heading}
              </h3>
              <ul className="flex flex-col gap-3" role="list">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[#9CA3AF] hover:text-[#E8C547] text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10" />

        {/* Bottom row */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#6B7280] text-sm">
            © {new Date().getFullYear()} Stackd Studio LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-[#6B7280] hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <span className="text-[#374151]" aria-hidden="true">·</span>
            <Link href="#" className="text-[#6B7280] hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
