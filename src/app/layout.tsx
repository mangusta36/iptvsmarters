import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import FloatingWhatsApp from "@/components/FloatingWhatsApp"
import SchemaMarkup from "@/components/SchemaMarkup"
import { siteConfig } from "@/lib/site-config"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const viewport: Viewport = {
  themeColor: "#020617",
  width: "device-width",
  initialScale: 1,
}

const absoluteSocialImage = `${siteConfig.url}${siteConfig.ogImage}`

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "doubleclick iptv | Premium IPTV Subscription",
    template: "%s | doubleclick iptv",
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: siteConfig.name,
    title: "doubleclick iptv | Premium IPTV Subscription",
    description:
      "Premium IPTV subscription with available live channels, on-demand content movies & series. HD & 4K streaming, 24/7 support.",
    url: siteConfig.url,
    images: [
      {
        url: absoluteSocialImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@doubleclicktv",
    creator: "@doubleclicktv",
    title: "doubleclick iptv - Premium IPTV Subscription",
    description:
      "available live channels, on-demand content movies & series. Fast installation and 24/7 support.",
    images: [absoluteSocialImage],
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.webmanifest",
  alternates: {
    canonical: siteConfig.url,
  },
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo.svg`,
  description: siteConfig.description,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: siteConfig.whatsappNumber,
    contactType: "customer service",
    availableLanguage: ["English"],
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "GB",
  },
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        <SchemaMarkup jsonLd={organizationSchema} />
        <SchemaMarkup jsonLd={websiteSchema} />
        <Navbar />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  )
}
