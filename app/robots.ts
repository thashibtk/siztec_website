import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    host: 'https://www.siztec.com',
    sitemap: 'https://www.siztec.com/sitemap.xml',
  }
}
