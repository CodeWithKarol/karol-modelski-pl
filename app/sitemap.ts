import { MetadataRoute } from "next"
import { TOOLS } from "@/lib/tools"
import { OFFERS } from "@/lib/offers"
import { KNOWLEDGE_PAGES } from "@/lib/knowledge"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://karol-modelski.pl"

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/oferta`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/wspolpraca`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/baza-wiedzy`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/mapa-strony`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },

    // Produkty (Oferta) - Priorytet 0.8
    ...Object.values(OFFERS).map((offer) => ({
      url: `${baseUrl}${offer.offer_url}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),

    // Narzędzia - Priorytet 0.6
    ...TOOLS.map((tool) => ({
      url: `${baseUrl}${tool.metadata.href}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),

    // Baza wiedzy - Priorytet 0.5
    ...Object.keys(KNOWLEDGE_PAGES).map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ]
}
