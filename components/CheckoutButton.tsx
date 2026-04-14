'use client'

import { useTransition } from 'react'
import { createCheckoutSession } from '@/app/actions/checkout'

interface CheckoutButtonProps {
  priceId: string
  quantity?: number
  label?: string
  className?: string
}

export default function CheckoutButton({
  priceId,
  quantity = 1,
  label = 'Buy Now',
  className,
}: CheckoutButtonProps) {
  const [isPending, startTransition] = useTransition()

  function handleClick() {
    startTransition(async () => {
      await createCheckoutSession({ priceId, quantity })
    })
  }

  return (
    <button onClick={handleClick} disabled={isPending} className={className}>
      {isPending ? 'Redirecting...' : label}
    </button>
  )
}
