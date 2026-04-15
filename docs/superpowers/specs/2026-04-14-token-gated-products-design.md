# Token-Gated Digital Product System — Design Spec
**Date:** 2026-04-14  
**Project:** Stackd Studios AI (stackdstudiosai.com)  
**Stack:** Next.js 16.2.3 App Router, Supabase, Stripe, Resend

---

## Overview

A token-based access system for digital products sold through the existing Stripe + cart checkout flow. When a customer completes a purchase, each product they bought generates a unique 32-character access token. The token is emailed to them via Resend. All `/products/[product_id]` routes are protected by Next.js middleware that validates the token from the URL query param — no login, no cookies.

---

## Data Model

### `purchases` table

| Column | Type | Notes |
|---|---|---|
| `id` | uuid | PK, default `gen_random_uuid()` |
| `email` | text | NOT NULL — from `session.customer_details.email` |
| `product_id` | text | NOT NULL — slug e.g. `starter-pack` |
| `product_name` | text | NOT NULL — display name |
| `stripe_payment_intent_id` | text | Not unique — multiple rows per session |
| `stripe_session_id` | text | Not unique — multiple rows per session |
| `access_token` | text | UNIQUE, NOT NULL — 32-char hex |
| `amount_paid` | integer | In cents |
| `created_at` | timestamptz | Default `now()` |
| `expires_at` | timestamptz | Nullable — null = never expires |
| `is_active` | boolean | Default `true` |

Index on `access_token` for fast lookups.  
RLS: service role only — no public access.

### `webhook_logs` table

| Column | Type | Notes |
|---|---|---|
| `id` | uuid | PK, default `gen_random_uuid()` |
| `event_id` | text | Stripe event ID — idempotency key |
| `event_type` | text | e.g. `checkout.session.completed` |
| `status` | text | `success` or `error` |
| `error_message` | text | Nullable |
| `session_id` | text | Stripe session ID |
| `created_at` | timestamptz | Default `now()` |

RLS: service role only — no public access.

---

## Product ID Map (`lib/products.ts`)

Server-side mapping from Stripe price IDs to product slugs and display names. Single source of truth — no reliance on Stripe session metadata.

| Slug | Display Name | Price ID |
|---|---|---|
| `starter-pack` | Business Owner AI Starter Pack | `price_1TMF5vAA0v91LtlWk5ofjrtI` |
| `founder-toolkit` | Founder Strategy Toolkit | `price_1TMF5wAA0v91LtlWpIKZpARe` |
| `saas-starter` | Next.js + Supabase SaaS Starter | `price_1TMF5wAA0v91LtlWRlT13Qz5` |
| `intake-template` | AI Intake System Template | `price_1TMF5xAA0v91LtlW8fcxslKH` |
| `ai-workflow` | Build Your First AI Workflow | `price_1TMF5xAA0v91LtlWXE4NsJMG` |
| `prompt-engineering` | Prompt Engineering for Business | `price_1TMF5yAA0v91LtlWR4nHQQ7B` |
| `proposal-writer` | Claude Skill: Proposal Writer | `price_1TMF5yAA0v91LtlWFwJK6KLf` |
| `content-repurposer` | Claude Skill: Content Repurposer | `price_1TMF5yAA0v91LtlWubvCvCBZ` |

---

## Webhook Handler (`app/api/webhooks/stripe/route.ts`)

Listens for `checkout.session.completed`.

**Flow:**
1. Read raw request body via `request.text()`
2. Verify Stripe signature using `STRIPE_WEBHOOK_SECRET`
3. Re-fetch session with `expand: ['line_items']` to get all purchased price IDs
4. Extract `customer_details.email`
5. For each line item:
   - Look up product in `PRICE_ID_MAP` — skip with warning if not found (e.g. service invoice)
   - Generate 32-char hex token: `crypto.randomBytes(16).toString('hex')`
   - Insert row into `purchases`
   - Call `sendAccessEmail()`
6. Log event to `webhook_logs` with `status: 'success'`
7. On any error: log to `webhook_logs` with `status: 'error'` + `error_message`, return 200 (Stripe must not retry)

**Notes:**
- Uses existing `lib/stripe.ts` client
- Uses existing `lib/supabase-server.ts` service role client
- Returns `{ received: true }` with status 200 in all cases

---

## Access Email (`lib/emails/send-access-email.ts`)

Sent via Resend for each purchased product.

**From:** `Stackd Studios AI <noreply@stackdstudiosai.com>`  
**Subject:** `Your access link is ready — [product_name]`

**HTML layout:**
- Black header with "Stackd Studios AI" in yellow `#E8C547`
- "You're in." heading
- Body: "Thanks for purchasing [product_name]. Click the button below to access your product — no login required."
- Yellow CTA button: "Access [product_name]" → `${process.env.NEXT_PUBLIC_SITE_URL}/products/[product_id]?token=[access_token]`
- Footer: "This link is yours. Bookmark it — you'll need it to return." + `stackdstudiosai.com`
- Footer: "© 2026 Stackd Studios AI LLC · A Hicks Virtual Solutions Company"

---

## Token Validation (`lib/validate-token.ts`)

```ts
validateToken(product_id: string, token: string): Promise<{ valid: boolean; purchase: Purchase | null }>
```

- Queries `purchases` where `access_token = token AND product_id = product_id AND is_active = true`
- If `expires_at` is non-null and in the past → `{ valid: false, purchase: null }`
- Otherwise → `{ valid: true, purchase }`
- Uses service role Supabase client

---

## Middleware (`middleware.ts`)

Protects `/products/:path+` (requires at least one segment — `/products` index is unprotected).

**Logic:**
1. Extract `product_id` from pathname (segment after `/products/`)
2. Read `token` from URL search params
3. If no token → redirect to `/store`
4. Call `validateToken(product_id, token)`
5. If invalid → redirect to `/store?reason=invalid`
6. If valid → `NextResponse.next()`

No cookies. Token in URL is the sole access mechanism.

---

## Environment Variables

| Variable | Status |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Already set |
| `SUPABASE_SERVICE_ROLE_KEY` | Already set |
| `STRIPE_SECRET_KEY` | Already set |
| `STRIPE_WEBHOOK_SECRET` | Already set |
| `RESEND_API_KEY` | **Needs adding** |
| `NEXT_PUBLIC_SITE_URL` | Already set |

---

## Files Changed / Created

| Path | Action |
|---|---|
| Supabase SQL migration | New — run in Supabase dashboard |
| `lib/products.ts` | New |
| `app/api/webhooks/stripe/route.ts` | New |
| `lib/emails/send-access-email.ts` | New |
| `lib/validate-token.ts` | New |
| `middleware.ts` | New |
| `.env.local` | Updated — add `RESEND_API_KEY` |
| `.env.example` | New — all vars blanked |

---

## Out of Scope

- Product page content (`/products/[product_id]`) — middleware protects the route but page UI is a separate task
- Cookie-based persistent access
- Token refresh or re-send flow
- Admin revocation UI (can set `is_active = false` directly in Supabase)
