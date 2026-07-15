import { Tv, Film, HeadphonesIcon, Globe } from "lucide-react"

const stats = [
  { icon: Tv, value: "25 000+", label: "Live TV Channels" },
  { icon: Film, value: "100 000+", label: "Movies & Series VOD" },
  { icon: HeadphonesIcon, value: "24/7", label: "Customer Support" },
  { icon: Globe, value: "Monitored", label: "Service Availability" },
]

export default function StatsSection() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="group rounded-2xl border border-border bg-card p-6 text-center transition-all duration-300 hover:border-brand/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/5">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-brand/10 group-hover:bg-brand/20 transition-all duration-300 group-hover:scale-110">
                <s.icon className="h-7 w-7 text-brand" />
              </div>
              <p className="mt-4 text-3xl font-bold text-white group-hover:text-brand transition-colors duration-300">{s.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
