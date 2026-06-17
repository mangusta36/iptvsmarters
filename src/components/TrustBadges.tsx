import { ShieldCheck, CreditCard, Clock, Headphones } from "lucide-react"

const badges = [
  { icon: ShieldCheck, label: "Paiement sécurisé" },
  { icon: CreditCard, label: "PayPal & Crypto" },
  { icon: Clock, label: "Activation 24h" },
  { icon: Headphones, label: "Support 24/7" },
]

export default function TrustBadges() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 rounded-2xl border border-border bg-card/50 px-6 py-4">
        {badges.map((b) => (
          <div key={b.label} className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand/10">
              <b.icon className="h-4 w-4 text-brand" />
            </div>
            <span className="text-sm text-muted-foreground">{b.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
