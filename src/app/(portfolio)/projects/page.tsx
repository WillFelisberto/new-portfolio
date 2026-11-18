import { PageIntroduction } from '@/components/pages/projects/ProjectIntroduction';
import { ProjectsList } from '@/components/pages/projects/ProjectsList';
import configPromise from '@payload-config';
import { getPayload } from 'payload';

export async function generateMetadata() {
  return {
    title: 'Projects | Willian de Souza Felisberto',
    description:
      'Explore full-stack web applications, technical challenges, and Edge AI projects developed by Willian de Souza Felisberto.',
    keywords: [
      'Projects',
      'Portfolio',
      'Frontend Developer',
      'React',
      'Next.js',
      'TypeScript',
      'TinyML',
      'Edge AI',
      'Open Source',
    ],
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: '/projects',
    },
    openGraph: {
      siteName: 'Willian de Souza Felisberto Portfolio',
      title: 'Projects | Willian de Souza Felisberto',
      description:
        'Explore full-stack web applications, technical challenges, and Edge AI projects developed by Willian de Souza Felisberto.',
      url: 'https://www.willianfelisberto.com.br/projects',
      type: 'website',
      images: [
        {
          url: '/images/will.jpg',
          width: 800,
          height: 800,
          alt: 'Willian de Souza Felisberto Projects',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Projects | Willian de Souza Felisberto',
      description:
        'Explore full-stack web applications, technical challenges, and Edge AI projects developed by Willian de Souza Felisberto.',
      images: ['/images/will.jpg'],
    },
  };
}

export default async function Projects() {
  const payload = await getPayload({ config: configPromise });

  const projectsResponse = await payload.find({
    collection: 'projects',
    limit: 300,
  });

  const breadcrumbsSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.willianfelisberto.com.br',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Projects',
        item: 'https://www.willianfelisberto.com.br/projects',
      },
    ],
  };

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Projects | Willian de Souza Felisberto',
    description:
      'Explore full-stack web applications, technical challenges, and Edge AI projects developed by Willian de Souza Felisberto.',
    url: 'https://www.willianfelisberto.com.br/projects',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: projectsResponse.docs.map((project, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: project.title,
        url: `https://www.willianfelisberto.com.br/projects/${project.slug}`,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbsSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionSchema),
        }}
      />
      <PageIntroduction />
      <ProjectsList projects={projectsResponse.docs} />
    </>
  );
}
