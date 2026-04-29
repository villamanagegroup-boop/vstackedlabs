import type { Metadata } from 'next'
import PricingContent from './PricingContent'

export const metadata: Metadata = {
  title: 'AI Services Pricing | Stackd Studios AI',
  description:
    'Flat, transparent pricing for our four AI services — Clarity Audit, Quick Setup, Team Training, and Growth Retainer. No hidden fees, no surprises.',
  alternates: {
    canonical: 'https://www.stackdstudiosai.com/pricing',
  },
  openGraph: {
    title: 'AI Services Pricing | Stackd Studios AI',
    description:
      'Flat pricing for the AI Clarity Audit, Quick Setup, Team Training, and Growth Retainer. The price you see is the price we scope to.',
    url: 'https://www.stackdstudiosai.com/pricing',
  },
}

export default function PricingPage() {
  return <PricingContent />
}
