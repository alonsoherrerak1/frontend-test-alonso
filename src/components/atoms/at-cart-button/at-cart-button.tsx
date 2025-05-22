"use client"
import Image from "next/image"
import Link from "next/link"
import { useCartContext } from "@/utils/CartContext"

export const AtCartButton = () => {
    const { cart } = useCartContext()
    
    return (
        <div className="flex justify-center items-center relative">
            <Link href="/cart">
                <Image 
                    alt="Cart Logo" 
                    src="/cart.svg"
                    width={20}
                    height={20}
                />
                {cart.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                        {cart.length}
                    </span>
                )}
            </Link>
        </div>
    )
}