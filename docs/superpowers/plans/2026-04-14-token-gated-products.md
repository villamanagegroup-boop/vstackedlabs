# Token-Gated Digital Products Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a token-based gated access system so customers who purchase digital products receive a unique URL with an embedded token — no login required.

**Architecture:** Stripe webhook fires on purchase → one `purchases` row and one access email per line item → Next.js Proxy (`proxy.ts`) intercepts `/products/:path+` routes and validates the token from the query string via `validateToken()` in `lib/validate-token.ts`.

**Tech Stack:** Next.js 16.2.3 App Router, Supabase (service role), Stripe webhooks, Resend, Node.js `crypto`

> **Next.js 16 breaking change:** Middleware is now called **Proxy**. The file is `proxy.ts` (not `middleware.ts`) and the exported function must be named `proxy` (not `middleware`). `NextResponse` and `NextRequest` APIs are unchanged.

---

## File Map

| Path | Action | Responsibility |
|---|---|---|
| `lib/products.ts` | Create | Price ID → product slug/name map |
| `lib/validate-token.ts` | Create | Query Supabase to validate a token |
| `lib/emails/send-access-email.ts` | Create | Send Resend transactional email |
| `app/api/webhooks/stripe/route.ts` | Create | Stripe webhook handler |
| `proxy.ts` | Create | Protect `/products/:path+` routes |
| `.env.local` | Modify | Add `RESEND_API_KEY` |
| `.env.example` | Create | All env vars blanked for reference |

SQL migration runs in Supabase dashboard — not a project file.

---

## Task 1: Install Resend

**Files:**
- Modify: `package.json` (via npm)

- [ ] **Step 1: Install the package**

```bash
cd /c/Users/hicks/stackd-studio && npm install resend
```

Expected output: `added 1 package` (or similar), no errors.

- [ ] **Step 2: Add RESEND_API_KEY to .env.local**

Open `.env.local` and add this line:

```
RESEND_API_KEY=REDACTED_RESEND_API_KEY
```

- [ ] **Step 3: Create .env.example**

Create `/c/Users/hicks/stackd-studio/.env.example` with:

```
NEXT_PUBLIC_SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
STRIPE_SECRET_KEY=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_SITE_URL=
RESEND_API_KEY=
```

- [ ] **Step 4: Commit**

```bash
git add package.json package-lock.json .env.example
git commit -m "feat: install resend, add .env.example"
```

(Do NOT git add `.env.local` — it contains secrets.)

---

## Task 2: Supabase SQL Migration

**Files:**
- Run in Supabase dashboard SQL editor (not a project file)

- [ ] **Step 1: Open Supabase dashboard**

Go to your Supabase project → SQL Editor → New query.

- [ ] **Step 2: Run this migration**

```sql
-- purchases table
-- Note: stripe_session_id and stripe_payment_intent_id are NOT unique
-- because one session can produce multiple rows (one per line item).
create table if not exists purchases (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  product_id text not null,
  product_name text not null,
  stripe_payment_intent_id text,
  stripe_session_id text,
  access_token text unique not null,
  amount_paid integer,
  created_at timestamptz default now(),
  expires_at timestamptz,
  is_active boolean default true
);

create index if not exists purchases_access_token_idx on purchases (access_token);

-- webhook_logs table
create table if not exists webhook_logs (
  id uuid primary key default gen_random_uuid(),
  event_id text not null,
  event_type text not null,
  status text not null,
  error_message text,
  session_id text,
  created_at timestamptz default now()
);

-- RLS: service role only, no public access
alter table purchases enable row level security;
alter table webhook_logs enable row level security;

-- No public policies — service role key bypasses RLS automatically
```

Expected: "Success. No rows returned."

- [ ] **Step 3: Verify tables exist**

In Supabase → Table Editor, confirm `purchases` and `webhook_logs` are listed.

---

## Task 3: Product Map (`lib/products.ts`)

**Files:**
- Create: `lib/products.ts`

- [ ] **Step 1: Create the file**

Create `/c/Users/hicks/stackd-studio/lib/products.ts`:

