import { PageIntroduction } from '@/components/pages/projects/ProjectIntroduction';
import { ProjectsList } from '@/components/pages/projects/ProjectsList';
import configPromise from '@payload-config';
import { getPayload } from 'payload';

export async function generateMetadata() {
  return {
    title: 'Projects - Willian de Souza Felisberto',
    description:
      "Explore my front-end programming projects! From websites to intuitive interfaces, dive into my world of code and design. Discover how I turn ideas into digital experiences. Let's create something amazing together? Come check it out!",
    keywords:
      'Front-end Developer, Javascript, NodeJs, React, HTML, CSS, Docker, Compass.UOL, B2B e-commerce, B2C e-commerce, User Experience, Web Development',
    openGraph: {
      siteName: 'Projects - Willian de Souza Felisberto',
      title: 'Projects - Willian de Souza Felisberto',
      description:
        "Explore my front-end programming projects! From websites to intuitive interfaces, dive into my world of code and design. Discover how I turn ideas into digital experiences. Let's create something amazing together? Come check it out!",
      url: 'https://www.linkedin.com/in/willianfelisberto/',
      type: 'website',
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
