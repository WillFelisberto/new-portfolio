import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl =
    process.env.NEXT_PUBLIC_APP_URL || 'https://www.willianfelisberto.com.br';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
      {
        userAgent: [
          'GPTBot',
          'PerplexityBot',
          'ClaudeBot',
          'Google-Extended',
          'Applebot',
        ],
        allow: ['/', '/llms.txt', '/projects'],
        disallow: ['/admin/', '/api/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
