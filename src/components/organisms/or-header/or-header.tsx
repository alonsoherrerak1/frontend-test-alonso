"use client"
import { AtCartButton } from "@/components/atoms/at-cart-button/at-cart-button"

export const OrHeader = () => {
    return (
        <div className="flex justify-between items-center self-stretch bg-[#EEEEEE] py-5 px-6 lg:px-32">
            <div className="color-[#585660] text-2xl">GamerShop</div>
            <AtCartButton/>
        </div>
    )
}