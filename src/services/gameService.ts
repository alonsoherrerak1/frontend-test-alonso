const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";

export async function fetchGames({ genre = "", page = 1 }: { genre?: string; page?: number }) {
  const params = new URLSearchParams();
  if (genre) params.append("genre", genre);
  params.append("page", String(page));
  const res = await fetch(`${API_URL}/games?${params.toString()}`);
  if (!res.ok) throw new Error("Error al obtener juegos");
  return res.json();
}

export async function fetchGenres() {
  const res = await fetch(`${API_URL}/games?page=1`);
  if (!res.ok) throw new Error("Error al obtener géneros");
  const data = await res.json();
  return data.availableFilters || [];
} 