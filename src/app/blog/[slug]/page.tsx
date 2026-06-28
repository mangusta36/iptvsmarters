import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Link from "next/link"
import SchemaMarkup from "@/components/SchemaMarkup"
import FAQAccordion from "@/components/FAQAccordion"
import { blogPosts } from "@/lib/blog-data"
import { siteConfig, absoluteUrl } from "@/lib/site-config"

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) return { title: "Article not found" }

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords?.join(", "),
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [siteConfig.name],
      url: absoluteUrl(`/blog/${slug}`),
      images: [{ url: post.image, width: 800, height: 450, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.image],
    },
    alternates: { canonical: absoluteUrl(`/blog/${slug}`) },
  }
}

function renderContent(html: string) {
  return { __html: html }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) notFound()

  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.slug !== slug)
    .slice(0, 3)

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: post.image,
    datePublished: post.publishedAt,
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Blog", item: absoluteUrl("/blog") },
      { "@type": "ListItem", position: 3, name: post.title, item: absoluteUrl(`/blog/${slug}`) },
    ],
  }

  const faqSchema = post.faq?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: post.faq.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      }
    : null

  return (
    <>
      <SchemaMarkup jsonLd={breadcrumbSchema} />
      <SchemaMarkup jsonLd={articleSchema} />
      {faqSchema && <SchemaMarkup jsonLd={faqSchema} />}

      <article className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-12">
            <div className="lg:col-span-2">
              <div className="mb-8">
                <span className="inline-flex rounded-full bg-brand/10 px-3 py-1 text-xs font-medium text-brand">
                  {post.category}
                </span>
                <h1 className="mt-3 text-3xl font-bold text-white sm:text-4xl">{post.title}</h1>
                <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                  <time dateTime={post.publishedAt}>
                    {new Date(post.publishedAt).toLocaleDateString("en-GB", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <span>&middot;</span>
                  <span>{post.readingTime}</span>
                </div>
              </div>
              {post.image && (
                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-8">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="object-cover w-full h-full"
                    loading="eager"
                  />
                </div>
              )}
              <div
                className="prose prose-invert max-w-none [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-white [&_h2]:border-b [&_h2]:border-border [&_h2]:pb-2 [&_h3]:mt-6 [&_h3]:mb-3 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-white [&_p]:mb-4 [&_p]:text-muted-foreground [&_p]:leading-relaxed [&_p]:text-base [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:text-muted-foreground [&_li]:mb-1.5 [&_ol]:mb-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_strong]:text-white [&_blockquote]:border-l-4 [&_blockquote]:border-brand [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-muted-foreground [&_blockquote]:my-6"
                dangerouslySetInnerHTML={renderContent(post.content)}
              />
              {post.faq && post.faq.length > 0 && (
                <div className="mt-12 border-t border-border pt-8">
                  <h2 className="text-xl font-bold text-white mb-6">Frequently Asked Questions</h2>
                  <FAQAccordion items={post.faq} />
                </div>
              )}
              <div className="mt-12 border-t border-border pt-8 text-center">
                <p className="text-muted-foreground mb-4">
                  Need help with your IPTV installation?
                </p>
                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-lg bg-success px-6 py-3 text-sm font-semibold text-white hover:bg-success-hover transition-colors"
                >
                  Contact support
                </a>
              </div>
            </div>
            <aside className="mt-12 lg:mt-0">
              <div className="sticky top-24">
                <h3 className="text-lg font-semibold text-white mb-4">Articles similaires</h3>
                <div className="space-y-4">
                  {relatedPosts.map((r) => (
                    <Link key={r.slug} href={`/blog/${r.slug}`} className="block rounded-lg border border-border bg-card p-4 hover:border-brand/50 transition-colors">
                      <p className="text-xs text-brand mb-1">{r.category}</p>
                      <p className="text-sm font-medium text-white">{r.title}</p>
                    </Link>
                  ))}
                </div>
                <div className="mt-8 rounded-lg border border-border bg-card p-4">
                  <p className="text-sm font-semibold text-white">IPTV Subscription</p>
                  <p className="mt-1 text-xs text-muted-foreground">Check our premium plans</p>
                  <Link href="/abonnement" className="mt-3 inline-flex items-center rounded-lg bg-brand px-4 py-2 text-xs font-semibold text-black hover:bg-brand-hover transition-colors">
                    View plans
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </>
  )
}
