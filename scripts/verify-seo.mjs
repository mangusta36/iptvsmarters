#!/usr/bin/env node

const base = new URL(process.argv[2] || "http://localhost:3000")
const expectedOrigin = process.argv[3] || "https://www.doubleclicktv.vip"

const decode = (value = "") => value
  .replace(/&amp;/g, "&")
  .replace(/&quot;/g, '"')
  .replace(/&#x27;|&#39;/g, "'")
  .replace(/&lt;/g, "<")
  .replace(/&gt;/g, ">")

const text = (value = "") => decode(value.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim())
const match = (html, pattern) => decode(html.match(pattern)?.[1]?.trim() || "")
const matches = (html, pattern) => [...html.matchAll(pattern)].map((item) => item[1])

async function get(path) {
  const response = await fetch(new URL(path, base), { redirect: "manual" })
  return { response, body: await response.text() }
}

const sitemapResult = await get("/sitemap.xml")
if (sitemapResult.response.status !== 200) {
  throw new Error(`Sitemap returned ${sitemapResult.response.status}`)
}

const sitemapUrls = matches(sitemapResult.body, /<loc>(.*?)<\/loc>/g)
const paths = sitemapUrls.map((url) => {
  const parsed = new URL(url)
  return parsed.pathname || "/"
})
const sitemapDuplicates = sitemapUrls.filter((url, index) => sitemapUrls.indexOf(url) !== index)
const records = []

for (const [index, path] of paths.entries()) {
  const { response, body } = await get(path)
  const title = text(match(body, /<title[^>]*>([\s\S]*?)<\/title>/i))
  const description = match(body, /<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["'][^>]*>/i)
    || match(body, /<meta[^>]+content=["']([^"']*)["'][^>]+name=["']description["'][^>]*>/i)
  const canonical = match(body, /<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["'][^>]*>/i)
    || match(body, /<link[^>]+href=["']([^"']+)["'][^>]+rel=["']canonical["'][^>]*>/i)
  const robots = match(body, /<meta[^>]+name=["']robots["'][^>]+content=["']([^"']+)["'][^>]*>/i).toLowerCase()
  const h1s = matches(body, /<h1\b[^>]*>([\s\S]*?)<\/h1>/gi).map(text)
  const hrefs = matches(body, /<a\b[^>]*\bhref=["']([^"'#]+)["'][^>]*>/gi)
  const jsonLd = matches(body, /<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)
  let invalidJsonLd = 0
  for (const value of jsonLd) {
    try { JSON.parse(value) } catch { invalidJsonLd += 1 }
  }
  records.push({
    index: index + 1,
    path,
    status: response.status,
    redirect: response.headers.get("location") || "",
    title,
    description,
    canonical,
    robots,
    h1s,
    hrefs,
    jsonLd: jsonLd.length,
    invalidJsonLd,
    bodyWords: text(body.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1] || "").split(/\s+/).filter(Boolean).length,
  })
}

const pathSet = new Set(paths)
const incoming = new Map(paths.map((path) => [path, new Set()]))
const internalTargetsOutsideSitemap = new Set()
for (const record of records) {
  for (const href of record.hrefs) {
    let target
    try { target = new URL(href, expectedOrigin) } catch { continue }
    if (target.origin !== expectedOrigin) continue
    const targetPath = target.pathname || "/"
    if (pathSet.has(targetPath)) incoming.get(targetPath).add(record.path)
    else if (!targetPath.startsWith("/_next/") && !targetPath.match(/\.(?:png|jpe?g|svg|webp|avif|ico)$/i)) internalTargetsOutsideSitemap.add(targetPath)
  }
}

const brokenTargets = []
for (const target of internalTargetsOutsideSitemap) {
  const { response } = await get(target)
  if (response.status >= 400) brokenTargets.push({ path: target, status: response.status })
}

const duplicateValues = (key) => {
  const grouped = new Map()
  for (const record of records) {
    const value = record[key]
    if (!value) continue
    grouped.set(value, [...(grouped.get(value) || []), record.path])
  }
  return [...grouped.entries()].filter(([, groupedPaths]) => groupedPaths.length > 1)
}

const issues = records.flatMap((record) => {
  const expectedCanonical = `${expectedOrigin}${record.path === "/" ? "" : record.path}`
  const pageIssues = []
  if (record.status !== 200) pageIssues.push(`HTTP ${record.status}`)
  if (record.redirect) pageIssues.push(`redirects to ${record.redirect}`)
  if (!record.title) pageIssues.push("missing title")
  if (!record.description) pageIssues.push("missing description")
  if (record.h1s.length !== 1) pageIssues.push(`${record.h1s.length} H1s`)
  if (record.canonical !== expectedCanonical) pageIssues.push(`canonical ${record.canonical || "missing"}`)
  if (/noindex|none/.test(record.robots)) pageIssues.push(`robots ${record.robots}`)
  if (record.invalidJsonLd) pageIssues.push(`${record.invalidJsonLd} invalid JSON-LD block(s)`)
  if ((incoming.get(record.path)?.size || 0) === 0 && record.path !== "/") pageIssues.push("orphan")
  return pageIssues.map((issue) => ({ path: record.path, issue }))
})

const report = {
  checkedAt: new Date().toISOString(),
  base: base.toString(),
  expectedOrigin,
  sitemapStatus: sitemapResult.response.status,
  sitemapUrlCount: sitemapUrls.length,
  sitemapDuplicates,
  nonCanonicalSitemapUrls: sitemapUrls.filter((url) => !url.startsWith(expectedOrigin)),
  brokenInternalTargets: brokenTargets.sort((a, b) => a.path.localeCompare(b.path)),
  duplicateTitles: duplicateValues("title"),
  duplicateDescriptions: duplicateValues("description"),
  issueCount: issues.length,
  issues,
  pages: records.map((record) => ({
    path: record.path,
    status: record.status,
    canonical: record.canonical,
    title: record.title,
    descriptionLength: record.description.length,
    h1Count: record.h1s.length,
    h1: record.h1s[0] || "",
    robots: record.robots,
    jsonLdBlocks: record.jsonLd,
    invalidJsonLd: record.invalidJsonLd,
    incomingInternalPages: incoming.get(record.path)?.size || 0,
    bodyWords: record.bodyWords,
  })),
}

console.log(JSON.stringify(report, null, 2))
process.exitCode = issues.length || brokenTargets.length || report.duplicateTitles.length || report.duplicateDescriptions.length ? 1 : 0
