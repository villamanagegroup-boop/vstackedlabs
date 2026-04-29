import type { Metadata } from 'next'
import ServicesContent from './ServicesContent'

export const metadata: Metadata = {
  title: 'AI Services for Small Business | Stackd Studios AI',
  description:
    'Four focused AI services for business owners and founders — from a quick audit to full team training. Built to deliver results, not complexity.',
  alternates: {
    canonical: 'https://www.stackdstudiosai.com/services',
  },
  openGraph: {
    title: 'AI Services for Small Business | Stackd Studios AI',
    description:
      'Four focused AI services for business owners and founders — from a quick audit to full team training. Built to deliver results, not complexity.',
    url: 'https://www.stackdstudiosai.com/services',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'AI Services — Stackd Studios AI',
  url: 'https://www.stackdstudiosai.com/services',
  itemListElement: [
    {
      '@type': 'Service',
      position: 1,
      name: 'AI Clarity Audit',
      description:
        'A 48-hour written roadmap of AI opportunities for your business with a 30-minute walkthrough call.',
      provider: { '@type': 'Organization', name: 'Stackd Studios AI' },
    },
    {
      '@type': 'Service',
      position: 2,
      name: 'AI Quick Setup',
      description:
        'One specific AI workflow built, tested, and handed off in 5 business days with a training call.',
      provider: { '@type': 'Organization', name: 'Stackd Studios AI' },
    },
    {
      '@type': 'Service',
      position: 3,
      name: 'Claude Team Training',
      description:
        'Live virtual Claude training built around your team and workflows. Standard (from $2,500, teams up to 10) or Enterprise (from $5,000, teams of 10+ with role-specific prompt libraries and async coaching follow-up).',
      provider: { '@type': 'Organization', name: 'Stackd Studios AI' },
    },
    {
      '@type': 'Service',
      position: 4,
      name: 'AI Growth Retainer',
      description:
        'Monthly AI support: one new workflow, prompt updates, a strategy call, and priority async support.',
      provider: { '@type': 'Organization', name: 'Stackd Studios AI' },
    },
  ],
}

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicesContent />
    </>
  )
}
