import type { MetadataRoute } from "next"
import { malattie } from "@/data/malattie"

const BASE = "https://www.alessandrofederico.it"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: `${BASE}/chi-sono`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/specialita`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/prima-e-dopo`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/recensioni`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/malattie-dermatologiche`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/prenota`, lastModified: now, changeFrequency: "yearly", priority: 0.9 },
  ]

  const malattiePages: MetadataRoute.Sitemap = malattie.map((m) => ({
    url: `${BASE}/malattie-dermatologiche/${m.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  return [...staticPages, ...malattiePages]
}
