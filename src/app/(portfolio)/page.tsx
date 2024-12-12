import HeroSection from '@/components/pages/home/HeroSection';
import KnownTechs from '@/components/pages/home/KnownTechs';
import { HOME } from './_graphql/home';
import createApolloClient from './_api/apollo-client';
import { EducationSection } from '@/components/pages/home/EducationSection';
import { HighlightedProjects } from '@/components/pages/home/highlightsSection';
import WorkExperienceSection from '@/components/pages/home/WorkExperiencesSection';

export default async function Home() {
  const client = createApolloClient();

  // Fazer a query de dados no servidor
  const { data } = await client.query({
    query: HOME,
  });

  // Desestruturação dos dados
  const aboutsDocs = data.Abouts?.docs || [];
  const techDocs = data.Technologies?.docs || [];
  const educationDocs = data.Educations?.docs || [];
  const projectDocs = data.Projects?.docs || [];
  const workExperiencesDocs = data.Workexperiences?.docs || [];

  // Pegando o primeiro objeto de Abouts para passar ao HeroSection
  const about = aboutsDocs[0];

  return (
    <>
      <HeroSection
        name={about.name}
        description={about.description}
        imageUrl={about.image?.url}
        imageAlt={about.image?.alt}
        technologies={about.technologies}
        social={about.social}
      />
      <KnownTechs technologies={techDocs} />
      <EducationSection
        educations={educationDocs}
        title="Education"
        subtitle="studies"
      />
      <HighlightedProjects projects={projectDocs} />
      <WorkExperienceSection experiences={workExperiencesDocs} />
    </>
  );
}
