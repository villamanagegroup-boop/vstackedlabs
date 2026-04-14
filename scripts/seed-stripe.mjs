import Stripe from 'stripe'
import { config } from 'dotenv'

config({ path: '.env.local' })

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

const products = [
  {
    name: 'Business Owner AI Starter Pack',
    description: 'A curated collection of 25 Claude prompts for business owners — intake automation, client communication, proposal drafting, weekly planning, and more.',
    price: 2700, // in cents
    category: 'Prompt Packs',
  },
  {
    name: 'Founder Strategy Toolkit',
    description: 'Prompts for idea validation, business model development, competitive analysis, and investor-ready summaries. Built for founders in early-stage mode.',
    price: 3700,
    category: 'Prompt Packs',
  },
  {
    name: 'Next.js + Supabase SaaS Starter',
    description: 'Production-ready Next.js 16 App Router template with Supabase Auth, RLS policies, Stripe payments, and Resend email — all pre-configured.',
    price: 9700,
    category: 'Templates',
  },
  {
    name: 'AI Intake System Template',
    description: 'A complete client intake system with lead capture form, qualification scoring, auto-response email, and Supabase backend. Deploy in under an hour.',
    price: 6700,
    category: 'Templates',
  },
  {
    name: 'Build Your First AI Workflow',
    description: 'A self-paced course walking business owners through building their first automated AI workflow using Claude and Zapier. No code required.',
    price: 9700,
    category: 'Courses',
  },
  {
    name: 'Prompt Engineering for Business',
    description: 'Learn how to write prompts that actually work — for client communication, content creation, internal ops, and customer service. With exercises.',
    price: 6700,
    category: 'Courses',
  },
  {
    name: 'Claude Skill: Proposal Writer',
    description: 'A ready-to-import Claude skill that generates client-ready proposals from a simple intake form. Plug into your Claude Projects and go.',
    price: 1900,
    category: 'Skills',
  },
  {
    name: 'Claude Skill: Content Repurposer',
    description: 'Turn one piece of content into 10. This Claude skill takes a single blog post or newsletter and repurposes it across email, social, and short-form.',
    price: 1900,
    category: 'Skills',
  },
]

console.log('Creating Stripe products...\n')

for (const item of products) {
  const product = await stripe.products.create({
    name: item.name,
    description: item.description,
    metadata: { category: item.category },
  })

  const price = await stripe.prices.create({
    product: product.id,
    unit_amount: item.price,
    currency: 'usd',
  })

  console.log(`✓ ${item.name}`)
  console.log(`  priceId: ${price.id}\n`)
}

console.log('Done! Copy the priceIds above into your store page.')
