# Business Brain Section Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a Business Brain product spotlight block to the existing services page, inserted between the Add-ons section and the bottom CTA.

**Architecture:** All markup lives inline in `app/services/page.tsx` — no new component files. The block contains 5 sub-sections (hero strip, how it works, niche callouts, pricing, CTA strip) stacked vertically, using only design tokens and patterns already in use on the page.

**Tech Stack:** Next.js 14 App Router, Tailwind CSS v4, TypeScript — no new dependencies.

---

## File Map

| File | Action | What changes |
|------|--------|--------------|
| `app/services/page.tsx` | Modify | Insert Business Brain block (~220 lines) between closing `</section>` of Add-ons and opening `<section>` of Bottom CTA |

---

### Task 1: Add data constants at top of file

The file already uses inline data arrays (`trackA`, `trackB`, `addOns`). Add two new data constants — `bbSteps` and `bbNiches` and `bbPricing` — in the same pattern, above the `export default` line.

**Files:**
- Modify: `app/services/page.tsx`

- [ ] **Step 1: Open the file and locate the `addOns` array (ends around line 149)**

- [ ] **Step 2: Insert the three data constants immediately after `addOns` closes (after line 149), before `export default function ServicesPage()`**

```tsx
const bbSteps = [
  {
    number: '01',
    label: 'Collect',
    description:
      'We gather all your operational docs — handbooks, SOPs, menus, forms, vendor contacts, and training guides.',
  },
  {
    number: '02',
    label: 'Build',
    description:
      'We build your custom private AI assistant, trained only on your business\'s knowledge.',
  },
  {
    number: '03',
    label: 'Deploy',
    description:
      'Your team gets a simple chat link — no installs, no logins, no learning curve.',
  },
  {
    number: '04',
    label: 'Maintain',
    description:
      'We review and update your AI monthly to keep it accurate as your business evolves.',
  },
]

const bbNiches = [
  {
    industry: 'Restaurants',
    pain: 'Staff always asking about allergens, specials, and prep procedures.',
    solution: 'Instant answers from your own menu and kitchen SOPs.',
  },
  {
    industry: 'Gyms',
    pain: 'Members and staff asking about class schedules, memberships, and policies.',
    solution: '24/7 knowledge base for front desk and floor staff.',
  },
  {
    industry: 'Salons & Spas',
    pain: 'Inconsistent service info, pricing confusion, and booking questions.',
    solution: 'One source of truth for services, pricing, and protocols.',
  },
  {
    industry: 'Retail Stores',
    pain: 'Product questions, return policies, and vendor info scattered across docs.',
    solution: 'Staff gets answers in seconds, not after hunting through binders.',
  },
  {
    industry: 'Hotels',
    pain: 'Guest services, amenities, and local info spread across staff inboxes.',
    solution: 'A concierge-grade AI your front desk can actually trust.',
  },
  {
    industry: 'Medical & Dental Offices',
    pain: 'Compliance docs, intake forms, and billing FAQs buried in folders.',
    solution: 'Fast, accurate answers for staff without touching patient records.',
  },
]

const bbPricing = [
  {
    name: 'Starter',
    setup: '$500',
    monthly: '$149/mo',
    popular: false,
    bestFor: 'Small teams with a single location and a core set of docs.',
  },
  {
    name: 'Pro',
    setup: '$1,500',
    monthly: '$349/mo',
    popular: true,
    bestFor: 'Growing businesses with multiple departments or locations.',
  },
  {
    name: 'Enterprise',
    setup: '$3,000+',
    monthly: '$600+/mo',
    popular: false,
    bestFor: 'Multi-location operations needing advanced customization and SLAs.',
  },
]
```

- [ ] **Step 3: Verify the file still has no TypeScript errors**

```bash
cd /c/Users/hicks/stackd-studio && npx tsc --noEmit
```

Expected: no output (clean).

- [ ] **Step 4: Commit**

```bash
git add app/services/page.tsx
git commit -m "feat: add Business Brain data constants to services page"
```

---

### Task 2: Insert Business Brain hero strip

Insert the first sub-section of the Business Brain block. Find the closing `</section>` tag of the Add-ons section (after the add-ons grid, around line 384) and insert the new block after it, before the Bottom CTA `<section>`.

**Files:**
- Modify: `app/services/page.tsx`

- [ ] **Step 1: Locate the Add-ons closing tag — it looks like:**

```tsx
        </section>

        {/* Bottom CTA */}
        <section className="py-16 bg-[#1A1A2E]">
```

- [ ] **Step 2: Insert the full Business Brain block between those two sections. Replace the comment `{/* Bottom CTA */}` with the following (keep Bottom CTA intact below it):**

