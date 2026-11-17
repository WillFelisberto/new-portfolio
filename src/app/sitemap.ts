import { MetadataRoute } from 'next';
import configPromise from '@payload-config';
import { getPayload } from 'payload';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl =
    process.env.NEXT_PUBLIC_APP_URL || 'https://www.willianfelisberto.com.br';

  let projectUrls: MetadataRoute.Sitemap = [];

  try {
    const payload = await getPayload({ config: configPromise });
    const projects = await payload.find({
      collection: 'projects',
      limit: 100,
    });

    projectUrls = projects.docs.map((project) => ({
      url: `${baseUrl}/projects/${project.slug}`,
      lastModified: new Date(project.updatedAt || project.createdAt),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }));
  } catch (error) {
    console.error('Error generating project URLs for sitemap:', error);
  }

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/llms.txt`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...projectUrls,
  ];
}
