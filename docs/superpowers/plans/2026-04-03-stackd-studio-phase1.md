# Stackd Studio Phase 1 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the Stackd Studio website Phase 1 — Homepage, Services, About, Work pages plus Coming Soon shells for Store and Contact — using the navy/gold design system on top of the existing Next.js 16 + Tailwind v4 scaffold.

**Architecture:** Full rip-and-rebuild. All existing components and globals.css are deleted. New components are organized by page under `components/`. The App Router layout in `app/layout.tsx` wraps all pages with a shared Navbar and Footer. Server components everywhere except where interactivity requires `'use client'`.

**Tech Stack:** Next.js 16.2.2 App Router, Tailwind CSS v4, Framer Motion 12, React 19, TypeScript 5, Google Fonts (Anton, Instrument Sans, JetBrains Mono)

---

## File Map

| File | Action | Responsibility |
|------|--------|----------------|
| `app/globals.css` | Replace | Design tokens, Tailwind @theme, dot-grid, animations |
| `app/layout.tsx` | Replace | Root layout, font loading, Navbar + Footer wrapper |
| `app/page.tsx` | Replace | Homepage — assembles all home sections |
| `app/services/page.tsx` | Create | Services page |
| `app/about/page.tsx` | Create | About page |
| `app/work/page.tsx` | Create | Work page |
| `app/store/page.tsx` | Create | Coming Soon shell |
| `app/contact/page.tsx` | Create | Coming Soon shell |
| `components/layout/Navbar.tsx` | Create | Scroll-aware nav, mobile drawer, 5 links + CTA |
| `components/layout/Footer.tsx` | Create | Footer with links, company info |
| `components/home/Hero.tsx` | Create | Two-col hero: copy + code card |
| `components/home/TwoTracks.tsx` | Create | Track A / Track B side-by-side cards |
| `components/home/ServicesPreview.tsx` | Create | 7-tier preview grid |
| `components/home/HowItWorks.tsx` | Create | 4-step process section |
| `components/home/Testimonials.tsx` | Create | 3-card placeholder grid |
| `components/home/CTAStrip.tsx` | Create | Navy full-width CTA band |
| `components/services/TierCard.tsx` | Create | Full-detail service tier card |
| `components/services/TrackSection.tsx` | Create | Track-labeled section with tiers |
| `components/services/AddOns.tsx` | Create | Add-ons section |
| `components/about/Story.tsx` | Create | Narrative + mission blockquote |
| `components/about/Values.tsx` | Create | 2x2 values grid |
| `components/about/TechStack.tsx` | Create | 3-col approach strip |
| `components/about/HVSPortfolio.tsx` | Create | HVS parent company context |
| `components/work/CaseStudyCard.tsx` | Create | Individual case study card |
| `components/work/CaseStudyGrid.tsx` | Create | Filter bar + responsive grid |

**Delete before starting:**
- `components/Hero.tsx`
- `components/Navbar.tsx`
- `components/Footer.tsx`
- `components/Contact.tsx`
- `components/FinalCTA.tsx`
- `components/HowItWorks.tsx`
- `components/OurWork.tsx`
- `components/Pricing.tsx`
- `components/Services.tsx`
- `components/SocialProof.tsx`

---

## Task 1: Cleanup + Design System

**Files:**
- Delete: all 10 files listed above
- Replace: `app/globals.css`
- Replace: `app/layout.tsx`

- [ ] **Step 1: Delete all old component files**

```bash
cd /c/Users/hicks/stackd-studio
rm components/Hero.tsx components/Navbar.tsx components/Footer.tsx \
   components/Contact.tsx components/FinalCTA.tsx components/HowItWorks.tsx \
   components/OurWork.tsx components/Pricing.tsx components/Services.tsx \
   components/SocialProof.tsx
```

- [ ] **Step 2: Create the new `app/globals.css`**

```css
/* app/globals.css */
@import "tailwindcss";

@theme {
  --color-bg: #F6F4EF;
  --color-ink: #0C0C0C;
  --color-navy: #1A1A2E;
  --color-gold: #E8C547;
  --color-white: #FFFFFF;
  --color-muted: #888580;
  --color-border: #E2DED8;
  --color-orange: #F97316;
  --color-blue: #1A4A7A;

  --font-anton: 'Anton', sans-serif;
  --font-sans: 'Instrument Sans', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}

/* ── Dot grid background texture ── */
.dot-grid {
  background-image: radial-gradient(circle, rgba(26,26,46,0.06) 1px, transparent 1px);
  background-size: 24px 24px;
}

/* ── Code card float animation ── */
@keyframes cardFloat {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
}
.float-anim {
  animation: cardFloat 4s ease-in-out infinite;
}

/* ── Scrollbar ── */
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: #F6F4EF; }
::-webkit-scrollbar-thumb { background: #1A1A2E; border-radius: 3px; }

html {
  scroll-behavior: smooth;
}
```

- [ ] **Step 3: Create the new `app/layout.tsx`**

```tsx
// app/layout.tsx
import type { Metadata } from 'next'
import { Anton, Instrument_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-anton',
})

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-sans',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'Stackd Studio — Build Lab & Creative Venture Studio',
  description: 'Stackd Studio designs, builds, and launches intelligent systems and ventures. AI-powered tools, automations, and full venture builds for business owners and founders.',
  keywords: ['AI development', 'venture studio', 'web app development', 'automation', 'Next.js', 'Supabase'],
  openGraph: {
    title: 'Stackd Studio — Build Lab & Creative Venture Studio',
    description: 'Giving business owners and founders the power to operate smarter, move faster, and build something that lasts.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${instrumentSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-[#F6F4EF] text-[#0C0C0C] font-[family-name:var(--font-sans)] antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
```

- [ ] **Step 4: Create stub `app/page.tsx` so the app compiles**

```tsx
// app/page.tsx
export default function HomePage() {
  return <div className="min-h-screen" />
}
```

- [ ] **Step 5: Create placeholder Navbar and Footer so layout.tsx compiles**

Create `components/layout/Navbar.tsx`:
```tsx
// components/layout/Navbar.tsx
export default function Navbar() {
  return <header />
}
```

Create `components/layout/Footer.tsx`:
```tsx
// components/layout/Footer.tsx
export default function Footer() {
  return <footer />
}
```

- [ ] **Step 6: Verify TypeScript compiles with no errors**

```bash
cd /c/Users/hicks/stackd-studio && npx tsc --noEmit
```

Expected: no output (clean compile). If errors appear, fix before continuing.

- [ ] **Step 7: Verify dev server starts**

```bash
npm run dev
```

Expected: server starts on http://localhost:3000 with no errors in terminal. Page is blank (just the stub). Kill with Ctrl+C.

- [ ] **Step 8: Commit**

```bash
git init 2>/dev/null || true
git add -A
git commit -m "feat: replace purple scaffold with navy/gold design system"
```

---

## Task 2: Navbar

**Files:**
- Replace: `components/layout/Navbar.tsx`

- [ ] **Step 1: Replace the stub Navbar with the full implementation**

```tsx
// components/layout/Navbar.tsx
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

  // Close drawer on route change
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
```

- [ ] **Step 2: Verify TypeScript**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Start dev server and visually verify Navbar**

```bash
npm run dev
```

Open http://localhost:3000. Verify: navy logo "S" square + "STACKD STUDIO" wordmark, muted nav links, "Book a Call" button. Resize to mobile and verify hamburger drawer opens/closes. Kill with Ctrl+C.

- [ ] **Step 4: Commit**

```bash
git add components/layout/Navbar.tsx
git commit -m "feat: add Navbar with scroll-aware header and mobile drawer"
```

