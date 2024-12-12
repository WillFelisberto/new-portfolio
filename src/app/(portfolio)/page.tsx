import HeroSection from '@/components/pages/home/HeroSection';
import KnownTechs from '@/components/pages/home/KnownTechs';
import { EducationSection } from '@/components/pages/home/EducationSection';
import { HighlightedProjects } from '@/components/pages/home/highlightsSection';
import WorkExperienceSection from '@/components/pages/home/WorkExperiencesSection';
import configPromise from '@payload-config';
import { getPayload } from 'payload';
import { Media, Technology } from '../(payload)/payload-types';
export default async function Home() {
  const payload = await getPayload({ config: configPromise });
  const aboutsDocs = await payload.findGlobal({
    slug: 'about',
  });

  // Desestruturação dos dados

  const technologiesResponse = await payload.find({
    collection: 'technologies',
  });
  const educationsResponse = await payload.find({
    collection: 'education',
  });
  const projectsResponse = await payload.find({
    collection: 'projects',
    limit: 2, // Limitando a 2 projetos, como na query GraphQL
  });
  const workExperiencesResponse = await payload.find({
    collection: 'workexperience',
    sort: '-startDate', // Ordenando por data de início decrescente
  });

  return (
    <>
      <HeroSection
        name={aboutsDocs.name!}
        description={aboutsDocs.description!}
        imageUrl={(aboutsDocs.image as Media)?.url || ''}
        imageAlt={(aboutsDocs.image as Media)?.alt || ''}
        technologies={aboutsDocs.technologies as Technology[]}
        social={aboutsDocs.social}
      />
      <KnownTechs technologies={technologiesResponse.docs} />
      <EducationSection
        educations={educationsResponse.docs}
        title="Education"
        subtitle="studies"
      />
      <HighlightedProjects projects={projectsResponse.docs} />
      <WorkExperienceSection experiences={workExperiencesResponse.docs} />
    </>
  );
}
