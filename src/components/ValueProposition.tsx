import { siteConfig } from '@/lib/site-config'
import { Tv, Film, HeadphonesIcon } from 'lucide-react'

const values = [
  {
    icon: Tv,
    value: siteConfig.features.channels,
    label: 'Live Channels',
    description: 'Channels from around the world in HD, FHD and 4K',
  },
  {
    icon: Film,
    value: siteConfig.features.vod,
    label: 'VOD & Series',
    description: 'Unlimited movies and series on demand',
  },
  {
    icon: HeadphonesIcon,
    value: siteConfig.features.support,
    label: 'Customer Support',
    description: 'Responsive technical assistance',
  },
]

export default function ValueProposition() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.label}
                className="group rounded-2xl border border-border bg-card p-8 text-center transition-all duration-500 hover:-translate-y-1.5 hover:border-brand/30 hover:shadow-xl hover:shadow-brand/5"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl bg-muted group-hover:bg-brand/10 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-brand/10">
                  <Icon className="h-8 w-8 text-muted-foreground group-hover:text-brand transition-colors duration-300" />
                </div>
                <p className="mt-4 text-4xl font-bold tracking-tight text-white group-hover:text-brand transition-colors duration-300">
                  {item.value}
                </p>
                <p className="mt-2 text-base font-semibold text-brand">
                  {item.label}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
