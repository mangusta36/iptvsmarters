import Image from "next/image"
import Link from "next/link"
import { Star, Clock, Film } from "lucide-react"
import type { MediaItem } from "@/lib/media-data"

interface MediaCardProps {
  item: MediaItem
}

export default function MediaCard({ item }: MediaCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-brand/50 hover:shadow-xl hover:shadow-brand/5">
      <div className="relative aspect-[2/3] overflow-hidden">
        <Image
          src={item.poster}
          alt={item.title}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        <div className="absolute top-2 right-2 flex gap-1">
          {item.isNew && (
            <span className="rounded-full bg-brand px-2 py-0.5 text-[10px] font-bold text-black">
              Nouveau
            </span>
          )}
          {item.isTrending && (
            <span className="rounded-full bg-accent px-2 py-0.5 text-[10px] font-bold text-white">
              Tendance
            </span>
          )}
        </div>
        <div className="absolute top-2 left-2">
          <span className="flex items-center gap-1 rounded-full bg-black/60 px-2 py-0.5 text-[10px] font-medium text-white">
            <Star className="h-3 w-3 fill-brand text-brand" />
            {item.rating}
          </span>
        </div>
        {item.type === "tv" && (
          <div className="absolute bottom-2 left-2">
            <span className="flex items-center gap-1 rounded-full bg-black/60 px-2 py-0.5 text-[10px] font-medium text-white">
              <Clock className="h-3 w-3 text-brand" />
              Série
            </span>
          </div>
        )}
      </div>
      <div className="p-3">
        <h3 className="text-sm font-semibold text-white truncate">{item.title}</h3>
        <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
          <span>{item.year}</span>
          <span>&middot;</span>
          <div className="flex gap-1">
            {item.genres.slice(0, 2).map((g) => (
              <span key={g} className="text-[10px]">{g}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
