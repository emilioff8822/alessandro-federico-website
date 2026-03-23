import type { MetadataRoute } from "next"
import { articoli } from "@/data/blog"

const BASE = "https://www.alessandrofederico.it"

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: new Date(), changeFrequency: "monthly", priority: 1.0 },
    { url: `${BASE}/chi-sono`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/specialita`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/recensioni`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/prima-e-dopo`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/contatti`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.8 },
    { url: `${BASE}/prenota`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.8 },
    { url: `${BASE}/skin`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
  ]

  const blogPages: MetadataRoute.Sitemap = articoli.map((art) => ({
    url: `${BASE}/skin/${art.slug}`,
    lastModified: new Date(art.data),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  return [...staticPages, ...blogPages]
}