```ts
export interface ProductInfo {
  product_id: string
  product_name: string
}

export const PRICE_ID_MAP: Record<string, ProductInfo> = {
  'price_1TMF5vAA0v91LtlWk5ofjrtI': {
    product_id: 'starter-pack',
    product_name: 'Business Owner AI Starter Pack',
  },
  'price_1TMF5wAA0v91LtlWpIKZpARe': {
    product_id: 'founder-toolkit',
    product_name: 'Founder Strategy Toolkit',
  },
  'price_1TMF5wAA0v91LtlWRlT13Qz5': {
    product_id: 'saas-starter',
    product_name: 'Next.js + Supabase SaaS Starter',
  },
  'price_1TMF5xAA0v91LtlW8fcxslKH': {
    product_id: 'intake-template',
    product_name: 'AI Intake System Template',
  },
  'price_1TMF5xAA0v91LtlWXE4NsJMG': {
    product_id: 'ai-workflow',
    product_name: 'Build Your First AI Workflow',
  },
  'price_1TMF5yAA0v91LtlWR4nHQQ7B': {
    product_id: 'prompt-engineering',
    product_name: 'Prompt Engineering for Business',
  },
  'price_1TMF5yAA0v91LtlWFwJK6KLf': {
    product_id: 'proposal-writer',
    product_name: 'Claude Skill: Proposal Writer',
  },
  'price_1TMF5yAA0v91LtlWubvCvCBZ': {
    product_id: 'content-repurposer',
    product_name: 'Claude Skill: Content Repurposer',
  },
}
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
cd /c/Users/hicks/stackd-studio && npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add lib/products.ts
git commit -m "feat: add price ID to product map"
```

---

## Task 4: Token Validation (`lib/validate-token.ts`)

**Files:**
- Create: `lib/validate-token.ts`

- [ ] **Step 1: Create the file**

Create `/c/Users/hicks/stackd-studio/lib/validate-token.ts`:

```ts
import { createServerClient } from '@/lib/supabase-server'

export interface Purchase {
  id: string
  email: string
  product_id: string
  product_name: string
  stripe_payment_intent_id: string | null
  stripe_session_id: string | null
  access_token: string
  amount_paid: number | null
  created_at: string
  expires_at: string | null
  is_active: boolean
}

export interface TokenValidationResult {
  valid: boolean
  purchase: Purchase | null
}

export async function validateToken(
  product_id: string,
  token: string
): Promise<TokenValidationResult> {
  const supabase = createServerClient()

  if (!supabase) {
    console.error('validateToken: Supabase client unavailable')
    return { valid: false, purchase: null }
  }

  const { data, error } = await supabase
    .from('purchases')
    .select('*')
    .eq('access_token', token)
    .eq('product_id', product_id)
    .eq('is_active', true)
    .single()

  if (error || !data) {
    return { valid: false, purchase: null }
  }

  const purchase = data as Purchase

  if (purchase.expires_at && new Date(purchase.expires_at) < new Date()) {
    return { valid: false, purchase: null }
  }

  return { valid: true, purchase }
}
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
cd /c/Users/hicks/stackd-studio && npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add lib/validate-token.ts
git commit -m "feat: add validateToken utility"
```

---

## Task 5: Access Email (`lib/emails/send-access-email.ts`)

**Files:**
- Create: `lib/emails/send-access-email.ts`

- [ ] **Step 1: Create the directory and file**

Create `/c/Users/hicks/stackd-studio/lib/emails/send-access-email.ts`:

