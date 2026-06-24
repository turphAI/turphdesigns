import type { MetadataRoute } from 'next'

// AI training / scraping crawlers. These bots read robots.txt and the
// well-behaved ones honor it, so disallowing them trims real traffic.
// Search engines (Googlebot, Bingbot, etc.) are intentionally left allowed.
const AI_CRAWLERS = [
  'GPTBot',
  'ChatGPT-User',
  'OAI-SearchBot',
  'ClaudeBot',
  'anthropic-ai',
  'Claude-Web',
  'CCBot',
  'Google-Extended',
  'Applebot-Extended',
  'PerplexityBot',
  'Bytespider',
  'Amazonbot',
  'FacebookBot',
  'Diffbot',
  'Omgilibot',
  'cohere-ai',
  'YouBot',
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: AI_CRAWLERS,
        disallow: '/',
      },
    ],
    sitemap: 'https://www.turphdesigns.com/sitemap.xml',
  }
}
