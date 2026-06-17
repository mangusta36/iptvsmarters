import type { Metadata } from "next"
import Link from "next/link"
import SchemaMarkup from "@/components/SchemaMarkup"
import FAQAccordion from "@/components/FAQAccordion"
import CTASection from "@/components/CTASection"
import { siteConfig, absoluteUrl } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "IPTV Catch-up TV - Watch your programmes on replay",
  description: "IPTV Catch-up TV (Replay): watch your programmes up to 7 days after broadcast. Never miss your favourite shows again with doubleclick iptv premium IPTV service.",
  openGraph: {
    title: "IPTV Catch-up TV - Watch your programmes on replay",
    description: "IPTV Catch-up TV (Replay): watch your programmes up to 7 days after broadcast.",
    url: absoluteUrl("/iptv-replay"),
  },
  alternates: { canonical: absoluteUrl("/iptv-replay") },
}

const faqItems = [
  { question: "What is IPTV Catch-up TV?", answer: "IPTV catch-up TV, also called replay, lets you watch programmes broadcast up to 7 days ago. You can catch up on your shows without time constraints." },
  { question: "Are all channels available on catch-up?", answer: "Most major UK and international channels offer catch-up TV. Availability varies according to each channel's broadcast rights." },
  { question: "How to access catch-up in doubleclick iptv?", answer: "In the doubleclick iptv app, open the EPG guide, select a past programme and click the Replay or Catch-up option." },
  { question: "What's the difference between Catch-up and VOD?", answer: "Catch-up covers recently broadcast programmes (usually 7 days). VOD is a permanent catalogue of movies and TV series." },
  { question: "Does catch-up work on all devices?", answer: "Yes, catch-up is available on all devices supporting doubleclick iptv: Smart TV, Android, iOS, Windows, Mac." },
  { question: "Do I need a specific subscription for catch-up?", answer: "Catch-up is included in all our IPTV subscriptions. No extra charge." },
]

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
    { "@type": "ListItem", position: 2, name: "IPTV Catch-up", item: absoluteUrl("/iptv-replay") },
  ],
}

export default function IPTVReplayPage() {
  return (
    <>
      <SchemaMarkup jsonLd={breadcrumbSchema} />
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-flex items-center rounded-full bg-brand/10 border border-brand/20 px-4 py-1.5 text-xs font-medium text-brand mb-4">
              Catch-up TV
            </span>
            <h1 className="text-4xl font-bold text-white sm:text-5xl">IPTV Catch-up TV</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Never miss your shows again with IPTV Catch-up TV (Replay). Watch your programmes
              on demand up to 7 days after broadcast. Whether you missed your favourite series, an important
              match or a documentary, IPTV catch-up lets you watch your content whenever you want.
            </p>
          </div>
          <div className="mt-12 space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-white">How does IPTV Catch-up work?</h2>
              <p className="mt-2 text-muted-foreground">
                IPTV catch-up TV, also called replay, is a feature that lets you watch
                programmes broadcast on live channels up to 7 days after they aired.
                Unlike VOD which has a permanent catalogue, catch-up is linked to each channel&apos;s schedule.
              </p>
              <p className="mt-4 text-muted-foreground">
                In doubleclick iptv, catch-up is accessible directly from the electronic programme guide
                (EPG). Browse the guide, select a past programme, and if the replay icon is available,
                click it to start playback. Simple and intuitive.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">How to use Catch-up in doubleclick iptv</h2>
              <p className="mt-2 text-muted-foreground">
                To access catch-up in doubleclick iptv, follow these simple steps:
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  Open the doubleclick iptv app on your device
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  Go to the Guide or EPG section from the main menu
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  Browse the programme schedule to find a programme that has already aired
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  If catch-up is available, a dedicated icon appears. Click it to start playback
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  Enjoy your programme with pause, rewind and fast forward options
                </li>
              </ul>
              <p className="mt-4 text-muted-foreground">
                You can also access catch-up via the dedicated tab in the app, which lists
                all available catch-up content by channel and date.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Catch-up vs VOD: what&apos;s the difference?</h2>
              <p className="mt-2 text-muted-foreground">
                Catch-up and VOD are two complementary but distinct features:
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <strong className="text-white">Catch-up:</strong> programmes from the last 7 days available immediately after broadcast. Free with your subscription.
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <strong className="text-white">VOD:</strong> permanent catalogue of over 100,000 movies and TV series. Available on demand with no limits.
                </li>
              </ul>
              <p className="mt-4 text-muted-foreground">
                Discover our <Link href="/iptv-vod" className="text-brand hover:underline">IPTV VOD</Link> catalogue to explore thousands of titles available on demand.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Channels available on catch-up</h2>
              <p className="mt-2 text-muted-foreground">
                Most major UK channels offer catch-up: BBC One, BBC Two, ITV, Channel 4, Channel 5, Sky One,
                and many more. Sports channels like Sky Sports, BT Sport and
                Eurosport also offer catch-up for shows and highlights.
              </p>
              <p className="mt-4 text-muted-foreground">
                Catch-up availability depends on each channel&apos;s broadcast rights. Some content may
                not be available on catch-up due to copyright or licensing reasons.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Advanced catch-up features</h2>
              <p className="mt-2 text-muted-foreground">
                doubleclick iptv offers advanced features for catch-up. You can pause, rewind and fast
                forward. Timeshift even lets you pause live TV and
                resume later where you left off, without having to search for the programme in the catch-up section.
              </p>
              <p className="mt-4 text-muted-foreground">
                You can also schedule recordings of your favourite shows if your subscription
                allows it. Recordings are stored and accessible from any device connected
                to your account.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-muted/50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white text-center">Frequently asked questions about IPTV Catch-up</h2>
          <div className="mt-8">
            <FAQAccordion items={faqItems} />
          </div>
          <p className="mt-8 text-center text-muted-foreground">
            Also discover our <Link href="/iptv-vod" className="text-brand hover:underline">VOD</Link> catalogue and our <Link href="/iptv-guide" className="text-brand hover:underline">complete IPTV guide</Link>.
          </p>
        </div>
      </section>
      <CTASection
        title="Never miss a show with Catch-up TV"
        subtitle="Enjoy catch-up included in all our subscriptions. Catch up on your favourite programmes up to 7 days after broadcast."
      />
    </>
  )
}
