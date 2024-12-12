import { ProjectDetails } from '@/components/pages/project/ProjectDetailsSection';
import createApolloClient from '../../_api/apollo-client';
import { PROJECT, PROJECTS } from '../../_graphql/projects';
import { ProjectSections } from '@/components/pages/project/ProjectSetions';
import { Metadata } from 'next';

type ProjectProps = {
  params: {
    slug: string;
  };
};
// Função para gerar metadados dinâmicos
export async function generateMetadata({
  params,
}: ProjectProps): Promise<Metadata> {
  const { slug } = await params; // Extraia o `slug` de `params` de forma explícita
  const client = createApolloClient();

  // Buscar dados do projeto com base no slug
  const { data } = await client.query({
    query: PROJECT,
    variables: { slug },
  });

  const project = data.Projects?.docs[0];

  if (!project) {
    return {
      title: 'Projeto não encontrado',
      description: 'O projeto solicitado não foi encontrado.',
    };
  }

  return {
    title: project.title || 'Detalhes do Projeto',
    description:
      project.description || 'Veja os detalhes deste projeto incrível.',
    openGraph: {
      title: project.title,
      description: project.description,
      images: project.image
        ? [{ url: project.image.url, alt: project.title }]
        : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.description,
      images: project.image
        ? [{ url: project.image.url, alt: project.title }]
        : [],
    },
  };
}

export default async function Project({ params }: ProjectProps) {
  const client = createApolloClient();
  const { slug } = await params;

  // Fazer a query de dados no servidor
  const { data } = await client.query({
    query: PROJECT,
    variables: { slug },
  });
  const projectDocs = data.Projects?.docs || [];

  return (
    <>
      <ProjectDetails project={projectDocs[0]} />
      <ProjectSections sections={projectDocs[0].sections} />
    </>
  );
}
export async function generateStaticParams() {
  const client = createApolloClient();

  // Query GraphQL para buscar todos os slugs dos projetos
  const { data } = await client.query({
    query: PROJECTS,
  });

  // Mapeia os slugs para os parâmetros dinâmicos
  const projects = data.Projects?.docs || [];
  return projects.map((project: { slug: string }) => ({
    slug: project.slug,
  }));
}