```tsx
        {/* ── Business Brain ── */}
        <div id="business-brain" aria-label="Business Brain product section">

          {/* Hero strip */}
          <section className="py-20 bg-[#1A1A2E]" aria-labelledby="bb-hero-heading">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] px-3 py-1.5 rounded-full bg-[#E8C547] text-[#1A1A2E] mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1A1A2E]" />
                  New Product
                </div>
                <h2 id="bb-hero-heading" className="text-[clamp(36px,5vw,64px)] text-white leading-[1.0] mb-5">
                  Your staff. Smarter. 24/7.
                </h2>
                <p className="text-white/60 text-xl leading-relaxed mb-8 max-w-2xl">
                  We collect your operational docs and build a custom private AI your team can query around the clock — no training required.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-[#E8C547] hover:bg-[#d4b03d] text-[#1A1A2E] font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 hover:scale-[1.02] min-h-[44px]"
                  >
                    Get Your Brain Built
                  </Link>
                  <a
                    href="#bb-how-it-works"
                    className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 min-h-[44px]"
                  >
                    See How It Works
                  </a>
                </div>
              </div>
            </div>
          </section>
```

- [ ] **Step 3: Check for TypeScript errors**

```bash
cd /c/Users/hicks/stackd-studio && npx tsc --noEmit
```

Expected: no output.

- [ ] **Step 4: Verify in browser at http://localhost:3000/services — the navy hero strip should appear between Add-ons and the bottom CTA**

- [ ] **Step 5: Commit**

```bash
git add app/services/page.tsx
git commit -m "feat: add Business Brain hero strip to services page"
```

---

### Task 3: Add How It Works sub-section

Continue building inside the `<div id="business-brain">` wrapper. Add the How It Works section immediately after the closing `</section>` of the hero strip.

**Files:**
- Modify: `app/services/page.tsx`

- [ ] **Step 1: After the hero strip closing `</section>`, insert:**

```tsx
          {/* How It Works */}
          <section id="bb-how-it-works" className="py-20 bg-white" aria-labelledby="bb-hiw-heading">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-10">
                <p className="text-[#888580] text-xs font-semibold uppercase tracking-[0.12em] mb-4">
                  How It Works
                </p>
                <h2 id="bb-hiw-heading" className="text-[clamp(24px,3vw,36px)] text-[#1A1A2E] leading-tight mb-2">
                  Four steps. One smart system.
                </h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {bbSteps.map((step) => (
                  <div
                    key={step.number}
                    className="bg-white rounded-2xl p-6 border border-[#E2DED8] flex flex-col gap-3"
                  >
                    <span className="text-[#E8C547] text-3xl font-[family-name:var(--font-anton)] leading-none">
                      {step.number}
                    </span>
                    <h3 className="text-lg text-[#1A1A2E] leading-tight">{step.label}</h3>
                    <p className="text-[#888580] text-sm leading-relaxed">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
```

- [ ] **Step 2: Check for TypeScript errors**

```bash
cd /c/Users/hicks/stackd-studio && npx tsc --noEmit
```

Expected: no output.

- [ ] **Step 3: Verify in browser — 4 step cards appear in a row below the hero strip**

- [ ] **Step 4: Commit**

```bash
git add app/services/page.tsx
git commit -m "feat: add Business Brain How It Works section"
```

---

### Task 4: Add Niche Callouts sub-section

**Files:**
- Modify: `app/services/page.tsx`

- [ ] **Step 1: After the How It Works closing `</section>`, insert:**

```tsx
          {/* Who It's For */}
          <section className="py-20 bg-[#F6F4EF]" aria-labelledby="bb-niches-heading">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-10">
                <p className="text-[#888580] text-xs font-semibold uppercase tracking-[0.12em] mb-4">
                  Industries We Serve
                </p>
                <h2 id="bb-niches-heading" className="text-[clamp(24px,3vw,36px)] text-[#1A1A2E] leading-tight mb-2">
                  Built for businesses with real operational complexity.
                </h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {bbNiches.map((niche) => (
                  <div
                    key={niche.industry}
                    className="bg-white rounded-2xl p-6 border border-[#E2DED8] flex flex-col gap-3"
                  >
                    <h3 className="text-lg text-[#1A1A2E] leading-tight">{niche.industry}</h3>
                    <p className="text-[#888580] text-sm leading-relaxed">{niche.pain}</p>
                    <p className="text-[#1A4A7A] text-sm font-medium">{niche.solution}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
```

- [ ] **Step 2: Check for TypeScript errors**

```bash
cd /c/Users/hicks/stackd-studio && npx tsc --noEmit
```

Expected: no output.

- [ ] **Step 3: Verify in browser — 6 industry cards appear in a 2×3 grid**

- [ ] **Step 4: Commit**

```bash
git add app/services/page.tsx
git commit -m "feat: add Business Brain niche callouts section"
```

---

### Task 5: Add Pricing sub-section

**Files:**
- Modify: `app/services/page.tsx`

- [ ] **Step 1: After the Niche Callouts closing `</section>`, insert:**

