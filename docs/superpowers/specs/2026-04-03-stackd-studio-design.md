# Stackd Studio Website — Design Spec
**Date:** 2026-04-03  
**Status:** Approved  
**Scope:** Phase 1 — Homepage + Frontend Pages (Services, About, Work)  
**Phase 2 (deferred):** Store (Stripe), Contact (Supabase form), Admin Dashboard

---

## 1. Project Context

**Company:** Stackd Studio LLC  
**Descriptor:** Build Lab & Creative Venture Studio  
**Parent:** Hicks Virtual Solutions (HVS)  
**Founder:** Chanel Hicks  
**Location:** Midlothian, VA  
**Stack:** Next.js 16.2.2 App Router, Tailwind CSS v4, Framer Motion, React 19  
**Deploy target:** Vercel

**Approach:** Full rip-and-rebuild. All existing components and `globals.css` are deleted. The purple/Inter theme is replaced entirely with the navy/gold design system. `next.config.ts`, `package.json`, `tsconfig.json`, `postcss.config.mjs` are kept.

---

## 2. Design System

### Fonts
| Role | Font | Weights |
|------|------|---------|
| Display headings | Anton | 400 (regular — Anton has no weight variants) |
| Body / UI | Instrument Sans | 400, 500, 600 |
| Code / Mono | JetBrains Mono | 400, 500 |

Loaded via `next/font/google` in `app/layout.tsx`. CSS variables exposed as `--font-anton`, `--font-sans`, `--font-mono`.

### Colors (Tailwind v4 `@theme` block in `globals.css`)
| Token | Hex | Usage |
|-------|-----|-------|
| `--color-bg` | `#F6F4EF` | Page background |
| `--color-ink` | `#0C0C0C` | Primary text |
| `--color-navy` | `#1A1A2E` | Brand dark, primary buttons |
| `--color-gold` | `#E8C547` | Accent, CTAs, highlights |
| `--color-white` | `#FFFFFF` | Cards, surfaces |
| `--color-muted` | `#888580` | Secondary text |
| `--color-border` | `#E2DED8` | Borders, dividers |
| `--color-orange` | `#F97316` | Track B (Founders) accent |
| `--color-blue` | `#1A4A7A` | Track A (Business Owners) accent |

### Aesthetic
Clean off-white background with navy and gold accents. Anton for all display headings (uppercase, editorial weight). No purple. No gradient orbs. Dot-grid background texture at low opacity on hero. Refined tech studio meets creative agency.

---

## 3. File Structure

```
app/
  layout.tsx                  ← root layout: fonts, metadata, Navbar, Footer
  globals.css                 ← design tokens, Tailwind @theme, base styles
  page.tsx                    ← homepage
  services/
    page.tsx
  about/
    page.tsx
  work/
    page.tsx
  store/
    page.tsx                  ← shell only (Phase 2)
  contact/
    page.tsx                  ← shell only (Phase 2)

components/
  layout/
    Navbar.tsx                ← scroll-aware, mobile drawer, 5 nav links + CTA
    Footer.tsx
  home/
    Hero.tsx                  ← two-col: copy left, code card right
    TwoTracks.tsx             ← side-by-side Track A / Track B cards
    ServicesPreview.tsx       ← 7-tier grid preview
    HowItWorks.tsx            ← 4-step process
    Testimonials.tsx          ← 3-card placeholder grid
    CTAStrip.tsx              ← navy full-width CTA band
  services/
    TrackSection.tsx          ← labeled section with track accent
    TierCard.tsx              ← full detail tier card
    AddOns.tsx                ← add-ons section
  about/
    Story.tsx                 ← narrative + mission blockquote
    Values.tsx                ← 2×2 values grid
    TechStack.tsx             ← 3-col approach strip
    HVSPortfolio.tsx          ← brief HVS context paragraph + project badges
  work/
    CaseStudyGrid.tsx         ← filter bar + responsive grid
    CaseStudyCard.tsx         ← individual case study card
```

---

## 4. Navigation

**Links:** Services · About · Work · Store · Contact  
**CTA button:** "Book a Call" — links to `/contact`  
**Behavior:**
- Scroll-aware: transparent on top, `bg-white/90 backdrop-blur border-b` after 60px scroll
- Mobile: full-screen drawer, hamburger toggle, 3-bar to X animation
- All links are `next/link` page navigations (no anchor scroll — multi-page site)
- Active link gets `text-navy font-semibold` treatment

---

## 5. Homepage (`/`)

### 5.1 Hero
- **Layout:** 2-column grid (left: copy, right: code card). Stacks to 1 col on mobile (code card hidden on mobile).
- **Left:** Anton eyebrow pill ("BUILD LAB & CREATIVE VENTURE STUDIO"), Anton h1 "DESIGN. BUILD. LAUNCH SMARTER.", Instrument Sans subheadline, two CTA buttons: "Book a Call →" (navy filled) + "View Services" (navy outlined).
- **Right:** Dark navy code editor card (JetBrains Mono). Shows a `StackdStudio` TypeScript-style snippet with gold keywords, teal function names, pink strings, blue prop names. Terminal output strip at bottom with green checkmark and gold arrow. Subtle float animation.
- **Background:** `#F6F4EF` with dot-grid overlay at 5–6% opacity.

