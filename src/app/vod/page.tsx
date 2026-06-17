"use client"

import { useState, useMemo } from "react"
import { Search, Film, Tv, TrendingUp, Star, Zap } from "lucide-react"
import MediaCard from "@/components/MediaCard"
import CTASection from "@/components/CTASection"
import { sampleAll, sampleMovies, sampleTVShows } from "@/lib/media-data"

const allGenres = Array.from(new Set(sampleAll.flatMap((m) => m.genres))).sort()

export default function VODPage() {
  const [search, setSearch] = useState("")
  const [genre, setGenre] = useState("")
  const [type, setType] = useState<"all" | "movie" | "tv">("all")
  const [sort, setSort] = useState("popular")

  const filtered = useMemo(() => {
    let items = type === "tv" ? sampleTVShows : type === "movie" ? sampleMovies : sampleAll

    if (search) {
      const q = search.toLowerCase()
      items = items.filter((m) => m.title.toLowerCase().includes(q))
    }
    if (genre) {
      items = items.filter((m) => m.genres.includes(genre))
    }
    if (sort === "rating") items.sort((a, b) => b.rating - a.rating)
    else if (sort === "new") items.sort((a, b) => Number(b.year) - Number(a.year))
    else items.sort((a, b) => (a.isTrending === b.isTrending ? 0 : a.isTrending ? -1 : 1))

    return items
  }, [search, genre, type, sort])

  const newItems = sampleAll.filter((m) => m.isNew)
  const trendingItems = sampleAll.filter((m) => m.isTrending)

  return (
    <>
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center rounded-full bg-brand/10 border border-brand/20 px-4 py-1.5 text-xs font-medium text-brand mb-4">
              <Zap className="h-3 w-3 mr-1" /> Video on Demand
            </span>
            <h1 className="text-4xl font-bold text-white sm:text-5xl">VOD - Movies & TV Series</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Access our full catalogue of movies and TV series in streaming. New releases, trends and
              classics in HD and 4K quality.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <div className="relative flex-1 min-w-[200px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search..."
                className="w-full rounded-xl border border-border bg-card py-3 pl-10 pr-4 text-sm text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {(["all", "movie", "tv"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setType(t)}
                  className={`rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                    type === t ? "bg-brand text-black" : "border border-border bg-card text-muted-foreground hover:text-white"
                  }`}
                >
                  {t === "all" ? "All" : t === "movie" ? "Movies" : "TV Series"}
                </button>
              ))}
            </div>
            <select
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              className="rounded-xl border border-border bg-card px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-brand"
            >
              <option value="">All Genres</option>
              {allGenres.map((g) => (<option key={g} value={g}>{g}</option>))}
            </select>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="rounded-xl border border-border bg-card px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-brand"
            >
              <option value="popular">Trending</option>
              <option value="rating">Top Rated</option>
              <option value="new">New Releases</option>
            </select>
          </div>

          {!search && !genre && type === "all" && (
            <>
              <div className="mt-12">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <Zap className="h-5 w-5 text-brand" /> New Releases
                </h2>
                <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                  {newItems.map((item) => (<MediaCard key={`new-${item.id}`} item={item} />))}
                </div>
              </div>
              <div className="mt-12">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-brand" /> Trending
                </h2>
                <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                  {trendingItems.map((item) => (<MediaCard key={`trend-${item.id}`} item={item} />))}
                </div>
              </div>
            </>
          )}

          <div className="mt-12">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Star className="h-5 w-5 text-brand" /> Catalogue
            </h2>
            <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
              {filtered.map((item) => (<MediaCard key={`cat-${item.id}`} item={item} />))}
            </div>
            {filtered.length === 0 && <p className="mt-8 text-center text-muted-foreground">No results found.</p>}
          </div>
        </div>
      </section>
      <CTASection title="Unlimited access to the full VOD catalogue" subtitle="Movies, series, new releases and trending in HD & 4K." />
    </>
  )
}
