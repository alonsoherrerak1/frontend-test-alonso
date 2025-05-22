"use client"
import { useCartContext } from "@/utils/CartContext"
import { OrHeader } from "@/components/organisms/or-header/or-header"
import Image from "next/image"
import Link from "next/link"

export default function CartPage() {
  const { cart, remove } = useCartContext()
  const total = cart.reduce((acc, item) => acc + item.price, 0)

  return (
    <>
      <OrHeader/>
      <section className="flex flex-col gap-8 px-6 py-8 lg:gap-12 lg:py-12 lg:px-32 min-h-[60vh]">
        <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
        {cart.length > 0 && (
          <p className="text-gray-500 mb-6">{cart.length} items</p>
        )}
        
        {cart.length === 0 ? (
          <div className="text-gray-500">Your cart is empty.</div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <div className="flex flex-col gap-4">
                {cart.map(item => (
                  <div key={item.id} className="bg-white rounded-lg shadow flex flex-col md:flex-row">
                    <div className="w-full md:w-[256px] h-[156px]">
                      <Image 
                        src={item.image} 
                        alt={item.name} 
                        width={256} 
                        height={156} 
                        className="w-full h-[156px] object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none" 
                      />
                    </div>
                    
                    <div className="flex flex-col p-4 flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-500">{item.genre}</span>
                        <button 
                          onClick={() => remove(item.id)} 
                          className="text-gray-400 text-xl hover:text-red-500"
                        >
                          ×
                        </button>
                      </div>
                      <h3 className="font-bold text-lg mb-1">
                        {item.name}
                        {item.isNew && <span className="ml-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded">New</span>}
                      </h3>
                      {item.description && (
                        <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                      )}
                      <div className="flex justify-end mt-auto">
                        <span className="font-semibold">${item.price}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="w-full lg:w-[380px]">
              <div className="rounded-lg p-6 border border-gray-300">
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                <div className="flex mb-4">
                  <span>{cart.length} items</span>
                </div>
                {cart.map(item => (
                  <div key={item.id} className="flex justify-between text-sm mb-2">
                    <span className="truncate max-w-[70%]">{item.name}</span>
                    <span>${item.price}</span>
                  </div>
                ))}
                <div className="border-t border-gray-300 my-4"></div>
                <div className="flex justify-between font-bold">
                  <span>Order Total:</span>
                  <span>${total}</span>
                </div>
              </div>
              
              <button 
                className="w-full bg-[#585660] text-white h-[56px] rounded mt-4 hover:bg-[#4a4a52] transition"
              >
                CHECK OUT
              </button>
              
              <div className="w-full flex justify-center mt-8">
                <Link href="/" className="text-[#585660] hover:underline">
                  Back to catalog
                </Link>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  )
} 