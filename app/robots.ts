import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/api/', '/cart', '/success'],
      },
    ],
    sitemap: 'https://www.stackdstudiosai.com/sitemap.xml',
    host: 'https://www.stackdstudiosai.com',
  }
}
