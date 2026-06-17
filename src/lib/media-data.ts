export interface MediaItem {
  id: number
  title: string
  poster: string
  year: string
  rating: number
  genres: string[]
  type: "movie" | "tv"
  isNew?: boolean
  isTrending?: boolean
}

const posterBase = "https://image.tmdb.org/t/p/w500"

export const trendingMedia: MediaItem[] = [
  {
    id: 693134,
    title: "Dune : Deuxième Partie",
    poster: `${posterBase}/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg`,
    year: "2024",
    rating: 8.3,
    genres: ["Sci-Fi", "Adventure"],
    type: "movie",
    isNew: true,
    isTrending: true,
  },
  {
    id: 872585,
    title: "Oppenheimer",
    poster: `${posterBase}/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg`,
    year: "2023",
    rating: 8.4,
    genres: ["Drama", "History"],
    type: "movie",
    isTrending: true,
  },
  {
    id: 533535,
    title: "Deadpool & Wolverine",
    poster: `${posterBase}/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg`,
    year: "2024",
    rating: 7.8,
    genres: ["Action", "Comedy"],
    type: "movie",
    isNew: true,
    isTrending: true,
  },
  {
    id: 1022789,
    title: "Inside Out 2",
    poster: `${posterBase}/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg`,
    year: "2024",
    rating: 7.9,
    genres: ["Animation", "Comedy"],
    type: "movie",
    isNew: true,
    isTrending: true,
  },
  {
    id: 100088,
    title: "The Last of Us",
    poster: `${posterBase}/dmo6TYuuJgaYinXBPjrgG9mB5od.jpg`,
    year: "2023",
    rating: 8.7,
    genres: ["Drama", "Horror"],
    type: "tv",
    isTrending: true,
  },
  {
    id: 94997,
    title: "House of the Dragon",
    poster: `${posterBase}/7V0Ebks0GgpKvQ7QbLAIdX5dos4.jpg`,
    year: "2022",
    rating: 8.4,
    genres: ["Action", "Fantasy"],
    type: "tv",
  },
  {
    id: 130542,
    title: "Fallout",
    poster: `${posterBase}/gG7VzFKAOuGqCJyHQJRTn9f7UMl.jpg`,
    year: "2024",
    rating: 8.6,
    genres: ["Sci-Fi", "Action"],
    type: "tv",
    isNew: true,
    isTrending: true,
  },
  {
    id: 346698,
    title: "Barbie",
    poster: `${posterBase}/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg`,
    year: "2023",
    rating: 7.3,
    genres: ["Comedy", "Adventure"],
    type: "movie",
  },
  {
    id: 823464,
    title: "Godzilla x Kong: The New Empire",
    poster: `${posterBase}/z1p34vh7dEOnLDmyCrlUVLuoDzd.jpg`,
    year: "2024",
    rating: 7.2,
    genres: ["Action", "Sci-Fi"],
    type: "movie",
    isNew: true,
    isTrending: true,
  },
  {
    id: 136315,
    title: "The Bear",
    poster: `${posterBase}/4fVddnbhcmzRZE14NJY03GKS6Fn.jpg`,
    year: "2022",
    rating: 8.5,
    genres: ["Comedy", "Drama"],
    type: "tv",
  },
  {
    id: 119051,
    title: "Wednesday",
    poster: `${posterBase}/9PFonBhy4cQy7Jz20NpMygczOkv.jpg`,
    year: "2022",
    rating: 8.2,
    genres: ["Comedy", "Fantasy"],
    type: "tv",
  },
  {
    id: 76479,
    title: "The Boys",
    poster: `${posterBase}/in1R2dDc421JxsoRWaIIAqVI2KE.jpg`,
    year: "2019",
    rating: 8.4,
    genres: ["Action", "Comedy"],
    type: "tv",
  },
]

export const sampleMovies = trendingMedia.filter((m) => m.type === "movie")
export const sampleTVShows = trendingMedia.filter((m) => m.type === "tv")
export const sampleAll = trendingMedia