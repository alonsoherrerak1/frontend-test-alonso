"use client"
import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { MlHeading } from "@/components/molecules/ml-heading/ml-heading"
import { OrHeader } from "@/components/organisms/or-header/or-header"
import { CatalogList } from "@/components/organisms/catalog-list/catalog-list"
import { fetchGenres } from "@/services/gameService"

export default function Home() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [genres, setGenres] = useState<string[]>([])
  const [genre, setGenre] = useState("")

  useEffect(() => {
    fetchGenres().then(setGenres)
  }, [])

  useEffect(() => {
    const urlGenre = searchParams.get("genre") || ""
    setGenre(urlGenre)
  }, [searchParams])

  const handleGenreChange = (newGenre: string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (newGenre) {
      params.set("genre", newGenre)
    } else {
      params.delete("genre")
    }
    router.replace(`/?${params.toString()}`)
  }

  return (
    <>
      <OrHeader/>
      <MlHeading genres={genres} value={genre} onChange={handleGenreChange}/>
      <CatalogList genre={genre}/>
    </>
  )
}