```tsx
          {/* Pricing */}
          <section className="py-20 bg-white" aria-labelledby="bb-pricing-heading">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-10">
                <p className="text-[#888580] text-xs font-semibold uppercase tracking-[0.12em] mb-4">
                  Pricing
                </p>
                <h2 id="bb-pricing-heading" className="text-[clamp(24px,3vw,36px)] text-[#1A1A2E] leading-tight mb-2">
                  Simple, transparent pricing.
                </h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {bbPricing.map((tier) => (
                  <div
                    key={tier.name}
                    className={`relative bg-white rounded-2xl p-8 border flex flex-col gap-5 ${
                      tier.popular
                        ? 'border-[#1A1A2E] shadow-[0_0_0_1px_#1A1A2E]'
                        : 'border-[#E2DED8]'
                    }`}
                  >
                    {tier.popular && (
                      <div className="absolute -top-3.5 left-8">
                        <span className="bg-[#1A1A2E] text-[#E8C547] text-xs font-semibold px-4 py-1 rounded-full">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <div className={tier.popular ? 'mt-2' : ''}>
                      <h3 className="text-2xl text-[#1A1A2E] leading-tight mb-1">{tier.name}</h3>
                      <p className="text-3xl font-bold text-[#1A1A2E] mb-1 font-[family-name:var(--font-instrument-sans)]">
                        {tier.setup} <span className="text-base font-normal text-[#888580]">setup</span>
                      </p>
                      <p className="text-[#888580] text-sm">{tier.monthly}</p>
                    </div>
                    <p className="text-[#1A4A7A] text-xs font-medium">Best for: {tier.bestFor}</p>
                    <div className="flex-1" />
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center bg-[#1A1A2E] hover:bg-[#E8C547] text-white hover:text-[#1A1A2E] font-semibold py-3 px-6 rounded-xl transition-all duration-200 hover:scale-[1.02] min-h-[44px] text-sm"
                    >
                      Get Started
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>
```

- [ ] **Step 2: Check for TypeScript errors**

```bash
cd /c/Users/hicks/stackd-studio && npx tsc --noEmit
```

Expected: no output.

- [ ] **Step 3: Verify in browser — 3 pricing cards appear, Pro has the "Most Popular" badge and double border**

- [ ] **Step 4: Commit**

```bash
git add app/services/page.tsx
git commit -m "feat: add Business Brain pricing section"
```

---

### Task 6: Add CTA strip and close the wrapper div

**Files:**
- Modify: `app/services/page.tsx`

- [ ] **Step 1: After the Pricing closing `</section>`, insert the CTA strip and close the outer wrapper `</div>`:**

```tsx
          {/* CTA strip */}
          <section className="py-16 bg-[#E8C547]" aria-labelledby="bb-cta-heading">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 id="bb-cta-heading" className="text-[clamp(28px,4vw,48px)] text-[#1A1A2E] leading-[1.1] mb-4">
                Ready to build your Business Brain?
              </h2>
              <p className="text-[#1A1A2E]/60 text-lg mb-8">
                Book a free call and we&apos;ll scope your system in 20 minutes.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[#1A1A2E] hover:bg-[#0d0d1e] text-white font-bold px-8 py-4 rounded-xl text-base transition-all duration-200 hover:scale-[1.02] min-h-[44px]"
              >
                Get Your Brain Built
              </Link>
            </div>
          </section>

        </div>
        {/* ── End Business Brain ── */}
```

- [ ] **Step 2: Check for TypeScript errors**

```bash
cd /c/Users/hicks/stackd-studio && npx tsc --noEmit
```

Expected: no output.

- [ ] **Step 3: Verify the full Business Brain block in browser:**
  - Navy hero strip with gold CTA button
  - White How It Works — 4 step cards
  - Off-white niche callouts — 6 industry cards
  - White pricing — 3 tiers, Pro highlighted
  - Gold CTA strip with navy button
  - Original navy Bottom CTA still renders below

- [ ] **Step 4: Check mobile layout at 375px width — all grids should stack to single column**

- [ ] **Step 5: Commit**

```bash
git add app/services/page.tsx
git commit -m "feat: add Business Brain CTA strip, complete full section"
```

---

## Self-Review

**Spec coverage check:**
- [x] Hero — bold headline, value prop, CTA button "Get Your Brain Built" → Task 2
- [x] How It Works — 4 steps (Collect, Build, Deploy, Maintain) → Task 3
- [x] Niche callouts — 6 industries with pain + solution → Task 4
- [x] Pricing — 3 tiers with correct prices, Pro badge → Task 5
- [x] CTA section with contact link → Task 6
- [x] Matches existing fonts, colors, component style — all tokens from existing file
- [x] No new files, no new design patterns

**Placeholder scan:** None found. All code blocks are complete.

**Type consistency:** `bbSteps`, `bbNiches`, `bbPricing` defined in Task 1, consumed in Tasks 3–5. Property names consistent throughout (`step.number`, `step.label`, `step.description` / `niche.industry`, `niche.pain`, `niche.solution` / `tier.name`, `tier.setup`, `tier.monthly`, `tier.popular`, `tier.bestFor`).
