function getBaseUrl() {
  if (process.env.NEXT_PUBLIC_API_URL) {
    return process.env.NEXT_PUBLIC_API_URL;
  }
  
  if (typeof window !== 'undefined') {
    return `${window.location.origin}/api`;
  }
  
  return '/api';
}

export async function fetchGames({ genre = "", page = 1 }: { genre?: string; page?: number }) {
  const params = new URLSearchParams();
  if (genre) params.append("genre", genre);
  params.append("page", String(page));
  
  try {
    const baseUrl = getBaseUrl();
    const res = await fetch(`${baseUrl}/games?${params.toString()}`);
    if (!res.ok) throw new Error("Error al obtener juegos");
    return res.json();
  } catch (error) {
    console.error("Error fetching games:", error);
    return { games: [], totalPages: 0 };
  }
}

export async function fetchGenres() {
  try {
    const baseUrl = getBaseUrl();
    const res = await fetch(`${baseUrl}/games?page=1`);
    if (!res.ok) throw new Error("Error al obtener géneros");
    const data = await res.json();
    return data.availableFilters || [];
  } catch (error) {
    console.error("Error fetching genres:", error);
    return [];
  }
} 