```ts
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

interface SendAccessEmailParams {
  to: string
  product_id: string
  product_name: string
  access_token: string
}

export async function sendAccessEmail({
  to,
  product_id,
  product_name,
  access_token,
}: SendAccessEmailParams): Promise<void> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://stackdstudiosai.com'
  const accessUrl = `${siteUrl}/products/${product_id}?token=${access_token}`

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Your access link is ready</title>
</head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:12px;overflow:hidden;">

          <!-- Header -->
          <tr>
            <td style="background:#0C0C0C;padding:32px 40px;">
              <span style="color:#E8C547;font-size:20px;font-weight:700;letter-spacing:0.05em;">Stackd Studios AI</span>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:48px 40px 32px;">
              <h1 style="margin:0 0 16px;font-size:36px;font-weight:800;color:#0C0C0C;line-height:1.1;">You're in.</h1>
              <p style="margin:0 0 32px;font-size:16px;color:#555555;line-height:1.6;">
                Thanks for purchasing <strong>${product_name}</strong>. Click the button below to access your product — no login required.
              </p>
              <a href="${accessUrl}"
                style="display:inline-block;background:#E8C547;color:#0C0C0C;font-size:16px;font-weight:700;text-decoration:none;padding:16px 32px;border-radius:8px;">
                Access ${product_name}
              </a>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding:0 40px;">
              <hr style="border:none;border-top:1px solid #eeeeee;margin:0;" />
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:24px 40px;background:#fafafa;">
              <p style="margin:0 0 8px;font-size:13px;color:#888888;">
                This link is yours. Bookmark it — you'll need it to return.
              </p>
              <p style="margin:0 0 16px;font-size:13px;color:#888888;">
                <a href="${siteUrl}" style="color:#E8C547;text-decoration:none;">${siteUrl.replace('https://', '')}</a>
              </p>
              <p style="margin:0;font-size:12px;color:#aaaaaa;">
                © 2026 Stackd Studios AI LLC · A Hicks Virtual Solutions Company
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`

  const { error } = await resend.emails.send({
    from: 'Stackd Studios AI <noreply@stackdstudiosai.com>',
    to,
    subject: `Your access link is ready — ${product_name}`,
    html,
  })

  if (error) {
    throw new Error(`Resend email failed: ${JSON.stringify(error)}`)
  }
}
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
cd /c/Users/hicks/stackd-studio && npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add lib/emails/send-access-email.ts
git commit -m "feat: add Resend access email function"
```

---

## Task 6: Stripe Webhook Handler (`app/api/webhooks/stripe/route.ts`)

**Files:**
- Create: `app/api/webhooks/stripe/route.ts`

- [ ] **Step 1: Create the route handler**

Create `/c/Users/hicks/stackd-studio/app/api/webhooks/stripe/route.ts`:

```ts
import { NextRequest } from 'next/server'
import crypto from 'crypto'
import { stripe } from '@/lib/stripe'
import { createServerClient } from '@/lib/supabase-server'
import { sendAccessEmail } from '@/lib/emails/send-access-email'
import { PRICE_ID_MAP } from '@/lib/products'

export async function POST(request: NextRequest) {
  const body = await request.text()
  const signature = request.headers.get('stripe-signature')

  if (!signature) {
    return new Response('Missing stripe-signature header', { status: 400 })
  }

  let event: ReturnType<typeof stripe.webhooks.constructEvent>

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    console.error('Stripe signature verification failed:', message)
    return new Response(`Webhook error: ${message}`, { status: 400 })
  }

  const supabase = createServerClient()

  if (event.type === 'checkout.session.completed') {
    const sessionId = (event.data.object as { id: string }).id

    try {
      // Re-fetch session with line_items expanded
      const session = await stripe.checkout.sessions.retrieve(sessionId, {
        expand: ['line_items'],
      })

      const email = session.customer_details?.email
      if (!email) {
        throw new Error('No customer email on session')
      }

      const lineItems = session.line_items?.data ?? []

      for (const item of lineItems) {
        const priceId = item.price?.id
        if (!priceId) continue

        const product = PRICE_ID_MAP[priceId]
        if (!product) {
          console.warn(`Webhook: unknown price ID ${priceId} — skipping`)
          continue
        }

        const access_token = crypto.randomBytes(16).toString('hex')

        if (supabase) {
          await supabase.from('purchases').insert({
            email,
            product_id: product.product_id,
            product_name: product.product_name,
            stripe_payment_intent_id:
              typeof session.payment_intent === 'string'
                ? session.payment_intent
                : null,
            stripe_session_id: session.id,
            access_token,
            amount_paid: item.amount_total,
          })
        }

        await sendAccessEmail({
          to: email,
          product_id: product.product_id,
          product_name: product.product_name,
          access_token,
        })
      }

      // Log success
      if (supabase) {
        await supabase.from('webhook_logs').insert({
          event_id: event.id,
          event_type: event.type,
          status: 'success',
          session_id: sessionId,
        })
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Unknown error'
      console.error('Webhook processing error:', message)

      if (supabase) {
        await supabase.from('webhook_logs').insert({
          event_id: event.id,
          event_type: event.type,
          status: 'error',
          error_message: message,
          session_id: sessionId,
        })
      }

      // Return 200 so Stripe does not retry — error is logged
      return Response.json({ received: true, error: message }, { status: 200 })
    }
  }

  return Response.json({ received: true })
}
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
cd /c/Users/hicks/stackd-studio && npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add app/api/webhooks/stripe/route.ts
git commit -m "feat: add Stripe webhook handler with per-line-item access token generation"
```

---

## Task 7: Route Protection (`proxy.ts`)

**Files:**
- Create: `proxy.ts` (project root — same level as `package.json`)

> **Next.js 16 note:** The file must be `proxy.ts` (not `middleware.ts`). The exported function must be named `proxy`. The `config.matcher` and `NextResponse` APIs are identical to prior versions.

- [ ] **Step 1: Create proxy.ts**

Create `/c/Users/hicks/stackd-studio/proxy.ts`:

```ts
import { NextRequest, NextResponse } from 'next/server'
import { validateToken } from '@/lib/validate-token'

