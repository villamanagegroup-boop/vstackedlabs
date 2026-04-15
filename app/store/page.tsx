import type { Metadata } from 'next'
import StoreContent from './StoreContent'

export const metadata: Metadata = {
  title: 'AI Templates & Prompt Packs — Stackd Studios AI Store',
  description:
    'Download AI prompt packs and business templates built by the Stackd Studios AI team. Tools that work the moment you open them — for business owners and founders.',
  alternates: {
    canonical: 'https://www.stackdstudiosai.com/store',
  },
  openGraph: {
    title: 'AI Templates & Prompt Packs — Stackd Studios AI Store',
    description:
      'Downloadable AI tools, prompt packs, and business templates. Ready to use immediately.',
    url: 'https://www.stackdstudiosai.com/store',
  },
}

export default function StorePage() {
  return <StoreContent />
}