---

## Task 3: Footer

**Files:**
- Replace: `components/layout/Footer.tsx`

- [ ] **Step 1: Replace stub Footer**

```tsx
// components/layout/Footer.tsx
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
```

- [ ] **Step 2: Verify TypeScript**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add components/layout/Footer.tsx
git commit -m "feat: add Footer with nav links and company info"
```

---

## Task 4: Hero Section

**Files:**
- Create: `components/home/Hero.tsx`

- [ ] **Step 1: Create the Hero component**

```tsx
// components/home/Hero.tsx
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
            <div className="float-anim bg-[#1A1A2E] rounded-2xl p-6 border border-white/10 shadow-2xl w-full max-w-[480px] ml-auto"
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
```

- [ ] **Step 2: Add Hero to homepage**

```tsx
// app/page.tsx
import Hero from '@/components/home/Hero'

export default function HomePage() {
  return (
    <>
      <Hero />
    </>
  )
}
```

- [ ] **Step 3: Verify TypeScript**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 4: Start dev server and visually verify Hero**

```bash
npm run dev
```

Open http://localhost:3000. Verify: Anton headline "DESIGN. BUILD. LAUNCH SMARTER.", navy eyebrow pill, two CTA buttons, code card on right (hidden on mobile). Code card has gold keywords, teal function names, pink strings. Kill with Ctrl+C.

- [ ] **Step 5: Commit**

```bash
git add components/home/Hero.tsx app/page.tsx
git commit -m "feat: add Hero section with code editor card"
```

---

## Task 5: Two Tracks Section

**Files:**
- Create: `components/home/TwoTracks.tsx`

- [ ] **Step 1: Create TwoTracks component**

```tsx
// components/home/TwoTracks.tsx
import Link from 'next/link'

const tracks = [
  {
    id: 'a',
    label: 'Track A',
    audience: 'Business Owners',
    headline: 'OPERATE SMARTER WITH AI',
    description: 'You have a running business and want to use AI to streamline operations, reduce manual work, and build tools that give you back time.',
    services: ['AI Quick Setup', 'AI Business Build-Out', 'Micro Tool Build', 'AI Retainer'],
    accentColor: '#1A4A7A',
    tagBg: 'rgba(26,74,122,0.08)',
    pillBg: 'rgba(26,74,122,0.1)',
    pillColor: '#1A4A7A',
    borderColor: '#1A4A7A',
  },
  {
    id: 'b',
    label: 'Track B',
    audience: 'Founders',
    headline: 'BUILD YOUR VENTURE',
    description: 'You have an idea — a product, a platform, a company — and you need a build partner to turn the vision into something real and launchable.',
    services: ['Strategy Session', 'Founder Build Sprint', 'Venture Launch Package'],
    accentColor: '#F97316',
    tagBg: 'rgba(249,115,22,0.08)',
    pillBg: 'rgba(249,115,22,0.1)',
    pillColor: '#F97316',
    borderColor: '#F97316',
  },
]

