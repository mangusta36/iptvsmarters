import type { Metadata } from "next"
import Link from "next/link"
import SchemaMarkup from "@/components/SchemaMarkup"
import FAQAccordion from "@/components/FAQAccordion"
import CTASection from "@/components/CTASection"
import { siteConfig, absoluteUrl } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "IPTV UK - Premium IPTV Subscription for UK Households",
  description: "Premium IPTV subscription with UK channels (BBC, ITV, Channel 4, Sky) and international channels in HD and 4K. Optimised servers for UK users with premium IPTV streaming.",
  openGraph: {
    title: "IPTV UK - Premium IPTV Subscription for UK Households",
    description: "Premium IPTV subscription with UK channels (BBC, ITV, Channel 4, Sky) and international channels in HD and 4K.",
    url: absoluteUrl("/iptv-france"),
  },
  alternates: { canonical: absoluteUrl("/iptv-france") },
}

const faqItems = [
  { question: "What UK channels are available?", answer: "We offer all major UK channels: BBC One, BBC Two, ITV, Channel 4, Channel 5, Sky One, Sky Sports, BT Sport, UKTV channels, and many more." },
  { question: "Can I watch live UK sports?", answer: "Yes, all major sports competitions are available: Premier League, Champions League, FA Cup, Six Nations, Wimbledon, Formula 1, and international matches." },
  { question: "Are there local UK channels?", answer: "Yes, we include BBC regional channels and major local UK channels." },
  { question: "Is the service optimised for the UK?", answer: "Yes, our servers are optimised to provide the best experience for UK users with minimal latency and English-speaking customer support." },
  { question: "Can I pay in pounds?", answer: "Yes, payments are accepted in pounds sterling. We offer several secure payment methods." },
  { question: "What quality are the UK channels?", answer: "All UK channels are available in HD (720p/1080p) and some in 4K Ultra HD. Quality is automatically adapted to your connection speed." },
]

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
    { "@type": "ListItem", position: 2, name: "IPTV UK", item: absoluteUrl("/iptv-france") },
  ],
}

export default function IPTVFrancePage() {
  return (
    <>
      <SchemaMarkup jsonLd={breadcrumbSchema} />
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-flex items-center rounded-full bg-brand/10 border border-brand/20 px-4 py-1.5 text-xs font-medium text-brand mb-4">
              IPTV UK
            </span>
            <h1 className="text-4xl font-bold text-white sm:text-5xl">IPTV UK</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the best IPTV service for UK viewers with doubleclick iptv. Enjoy all your favourite
              UK channels (BBC, ITV, Channel 4, Sky), live sports, and the latest movie releases in streaming.
              A service designed for UK households with English-speaking support and optimised servers.
            </p>
          </div>
          <div className="mt-12 space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-white">UK channels available</h2>
              <p className="mt-2 text-muted-foreground">
                Access over 50 UK live channels with your doubleclick iptv subscription. Get
                all the major UK TV channels:
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <strong className="text-white">General channels:</strong> BBC One, BBC Two, ITV, Channel 4, Channel 5, Sky One, UKTV Gold, Dave, E4, More4, 5USA
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <strong className="text-white">News channels:</strong> BBC News, Sky News, ITV News, Channel 4 News, CNN, Euronews
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <strong className="text-white">Sports channels:</strong> Sky Sports Main Event, Sky Sports Premier League, BT Sport 1, BT Sport 2, Eurosport 1, Eurosport 2
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <strong className="text-white">Kids channels:</strong> CBeebies, CBBC, Cartoon Network, Disney Channel, Nickelodeon, Boomerang, CITV
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <strong className="text-white">Local channels:</strong> BBC regional channels, ITV regional, and other local UK channels
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">UK live sports</h2>
              <p className="mt-2 text-muted-foreground">
                Never miss any sporting event with doubleclick iptv. All UK and international
                competitions are available live and on catch-up. Football with the Premier League,
                the Champions League, the FA Cup, and the EFL. Rugby with the Six Nations and Premiership Rugby.
                Tennis with Wimbledon. Cycling with the Tour de France and the Giro d&apos;Italia.
              </p>
              <p className="mt-4 text-muted-foreground">
                Whether you are a fan of football, rugby, tennis, basketball, F1 or motorsports, all major
                sporting events are included in your subscription. Follow England, Scotland, Wales
                and Northern Ireland in all their international competitions.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Why choose doubleclick iptv in the UK?</h2>
              <p className="mt-2 text-muted-foreground">
                doubleclick iptv stands out with a service specially designed for UK users. Our
                customer support is available in English 24 hours a day, 7 days a week on WhatsApp. Payments accepted in pounds
                sterling via several secure methods (credit card, PayPal, bank transfer). Our servers are optimised for
                the UK, guaranteeing minimal latency and optimal streaming quality.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  English-speaking customer support, response within 30 minutes
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  Payment in pounds sterling with no exchange fees
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  Dedicated servers in Europe for reduced latency
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  Contact us on WhatsApp to discover our offers and subscriptions
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  VOD catalogue with the latest movie and TV series releases
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Installation on your devices in the UK</h2>
              <p className="mt-2 text-muted-foreground">
                doubleclick iptv is compatible with all devices used by UK households. Whether you have
                a Samsung Smart TV Tizen, an LG webOS, a Sony Bravia Android TV, an iPhone, an Android smartphone,
                a Windows PC or a Mac, our app works perfectly.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <Link href="/iptv-samsung" className="text-brand hover:underline">IPTV on Samsung Smart TV</Link>
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <Link href="/iptv-lg" className="text-brand hover:underline">IPTV on LG Smart TV</Link>
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <Link href="/iptv-android" className="text-brand hover:underline">IPTV on Android TV and mobile</Link>
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <Link href="/iptv-iphone" className="text-brand hover:underline">IPTV on iPhone and iPad</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">About IPTV in the UK</h2>
              <p className="mt-2 text-muted-foreground">
                IPTV is an increasingly popular solution in the UK for replacing expensive traditional TV
                subscriptions. With doubleclick iptv, you get a complete catalogue of UK
                and international channels, a rich VOD library, and English-speaking customer service.
                Installation is simple and fast on all devices.
              </p>
              <p className="mt-4 text-muted-foreground">
                To learn more about how it works and technical aspects, check our
                <Link href="/iptv-guide" className="text-brand hover:underline"> complete IPTV guide</Link> or our
                <Link href="/faq" className="text-brand hover:underline"> FAQ</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-muted/50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white text-center">Frequently asked questions about IPTV UK</h2>
          <div className="mt-8">
            <FAQAccordion items={faqItems} />
          </div>
          <p className="mt-8 text-center text-muted-foreground">
            Have other questions? Contact our <Link href="/support" className="text-brand hover:underline">English-speaking support</Link>.
          </p>
        </div>
      </section>
      <CTASection
        title="Discover IPTV in the UK with doubleclick iptv"
        subtitle="All your favourite UK channels, live sports and VOD. Contact us on WhatsApp to discover our offers."
      />
    </>
  )
}
