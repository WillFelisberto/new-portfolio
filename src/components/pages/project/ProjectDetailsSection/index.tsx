'use client';
import Button from '@/components/Button';
import RichTextComponent from '@/components/RichText';
import SectionTitle from '@/components/SectionTitle';
import TechBadge from '@/components/TechBadge';
import { fadeUpAnimation, techBadgeAnimation } from '@/lib/animations';
import { motion } from 'framer-motion';
import { TbBrandGithub } from 'react-icons/tb';
import { FiGlobe } from 'react-icons/fi';
import Link from '@/components/Link';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { Project, Technology } from '@/app/(payload)/payload-types';
import { getProjectThumbnail } from '@/lib/project-image';
import { trackEvent } from '@/lib/analytics';

type ProjectDetailsProps = {
  project: Project;
};

export const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  return (
    <section className="relative flex w-full flex-col items-center justify-end overflow-hidden px-6 py-24 pb-10 sm:min-h-[750px] sm:pb-24">
      <motion.div
        className="absolute inset-0 z-[-1]"
        style={{
          background: `linear-gradient(to top, #150F23 8%, rgba(21,15,35,0.82) 100%), url(${getProjectThumbnail(project)}) no-repeat center/cover`,
        }}
        initial={{ opacity: 0, scale: 1.3 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />

      <SectionTitle
        subtitle="projects"
        title={project.title!}
        className="items-center text-center sm:[&>h3]:text-4xl"
      />
      <motion.div
        className="my-4 max-w-[640px] text-base text-muted sm:my-6"
        {...fadeUpAnimation}
      >
        <RichTextComponent lexicalData={project.description!} />
      </motion.div>
      <div className="flex w-full max-w-[330px] flex-wrap items-center justify-center gap-2">
        {(project.technologies as Technology[]).map((tech, i) => (
          <TechBadge
            name={tech.name!}
            key={tech.name}
            {...techBadgeAnimation}
            transition={{ duration: 0.3, delay: i * 0.1 }}
          />
        ))}
      </div>
      <motion.div
        className="my-6 flex flex-col items-center gap-2 sm:my-12 sm:flex-row sm:gap-4"
        {...fadeUpAnimation}
      >
        {project?.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() =>
              trackEvent('project_external_link_click', {
                slug: project.slug || '',
                title: project.title || '',
                link_type: 'github',
                url: project.githubUrl!,
              })
            }
          >
            <Button className="min-w-[180px]">
              <TbBrandGithub size={20} />
              Repository
            </Button>
          </a>
        )}
        {project?.liveProjectUrl && (
          <a
            href={project.liveProjectUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() =>
              trackEvent('project_external_link_click', {
                slug: project.slug || '',
                title: project.title || '',
                link_type: 'live',
                url: project.liveProjectUrl!,
              })
            }
          >
            <Button variant="secondary" className="min-w-[180px]">
              <FiGlobe size={20} />
              Online Project
            </Button>
          </a>
        )}
      </motion.div>
      <Link href={`/projects`}>
        <HiArrowNarrowLeft size={20} />
        Back to Projects
      </Link>
    </section>
  );
};
