const TMDB_BASE = "https://api.themoviedb.org/3"
const TMDB_IMG = "https://image.tmdb.org/t/p"

export interface Movie {
  id: number
  title: string
  overview: string
  posterPath: string | null
  backdropPath: string | null
  releaseDate: string
  voteAverage: number
  genreIds: number[]
  mediaType: "movie"
}

export interface TVShow {
  id: number
  name: string
  overview: string
  posterPath: string | null
  backdropPath: string | null
  firstAirDate: string
  voteAverage: number
  genreIds: number[]
  mediaType: "tv"
}

export type MediaItem = Movie | TVShow

const GENRE_MAP: Record<number, string> = {
  28: "Action", 12: "Aventure", 16: "Animation", 35: "Comédie",
  80: "Crime", 99: "Documentaire", 18: "Drame", 10751: "Familial",
  14: "Fantastique", 36: "Histoire", 27: "Horreur", 10402: "Musique",
  9648: "Mystère", 10749: "Romance", 878: "Science-Fiction",
  10770: "Téléfilm", 53: "Thriller", 10752: "Guerre", 37: "Western",
  10759: "Action & Aventure", 10762: "Enfants", 10763: "Actualités",
  10764: "Réalité", 10765: "Science-Fiction & Fantastique",
  10766: "Feuilleton", 10767: "Talk", 10768: "Guerre & Politique",
}

export function getGenreName(id: number): string {
  return GENRE_MAP[id] || "Général"
}

function imgPath(path: string | null, size: string = "w500"): string | null {
  if (!path) return null
  return `${TMDB_IMG}/${size}${path}`
}

const FALLBACK_POSTER = "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&q=80"
const FALLBACK_BACKDROP = "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1280&q=80"

export function posterUrl(path: string | null): string {
  return imgPath(path) || FALLBACK_POSTER
}

export function backdropUrl(path: string | null): string {
  return imgPath(path, "w1280") || FALLBACK_BACKDROP
}

function getApiKey(): string | null {
  if (typeof process !== "undefined" && process.env) {
    return process.env.NEXT_PUBLIC_TMDB_API_KEY || null
  }
  return null
}

async function tmdbFetch<T>(endpoint: string): Promise<T[]> {
  const key = getApiKey()
  if (!key) return []

  try {
    const res = await fetch(
      `${TMDB_BASE}${endpoint}${endpoint.includes("?") ? "&" : "?"}api_key=${key}&language=fr-FR&region=FR`,
      { next: { revalidate: 3600 } }
    )
    if (!res.ok) return []
    const data = await res.json()
    return data.results || []
  } catch {
    return []
  }
}

export async function getPopularMovies(): Promise<Movie[]> {
  const data = await tmdbFetch<any[]>("/movie/popular")
  return data.map(mapToMovie)
}

export async function getNowPlaying(): Promise<Movie[]> {
  const data = await tmdbFetch<any[]>("/movie/now_playing")
  return data.map(mapToMovie)
}

export async function getTopRatedMovies(): Promise<Movie[]> {
  const data = await tmdbFetch<any[]>("/movie/top_rated")
  return data.map(mapToMovie)
}

export async function getUpcomingMovies(): Promise<Movie[]> {
  const data = await tmdbFetch<any[]>("/movie/upcoming")
  return data.map(mapToMovie)
}

export async function getTrendingMovies(): Promise<Movie[]> {
  const data = await tmdbFetch<any[]>("/trending/movie/week")
  return data.map(mapToMovie)
}

export async function getPopularTVShows(): Promise<TVShow[]> {
  const data = await tmdbFetch<any[]>("/tv/popular")
  return data.map(mapToTVShow)
}

export async function getTopRatedTVShows(): Promise<TVShow[]> {
  const data = await tmdbFetch<any[]>("/tv/top_rated")
  return data.map(mapToTVShow)
}

export async function getTrendingTVShows(): Promise<TVShow[]> {
  const data = await tmdbFetch<any[]>("/trending/tv/week")
  return data.map(mapToTVShow)
}

export async function getTrendingAll(): Promise<MediaItem[]> {
  const data = await tmdbFetch<any[]>("/trending/all/week")
  return data.map((item: any) =>
    item.media_type === "tv" ? mapToTVShow(item) : mapToMovie(item)
  )
}

export async function searchMulti(query: string): Promise<MediaItem[]> {
  const data = await tmdbFetch<any[]>(`/search/multi?query=${encodeURIComponent(query)}`)
  return data.map((item: any) =>
    item.media_type === "tv" ? mapToTVShow(item) : mapToMovie(item)
  )
}

function mapToMovie(item: any): Movie {
  return {
    id: item.id,
    title: item.title,
    overview: item.overview || "",
    posterPath: item.poster_path,
    backdropPath: item.backdrop_path,
    releaseDate: item.release_date || "",
    voteAverage: item.vote_average || 0,
    genreIds: item.genre_ids || [],
    mediaType: "movie",
  }
}

function mapToTVShow(item: any): TVShow {
  return {
    id: item.id,
    name: item.name,
    overview: item.overview || "",
    posterPath: item.poster_path,
    backdropPath: item.backdrop_path,
    firstAirDate: item.first_air_date || "",
    voteAverage: item.vote_average || 0,
    genreIds: item.genre_ids || [],
    mediaType: "tv",
  }
}
