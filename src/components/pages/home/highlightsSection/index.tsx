import Divider from '@/components/Divider';
import Link from '@/components/Link';
import ProjectCard, { Project } from '@/components/ProjectCard';
import SectionTitle from '@/components/SectionTitle';
import { HiArrowRight } from 'react-icons/hi';

type HighLightedprojectsProps = {
  projects: Project[];
};

export const HighlightedProjects = ({ projects }: HighLightedprojectsProps) => {
  console.log('🚀 ~ HighlightedProjects ~ projects:', projects);
  return (
    <section className="container py-16">
      <SectionTitle subtitle={'highlights'} title={'Featured Projects'} />
      <Divider className="mb-16" />

      <div>
        {projects?.map((project) => (
          <div key={project.slug}>
            <ProjectCard project={project} />
            <Divider className="my-16" />
          </div>
        ))}

        <p className="flex items-center gap-1.5">
          <span className="text-gray-400">Are you interested?</span>
          <Link className="inline-flex" href={`/projects`}>
            View all
            <HiArrowRight />
          </Link>
        </p>
      </div>
    </section>
  );
};