### 5.2 Two Tracks
- Full-width section, 2-column card layout.
- **Track A card** (left): blue left-border (`#1A4A7A`), "BUSINESS OWNERS" label, headline, 4 service pill tags, "See services →" link.
- **Track B card** (right): orange left-border (`#F97316`), "FOUNDERS" label, headline, 3 service pill tags, "See services →" link.

### 5.3 Services Preview
- Section heading + 7 tier cards in a responsive grid (3 cols → 2 → 1).
- Each card: tier badge (T1–T7), name, price, one-line description, track badge.
- Track A cards: subtle blue tint. Track B: subtle orange tint. T7: navy background (spans both tracks).
- "Learn more →" on each card links to `/services`.

### 5.4 How It Works
- 4 steps: Discovery Call → Strategy & Scope → Build Sprint → Launch & Hand-off.
- Desktop: horizontal layout connected by thin gold line. Mobile: vertical stack.
- Each step: gold step number, Anton title, Instrument Sans description.

### 5.5 Testimonials
- 3-column grid of placeholder quote cards.
- Each card: quote text (real-sounding placeholder), initials avatar, name, company type.
- No carousel. Static grid. Placeholder copy — not lorem ipsum.

### 5.6 CTA Strip
- Full-width navy background.
- Anton headline: "READY TO BUILD?"
- Subtext: one line of Instrument Sans copy.
- Two buttons: "Book a Free Call" (gold fill, navy text) + "View Services" (white outlined).
- Links to `/contact` and `/services`.

---

## 6. Services Page (`/services`)

### Header
Anton headline "WHAT WE BUILD", subheadline describing both tracks.

### Sticky Track Nav (desktop only)
Pill toggles anchoring to `#track-a` and `#track-b` sections. Hidden on mobile.

### Track A Section (id="track-a")
Blue left-border section header. Tiers T1–T4, each as a full card:
- Tier badge, name, price
- 2–3 sentence description
- Bulleted "What's included" list
- "Get Started →" button → `/contact`

### Track B Section (id="track-b")
Orange left-border section header. Tiers T5–T7 same structure.  
T7 (Venture Launch Package): elevated card — navy background, gold text accents, larger layout. Spans both tracks.

### Add-Ons Section
Below both tracks. Small card grid of add-on options (rush delivery, extra revision, team training). Placeholder content, real design.

---

## 7. About Page (`/about`)

### Story Block
Anton headline "OUR STORY". Two paragraphs of real Stackd Studio copy. Mission statement pulled out as a large blockquote with navy background and gold left border.

### Values (2×2 grid)
4 values, gold numbered labels, Anton titles, 2-sentence descriptions:
1. Build with Intention
2. AI as Craft, Not Shortcut
3. Strategy Before Execution
4. Ship and Improve

### How We Work
3-column strip: AI-first approach · Tech stack (Next.js, Supabase, Vercel, Claude API) · Sprint-based delivery. Philosophy-forward, not a feature list.

### HVS Portfolio
Short paragraph on Hicks Virtual Solutions as parent company. 2–3 project name badges (Capital Core Dance Studio, Evolution Production Company). Simple context, not a full portfolio section.

---

## 8. Work Page (`/work`)

### Filter Bar
Three pill toggles: All · Business Owner · Founder. Client-side state, no URL params. Filters visible cards by track.

### Case Study Grid
3 cols → 2 → 1 responsive. 3 placeholder cards (labeled "Example Project" in muted text):

1. **Track A** — Insurance Ops Platform. AI workflow automation. Business Owner track. Outcome stat.
2. **Track B** — SaaS MVP Build Sprint. Idea to launch in 2 weeks. Founder track. Outcome stat.
3. **Both** — Venture Launch Package. Full stack + brand + strategy. Outcome stat.

Each card: track badge, project type label, Anton project name, 2-sentence description, outcome highlight, "View Case Study →" (href="#", placeholder).

### Empty State
When filtered results = 0: centered "More work coming soon." message. Grid does not collapse.

---

## 9. Shell Pages (Phase 2)

### Store (`/store`)
Renders a "Coming Soon" placeholder with the correct navbar/footer. No Stripe integration yet.

### Contact (`/contact`)
Renders a "Coming Soon" placeholder with the correct navbar/footer. No Supabase form yet.

---

## 10. Dependencies to Add

```bash
# No new UI libraries — Tailwind + Framer Motion already present
# These are for Phase 2 but can be installed now to avoid a second install pass:
npm install @supabase/supabase-js @supabase/ssr stripe
```

Phase 1 build requires zero new dependencies.

---

## 11. Out of Scope (Phase 2)

- Supabase schema, RLS, auth
- Stripe checkout + webhooks
- Resend transactional email
- Calendly embed
- `/contact` form submission
- `/admin` dashboard
- `/store` product grid + purchase flow
