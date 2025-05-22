import { useEffect, useState } from "react"
import { fetchGames } from "@/services/gameService"
import { useCartContext } from "@/utils/CartContext"
import Image from "next/image"
interface Game {
  id: string;
  name: string;
  image: string;
  price: number;
  genre: string;
  description: string;
  isNew: boolean;
}

interface CatalogListProps {
  genre: string;
}

export const CatalogList = ({ genre }: CatalogListProps) => {
  const [games, setGames] = useState<Game[]>([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const { add, remove, isInCart } = useCartContext()

  useEffect(() => {
    setGames([])
    setPage(1)
  }, [genre])

  useEffect(() => {
    setLoading(true)
    fetchGames({ genre, page })
      .then(data => {
        setGames(prev => page === 1 ? data.games : [...prev, ...data.games])
        setTotalPages(data.totalPages)
      })
      .finally(() => setLoading(false))
  }, [genre, page])

  const handleSeeMore = () => {
    if (page < totalPages) setPage(page + 1)
  }

  return (
    <section className="flex flex-col gap-8 px-6 py-8 lg:gap-12 lg:py-12 lg:px-32">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {games.map(game => (
          <div key={game.id} className="bg-white rounded-lg shadow p-4 flex flex-col w-full max-w-[327px] md:w-[380px] md:max-w-[380px] mx-auto h-[436px]">
            <div className="overflow-hidden rounded-t-[16px]">
              <Image
                src={game.image}
                alt={game.name}
                width={400}
                height={240}
                className="w-full h-[240px] object-cover"
              />
            </div>
            <div className="text-gray-500 text-sm mb-2 mt-3">{game.genre}</div>
            <div className="flex justify-between items-center mb-3">
              <div className="font-bold text-lg">{game.name}</div>
              <div className="font-semibold">${game.price}</div>
            </div>
            <div className="mt-auto w-full">
              {isInCart(game.id) ? (
                <button 
                  onClick={() => remove(game.id)} 
                  className="w-full bg-white text-black border border-black py-2 rounded hover:bg-gray-100 transition font-medium"
                >
                  QUITAR
                </button>
              ) : (
                <button 
                  onClick={() => add(game)} 
                  className="w-full bg-white text-black border border-black py-2 rounded hover:bg-gray-100 transition font-medium"
                >
                  ADD TO CART
                </button>
              )}
            </div>
          </div>
        ))}
        {loading && (
          <div className="col-span-full flex justify-center items-center py-8">
            <span className="text-gray-400 animate-pulse">Cargando...</span>
          </div>
        )}
      </div>
      
      {page < totalPages && !loading && (
        <div className="w-full flex justify-start mt-8">
          <button 
            onClick={handleSeeMore} 
            className="bg-[#585660] text-white w-[137px] h-[56px] rounded hover:bg-[#4a4a52] transition"
          >
            See more
          </button>
        </div>
      )}
    </section>
  )
} 