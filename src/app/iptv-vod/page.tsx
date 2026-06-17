import type { Metadata } from "next"
import Link from "next/link"
import SchemaMarkup from "@/components/SchemaMarkup"
import FAQAccordion from "@/components/FAQAccordion"
import CTASection from "@/components/CTASection"
import { siteConfig, absoluteUrl } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "IPTV VOD - Video on Demand: movies & TV series",
  description: "IPTV VOD: access over 100,000 movies and TV series in unlimited streaming with your doubleclick iptv subscription. Latest releases, classics, popular series and documentaries.",
  openGraph: {
    title: "IPTV VOD - Video on Demand: movies and TV series streaming",
    description: "IPTV VOD: access over 100,000 movies and TV series in unlimited streaming with your doubleclick iptv subscription.",
    url: absoluteUrl("/iptv-vod"),
  },
  alternates: { canonical: absoluteUrl("/iptv-vod") },
}

const faqItems = [
  { question: "What is IPTV VOD?", answer: "VOD (Video On Demand) lets you watch movies and TV series on demand, whenever you want, without fixed schedules. Over 100,000 titles are available." },
  { question: "What VOD catalogue is available?", answer: "Over 100,000 titles: recent films, cinema classics, popular series, documentaries, kids content, and shows. The catalogue is updated regularly." },
  { question: "Are the latest cinema releases available?", answer: "Yes, we regularly add the latest cinema releases and new series as soon as they become available for streaming." },
  { question: "Is there a viewing limit?", answer: "No, VOD is unlimited. You can watch as many movies and series as you want, with no time limit." },
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
            <h1 className="text-4xl font-bold text-white sm:text-5xl">IPTV VOD</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Access over 100,000 movies and TV series in unlimited streaming with your doubleclick iptv subscription.
              Video on demand (VOD) offers a massive catalogue: latest cinema releases, popular series,
              timeless classics, documentaries and content for the whole family. Everything is available whenever you want.
            </p>
          </div>
          <div className="mt-12 space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-white">VOD catalogue: movies and series</h2>
              <p className="mt-2 text-muted-foreground">
                Our VOD catalogue is one of the richest on the market. It includes the latest cinema releases,
                the most popular series, cinema classics, fascinating documentaries, kids
                content, shows and much more. Each category is carefully organised to help
                you easily find what you are looking for.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <strong className="text-white">Movies:</strong> blockbusters, arthouse films, comedies, action, thriller, horror, sci-fi
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <strong className="text-white">Series:</strong> popular UK and international series, Netflix, HBO, Amazon, Disney+ series
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
                VOD content is available in different qualities to suit your connection and
                equipment. Most recent titles are available in Full HD (1080p) and 4K Ultra HD.
                The app automatically adjusts quality based on your Internet speed for smooth
                playback.
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
                With your doubleclick iptv subscription, you benefit from both services. Enjoy
                <Link href="/iptv-replay" className="text-brand hover:underline"> catch-up</Link> to replay your
                shows and VOD for your movie nights and unlimited series.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">VOD catalogue updates</h2>
              <p className="mt-2 text-muted-foreground">
                Our VOD catalogue is regularly updated with the latest cinema releases, new episodes
                of popular series, and exclusive content. We add dozens of new
                titles each week to enrich your streaming experience.
              </p>
              <p className="mt-4 text-muted-foreground">
                You can follow catalogue updates on our <Link href="/blog" className="text-brand hover:underline">blog</Link> and social
                media. Personalised suggestions are also offered in the app
                based on your viewing habits.
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
        title="Access over 100,000 movies and series"
        subtitle="Unlimited VOD included in all our subscriptions. Latest releases, popular series and classics. Contact us on WhatsApp."
      />
    </>
  )
}
