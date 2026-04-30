'use client'

import { useEffect } from 'react'
import GlobalChatbot from '@/components/chatbot/GlobalChatbot'

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      {children}
      <GlobalChatbot />
    </>
  )
}
