import { ProjectDetails } from '@/components/pages/project/ProjectDetailsSection';
import { ProjectSections } from '@/components/pages/project/ProjectSetions';
import { getPayload } from 'payload';
import { Metadata } from 'next';
import configPromise from '@payload-config';
import { getProjectThumbnail } from '@/lib/project-image';

type ProjectProps = {
  params: Promise<{ slug: string }>;
};

// Função para gerar metadados dinâmicos
export async function generateMetadata({
  params,
}: ProjectProps): Promise<Metadata> {
  const { slug } = await params;
  const payload = await getPayload({ config: configPromise });

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
      title: 'Project Not Found | Willian de Souza Felisberto',
      description: 'The requested project could not be found.',
    };
  }

  const projectTitle = `${project.title} | Willian de Souza Felisberto`;
  const projectDesc =
    project.shortDescription ||
    'Explore technical architecture, stack, and source code.';
  const thumbnailUrl = getProjectThumbnail(project);

  return {
    title: projectTitle,
    description: projectDesc,
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
      canonical: `/projects/${slug}`,
    },
    openGraph: {
      title: projectTitle,
      description: projectDesc,
      url: `https://www.willianfelisberto.com.br/projects/${slug}`,
      type: 'article',
      images: [
        {
          url: thumbnailUrl,
          alt: project.title!,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: projectTitle,
      description: projectDesc,
      images: [thumbnailUrl],
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
  const thumbnailUrl = getProjectThumbnail(project);

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
      {
        '@type': 'ListItem',
        position: 3,
        name: project.title,
        item: `https://www.willianfelisberto.com.br/projects/${slug}`,
      },
    ],
  };

  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: project.title,
    headline: project.title,
    description:
      project.shortDescription ||
      'Technical project developed by Willian de Souza Felisberto.',
    url: `https://www.willianfelisberto.com.br/projects/${slug}`,
    image: thumbnailUrl,
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Cross-platform, Web, Microcontrollers',
    author: {
      '@type': 'Person',
      name: 'Willian de Souza Felisberto',
      url: 'https://www.willianfelisberto.com.br',
    },
    ...(project.githubUrl && {
      codeRepository: project.githubUrl,
    }),
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
          __html: JSON.stringify(softwareSchema),
        }}
      />
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
