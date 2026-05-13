import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://karol-modelski.pl'
  return [
    {
      url: baseUrl,
      lastModified: new Date('2026-05-13'),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}
