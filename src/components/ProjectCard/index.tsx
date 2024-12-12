'use client';
import Image from 'next/image';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { motion } from 'framer-motion';
import TechBadge from '../TechBadge';
import Link from '@/components/Link';
import { fadeUpAnimation, techBadgeAnimation } from '@/lib/animations';
import { DescriptionType } from '../RichText';
import { KnownTechProps } from '../KnownTech';

type ProjectCardProps = {
  project: Project;
};

export type Project = {
  title: string;
  slug: string;
  description: DescriptionType;
  shortDescription: string;
  technologies: KnownTechProps['tech'][];
  pageThumbnail?: {
    url: string;
  };
  thumbnail?: {
    url: string;
  };
  liveProjectUrl?: string;
  githubUrl?: string;
  sections?: {
    title: string;
    description: DescriptionType;
    image: {
      url: string;
      alt: string;
    };
  }[];
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.div
      className="flex flex-col gap-6 lg:flex-row lg:gap-12"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="h-[200px] w-full sm:h-[300px] lg:min-h-full lg:w-[420px]"
        initial={{ opacity: 0, y: 100, scale: 0.5 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 100, scale: 0.5 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <Link href={`/projects/${project.slug}`}>
          <Image
            src={project.thumbnail ? project.thumbnail.url : ''}
            width={420}
            height={304}
            alt={`Thumbnail do projeto ${project.title}`}
            className="h-full w-full rounded-lg object-cover"
          />
        </Link>
      </motion.div>

      <div className="flex-1 lg:py-[18px]">
        <Link href={`/projects/${project.slug}`}>
          <motion.h3
            className="flex items-center gap-3 text-lg font-medium text-gray-50"
            {...fadeUpAnimation}
            transition={{ duration: 0.7 }}
          >
            <Image
              width={20}
              height={20}
              alt="thumbnail project book"
              src="/images/icons/project-title-icon.svg"
            />
            {project.title}
          </motion.h3>
        </Link>
        <Link href={`/projects/${project.slug}`}>
          <motion.p
            className="my-6 text-gray-400"
            {...fadeUpAnimation}
            transition={{ duration: 0.2, delay: 0.3 }}
          >
            {project.shortDescription}
          </motion.p>
        </Link>

        <div className="mb-8 flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[350px]">
          {project.technologies.map((tech, i) => (
            <TechBadge
              name={tech.name}
              key={`${project.title}-tech-${tech.name}`}
              {...techBadgeAnimation}
              transition={{ duration: 0.2, delay: 0.5 + i * 0.1 }}
            />
          ))}
        </div>

        <Link href={`/projects/${project.slug}`}>
          See project
          <HiArrowNarrowRight />
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
