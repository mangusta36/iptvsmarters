import Link from 'next/link'
import { Monitor, Smartphone, Laptop, Tv, Tablet } from 'lucide-react'

const iconMap: Record<string, React.ReactNode> = {
  "📱": <Smartphone className="h-8 w-8" />,
  "📺": <Tv className="h-8 w-8" />,
  "💻": <Laptop className="h-8 w-8" />,
}

interface DeviceCardProps {
  name: string
  icon: string
  description: string
  href: string
}

export default function DeviceCard({
  name,
  icon: iconChar,
  description,
  href,
}: DeviceCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col items-center rounded-2xl border border-border bg-card p-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-xl hover:shadow-brand/5"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-muted group-hover:bg-brand/10 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-brand/10">
        <div className="text-muted-foreground group-hover:text-brand transition-colors duration-300">
          {iconMap[iconChar] || <Monitor className="h-8 w-8" />}
        </div>
      </div>
      <h3 className="mt-4 text-base font-bold text-white group-hover:text-brand transition-colors duration-300">
        {name}
      </h3>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
      <span className="mt-3 text-xs font-medium text-brand opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-1 group-hover:translate-y-0">
        En savoir plus →
      </span>
    </Link>
  )
}
