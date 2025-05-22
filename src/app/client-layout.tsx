"use client";
import { CartProvider } from "@/utils/CartContext";
import { OrFooter } from "@/components/organisms/or-footer/or-footer";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <main className="flex-1">{children}</main>
      <OrFooter />
    </CartProvider>
  );
} 