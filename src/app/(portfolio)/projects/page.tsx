import { PageIntroduction } from '@/components/pages/projects/ProjectIntroduction';
import { ProjectsList } from '@/components/pages/projects/ProjectsList';
import configPromise from '@payload-config';
import { getPayload } from 'payload';

export async function generateMetadata() {
  return {
    title: 'Projects | Willian de Souza Felisberto',
    description:
      'Explore full-stack web applications, technical challenges, and Edge AI projects developed by Willian de Souza Felisberto.',
    keywords:
      'Projects, Portfolio, Frontend Developer, React, Next.js, TypeScript, TinyML, Edge AI, Open Source',
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
    collection: 'projects', // Nome da coleção no Payload CMS
    limit: 300, // Limite de resultados, como na query GraphQL
  });

  return (
    <>
      <PageIntroduction />
      <ProjectsList projects={projectsResponse.docs} />
    </>
  );
}
