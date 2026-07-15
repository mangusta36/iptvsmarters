import type { Metadata } from "next"
import Link from "next/link"
import SchemaMarkup from "@/components/SchemaMarkup"
import FAQAccordion from "@/components/FAQAccordion"
import CTASection from "@/components/CTASection"
import { siteConfig, absoluteUrl } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "How IPTV VOD works - On-demand playback explained",
  description: "Learn how IPTV VOD categories, search, playback quality and device support work, and how on-demand viewing differs from live TV and catch-up.",
  openGraph: {
    images: [{ url: absoluteUrl("/og-image.svg"), width: 1200, height: 630, alt: "doubleclick iptv" }],
    title: "How IPTV VOD works - On-demand playback explained",
    description: "Understand IPTV VOD categories, playback, device support and the difference between on-demand content and catch-up TV.",
    url: absoluteUrl("/iptv-vod"),
  },
  alternates: { canonical: absoluteUrl("/iptv-vod") },
}

const faqItems = [
  { question: "What is IPTV VOD?", answer: "VOD (Video On Demand) is content selected from a catalogue rather than watched at a fixed live broadcast time." },
  { question: "What VOD catalogue is available?", answer: "Catalogue availability depends on the authorized provider, region, account and licensing period. Check the categories shown after signing in." },
  { question: "Are new releases always available?", answer: "No. Availability varies by provider and content rights. A player cannot add a title that is not included in the authorized account." },
  { question: "Is there a viewing limit?", answer: "Limits depend on the account terms, simultaneous-connection allowance and provider policy." },
  { question: "Is VOD available on all devices?", answer: "Yes, VOD works on all devices compatible with doubleclick iptv: Smart TV, Android, iOS, Windows, Mac." },
  { question: "What is the video quality of VOD?", answer: "VOD content is available in HD, Full HD and 4K depending on the title. Quality automatically adapts to your connection." },
]

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
    { "@type": "ListItem", position: 2, name: "IPTV VOD", item: absoluteUrl("/iptv-vod") },
  ],
}

export default function IPTVVODPage() {
  return (
    <>
      <SchemaMarkup jsonLd={breadcrumbSchema} />
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-flex items-center rounded-full bg-brand/10 border border-brand/20 px-4 py-1.5 text-xs font-medium text-brand mb-4">
              Video on Demand
            </span>
            <h1 className="text-4xl font-bold text-white sm:text-5xl">How IPTV VOD works</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              This informational guide explains how video on demand is organized inside an IPTV player,
              how playback differs from live TV and catch-up, and what to check when a title or category is unavailable.
            </p>
          </div>
          <div className="mt-12 space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-white">Understanding VOD categories</h2>
              <p className="mt-2 text-muted-foreground">
                IPTV players commonly organize authorized on-demand content into movies, series, documentaries
                and family categories. The exact titles are controlled by the account provider and can change
                with regional rights or catalogue updates; the player itself does not supply content.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <strong className="text-white">Movies:</strong> blockbusters, arthouse films, comedies, action, thriller, horror, sci-fi
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <strong className="text-white">Series:</strong> episodic programmes grouped by season when that information is supplied
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <strong className="text-white">Documentaries:</strong> nature, history, science, society, animals
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <strong className="text-white">Kids:</strong> cartoons, children&apos;s films, educational series
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <strong className="text-white">Shows:</strong> comedy, concerts, musicals, theatre
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">How to access VOD?</h2>
              <p className="mt-2 text-muted-foreground">
                Accessing VOD in doubleclick iptv is very simple. Open the app and log in with
                your subscription. In the main menu, you will find a VOD or Movies / Series section. Click
                to explore the catalogue organised by categories, genres, years or countries.
              </p>
              <p className="mt-4 text-muted-foreground">
                You can use the search function to find a specific title. The app displays
                a detailed info card for each movie with synopsis, duration, year, genre and rating. Click
                on the title to start playback instantly.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Quality and formats available</h2>
              <p className="mt-2 text-muted-foreground">
                Available quality depends on the source, account and device. Some players select
                a suitable stream automatically; others require a manual quality choice. Start
                with a stable setting and increase it only after playback is reliable.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <strong className="text-white">HD (720p):</strong> standard quality, suitable for connections up to 10 Mbps
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <strong className="text-white">Full HD (1080p):</strong> high definition, recommended from 15 Mbps
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <strong className="text-white">4K UHD:</strong> ultra high definition, available for compatible titles from 25 Mbps
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">VOD vs Catch-up: understanding the difference</h2>
              <p className="mt-2 text-muted-foreground">
                VOD and catch-up are two complementary services. VOD gives you access to a permanent catalogue
                of movies and series available with no time limit. Catch-up (replay) lets you watch
                programmes from the last 7 days after their broadcast.
              </p>
              <p className="mt-4 text-muted-foreground">
                If your authorized account includes both services, use
                <Link href="/iptv-replay" className="text-brand hover:underline"> catch-up</Link> for recently
                broadcast programmes and VOD for items selected from the provider&apos;s catalogue.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">VOD catalogue updates</h2>
              <p className="mt-2 text-muted-foreground">
                Catalogue changes are controlled by the authorized provider. Refresh the player data
                before reporting a missing category, then confirm whether the item remains included
                for your region and account.
              </p>
              <p className="mt-4 text-muted-foreground">
                Browse the <Link href="/vod" className="text-brand hover:underline">VOD discovery hub</Link> for
                movie and series examples, or contact the account provider when availability differs from the supplied catalogue.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-muted/50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white text-center">Frequently asked questions about IPTV VOD</h2>
          <div className="mt-8">
            <FAQAccordion items={faqItems} />
          </div>
          <p className="mt-8 text-center text-muted-foreground">
            Also discover <Link href="/iptv-replay" className="text-brand hover:underline">IPTV catch-up</Link> and our <Link href="/iptv-guide" className="text-brand hover:underline">complete IPTV guide</Link>.
          </p>
        </div>
      </section>
      <CTASection
        title="Need help with on-demand playback?"
        subtitle="Contact support with your device, player name and exact playback error."
      />
    </>
  )
}
