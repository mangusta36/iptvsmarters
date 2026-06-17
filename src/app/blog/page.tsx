"use client"

import { useState, useMemo } from "react"
import BlogCard from "@/components/BlogCard"
import SchemaMarkup from "@/components/SchemaMarkup"
import { blogPosts } from "@/lib/blog-data"
import { siteConfig, absoluteUrl } from "@/lib/site-config"

const categories = ["All", "Guide", "Installation", "Tutorial", "Comparison", "Troubleshooting", "Tips"]

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
    { "@type": "ListItem", position: 2, name: "Blog", item: absoluteUrl("/blog") },
  ],
}

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Blog - doubleclick iptv",
  description: "Guides, tips and tutorials to get the most out of your IPTV subscription. Installation, setup, and streaming advice.",
  url: absoluteUrl("/blog"),
}

const POSTS_PER_PAGE = 9

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [currentPage, setCurrentPage] = useState(1)

  const filteredPosts = useMemo(() => {
    if (activeCategory === "All") return blogPosts
    return blogPosts.filter((p) => p.category === activeCategory)
  }, [activeCategory])

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE)
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  )

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat)
    setCurrentPage(1)
  }

  return (
    <>
      <SchemaMarkup jsonLd={breadcrumbSchema} />
      <SchemaMarkup jsonLd={blogSchema} />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl">Blog - doubleclick iptv</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Guides, tips and tutorials to install, configure and optimize your IPTV subscription.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-brand text-black"
                    : "bg-card text-muted-foreground hover:text-white border border-border"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {paginatedPosts.map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>
          {totalPages > 1 && (
            <div className="mt-8 flex justify-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    currentPage === page
                      ? "bg-brand text-black"
                      : "bg-card text-muted-foreground hover:text-white border border-border"
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
