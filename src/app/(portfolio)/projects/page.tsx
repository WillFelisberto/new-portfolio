import { PageIntroduction } from '@/components/pages/projects/ProjectIntroduction';
import createApolloClient from '../_api/apollo-client';
import { PROJECTS } from '../_graphql/projects';
import { ProjectsList } from '@/components/pages/projects/ProjectsList';

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
  const client = createApolloClient();

  // Fazer a query de dados no servidor
  const { data } = await client.query({
    query: PROJECTS,
  });
  const projectDocs = data.Projects?.docs || [];

  return (
    <>
      <PageIntroduction />
      <ProjectsList projects={projectDocs} />
    </>
  );
}
