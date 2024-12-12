import { ProjectDetails } from '@/components/pages/project/ProjectDetailsSection';
import { ProjectSections } from '@/components/pages/project/ProjectSetions';
import { getPayload } from 'payload';
import { Metadata } from 'next';
import configPromise from '@payload-config';
import { Media } from '@/app/(payload)/payload-types';

type ProjectProps = {
  params: Promise<{ slug: string }>;
};

// Função para gerar metadados dinâmicos
export async function generateMetadata({
  params,
}: ProjectProps): Promise<Metadata> {
  const { slug } = await params; // Extraia o `slug` de `params`
  const payload = await getPayload({ config: configPromise });

  // Buscar o projeto pelo slug
  const projectResponse = await payload.find({
    collection: 'projects',
    where: {
      slug: {
        equals: slug,
      },
    },
    limit: 1,
  });

  const project = projectResponse?.docs?.[0];

  if (!project) {
    return {
      title: 'Projeto não encontrado',
      description: 'O projeto solicitado não foi encontrado.',
    };
  }

  return {
    title: project.title || 'Detalhes do Projeto',
    description:
      project.shortDescription || 'Veja os detalhes deste projeto incrível.',
    openGraph: {
      title: project.title!,
      description: project.shortDescription!,
      images: project.thumbnail
        ? [{ url: (project.thumbnail as Media).url!, alt: project.title! }]
        : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title!,
      description: project.shortDescription!,
      images: project.thumbnail
        ? [{ url: (project.thumbnail as Media).url!, alt: project.title! }]
        : [],
    },
  };
}

export default async function Project({ params }: ProjectProps) {
  const { slug } = await params;
  const payload = await getPayload({ config: configPromise });

  // Buscar o projeto pelo slug
  const projectResponse = await payload.find({
    collection: 'projects',
    where: {
      slug: {
        equals: slug,
      },
    },
    limit: 1,
  });

  const projectDocs = projectResponse?.docs || [];

  if (!projectDocs.length) {
    return <div>Projeto não encontrado</div>;
  }

  const project = projectDocs[0];

  return (
    <>
      <ProjectDetails project={project} />
      <ProjectSections sections={project.sections} />
    </>
  );
}

// Função para gerar parâmetros dinâmicos com base nos slugs
export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise });

  // Buscar todos os projetos
  const projectsResponse = await payload.find({
    collection: 'projects',
    limit: 300, // Defina um limite apropriado
  });

  const projects = projectsResponse?.docs || [];

  // Mapear os slugs para os parâmetros dinâmicos
  return projects.map((project) => ({
    slug: project.slug!,
  }));
}
