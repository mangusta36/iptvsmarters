"use client"

import { useState, useMemo } from "react"
import { Search, Film } from "lucide-react"
import MediaCard from "@/components/MediaCard"
import SchemaMarkup from "@/components/SchemaMarkup"
import CTASection from "@/components/CTASection"
import { sampleMovies } from "@/lib/media-data"
import { absoluteUrl } from "@/lib/site-config"

const allGenres = Array.from(new Set(sampleMovies.flatMap((m) => m.genres))).sort()

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
    { "@type": "ListItem", position: 2, name: "Movies", item: absoluteUrl("/films") },
  ],
}

export default function FilmsPage() {
  const [search, setSearch] = useState("")
  const [genre, setGenre] = useState("")
  const [sort, setSort] = useState("popular")

  const filtered = useMemo(() => {
    let items = [...sampleMovies]

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
  }, [search, genre, sort])

  return (
    <>
      <SchemaMarkup jsonLd={breadcrumbSchema} />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center rounded-full bg-brand/10 border border-brand/20 px-4 py-1.5 text-xs font-medium text-brand mb-4">
              <Film className="h-3 w-3 mr-1" /> Streaming HD & 4K
            </span>
            <h1 className="text-4xl font-bold text-white sm:text-5xl">Movies in Streaming</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Discover our streaming movie catalog. From the latest releases to timeless classics,
              enjoy cinema at home in HD and 4K quality.
            </p>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search movies..."
                className="w-full rounded-xl border border-border bg-card py-3 pl-10 pr-4 text-sm text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand"
              />
            </div>
            <select
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              className="rounded-xl border border-border bg-card px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-brand"
            >
              <option value="">All genres</option>
              {allGenres.map((g) => (
                <option key={g} value={g}>{g}</option>
              ))}
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

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {filtered.map((movie) => (
              <MediaCard key={movie.id} item={movie} />
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="mt-12 text-center text-muted-foreground">No movies found.</p>
          )}
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white">Trending Movies</h2>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {sampleMovies.filter((m) => m.isTrending).map((movie) => (
              <MediaCard key={`trend-${movie.id}`} item={movie} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Access All Our Movies in Streaming"
        subtitle="Subscribe to enjoy the full catalog in HD and 4K."
      />
    </>
  )
}
