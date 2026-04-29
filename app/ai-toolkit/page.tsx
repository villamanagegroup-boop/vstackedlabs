import type { Metadata } from 'next'
import AiToolkitFunnelContent from './AiToolkitFunnelContent'

export const metadata: Metadata = {
  title: 'Free AI Toolkit for Small Business Owners — Stackd Studios AI',
  description:
    "50+ free and low-cost AI tools, organized by what you actually need to get done. Built for small business owners. Permanent access link, updated quarterly. Yours free.",
  alternates: {
    canonical: 'https://www.stackdstudiosai.com/ai-toolkit',
  },
  openGraph: {
    title: 'Free AI Toolkit for Small Business Owners',
    description:
      '50+ AI tools curated for small business owners. Organized by use case. Permanent access link, updated quarterly. Free.',
    url: 'https://www.stackdstudiosai.com/ai-toolkit',
  },
}

export default function AiToolkitFunnelPage() {
  return <AiToolkitFunnelContent />
}
