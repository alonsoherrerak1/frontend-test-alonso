import { redirect } from "next/dist/server/api-utils"
import Image from "next/image"
import Link from "next/link"

export const AtLogo = () => {
    return (
        <Link href="/" className="flex justify-center items-center w-full">
            <Image 
                alt="Apply Digital Logo" 
                src="/apply.svg"
                width={170}
                height={40}
            />
        </Link>
    )
}