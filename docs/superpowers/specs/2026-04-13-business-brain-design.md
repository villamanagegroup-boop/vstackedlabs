# Business Brain — Services Page Section Design

**Date:** 2026-04-13  
**Project:** Stackd Studio (`/c/Users/hicks/stackd-studio`)  
**Scope:** New section added to existing `app/services/page.tsx`  
**Placement:** Between the Add-ons section and the bottom CTA section

---

## Overview

Business Brain is a done-for-you AI knowledge system. Stackd Studio collects a business's operational documents (handbooks, menus, SOPs, recipes, forms, vendor contacts, training guides) and builds a custom private AI assistant their staff can query 24/7 through a chat interface.

This is implemented as a single cohesive block within the existing services page — not a new route. The block contains 5 sub-sections stacked vertically.

---

## Design System Constraints

Must match existing site exactly:
- **Fonts:** Anton (`var(--font-anton)`) for all headings, Instrument Sans (`var(--font-instrument-sans)`) for body
- **Colors:** Navy `#1A1A2E`, Gold `#E8C547`, Muted `#888580`, Border `#E2DED8`, BG `#F6F4EF`, White `#FFFFFF`
- **Cards:** `rounded-2xl border border-[#E2DED8] bg-white p-8`
- **Section padding:** `py-20`, container `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- **Primary CTA button:** `bg-[#E8C547] hover:bg-[#d4b03d] text-[#1A1A2E] font-bold px-8 py-4 rounded-xl`
- **Label pill:** `text-xs font-semibold uppercase tracking-[0.12em]`
- No new design patterns, no Framer Motion (not used in services page)

---

## Sub-Sections

### 1. Hero Strip
- **Background:** `#1A1A2E` (navy)
- **Label pill:** Gold background `#E8C547`, navy text — "New Product"
- **Headline (Anton):** "Your staff. Smarter. 24/7."
- **Value prop:** "We collect your operational docs and build a custom private AI your team can query around the clock — no training required."
- **CTA button:** Gold — "Get Your Brain Built" → links to `/contact`
- **Secondary link:** White outline — "See How It Works" → `#bb-how-it-works` anchor

### 2. How It Works
- **Background:** White
- **Section label:** Muted uppercase — "How It Works"
- **Headline:** "Four steps. One smart system."
- **Layout:** 4-column horizontal grid (stacks to 2-col on mobile, 1-col on small)
- **Step cards:** `rounded-2xl border border-[#E2DED8] p-6`, step number in gold Anton, bold label, one-sentence description

| Step | Label | Description |
|------|-------|-------------|
| 01 | Collect | We gather all your operational docs — handbooks, SOPs, menus, forms, vendor contacts, and training guides. |
| 02 | Build | We build your custom private AI assistant, trained only on your business's knowledge. |
| 03 | Deploy | Your team gets a simple chat link — no installs, no logins, no learning curve. |
| 04 | Maintain | We review and update your AI monthly to keep it accurate as your business evolves. |

### 3. Who It's For (Niche Callouts)
- **Background:** `#F6F4EF`
- **Section label:** Muted uppercase — "Industries We Serve"
- **Headline:** "Built for businesses with real operational complexity."
- **Layout:** 2×3 grid (stacks to 1-col on mobile)
- **Cards:** White, `rounded-2xl border border-[#E2DED8] p-6`

| Industry | Pain Point | Solution |
|----------|-----------|----------|
| Restaurants | Staff always asking about allergens, specials, and prep procedures. | Instant answers from your own menu and kitchen SOPs. |
| Gyms | Members and staff asking about class schedules, memberships, and policies. | 24/7 knowledge base for front desk and floor staff. |
| Salons & Spas | Inconsistent service info, pricing confusion, and booking questions. | One source of truth for services, pricing, and protocols. |
| Retail Stores | Product questions, return policies, vendor info scattered across docs. | Staff gets answers in seconds, not after hunting through binders. |
| Hotels | Guest services, amenities, and local info spread across staff inboxes. | A concierge-grade AI your front desk can actually trust. |
| Medical & Dental Offices | Compliance docs, intake forms, and billing FAQs buried in folders. | Fast, accurate answers for staff without touching patient records. |

### 4. Pricing
- **Background:** White
- **Section label:** Muted uppercase — "Pricing"
- **Headline:** "Simple, transparent pricing."
- **Layout:** 3-column grid (stacks to 1-col on mobile), matches Track A card style exactly

| Tier | Setup | Monthly | Badge | Best For |
|------|-------|---------|-------|----------|
| Starter | $500 | $149/mo | — | Small teams with a single location and a core set of docs. |
| Pro | $1,500 | $349/mo | Most Popular | Growing businesses with multiple departments or locations. |
| Enterprise | $3,000+ | $600+/mo | — | Multi-location operations needing advanced customization and SLAs. |

- Pro tier gets `border-[#1A1A2E] shadow-[0_0_0_1px_#1A1A2E]` and "Most Popular" badge in navy/gold (matches Track A pattern)
- Each card includes: tier name, setup price (large Anton), monthly price (muted), "Best for" line, CTA button → `/contact`

### 5. CTA Strip
- **Background:** `#E8C547` (gold) — differentiates from the navy bottom CTA directly below
- **Headline (Anton, navy):** "Ready to build your Business Brain?"
- **Subtext:** "Book a free call and we'll scope your system in 20 minutes."
- **CTA button:** Navy `#1A1A2E` bg, white text — "Get Your Brain Built" → `/contact`

---

## File Changes

- **Edit:** `app/services/page.tsx` — insert Business Brain block between Add-ons section closing tag and Bottom CTA section opening tag. All markup lives inline in this file (no new component files).

---

## What This Is NOT

- Not a new page or route
- Not a new component file
- No Framer Motion animations
- No new color tokens or CSS classes beyond what already exists
