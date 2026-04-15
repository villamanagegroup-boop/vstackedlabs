import type { Metadata } from 'next'
import ServicesContent from './ServicesContent'

export const metadata: Metadata = {
  title: 'AI Automation Services for Business Owners & Founders',
  description:
    'From AI Quick Setup to full Venture Launch — explore our AI automation services for small business owners and product founders. Custom tools, workflow automation, AI retainer.',
  alternates: {
    canonical: 'https://www.stackdstudiosai.com/services',
  },
  openGraph: {
    title: 'AI Automation Services for Business Owners & Founders',
    description:
      'AI workflow automation, custom AI tools, retainer plans, and venture launch packages. Built for business owners and founders.',
    url: 'https://www.stackdstudiosai.com/services',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'AI Automation Services — Stackd Studios AI',
  url: 'https://www.stackdstudiosai.com/services',
  itemListElement: [
    { '@type': 'Service', position: 1, name: 'AI Quick Setup',        description: 'Get AI tools and automations running in your business fast.',              provider: { '@type': 'Organization', name: 'Stackd Studios AI' } },
    { '@type': 'Service', position: 2, name: 'AI Business Build-Out', description: 'Full AI system design and implementation for your business.',             provider: { '@type': 'Organization', name: 'Stackd Studios AI' } },
    { '@type': 'Service', position: 3, name: 'Micro Tool Build',      description: 'Custom AI-powered micro tools built for your specific workflow.',          provider: { '@type': 'Organization', name: 'Stackd Studios AI' } },
    { '@type': 'Service', position: 4, name: 'AI Retainer',           description: 'Ongoing AI support, builds, and optimization on a monthly retainer.',      provider: { '@type': 'Organization', name: 'Stackd Studios AI' } },
    { '@type': 'Service', position: 5, name: 'Strategy Session',      description: 'Deep-dive session to define your AI strategy and product roadmap.',        provider: { '@type': 'Organization', name: 'Stackd Studios AI' } },
    { '@type': 'Service', position: 6, name: 'Founder Build Sprint',  description: 'Rapid build sprint to take your product from idea to working prototype.', provider: { '@type': 'Organization', name: 'Stackd Studios AI' } },
    { '@type': 'Service', position: 7, name: 'Venture Launch Package',description: 'Full venture launch: strategy, build, and go-to-market in one package.',  provider: { '@type': 'Organization', name: 'Stackd Studios AI' } },
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
