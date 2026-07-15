import type { Metadata } from "next"
import Link from "next/link"
import SchemaMarkup from "@/components/SchemaMarkup"
import FAQAccordion from "@/components/FAQAccordion"
import CTASection from "@/components/CTASection"
import { absoluteUrl } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "IPTV France - Configuration et compatibilité des appareils",
  description: "Guide IPTV pour la France : appareils compatibles, configuration légale, qualité de connexion et assistance pour utiliser votre propre abonnement autorisé.",
  openGraph: {
    images: [{ url: absoluteUrl("/og-image.svg"), width: 1200, height: 630, alt: "doubleclick iptv" }],
    title: "IPTV France - Configuration et compatibilité",
    description: "Conseils pratiques pour configurer un abonnement IPTV autorisé sur vos appareils en France.",
    url: absoluteUrl("/iptv-france"),
  },
  alternates: { canonical: absoluteUrl("/iptv-france") },
}

const faqItems = [
  { question: "L’IPTV est-elle légale en France ?", answer: "La technologie IPTV est légale. Vous devez toutefois utiliser un service autorisé et respecter les droits de diffusion applicables au contenu que vous regardez." },
  { question: "Quels appareils puis-je utiliser en France ?", answer: "Les téléviseurs Samsung, LG et Android TV, ainsi que les téléphones, tablettes, ordinateurs et boîtiers compatibles, peuvent utiliser un lecteur IPTV adapté." },
  { question: "Quel débit internet faut-il prévoir ?", answer: "Une connexion stable est essentielle. En pratique, prévoyez environ 10 Mbit/s pour la HD et 25 Mbit/s ou plus pour la 4K, par flux actif." },
  { question: "L’assistance peut-elle aider à la configuration ?", answer: "Oui. Préparez le modèle de votre appareil, sa version logicielle et le message d’erreur éventuel afin d’obtenir une aide de configuration précise." },
]

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: absoluteUrl("/") },
    { "@type": "ListItem", position: 2, name: "IPTV France", item: absoluteUrl("/iptv-france") },
  ],
}

export default function IPTVFrancePage() {
  return (
    <>
      <SchemaMarkup jsonLd={breadcrumbSchema} />
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-flex items-center rounded-full bg-brand/10 border border-brand/20 px-4 py-1.5 text-xs font-medium text-brand mb-4">Guide France</span>
            <h1 className="text-4xl font-bold text-white sm:text-5xl">IPTV en France : configuration et compatibilité</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Configurez un abonnement IPTV autorisé sur vos appareils en France, avec des conseils sur la compatibilité, la connexion internet et l’assistance.
            </p>
          </div>

          <div className="mt-12 space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-white">Choisir un appareil compatible</h2>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                Le bon lecteur dépend du système de votre appareil. Les téléviseurs Samsung utilisent Tizen, les modèles LG utilisent webOS et de nombreux téléviseurs Sony ou boîtiers multimédias utilisent Android TV. Vérifiez toujours le modèle, la version du système et la disponibilité du lecteur dans la boutique officielle avant de commencer.
              </p>
              <p className="mt-4 text-muted-foreground">
                Consultez nos pages de compatibilité pour <Link href="/iptv-android" className="text-brand hover:underline">Android</Link>, <Link href="/iptv-lg" className="text-brand hover:underline">LG webOS</Link> et <Link href="/iptv-windows" className="text-brand hover:underline">Windows</Link>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white">Préparer sa connexion en France</h2>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                La stabilité compte davantage que le débit maximal annoncé. Pour un téléviseur fixe, utilisez un câble Ethernet lorsque cela est possible. En Wi-Fi, rapprochez l’appareil du routeur, privilégiez la bande 5 GHz et évitez les téléchargements importants pendant la lecture. La fibre convient particulièrement aux foyers utilisant plusieurs écrans.
              </p>
              <p className="mt-4 text-muted-foreground">
                Notre <Link href="/blog/iptv-no-interruptions-network-optimization" className="text-brand hover:underline">guide d’optimisation du réseau</Link> détaille les réglages Wi-Fi, Ethernet et QoS.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white">Installation, activation et assistance</h2>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                L’installation concerne le téléchargement et le réglage du lecteur. L’activation commence après réception des identifiants associés à votre compte. Conservez l’adresse du portail, le nom d’utilisateur et le mot de passe dans un endroit sûr et ne les publiez jamais.
              </p>
              <div className="mt-4 flex flex-wrap gap-4 text-sm">
                <Link href="/iptv-installation" className="text-brand hover:underline">Installer un lecteur</Link>
                <Link href="/iptv-activation" className="text-brand hover:underline">Activer son compte</Link>
                <Link href="/support" className="text-brand hover:underline">Demander de l’aide</Link>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="text-xl font-bold text-white">Utilisation autorisée uniquement</h2>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                Utilisez uniquement des abonnements et contenus pour lesquels vous disposez d’un accès autorisé. La disponibilité d’un lecteur ou d’un protocole ne donne aucun droit sur les chaînes, films ou programmes transmis.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white text-center">Questions fréquentes pour les utilisateurs en France</h2>
          <div className="mt-8"><FAQAccordion items={faqItems} /></div>
        </div>
      </section>
      <CTASection title="Besoin d’aide pour votre appareil ?" subtitle="Indiquez le modèle et la version de votre appareil pour obtenir des conseils de configuration adaptés." />
    </>
  )
}
