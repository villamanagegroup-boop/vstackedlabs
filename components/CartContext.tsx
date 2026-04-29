'use client'

import { createContext, useContext, useEffect, useRef, useState } from 'react'

export interface CartItem {
  priceId: string
  name: string
  price: number
  quantity: number
}

interface CartContextValue {
  items: CartItem[]
  addItem: (item: Omit<CartItem, 'quantity'>) => void
  removeItem: (priceId: string) => void
  updateQuantity: (priceId: string, quantity: number) => void
  clearCart: () => void
  totalItems: number
  totalPrice: number
}

interface PersistedCart {
  items: CartItem[]
  updatedAt: number
}

const STORAGE_KEY = 'stackd-cart'
const CART_TTL_MS = 7 * 24 * 60 * 60 * 1000

const CartContext = createContext<CartContextValue | null>(null)

function parseStored(raw: string | null): CartItem[] | null {
  if (!raw) return null
  try {
    const parsed = JSON.parse(raw)
    if (Array.isArray(parsed)) return parsed
    if (parsed && Array.isArray(parsed.items)) {
      const updatedAt = typeof parsed.updatedAt === 'number' ? parsed.updatedAt : 0
      if (Date.now() - updatedAt > CART_TTL_MS) return null
      return parsed.items as CartItem[]
    }
  } catch {}
  return null
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const hydrated = useRef(false)

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY)
    const loaded = parseStored(raw)
    if (loaded) {
      setItems(loaded)
    } else if (raw) {
      localStorage.removeItem(STORAGE_KEY)
    }
    hydrated.current = true
  }, [])

  useEffect(() => {
    if (!hydrated.current) return
    if (items.length === 0) {
      localStorage.removeItem(STORAGE_KEY)
      return
    }
    const payload: PersistedCart = { items, updatedAt: Date.now() }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload))
  }, [items])

  useEffect(() => {
    function handleStorage(e: StorageEvent) {
      if (e.key !== STORAGE_KEY) return
      const next = parseStored(e.newValue) ?? []
      setItems((current) =>
        JSON.stringify(current) === JSON.stringify(next) ? current : next
      )
    }
    window.addEventListener('storage', handleStorage)
    return () => window.removeEventListener('storage', handleStorage)
  }, [])

  function addItem(item: Omit<CartItem, 'quantity'>) {
    setItems((prev) => {
      const existing = prev.find((i) => i.priceId === item.priceId)
      if (existing) {
        return prev.map((i) =>
          i.priceId === item.priceId ? { ...i, quantity: i.quantity + 1 } : i
        )
      }
      return [...prev, { ...item, quantity: 1 }]
    })
  }

  function removeItem(priceId: string) {
    setItems((prev) => prev.filter((i) => i.priceId !== priceId))
  }

  function updateQuantity(priceId: string, quantity: number) {
    if (quantity < 1) return removeItem(priceId)
    setItems((prev) =>
      prev.map((i) => (i.priceId === priceId ? { ...i, quantity } : i))
    )
  }

  function clearCart() {
    setItems([])
  }

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0)
  const totalPrice = items.reduce((sum, i) => sum + i.price * i.quantity, 0)

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQuantity, clearCart, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
