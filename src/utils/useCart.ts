import { useCallback, useEffect, useState } from "react"

export interface CartItem {
  id: string;
  name: string;
  image: string;
  price: number;
  genre: string;
  description: string;
  isNew: boolean;
}

const STORAGE_KEY = "cart_items"

export function useCart() {
  const [cart, setCart] = useState<CartItem[]>([])

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) setCart(JSON.parse(stored))
  }, [])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart))
  }, [cart])

  const add = useCallback((item: CartItem) => {
    setCart(prev => prev.find(i => i.id === item.id) ? prev : [...prev, item])
  }, [])

  const remove = useCallback((id: string) => {
    setCart(prev => prev.filter(i => i.id !== id))
  }, [])

  const isInCart = useCallback((id: string) => {
    return cart.some(i => i.id === id)
  }, [cart])

  return { cart, add, remove, isInCart }
} 