import type { Metadata } from 'next'
import PricingContent from './PricingContent'

export const metadata: Metadata = {
  title: 'AI Development & Automation Pricing',
  description:
    "Transparent pricing for AI automation, custom AI tool builds, and venture launch packages from Stackd Studios AI. No surprises — see exactly what's included.",
  alternates: {
    canonical: 'https://www.stackdstudiosai.com/pricing',
  },
  openGraph: {
    title: 'AI Development & Automation Pricing',
    description:
      'Clear pricing for AI Quick Setup, Micro Tool Builds, AI Retainers, and Venture Launch packages.',
    url: 'https://www.stackdstudiosai.com/pricing',
  },
}

export default function PricingPage() {
  return <PricingContent />
}
