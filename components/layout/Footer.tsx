import Link from 'next/link'

const footerLinks = {
  Services: [
    { label: 'AI Quick Setup', href: '/services#track-a' },
    { label: 'AI Business Build-Out', href: '/services#track-a' },
    { label: 'Micro Tool Build', href: '/services#track-a' },
    { label: 'Founder Build Sprint', href: '/services#track-b' },
    { label: 'Venture Launch', href: '/services#track-b' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Work', href: '/work' },
    { label: 'Store', href: '/store' },
    { label: 'Contact', href: '/contact' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-[#1A1A2E] text-[#F6F4EF]" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div
              className="text-2xl mb-4"
              style={{ fontFamily: 'var(--font-anton)' }}
            >
              STACKD STUDIO
            </div>
            <p className="text-[#888580] text-sm leading-relaxed max-w-xs mb-6">
              Build Lab & Creative Venture Studio. We design, build, and launch intelligent systems and ventures powered by AI, craft, and strategic thinking.
            </p>
            <a
              href="mailto:hello@stackdstudio.com"
              className="text-[#E8C547] text-sm font-medium hover:underline"
            >
              hello@stackdstudio.com
            </a>
            <p className="text-[#888580] text-xs mt-2">Midlothian, VA</p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3
                className="text-xs uppercase tracking-widest text-[#888580] mb-4"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {heading}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#E2DED8] hover:text-[#E8C547] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-[#E2DED8]/20 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#888580] text-xs">
            © {new Date().getFullYear()} Stackd Studio LLC. A Hicks Virtual Solutions company.
          </p>
          <p className="text-[#888580] text-xs">
            Midlothian, VA · stackdstudio.com
          </p>
        </div>
      </div>
    </footer>
  )
}
