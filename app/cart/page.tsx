'use client'

import { useTransition } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { useCart } from '@/components/CartContext'
import { createCheckoutSession } from '@/app/actions/checkout'

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart, totalItems, totalPrice } = useCart()
  const [isPending, startTransition] = useTransition()

  function handleCheckout() {
    startTransition(async () => {
      await createCheckoutSession(items.map((i) => ({ priceId: i.priceId, quantity: i.quantity })))
    })
  }

  return (
    <>
      <Navbar />
      <main className="bg-[#F6F4EF] min-h-screen">
        <section className="pt-32 pb-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-[clamp(32px,5vw,56px)] text-[#0C0C0C] leading-[1.0] mb-2">Your Cart</h1>
            <p className="text-[#888580] text-sm mb-10">
              {totalItems === 0 ? 'Your cart is empty.' : `${totalItems} item${totalItems > 1 ? 's' : ''}`}
            </p>

            {items.length === 0 ? (
              <div className="bg-white rounded-2xl border border-[#E2DED8] p-12 text-center">
                <p className="text-[#888580] mb-6">Nothing here yet — head to the store to find something.</p>
                <Link
                  href="/store"
                  className="inline-flex items-center justify-center bg-[#0C0C0C] hover:bg-[#E8C547] text-white hover:text-[#0C0C0C] font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 hover:scale-[1.02] min-h-[44px]"
                >
                  Browse the Store
                </Link>
              </div>
            ) : (
              <div className="grid lg:grid-cols-3 gap-8 items-start">
                {/* Item list */}
                <div className="lg:col-span-2 flex flex-col gap-4">
                  {items.map((item) => (
                    <div key={item.priceId} className="bg-white rounded-2xl border border-[#E2DED8] p-5 flex items-center gap-4">
                      {/* Icon */}
                      <div className="w-14 h-14 bg-[#0C0C0C] rounded-xl flex items-center justify-center shrink-0">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                          <path d="M4 4h14l-1.5 9H5.5L4 4z" stroke="#E8C547" strokeWidth="1.5" strokeLinejoin="round"/>
                          <circle cx="8" cy="18" r="1.5" fill="#E8C547"/>
                          <circle cx="15" cy="18" r="1.5" fill="#E8C547"/>
                        </svg>
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <p className="text-[#0C0C0C] font-semibold text-sm leading-tight mb-1 truncate">{item.name}</p>
                        <p className="text-[#888580] text-sm">${item.price} each</p>
                      </div>

                      {/* Quantity */}
                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          onClick={() => updateQuantity(item.priceId, item.quantity - 1)}
                          className="w-8 h-8 rounded-lg border border-[#E2DED8] flex items-center justify-center text-[#0C0C0C] hover:bg-[#F6F4EF] transition-colors"
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>
                        <span className="w-6 text-center text-sm font-semibold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.priceId, item.quantity + 1)}
                          className="w-8 h-8 rounded-lg border border-[#E2DED8] flex items-center justify-center text-[#0C0C0C] hover:bg-[#F6F4EF] transition-colors"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>

                      {/* Subtotal */}
                      <p className="text-[#0C0C0C] font-bold text-sm w-14 text-right shrink-0">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>

                      {/* Remove */}
                      <button
                        onClick={() => removeItem(item.priceId)}
                        className="text-[#888580] hover:text-[#0C0C0C] transition-colors ml-2 shrink-0"
                        aria-label={`Remove ${item.name}`}
                      >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                          <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                      </button>
                    </div>
                  ))}

                  <button
                    onClick={clearCart}
                    className="text-[#888580] hover:text-[#0C0C0C] text-sm transition-colors text-left"
                  >
                    Clear cart
                  </button>
                </div>

                {/* Order summary */}
                <div className="bg-[#0C0C0C] rounded-2xl p-6 flex flex-col gap-5 sticky top-24">
                  <h2 className="text-white text-lg">Order Summary</h2>

                  <div className="flex flex-col gap-2">
                    {items.map((item) => (
                      <div key={item.priceId} className="flex justify-between text-sm">
                        <span className="text-white/60 truncate mr-2">{item.name} ×{item.quantity}</span>
                        <span className="text-white shrink-0">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-white/10 pt-4 flex justify-between">
                    <span className="text-white font-semibold">Total</span>
                    <span className="text-[#E8C547] font-bold text-lg">${totalPrice.toFixed(2)}</span>
                  </div>

                  <button
                    onClick={handleCheckout}
                    disabled={isPending}
                    className="inline-flex items-center justify-center bg-[#E8C547] hover:bg-[#d4b03d] disabled:opacity-60 text-[#0C0C0C] font-bold py-3.5 px-6 rounded-xl transition-all duration-200 hover:scale-[1.02] min-h-[44px] text-sm"
                  >
                    {isPending ? 'Redirecting to Stripe...' : 'Checkout'}
                  </button>

                  <Link
                    href="/store"
                    className="text-center text-white/50 hover:text-white text-sm transition-colors"
                  >
                    ← Continue shopping
                  </Link>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