export async function proxy(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl

  // Extract product_id from /products/[product_id]
  const segments = pathname.split('/')
  const product_id = segments[2] // index 0='', 1='products', 2=product_id

  if (!product_id) {
    return NextResponse.redirect(new URL('/store', request.url))
  }

  const token = searchParams.get('token')

  if (!token) {
    return NextResponse.redirect(new URL('/store', request.url))
  }

  const { valid } = await validateToken(product_id, token)

  if (!valid) {
    return NextResponse.redirect(new URL('/store?reason=invalid', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/products/:path+'],
}
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
cd /c/Users/hicks/stackd-studio && npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Build to confirm no runtime errors**

```bash
cd /c/Users/hicks/stackd-studio && npm run build
```

Expected: build completes without errors.

- [ ] **Step 4: Commit**

```bash
git add proxy.ts
git commit -m "feat: protect /products/* routes with token validation proxy"
```

---

## Task 8: Smoke Test End-to-End

This task verifies the full flow manually using Stripe CLI test events.

- [ ] **Step 1: Install Stripe CLI (if not installed)**

```bash
stripe --version
```

If not found: https://stripe.com/docs/stripe-cli#install

- [ ] **Step 2: Forward webhooks to local dev server**

In one terminal:
```bash
cd /c/Users/hicks/stackd-studio && npm run dev
```

In another terminal:
```bash
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```

Copy the webhook signing secret printed by the CLI — it starts with `whsec_`. Temporarily set this as `STRIPE_WEBHOOK_SECRET` in `.env.local` for local testing (revert after).

- [ ] **Step 3: Trigger a test checkout.session.completed event**

```bash
stripe trigger checkout.session.completed
```

Expected in dev server logs:
- `Webhook: unknown price ID ...` (because the triggered event uses a fake price ID — that's expected)
- No 400 or 500 responses

- [ ] **Step 4: Verify webhook_logs row was inserted**

In Supabase → Table Editor → `webhook_logs`: confirm a row with `event_type = checkout.session.completed` and `status = success` or `error` (unknown price ID = skipped, not an error).

- [ ] **Step 5: Manually test token validation**

In Supabase → SQL Editor, insert a test purchase:

```sql
insert into purchases (email, product_id, product_name, access_token, is_active)
values ('test@example.com', 'starter-pack', 'Business Owner AI Starter Pack', 'testtoken12345678901234567890ab', true);
```

- [ ] **Step 6: Verify middleware redirects correctly**

Start dev server (`npm run dev`). In a browser:

1. Visit `http://localhost:3000/products/starter-pack` — should redirect to `/store`
2. Visit `http://localhost:3000/products/starter-pack?token=badtoken` — should redirect to `/store?reason=invalid`
3. Visit `http://localhost:3000/products/starter-pack?token=testtoken12345678901234567890ab` — should pass through (404 is fine — no product page yet, but no redirect)

- [ ] **Step 7: Clean up test data**

```sql
delete from purchases where email = 'test@example.com';
```
