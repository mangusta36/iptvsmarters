import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Thomas M.",
    role: "Premium Subscriber",
    content: "The setup checklist made it easier to identify my Samsung TV model and choose the appropriate installation steps.",
    rating: 5,
  },
  {
    name: "Sophie L.",
    role: "Standard Subscriber",
    content: "Super easy setup, I configured it on my LG TV in 10 minutes. Catch-up TV and VOD are amazing. Best value for money.",
    rating: 5,
  },
  {
    name: "Karim B.",
    role: "Premium Subscriber",
    content: "I watch all Premier League matches live without any buffering. Service is stable and support is responsive. 5 stars!",
    rating: 5,
  },
  {
    name: "Marie D.",
    role: "Standard Subscriber",
    content: "Perfect for expats like me. All UK channels available abroad. My kids watch their favorite cartoons without interruption.",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center rounded-full bg-brand/10 border border-brand/20 px-4 py-1.5 text-xs font-medium text-brand mb-4">
            What our customers say
          </span>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Join thousands of satisfied customers worldwide.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, idx) => (
            <div
              key={t.name}
              className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-brand/30 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-brand/5"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <Quote className="h-6 w-6 text-brand/30 mb-2" />
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-brand text-brand" />
                ))}
              </div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                &ldquo;{t.content}&rdquo;
              </p>
              <div className="mt-4 border-t border-border pt-4">
                <p className="text-sm font-semibold text-white">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
