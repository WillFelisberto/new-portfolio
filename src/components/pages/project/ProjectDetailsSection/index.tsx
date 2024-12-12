'use client';
import Button from '@/components/Button';
import RichTextComponent from '@/components/RichText';
import SectionTitle from '@/components/SectionTitle';
import TechBadge from '@/components/TechBadge';
import { fadeUpAnimation, techBadgeAnimation } from '@/lib/animations';
import { motion } from 'framer-motion';
import { TbBrandGithub } from 'react-icons/tb';
import { FiGlobe } from 'react-icons/fi';
import { Project } from '@/components/ProjectCard';
import Link from '@/components/Link';
import { HiArrowNarrowLeft } from 'react-icons/hi';

type ProjectDetailsProps = {
  project: Project;
};

export const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  return (
    <section className="relative flex w-full flex-col items-center justify-end overflow-hidden px-6 py-24 pb-10 sm:min-h-[750px] sm:pb-24">
      <motion.div
        className="absolute inset-0 z-[-1]"
        style={{
          background: `url(/images/hero-bg.png) no-repeat center/cover, url(${project.thumbnail!.url}) no-repeat center/cover`,
        }}
        initial={{ opacity: 0, scale: 1.3 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />

      <SectionTitle
        subtitle="projects"
        title={project.title}
        className="items-center text-center sm:[&>h3]:text-4xl"
      />
      <motion.div
        className="my-4 max-w-[640px] text-justify text-sm text-gray-400 sm:my-6 sm:text-base"
        {...fadeUpAnimation}
      >
        <RichTextComponent lexicalData={project.description} />
      </motion.div>
      <div className="flex w-full max-w-[330px] flex-wrap items-center justify-center gap-2">
        {project.technologies.map((tech, i) => (
          <TechBadge
            name={tech.name}
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
          <a href={project.githubUrl} target="_blank" rel="noreferrer">
            <Button className="min-w-[180px]">
              <TbBrandGithub size={20} />
              Repository
            </Button>
          </a>
        )}
        {project?.liveProjectUrl && (
          <a href={project.liveProjectUrl} target="_blank" rel="noreferrer">
            <Button className="min-w-[180px]">
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
