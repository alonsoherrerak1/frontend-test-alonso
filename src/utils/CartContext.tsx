import React, { createContext, useContext } from "react";
import { useCart, CartItem } from "./useCart";

interface CartContextType {
  cart: CartItem[];
  add: (item: CartItem) => void;
  remove: (id: string) => void;
  isInCart: (id: string) => boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const { cart, add, remove, isInCart } = useCart();
  return (
    <CartContext.Provider value={{ cart, add, remove, isInCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext debe usarse dentro de un CartProvider");
  }
  return context;
}; 