export default function TwoTracks() {
  return (
    <section className="py-24 bg-[#F6F4EF]" aria-labelledby="tracks-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2
            id="tracks-heading"
            className="text-[clamp(28px,4vw,44px)] text-[#0C0C0C] mb-4"
            style={{ fontFamily: 'var(--font-anton)' }}
          >
            TWO TRACKS. ONE STUDIO.
          </h2>
          <p className="text-[#888580] text-lg max-w-2xl mx-auto">
            Whether you're running an established business or building something from scratch, Stackd Studio has a path built for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {tracks.map((track) => (
            <div
              key={track.id}
              className="bg-white rounded-2xl p-8 border border-[#E2DED8]"
              style={{ borderLeft: `4px solid ${track.borderColor}` }}
            >
              <div
                className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
                style={{ background: track.tagBg, color: track.accentColor }}
              >
                {track.label} — {track.audience}
              </div>

              <h3
                className="text-2xl text-[#0C0C0C] mb-3"
                style={{ fontFamily: 'var(--font-anton)' }}
              >
                {track.headline}
              </h3>

              <p className="text-[#888580] text-sm leading-relaxed mb-6">
                {track.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {track.services.map((service) => (
                  <span
                    key={service}
                    className="text-xs font-medium px-3 py-1 rounded-full"
                    style={{ background: track.pillBg, color: track.accentColor }}
                  >
                    {service}
                  </span>
                ))}
              </div>

              <Link
                href="/services"
                className="text-sm font-semibold transition-colors"
                style={{ color: track.accentColor }}
              >
                See services →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Add TwoTracks to homepage**

```tsx
// app/page.tsx
import Hero from '@/components/home/Hero'
import TwoTracks from '@/components/home/TwoTracks'

export default function HomePage() {
  return (
    <>
      <Hero />
      <TwoTracks />
    </>
  )
}
```

- [ ] **Step 3: Verify TypeScript and visual**

```bash
npx tsc --noEmit && npm run dev
```

Open http://localhost:3000. Scroll past hero. Verify: two-col cards with blue (Track A) and orange (Track B) left borders, service pills, "See services →" links. Kill with Ctrl+C.

- [ ] **Step 4: Commit**

```bash
git add components/home/TwoTracks.tsx app/page.tsx
git commit -m "feat: add Two Tracks section to homepage"
```

---

## Task 6: Services Preview Section

**Files:**
- Create: `components/home/ServicesPreview.tsx`

- [ ] **Step 1: Create ServicesPreview component**

```tsx
// components/home/ServicesPreview.tsx
import Link from 'next/link'

type Tier = {
  id: string
  name: string
  price: string
  description: string
  track: 'A' | 'B' | 'Both'
}

const tiers: Tier[] = [
  {
    id: 'T1',
    name: 'AI Quick Setup',
    price: '$297',
    description: 'Custom Claude prompt library, one workflow automation, and an orientation call.',
    track: 'A',
  },
  {
    id: 'T2',
    name: 'AI Business Build-Out',
    price: '$797',
    description: 'Full AI system across 3 workflows, two calls, and a complete Drive folder delivery.',
    track: 'A',
  },
  {
    id: 'T3',
    name: 'Micro Tool Build',
    price: '$500–$1,200',
    description: 'A single-function tool or app built and deployed in one week.',
    track: 'A',
  },
  {
    id: 'T4',
    name: 'AI Retainer',
    price: '$597/mo',
    description: 'Monthly AI support, new prompts, team training, and async help.',
    track: 'A',
  },
  {
    id: 'T5',
    name: 'Strategy Session',
    price: '$297–$500',
    description: '90-minute idea architecture session with a business model doc and roadmap.',
    track: 'B',
  },
  {
    id: 'T6',
    name: 'Founder Build Sprint',
    price: '$2,500–$6,000',
    description: 'Idea to working MVP in 2 weeks — model, brand, product, and launch.',
    track: 'B',
  },
  {
    id: 'T7',
    name: 'Venture Launch Package',
    price: '$8,000–$15,000',
    description: 'Full venture build — strategy, complete tech stack, and launch execution.',
    track: 'Both',
  },
]

const trackStyles = {
  A: {
    badge: 'Track A',
    bg: 'bg-white',
    badgeBg: 'rgba(26,74,122,0.08)',
    badgeColor: '#1A4A7A',
    border: 'border-[#E2DED8]',
  },
  B: {
    badge: 'Track B',
    bg: 'bg-white',
    badgeBg: 'rgba(249,115,22,0.08)',
    badgeColor: '#F97316',
    border: 'border-[#E2DED8]',
  },
  Both: {
    badge: 'Both Tracks',
    bg: 'bg-[#1A1A2E]',
    badgeBg: 'rgba(232,197,71,0.15)',
    badgeColor: '#E8C547',
    border: 'border-[#1A1A2E]',
  },
}

export default function ServicesPreview() {
  return (
    <section className="py-24 bg-white" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2
            id="services-heading"
            className="text-[clamp(28px,4vw,44px)] text-[#0C0C0C] mb-4"
            style={{ fontFamily: 'var(--font-anton)' }}
          >
            WHAT WE OFFER
          </h2>
          <p className="text-[#888580] text-lg max-w-2xl mx-auto">
            Seven service tiers across two tracks — built for where you are and where you're going.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {tiers.map((tier) => {
            const style = trackStyles[tier.track]
            const isNavy = tier.track === 'Both'
            return (
              <div
                key={tier.id}
                className={`rounded-xl p-6 border ${style.bg} ${style.border} flex flex-col`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-xs font-bold tracking-widest"
                    style={{ fontFamily: 'var(--font-mono)', color: isNavy ? '#E8C547' : '#888580' }}
                  >
                    {tier.id}
                  </span>
                  <span
                    className="text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full"
                    style={{ background: style.badgeBg, color: style.badgeColor }}
                  >
                    {style.badge}
                  </span>
                </div>

                <h3
                  className={`text-lg mb-1 ${isNavy ? 'text-white' : 'text-[#0C0C0C]'}`}
                  style={{ fontFamily: 'var(--font-anton)' }}
                >
                  {tier.name}
                </h3>

                <p
                  className="text-xl font-semibold mb-3"
                  style={{ color: isNavy ? '#E8C547' : '#1A1A2E' }}
                >
                  {tier.price}
                </p>

                <p className={`text-sm leading-relaxed flex-1 ${isNavy ? 'text-white/60' : 'text-[#888580]'}`}>
                  {tier.description}
                </p>

                <Link
                  href="/services"
                  className={`mt-5 text-sm font-semibold transition-colors ${
                    isNavy ? 'text-[#E8C547] hover:text-white' : 'text-[#1A1A2E] hover:text-[#1A4A7A]'
                  }`}
                >
                  Learn more →
                </Link>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-[#1A1A2E] hover:bg-[#0f0f1a] text-[#F6F4EF] font-semibold px-8 py-3.5 rounded-xl transition-all duration-200"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Add to homepage**

```tsx
// app/page.tsx
import Hero from '@/components/home/Hero'
import TwoTracks from '@/components/home/TwoTracks'
import ServicesPreview from '@/components/home/ServicesPreview'

export default function HomePage() {
  return (
    <>
      <Hero />
      <TwoTracks />
      <ServicesPreview />
    </>
  )
}
```

- [ ] **Step 3: Verify TypeScript and visual**

```bash
npx tsc --noEmit && npm run dev
```

Verify: 7-card grid, T1–T6 white cards with track badges, T7 navy card with gold accents. Kill with Ctrl+C.

- [ ] **Step 4: Commit**

```bash
git add components/home/ServicesPreview.tsx app/page.tsx
git commit -m "feat: add Services Preview grid to homepage"
```

---

## Task 7: How It Works Section

**Files:**
- Create: `components/home/HowItWorks.tsx`

- [ ] **Step 1: Create HowItWorks component**

```tsx
// components/home/HowItWorks.tsx
const steps = [
  {
    number: '01',
    title: 'DISCOVERY CALL',
    description: 'We start with a free 20-minute call to understand your situation, your goals, and what track makes sense for you.',
  },
  {
    number: '02',
    title: 'STRATEGY & SCOPE',
    description: 'We map out exactly what gets built, in what order, and at what investment level. No surprises.',
  },
  {
    number: '03',
    title: 'BUILD SPRINT',
    description: 'We build fast and with intention — async updates throughout, real deliverables at the end of every sprint.',
  },
  {
    number: '04',
    title: 'LAUNCH & HAND-OFF',
    description: 'You get the finished product, full documentation, and a clean hand-off so you can operate it with confidence.',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-24 bg-[#F6F4EF]" aria-labelledby="how-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            id="how-heading"
            className="text-[clamp(28px,4vw,44px)] text-[#0C0C0C] mb-4"
            style={{ fontFamily: 'var(--font-anton)' }}
          >
            HOW IT WORKS
          </h2>
          <p className="text-[#888580] text-lg max-w-xl mx-auto">
            A clear process from first conversation to finished product.
          </p>
        </div>

        {/* Desktop: horizontal with connector line */}
        <div className="hidden md:grid md:grid-cols-4 gap-0 relative">
          {/* Connector line */}
          <div
            className="absolute top-8 left-[12.5%] right-[12.5%] h-px"
            style={{ background: 'linear-gradient(to right, #E8C547, #1A1A2E)' }}
            aria-hidden="true"
          />

          {steps.map((step) => (
            <div key={step.number} className="relative flex flex-col items-center text-center px-6">
              {/* Step number circle */}
              <div
                className="w-16 h-16 rounded-full bg-[#1A1A2E] flex items-center justify-center mb-6 relative z-10 border-4 border-[#F6F4EF]"
              >
                <span
                  className="text-[#E8C547] text-lg"
                  style={{ fontFamily: 'var(--font-anton)' }}
                >
                  {step.number}
                </span>
              </div>
              <h3
                className="text-base text-[#0C0C0C] mb-3"
                style={{ fontFamily: 'var(--font-anton)' }}
              >
                {step.title}
              </h3>
              <p className="text-[#888580] text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile: vertical stack */}
        <div className="md:hidden flex flex-col gap-8">
          {steps.map((step, i) => (
            <div key={step.number} className="flex gap-5">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-[#1A1A2E] flex items-center justify-center flex-shrink-0">
                  <span
                    className="text-[#E8C547] text-sm"
                    style={{ fontFamily: 'var(--font-anton)' }}
                  >
                    {step.number}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px flex-1 bg-[#E2DED8] mt-2" aria-hidden="true" />
                )}
              </div>
              <div className="pb-8">
                <h3
                  className="text-base text-[#0C0C0C] mb-2"
                  style={{ fontFamily: 'var(--font-anton)' }}
                >
                  {step.title}
                </h3>
                <p className="text-[#888580] text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Add to homepage**

```tsx
// app/page.tsx
import Hero from '@/components/home/Hero'
import TwoTracks from '@/components/home/TwoTracks'
import ServicesPreview from '@/components/home/ServicesPreview'
import HowItWorks from '@/components/home/HowItWorks'

export default function HomePage() {
  return (
    <>
      <Hero />
      <TwoTracks />
      <ServicesPreview />
      <HowItWorks />
    </>
  )
}
```

- [ ] **Step 3: Verify TypeScript and visual**

```bash
npx tsc --noEmit && npm run dev
```

Verify: 4-step horizontal layout on desktop (gold connector line), vertical stack with connectors on mobile. Kill with Ctrl+C.

- [ ] **Step 4: Commit**

```bash
git add components/home/HowItWorks.tsx app/page.tsx
git commit -m "feat: add How It Works 4-step section"
```

---

## Task 8: Testimonials + CTA Strip

**Files:**
- Create: `components/home/Testimonials.tsx`
- Create: `components/home/CTAStrip.tsx`

- [ ] **Step 1: Create Testimonials component**

```tsx
// components/home/Testimonials.tsx
const testimonials = [
  {
    quote: "Stackd Studio helped us cut our client intake process from two days to two hours. The AI workflow they built just works — I don't have to think about it.",
    name: 'Marcus T.',
    role: 'Operations Director',
    company: 'Relocation Services Co.',
    initials: 'MT',
    track: 'Business Owner',
  },
  {
    quote: "I came in with a half-baked idea and left with a real product. The Founder Build Sprint was the best investment I made for my startup this year.",
    name: 'Priya S.',
    role: 'Founder',
    company: 'SaaS Platform (Stealth)',
    initials: 'PS',
    track: 'Founder',
  },
  {
    quote: "The Micro Tool they built for our scheduling workflow saved my team at least 6 hours a week. Delivered in 5 days, exactly as scoped.",
    name: 'Jordan L.',
    role: 'Studio Owner',
    company: 'Creative Agency',
    initials: 'JL',
    track: 'Business Owner',
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-white" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2
            id="testimonials-heading"
            className="text-[clamp(28px,4vw,44px)] text-[#0C0C0C] mb-4"
            style={{ fontFamily: 'var(--font-anton)' }}
          >
            WHAT CLIENTS SAY
          </h2>
          <p className="text-[#888580] text-lg">
            Real results from real builds.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-[#F6F4EF] rounded-2xl p-8 border border-[#E2DED8] flex flex-col"
            >
              <blockquote className="text-[#0C0C0C] text-sm leading-relaxed flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full bg-[#1A1A2E] flex items-center justify-center flex-shrink-0"
                >
                  <span
                    className="text-[#E8C547] text-xs font-bold"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    {t.initials}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#0C0C0C]">{t.name}</p>
                  <p className="text-xs text-[#888580]">{t.role} · {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-[#888580] text-xs mt-8">
          * Placeholder testimonials — real client stories coming soon.
        </p>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Create CTAStrip component**

```tsx
// components/home/CTAStrip.tsx
import Link from 'next/link'

export default function CTAStrip() {
  return (
    <section
      className="py-24 bg-[#1A1A2E]"
      aria-labelledby="cta-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          id="cta-heading"
          className="text-[clamp(32px,5vw,60px)] text-white mb-4"
          style={{ fontFamily: 'var(--font-anton)' }}
        >
          READY TO BUILD?
        </h2>
        <p className="text-[#888580] text-lg max-w-xl mx-auto mb-10">
          Book a free 20-minute discovery call and let's figure out exactly what you need — and how fast we can build it.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#E8C547] hover:bg-[#d4b03e] text-[#1A1A2E] font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 hover:scale-[1.02] min-h-[44px] text-base"
          >
            Book a Free Call →
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 border-2 border-white/30 text-white hover:border-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 min-h-[44px] text-base"
          >
            View Services
          </Link>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 3: Complete the homepage**

```tsx
// app/page.tsx
import Hero from '@/components/home/Hero'
import TwoTracks from '@/components/home/TwoTracks'
import ServicesPreview from '@/components/home/ServicesPreview'
import HowItWorks from '@/components/home/HowItWorks'
import Testimonials from '@/components/home/Testimonials'
import CTAStrip from '@/components/home/CTAStrip'

export default function HomePage() {
  return (
    <>
      <Hero />
      <TwoTracks />
      <ServicesPreview />
      <HowItWorks />
      <Testimonials />
      <CTAStrip />
    </>
  )
}
```

- [ ] **Step 4: Verify TypeScript and full homepage**

```bash
npx tsc --noEmit && npm run dev
```

Open http://localhost:3000. Scroll through all 6 sections. Verify: alternating `#F6F4EF` / white backgrounds, navy CTA strip at bottom with gold "Book a Free Call" button. Kill with Ctrl+C.

- [ ] **Step 5: Commit**

```bash
git add components/home/Testimonials.tsx components/home/CTAStrip.tsx app/page.tsx
git commit -m "feat: complete homepage with Testimonials and CTA Strip"
```

---

## Task 9: Services Page

**Files:**
- Create: `components/services/TierCard.tsx`
- Create: `components/services/TrackSection.tsx`
- Create: `components/services/AddOns.tsx`
- Create: `app/services/page.tsx`

- [ ] **Step 1: Create TierCard component**

```tsx
// components/services/TierCard.tsx
import Link from 'next/link'

export type TierData = {
  id: string
  name: string
  price: string
  description: string
  included: string[]
  track: 'A' | 'B' | 'Both'
}

type Props = {
  tier: TierData
  accentColor: string
  isElevated?: boolean
}

export default function TierCard({ tier, accentColor, isElevated = false }: Props) {
  const base = isElevated
    ? 'bg-[#1A1A2E] border-[#1A1A2E] text-white'
    : 'bg-white border-[#E2DED8] text-[#0C0C0C]'

  return (
    <div className={`rounded-2xl p-8 border ${base} flex flex-col`}>
      <div className="flex items-center justify-between mb-6">
        <span
          className="text-xs font-bold tracking-widest"
          style={{ fontFamily: 'var(--font-mono)', color: isElevated ? '#E8C547' : '#888580' }}
        >
          {tier.id}
        </span>
        <span
          className="text-xl font-semibold"
          style={{ color: isElevated ? '#E8C547' : accentColor }}
        >
          {tier.price}
        </span>
      </div>

      <h3
        className="text-2xl mb-3"
        style={{ fontFamily: 'var(--font-anton)', color: isElevated ? 'white' : '#0C0C0C' }}
      >
        {tier.name}
      </h3>

      <p className={`text-sm leading-relaxed mb-6 ${isElevated ? 'text-white/60' : 'text-[#888580]'}`}>
        {tier.description}
      </p>

      <div className="flex-1">
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-3"
          style={{ color: isElevated ? '#E8C547' : accentColor }}
        >
          What&apos;s included
        </p>
        <ul className="space-y-2">
          {tier.included.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span style={{ color: isElevated ? '#E8C547' : accentColor }} className="mt-0.5 text-sm">✓</span>
              <span className={`text-sm ${isElevated ? 'text-white/70' : 'text-[#0C0C0C]'}`}>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <Link
        href="/contact"
        className="mt-8 inline-flex items-center justify-center font-semibold text-sm px-6 py-3 rounded-xl transition-all duration-200 hover:scale-[1.02] min-h-[44px]"
        style={
          isElevated
            ? { background: '#E8C547', color: '#1A1A2E' }
            : { background: accentColor, color: 'white' }
        }
      >
        Get Started →
      </Link>
    </div>
  )
}
```

- [ ] **Step 2: Create TrackSection component**

```tsx
// components/services/TrackSection.tsx
import TierCard, { TierData } from './TierCard'

type Props = {
  id: string
  track: 'A' | 'B'
  label: string
  audience: string
  description: string
  tiers: TierData[]
  accentColor: string
  borderColor: string
}

export default function TrackSection({
  id,
  track,
  label,
  audience,
  description,
  tiers,
  accentColor,
  borderColor,
}: Props) {
  return (
    <section id={id} className="py-16" aria-labelledby={`track-${track}-heading`}>
      <div className="mb-10 pl-5" style={{ borderLeft: `4px solid ${borderColor}` }}>
        <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: accentColor }}>
          {label}
        </p>
        <h2
          id={`track-${track}-heading`}
          className="text-[clamp(24px,3.5vw,36px)] text-[#0C0C0C] mb-2"
          style={{ fontFamily: 'var(--font-anton)' }}
        >
          {audience.toUpperCase()}
        </h2>
        <p className="text-[#888580] text-base max-w-xl">{description}</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {tiers.map((tier) => (
          <TierCard
            key={tier.id}
            tier={tier}
            accentColor={accentColor}
            isElevated={tier.track === 'Both'}
          />
        ))}
      </div>
    </section>
  )
}
```

- [ ] **Step 3: Create AddOns component**

```tsx
// components/services/AddOns.tsx
const addons = [
  {
    name: 'Rush Delivery',
    description: 'Need it faster? We can compress timelines for an additional fee.',
    price: '+$300–$500',
  },
  {
    name: 'Extra Revision Round',
    description: 'An additional full round of revisions after your project is delivered.',
    price: '+$150',
  },
  {
    name: 'Team Training Session',
    description: 'A 90-minute session to train your team on any tool or workflow we build.',
    price: '+$200',
  },
  {
    name: 'Monthly Check-In',
    description: 'One 30-minute async or live check-in per month post-launch.',
    price: '+$100/mo',
  },
]

export default function AddOns() {
  return (
    <section className="py-16 border-t border-[#E2DED8]" aria-labelledby="addons-heading">
      <h2
        id="addons-heading"
        className="text-2xl text-[#0C0C0C] mb-2"
        style={{ fontFamily: 'var(--font-anton)' }}
      >
        ADD-ONS
      </h2>
      <p className="text-[#888580] text-sm mb-8 max-w-lg">
        Enhance any service tier with these optional extras.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {addons.map((addon) => (
          <div
            key={addon.name}
            className="bg-white border border-[#E2DED8] rounded-xl p-5"
          >
            <p
              className="text-sm text-[#0C0C0C] mb-1"
              style={{ fontFamily: 'var(--font-anton)' }}
            >
              {addon.name.toUpperCase()}
            </p>
            <p className="text-xs text-[#888580] leading-relaxed mb-3">{addon.description}</p>
            <p className="text-sm font-semibold text-[#1A1A2E]">{addon.price}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Create the Services page**

```tsx
// app/services/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import TrackSection from '@/components/services/TrackSection'
import TierCard from '@/components/services/TierCard'
import AddOns from '@/components/services/AddOns'
import type { TierData } from '@/components/services/TierCard'

export const metadata: Metadata = {
  title: 'Services — Stackd Studio',
  description: 'Seven service tiers across two tracks. AI tools and automation for business owners, and venture builds for founders.',
}

const trackATiers: TierData[] = [
  {
    id: 'T1',
    name: 'AI Quick Setup',
    price: '$297',
    description: 'The fastest way to get AI working in your business. We build a custom Claude prompt library, automate one core workflow, and walk you through everything on an orientation call.',
    included: [
      'Custom Claude prompt library (10–15 prompts)',
      'One workflow automation built and deployed',
      '60-minute orientation call',
      'Setup documentation',
    ],
    track: 'A',
  },
  {
    id: 'T2',
    name: 'AI Business Build-Out',
    price: '$797',
    description: 'A full AI system built across three of your most important workflows. Two calls, complete delivery, and everything organized in a shared Drive folder.',
    included: [
      'AI system built across 3 workflows',
      'Two strategy and review calls',
      'Organized Google Drive delivery folder',
      'Team onboarding documentation',
    ],
    track: 'A',
  },
  {
    id: 'T3',
    name: 'Micro Tool Build',
    price: '$500–$1,200',
    description: 'A single-function tool or app built and deployed in one week. Perfect for automating a specific pain point or building a small internal utility.',
    included: [
      'Scoping call to define the tool',
      'Fully built and deployed app or automation',
      '1 round of revisions',
      'Hand-off with documentation',
    ],
    track: 'A',
  },
  {
    id: 'T4',
    name: 'AI Retainer',
    price: '$597/mo',
    description: 'Ongoing AI support so your systems stay current and your team stays capable. New prompts, workflow improvements, and async help every month.',
    included: [
      'New prompts and workflow updates monthly',
      'Team training session (once per quarter)',
      'Async support via shared workspace',
      'Monthly usage and performance review',
    ],
    track: 'A',
  },
]

const trackBTiers: TierData[] = [
  {
    id: 'T5',
    name: 'Strategy Session',
    price: '$297–$500',
    description: 'A 90-minute session to pressure-test your idea and build a real action plan. You leave with a business model doc, a roadmap, and a clear sense of what to build first.',
    included: [
      '90-minute live idea architecture session',
      'Business model canvas document',
      'Prioritized roadmap (3-month horizon)',
      'Follow-up summary with next steps',
    ],
    track: 'B',
  },
  {
    id: 'T6',
    name: 'Founder Build Sprint',
    price: '$2,500–$6,000',
    description: 'Your idea becomes a working product in two weeks. We cover business model, brand, core product build, and a launch-ready version — all in one sprint.',
    included: [
      'Business model and positioning',
      'Brand identity (name, colors, basic assets)',
      'MVP product built and deployed',
      'Launch strategy and first channel setup',
    ],
    track: 'B',
  },
]

const t7: TierData = {
  id: 'T7',
  name: 'Venture Launch Package',
  price: '$8,000–$15,000',
  description: 'The full venture build. Strategy, technology, brand, and launch execution — everything you need to go from vision to a real operating venture.',
  included: [
    'Full venture strategy and business model',
    'Complete tech stack built and deployed',
    'Brand identity and marketing foundation',
    'Launch execution and go-to-market support',
    'Post-launch check-ins (30 days)',
  ],
  track: 'Both',
}

export default function ServicesPage() {
  return (
    <div className="bg-[#F6F4EF] pt-24">
      {/* Page header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-[#E2DED8]">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#888580] mb-3">
          Services
        </p>
        <h1
          className="text-[clamp(36px,5vw,64px)] text-[#0C0C0C] mb-4"
          style={{ fontFamily: 'var(--font-anton)' }}
        >
          WHAT WE BUILD
        </h1>
        <p className="text-[#888580] text-xl max-w-2xl">
          Seven service tiers across two tracks — from AI quick wins to full venture launches. Every engagement is scoped, intentional, and built to last.
        </p>
      </div>

      {/* Sticky track nav (desktop) */}
      <div className="hidden md:block sticky top-16 z-30 bg-[#F6F4EF]/90 backdrop-blur border-b border-[#E2DED8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-4">
          <span className="text-xs text-[#888580] font-medium uppercase tracking-widest">Jump to:</span>
          <a
            href="#track-a"
            className="text-sm font-semibold text-[#1A4A7A] bg-[rgba(26,74,122,0.08)] px-4 py-1.5 rounded-full hover:bg-[rgba(26,74,122,0.15)] transition-colors"
          >
            Track A — Business Owners
          </a>
          <a
            href="#track-b"
            className="text-sm font-semibold text-[#F97316] bg-[rgba(249,115,22,0.08)] px-4 py-1.5 rounded-full hover:bg-[rgba(249,115,22,0.15)] transition-colors"
          >
            Track B — Founders
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Track A */}
        <TrackSection
          id="track-a"
          track="A"
          label="Track A"
          audience="For Business Owners"
          description="You have a running business and want to use AI to automate, streamline, and build tools that give you back time and reduce operational drag."
          tiers={trackATiers}
          accentColor="#1A4A7A"
          borderColor="#1A4A7A"
        />

        {/* Track B */}
        <TrackSection
          id="track-b"
          track="B"
          label="Track B"
          audience="For Founders"
          description="You have an idea ready to ship. We help you go from concept to working product with strategy, speed, and the technical depth to do it right."
          tiers={trackBTiers}
          accentColor="#F97316"
          borderColor="#F97316"
        />

        {/* T7 — Both Tracks */}
        <div className="py-16 border-t border-[#E2DED8]">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#888580] mb-6">
            Available to both tracks
          </p>
          <div className="max-w-2xl">
            <TierCard tier={t7} accentColor="#E8C547" isElevated />
          </div>
        </div>

        {/* Add-Ons */}
        <AddOns />
      </div>

      {/* CTA Strip */}
      <div className="bg-[#1A1A2E] py-16 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl text-white mb-4"
            style={{ fontFamily: 'var(--font-anton)' }}
          >
            NOT SURE WHICH TIER IS RIGHT?
          </h2>
          <p className="text-[#888580] text-base mb-8 max-w-lg mx-auto">
            Book a free discovery call. We&apos;ll figure it out together in 20 minutes.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#E8C547] hover:bg-[#d4b03e] text-[#1A1A2E] font-semibold px-8 py-3.5 rounded-xl transition-all duration-200"
          >
            Book a Free Call →
          </Link>
        </div>
      </div>
    </div>
  )
}
```

- [ ] **Step 5: Verify TypeScript**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 6: Visual verification**

```bash
npm run dev
```

Open http://localhost:3000/services. Verify: page header, sticky track nav on desktop, Track A tiers (T1–T4) in blue, Track B tiers (T5–T6) in orange, T7 navy elevated card, Add-Ons grid, navy CTA strip. Kill with Ctrl+C.

- [ ] **Step 7: Commit**

```bash
git add components/services/ app/services/
git commit -m "feat: build Services page with all 7 tiers and add-ons"
```

---

## Task 10: About Page

**Files:**
- Create: `components/about/Story.tsx`
- Create: `components/about/Values.tsx`
- Create: `components/about/TechStack.tsx`
- Create: `components/about/HVSPortfolio.tsx`
- Create: `app/about/page.tsx`

- [ ] **Step 1: Create Story component**

```tsx
// components/about/Story.tsx
export default function Story() {
  return (
    <section className="py-16 border-b border-[#E2DED8]" aria-labelledby="story-heading">
      <h2
        id="story-heading"
        className="text-[clamp(28px,4vw,44px)] text-[#0C0C0C] mb-8"
        style={{ fontFamily: 'var(--font-anton)' }}
      >
        OUR STORY
      </h2>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-5 text-[#0C0C0C] text-base leading-relaxed">
          <p>
            Stackd Studio was built on a simple frustration: too many smart, capable business owners and founders were stuck doing things the slow way — managing operations manually, building nothing with the tools they had, and watching their best ideas sit in a notes app waiting for the right moment.
          </p>
          <p>
            Chanel Hicks founded Stackd Studio to be the build partner she wished she had — one that combines genuine technical depth with strategic thinking, moves at the speed of a startup, and treats every project like it actually matters. Based in Midlothian, VA, and operating as part of the Hicks Virtual Solutions portfolio, Stackd Studio is built for the people who are ready to stop waiting and start building.
          </p>
        </div>

        {/* Mission blockquote */}
        <blockquote
          className="border-l-4 border-[#E8C547] bg-[#1A1A2E] rounded-xl p-8 text-white"
        >
          <p
            className="text-lg leading-relaxed font-medium mb-0"
          >
            &ldquo;To design, build, and launch intelligent systems and ventures — giving business owners and founders the power to operate smarter, move faster, and build something that lasts, powered by AI, craft, and strategic thinking.&rdquo;
          </p>
          <footer className="mt-6">
            <p
              className="text-[#E8C547] text-sm"
              style={{ fontFamily: 'var(--font-anton)' }}
            >
              OUR MISSION
            </p>
          </footer>
        </blockquote>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Create Values component**

```tsx
// components/about/Values.tsx
const values = [
  {
    number: '01',
    title: 'BUILD WITH INTENTION',
    description: 'Every system we build has a reason to exist. We scope carefully, design clearly, and deliver things that solve real problems — not impressive-looking tools that nobody uses.',
  },
  {
    number: '02',
    title: 'AI AS CRAFT, NOT SHORTCUT',
    description: "We use AI as a precision instrument, not a speed hack. The goal is always to produce something better — not just something faster. Quality and intelligence aren't in conflict.",
  },
  {
    number: '03',
    title: 'STRATEGY BEFORE EXECUTION',
    description: "We don't start building until we understand the problem fully. The right plan up front saves weeks of rework on the back end.",
  },
  {
    number: '04',
    title: 'SHIP AND IMPROVE',
    description: "Perfection is the enemy of progress. We launch working things, learn from real use, and iterate. A live product always beats a perfect prototype that never ships.",
  },
]

export default function Values() {
  return (
    <section className="py-16 border-b border-[#E2DED8]" aria-labelledby="values-heading">
      <h2
        id="values-heading"
        className="text-[clamp(28px,4vw,44px)] text-[#0C0C0C] mb-10"
        style={{ fontFamily: 'var(--font-anton)' }}
      >
        WHAT WE BELIEVE
      </h2>

      <div className="grid sm:grid-cols-2 gap-6">
        {values.map((value) => (
          <div
            key={value.number}
            className="bg-white border border-[#E2DED8] rounded-xl p-7"
          >
            <span
              className="text-[#E8C547] text-sm font-bold mb-3 block"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              {value.number}
            </span>
            <h3
              className="text-lg text-[#0C0C0C] mb-3"
              style={{ fontFamily: 'var(--font-anton)' }}
            >
              {value.title}
            </h3>
            <p className="text-[#888580] text-sm leading-relaxed">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
```

- [ ] **Step 3: Create TechStack component**

```tsx
// components/about/TechStack.tsx
const pillars = [
  {
    label: 'AI-First Approach',
    description: "We lead every engagement by asking what AI can do here — then we build around the answer. Claude, custom agents, and intelligent workflows are the default, not an afterthought.",
    tags: ['Claude API', 'Prompt Engineering', 'AI Automation', 'Agent Design'],
  },
  {
    label: 'Modern Tech Stack',
    description: 'We build on tools that are fast to ship with and built to scale. Everything we deliver is production-ready, hosted, and maintainable by a small team.',
    tags: ['Next.js', 'Supabase', 'Vercel', 'TypeScript', 'Tailwind CSS', 'Stripe'],
  },
  {
    label: 'Sprint-Based Delivery',
    description: "We work in focused, time-boxed sprints with clear deliverables at every checkpoint. You always know what's being built, when it's due, and what it will do.",
    tags: ['2-Week Sprints', 'Async Updates', 'Clear Scope', 'Documented Hand-offs'],
  },
]

export default function TechStack() {
  return (
    <section className="py-16 border-b border-[#E2DED8]" aria-labelledby="how-we-work-heading">
      <h2
        id="how-we-work-heading"
        className="text-[clamp(28px,4vw,44px)] text-[#0C0C0C] mb-10"
        style={{ fontFamily: 'var(--font-anton)' }}
      >
        HOW WE WORK
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {pillars.map((pillar) => (
          <div
            key={pillar.label}
            className="bg-[#1A1A2E] rounded-xl p-7 flex flex-col"
          >
            <h3
              className="text-[#E8C547] text-base mb-3"
              style={{ fontFamily: 'var(--font-anton)' }}
            >
              {pillar.label.toUpperCase()}
            </h3>
            <p className="text-white/60 text-sm leading-relaxed flex-1 mb-5">
              {pillar.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {pillar.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-white/70"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Create HVSPortfolio component**

```tsx
// components/about/HVSPortfolio.tsx
const projects = [
  { name: 'Capital Core Dance Studio', type: 'Website & Booking' },
  { name: 'Evolution Production Company', type: 'Brand & Web Platform' },
  { name: 'Villa Concierge Co', type: 'Operations Platform' },
]

export default function HVSPortfolio() {
  return (
    <section className="py-16" aria-labelledby="hvs-heading">
      <h2
        id="hvs-heading"
        className="text-[clamp(28px,4vw,44px)] text-[#0C0C0C] mb-4"
        style={{ fontFamily: 'var(--font-anton)' }}
      >
        PART OF THE HVS PORTFOLIO
      </h2>
      <p className="text-[#888580] text-base leading-relaxed max-w-2xl mb-8">
        Stackd Studio is the build lab within Hicks Virtual Solutions — a portfolio of ventures, tools, and client solutions built and operated by Chanel Hicks. HVS exists to create businesses and build systems that generate lasting value for the communities and clients it serves.
      </p>

      <div className="flex flex-wrap gap-3">
        {projects.map((project) => (
          <div
            key={project.name}
            className="bg-white border border-[#E2DED8] rounded-lg px-4 py-3"
          >
            <p className="text-sm font-semibold text-[#0C0C0C]">{project.name}</p>
            <p className="text-xs text-[#888580] mt-0.5">{project.type}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
```

- [ ] **Step 5: Create the About page**

```tsx
// app/about/page.tsx
import type { Metadata } from 'next'
import Story from '@/components/about/Story'
import Values from '@/components/about/Values'
import TechStack from '@/components/about/TechStack'
import HVSPortfolio from '@/components/about/HVSPortfolio'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About — Stackd Studio',
  description: 'Stackd Studio is a Build Lab and Creative Venture Studio founded by Chanel Hicks. We build intelligent systems and ventures for business owners and founders.',
}

export default function AboutPage() {
  return (
    <div className="bg-[#F6F4EF] pt-24">
      {/* Page header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-[#E2DED8]">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#888580] mb-3">About</p>
        <h1
          className="text-[clamp(36px,5vw,64px)] text-[#0C0C0C]"
          style={{ fontFamily: 'var(--font-anton)' }}
        >
          BUILD LAB &amp;<br />VENTURE STUDIO
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Story />
        <Values />
        <TechStack />
        <HVSPortfolio />
      </div>

      {/* CTA */}
      <div className="bg-[#1A1A2E] py-16 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl text-white mb-4"
            style={{ fontFamily: 'var(--font-anton)' }}
          >
            READY TO WORK TOGETHER?
          </h2>
          <p className="text-[#888580] text-base mb-8 max-w-lg mx-auto">
            Book a free discovery call and let&apos;s figure out what we can build.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#E8C547] hover:bg-[#d4b03e] text-[#1A1A2E] font-semibold px-8 py-3.5 rounded-xl transition-all"
          >
            Book a Free Call →
          </Link>
        </div>
      </div>
    </div>
  )
}
```

- [ ] **Step 6: Verify TypeScript and visual**

```bash
npx tsc --noEmit && npm run dev
```

Open http://localhost:3000/about. Verify: story + blockquote, 2×2 values grid, 3 navy how-we-work cards, HVS project badges. Kill with Ctrl+C.

- [ ] **Step 7: Commit**

```bash
git add components/about/ app/about/
git commit -m "feat: build About page with story, values, tech approach, and HVS portfolio"
```

---

## Task 11: Work Page

**Files:**
- Create: `components/work/CaseStudyCard.tsx`
- Create: `components/work/CaseStudyGrid.tsx`
- Create: `app/work/page.tsx`

- [ ] **Step 1: Create CaseStudyCard component**

```tsx
// components/work/CaseStudyCard.tsx
export type CaseStudy = {
  id: string
  track: 'Business Owner' | 'Founder' | 'Both'
  projectType: string
  title: string
  description: string
  outcome: string
  isPlaceholder?: boolean
}

type Props = {
  study: CaseStudy
}

const trackStyles = {
  'Business Owner': { bg: 'rgba(26,74,122,0.08)', color: '#1A4A7A' },
  'Founder': { bg: 'rgba(249,115,22,0.08)', color: '#F97316' },
  'Both': { bg: 'rgba(26,26,46,0.08)', color: '#1A1A2E' },
}

export default function CaseStudyCard({ study }: Props) {
  const ts = trackStyles[study.track]

  return (
    <div className="bg-white border border-[#E2DED8] rounded-2xl overflow-hidden flex flex-col">
      {/* Card top strip */}
      <div
        className="h-2 w-full"
        style={{ background: ts.color }}
        aria-hidden="true"
      />

      <div className="p-7 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-4">
          <span
            className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full"
            style={{ background: ts.bg, color: ts.color }}
          >
            {study.track}
          </span>
          <span
            className="text-xs text-[#888580]"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            {study.projectType}
          </span>
        </div>

        <h3
          className="text-xl text-[#0C0C0C] mb-3"
          style={{ fontFamily: 'var(--font-anton)' }}
        >
          {study.title}
        </h3>

        <p className="text-[#888580] text-sm leading-relaxed flex-1 mb-5">
          {study.description}
        </p>

        <div className="bg-[#F6F4EF] rounded-lg px-4 py-3 mb-5 border border-[#E2DED8]">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#888580] mb-1">Outcome</p>
          <p className="text-sm font-semibold text-[#0C0C0C]">{study.outcome}</p>
        </div>

        <div className="flex items-center justify-between">
          <a
            href="#"
            className="text-sm font-semibold text-[#1A1A2E] hover:text-[#1A4A7A] transition-colors"
          >
            View Case Study →
          </a>
          {study.isPlaceholder && (
            <span className="text-xs text-[#888580] italic">Example Project</span>
          )}
        </div>
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Create CaseStudyGrid component**

```tsx
// components/work/CaseStudyGrid.tsx
'use client'

import { useState } from 'react'
import CaseStudyCard, { CaseStudy } from './CaseStudyCard'

const studies: CaseStudy[] = [
  {
    id: '1',
    track: 'Business Owner',
    projectType: 'AI Automation',
    title: 'Insurance Ops Automation Platform',
    description: 'A mid-size relocation housing company was managing client placements, billing tracking, and communications entirely in email and spreadsheets. We built an internal platform that automated the intake-to-placement workflow and surfaced everything in a single dashboard.',
    outcome: 'Reduced placement processing time by 65%. Team of 4 now manages 3x the caseload.',
    isPlaceholder: true,
  },
  {
    id: '2',
    track: 'Founder',
    projectType: 'Founder Build Sprint',
    title: 'B2B SaaS Scheduling MVP',
    description: 'A founder came in with a validated problem, no product, and a tight runway. In 2 weeks we scoped the MVP, built the core scheduling and client management features, deployed to production, and set up the first acquisition channel.',
    outcome: 'MVP live in 12 days. First paying customer within 2 weeks of launch.',
    isPlaceholder: true,
  },
  {
    id: '3',
    track: 'Both',
    projectType: 'Venture Launch Package',
    title: 'Full-Stack Wellness Platform Launch',
    description: 'A founder with domain expertise but no technical background needed a complete venture build — brand, product, and go-to-market. We delivered a full-stack booking and content platform, a brand identity, and a launch plan in one engagement.',
    outcome: 'Launched to first 50 users in under 4 weeks. Revenue in month one.',
    isPlaceholder: true,
  },
]

type Filter = 'All' | 'Business Owner' | 'Founder'

export default function CaseStudyGrid() {
  const [activeFilter, setActiveFilter] = useState<Filter>('All')

  const filtered = studies.filter((s) => {
    if (activeFilter === 'All') return true
    if (activeFilter === 'Business Owner') return s.track === 'Business Owner' || s.track === 'Both'
    if (activeFilter === 'Founder') return s.track === 'Founder' || s.track === 'Both'
    return true
  })

  const filters: Filter[] = ['All', 'Business Owner', 'Founder']

  return (
    <div>
      {/* Filter bar */}
      <div className="flex items-center gap-3 mb-10 flex-wrap" role="group" aria-label="Filter case studies by track">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setActiveFilter(f)}
            className={`text-sm font-semibold px-4 py-2 rounded-full transition-all duration-200 ${
              activeFilter === f
                ? 'bg-[#1A1A2E] text-[#F6F4EF]'
                : 'bg-white border border-[#E2DED8] text-[#888580] hover:text-[#0C0C0C] hover:border-[#1A1A2E]'
            }`}
            aria-pressed={activeFilter === f}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((study) => (
            <CaseStudyCard key={study.id} study={study} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-[#888580] text-lg">More work coming soon.</p>
        </div>
      )}
    </div>
  )
}
```

- [ ] **Step 3: Create the Work page**

```tsx
// app/work/page.tsx
import type { Metadata } from 'next'
import CaseStudyGrid from '@/components/work/CaseStudyGrid'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Work — Stackd Studio',
  description: 'Case studies and example projects from Stackd Studio. AI automations, venture builds, micro tools, and more.',
}

export default function WorkPage() {
  return (
    <div className="bg-[#F6F4EF] pt-24">
      {/* Page header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-[#E2DED8]">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#888580] mb-3">Work</p>
        <h1
          className="text-[clamp(36px,5vw,64px)] text-[#0C0C0C] mb-4"
          style={{ fontFamily: 'var(--font-anton)' }}
        >
          WHAT WE&apos;VE BUILT
        </h1>
        <p className="text-[#888580] text-xl max-w-2xl">
          A growing portfolio of AI automations, product builds, and venture launches. Real work, real outcomes.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <CaseStudyGrid />
      </div>

      {/* CTA */}
      <div className="bg-[#1A1A2E] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl text-white mb-4"
            style={{ fontFamily: 'var(--font-anton)' }}
          >
            WANT TO BE NEXT?
          </h2>
          <p className="text-[#888580] text-base mb-8 max-w-lg mx-auto">
            Let&apos;s build something worth putting on this page.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#E8C547] hover:bg-[#d4b03e] text-[#1A1A2E] font-semibold px-8 py-3.5 rounded-xl transition-all"
          >
            Book a Free Call →
          </Link>
        </div>
      </div>
    </div>
  )
}
```

- [ ] **Step 4: Verify TypeScript and visual**

```bash
npx tsc --noEmit && npm run dev
```

Open http://localhost:3000/work. Verify: filter pills (All/Business Owner/Founder) work, 3 placeholder cards display with correct track colors, "Example Project" labels visible, empty state shows on zero-result filter. Kill with Ctrl+C.

- [ ] **Step 5: Commit**

```bash
git add components/work/ app/work/
git commit -m "feat: build Work page with filterable case study grid"
```

---

## Task 12: Shell Pages + Final Build

**Files:**
- Create: `app/store/page.tsx`
- Create: `app/contact/page.tsx`

- [ ] **Step 1: Create Store shell page**

```tsx
// app/store/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Store — Stackd Studio',
  description: 'Prompt packs, templates, courses, and tools from Stackd Studio. Coming soon.',
}

export default function StorePage() {
  return (
    <div className="bg-[#F6F4EF] pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-[#E2DED8]">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#888580] mb-3">Store</p>
        <h1
          className="text-[clamp(36px,5vw,64px)] text-[#0C0C0C]"
          style={{ fontFamily: 'var(--font-anton)' }}
        >
          DIGITAL PRODUCTS
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div
          className="inline-block bg-[#1A1A2E] text-[#E8C547] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6"
        >
          Coming Soon
        </div>
        <h2
          className="text-3xl text-[#0C0C0C] mb-4"
          style={{ fontFamily: 'var(--font-anton)' }}
        >
          PROMPT PACKS, TEMPLATES &amp; TOOLS
        </h2>
        <p className="text-[#888580] text-lg max-w-xl mx-auto mb-10">
          We&apos;re building out a library of AI prompt packs, workflow templates, mini-courses, and deployment-ready tools. Check back soon.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-[#1A1A2E] text-[#F6F4EF] font-semibold px-7 py-3.5 rounded-xl transition-all hover:bg-[#0f0f1a]"
        >
          Get notified when we launch →
        </Link>
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Create Contact shell page**

```tsx
// app/contact/page.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact — Stackd Studio',
  description: 'Book a free 20-minute discovery call with Stackd Studio or send us a message.',
}

export default function ContactPage() {
  return (
    <div className="bg-[#F6F4EF] pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-[#E2DED8]">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#888580] mb-3">Contact</p>
        <h1
          className="text-[clamp(36px,5vw,64px)] text-[#0C0C0C]"
          style={{ fontFamily: 'var(--font-anton)' }}
        >
          LET&apos;S BUILD TOGETHER
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div
          className="inline-block bg-[#1A1A2E] text-[#E8C547] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6"
        >
          Coming Soon
        </div>
        <h2
          className="text-3xl text-[#0C0C0C] mb-4"
          style={{ fontFamily: 'var(--font-anton)' }}
        >
          BOOKING &amp; CONTACT FORM
        </h2>
        <p className="text-[#888580] text-lg max-w-xl mx-auto mb-10">
          The full contact form and Calendly booking embed are coming in Phase 2. In the meantime, reach us directly at{' '}
          <a href="mailto:hello@stackdstudio.com" className="text-[#1A1A2E] font-semibold hover:underline">
            hello@stackdstudio.com
          </a>
        </p>
      </div>
    </div>
  )
}
```

- [ ] **Step 3: Run full TypeScript check**

```bash
npx tsc --noEmit
```

Expected: zero errors.

- [ ] **Step 4: Run production build**

```bash
npm run build
```

Expected: build completes successfully, all 6 routes appear in the output (/, /services, /about, /work, /store, /contact). Fix any build errors before proceeding.

- [ ] **Step 5: Smoke test all pages**

```bash
npm run dev
```

Visit each route and verify it loads without errors:
- http://localhost:3000 — homepage, all 6 sections
- http://localhost:3000/services — all tiers, sticky nav
- http://localhost:3000/about — story, values, tech, HVS
- http://localhost:3000/work — filter bar + 3 cards
- http://localhost:3000/store — coming soon
- http://localhost:3000/contact — coming soon

Kill with Ctrl+C.

- [ ] **Step 6: Final commit**

```bash
git add app/store/ app/contact/
git commit -m "feat: add Store and Contact shell pages, complete Phase 1"
```

---

## Self-Review Checklist

**Spec coverage:**
- [x] Homepage — Hero (code card), TwoTracks, ServicesPreview, HowItWorks, Testimonials, CTAStrip
- [x] Services page — all 7 tiers, Track A/B sections, T7 elevated, Add-Ons, sticky nav
- [x] About page — Story, mission blockquote, Values, TechStack, HVS Portfolio (no headshot)
- [x] Work page — filter bar, 3 placeholder case studies, empty state
- [x] Store shell — Coming Soon
- [x] Contact shell — Coming Soon with email fallback
- [x] Navbar — scroll-aware, mobile drawer, all 5 links, "Book a Call" CTA
- [x] Footer — links, company info, HVS attribution
- [x] Design system — Anton headings, Instrument Sans body, JetBrains Mono, navy/gold palette
- [x] No lorem ipsum — all placeholder copy is real Stackd Studio content
- [x] Mobile responsive — all sections stack, mobile nav drawer

**Type consistency:**
- `TierData` type defined in `TierCard.tsx`, imported in `TrackSection.tsx` and `services/page.tsx`
- `CaseStudy` type defined in `CaseStudyCard.tsx`, imported in `CaseStudyGrid.tsx`
- All `accentColor`, `borderColor` props are `string` throughout
