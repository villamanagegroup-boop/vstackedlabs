import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Demo Lab — Try our work | Stackd Studios AI',
    template: '%s | Demo Lab — Stackd Studios AI',
  },
  description:
    'Step into the Stackd Studios Demo Lab. Live, interactive demos of AI intake forms, an AI business assistant, and a self-running ops dashboard — all running in your browser with mock data. No signup.',
  alternates: {
    canonical: 'https://www.stackdstudiosai.com/lab',
  },
  openGraph: {
    title: 'Demo Lab — Stackd Studios AI',
    description:
      'Live, interactive demos of the AI systems we ship. No signup, no waiting — click in and play.',
    url: 'https://www.stackdstudiosai.com/lab',
  },
}

export default function LabLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
