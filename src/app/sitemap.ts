import type { MetadataRoute } from "next"
import { siteConfig } from "@/lib/site-config"
import { blogPosts } from "@/lib/blog-data"

const staticRoutes = [
  { path: "", priority: 1.0, changeFrequency: "weekly" as const },
  { path: "/abonnement", priority: 0.8, changeFrequency: "weekly" as const },
  { path: "/faq", priority: 0.8, changeFrequency: "weekly" as const },
  { path: "/contact", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/a-propos", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/support", priority: 0.7, changeFrequency: "weekly" as const },
  { path: "/iptv-installation", priority: 0.8, changeFrequency: "weekly" as const },
  { path: "/iptv-activation", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/iptv-guide", priority: 0.8, changeFrequency: "weekly" as const },
  { path: "/iptv-france", priority: 0.8, changeFrequency: "weekly" as const },
  { path: "/iptv-android", priority: 0.8, changeFrequency: "weekly" as const },
  { path: "/iptv-samsung", priority: 0.8, changeFrequency: "weekly" as const },
  { path: "/iptv-lg", priority: 0.8, changeFrequency: "weekly" as const },
  { path: "/iptv-sony", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/iptv-smart-tv", priority: 0.8, changeFrequency: "weekly" as const },
  { path: "/iptv-windows", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/iptv-mac", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/iptv-iphone", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/iptv-replay", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/iptv-vod", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/iptv-4k", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/iptv-hd", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/iptv-xtream-codes", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/series", priority: 0.7, changeFrequency: "weekly" as const },
  { path: "/films", priority: 0.7, changeFrequency: "weekly" as const },
  { path: "/vod", priority: 0.7, changeFrequency: "weekly" as const },
  { path: "/blog", priority: 0.7, changeFrequency: "weekly" as const },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = staticRoutes.map((route) => ({
    url: `${siteConfig.url}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))

  const blogEntries = blogPosts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  return [...staticEntries, ...blogEntries]
}
