import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.turphdesigns.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    { url: 'https://www.turphdesigns.com/privacy', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
    { url: 'https://www.turphdesigns.com/terms', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
  ]
}
