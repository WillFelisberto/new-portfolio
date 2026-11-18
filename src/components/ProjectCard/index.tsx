'use client';
import Image from 'next/image';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { motion } from 'framer-motion';
import TechBadge from '../TechBadge';
import Link from '@/components/Link';
import { fadeUpAnimation, techBadgeAnimation } from '@/lib/animations';
import { Project, Technology } from '@/app/(payload)/payload-types';
import { getProjectThumbnail } from '@/lib/project-image';
import { WorkbenchTape } from '@/components/TactileIllustrations';

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.div
      className="flex flex-col gap-6 lg:flex-row lg:gap-12"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="relative h-[200px] w-full sm:h-[300px] lg:min-h-full lg:w-[420px]">
        {/* Workbench Tape pinning the card */}
        <WorkbenchTape
          color={project.slug === 'fadigai' ? 'lime' : 'coral'}
          label={project.slug === 'fadigai' ? '// EDGE AI' : '// FEATURED'}
          angle={project.slug === 'fadigai' ? -2 : 3}
          className="absolute -top-3 left-4 z-20"
        />
        <Link
          href={`/projects/${project.slug}`}
          className="card-tactile card-tactile-interactive block h-full overflow-hidden p-1.5"
        >
          <Image
            src={getProjectThumbnail(project)}
            width={420}
            height={304}
            alt={`Thumbnail do projeto ${project.title}`}
            className="h-full w-full rounded-lg object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 420px"
          />
        </Link>
      </div>

      <div className="flex-1 lg:py-[18px]">
        <Link href={`/projects/${project.slug}`} className="normal-case">
          <motion.h3
            className="flex items-center gap-3 font-display text-2xl font-bold tracking-tight text-ink"
            {...fadeUpAnimation}
            transition={{ duration: 0.5 }}
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
        <motion.p
          className="my-6 max-w-[60ch] text-muted"
          {...fadeUpAnimation}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {project.shortDescription}
        </motion.p>

        <div className="mb-8 flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[350px]">
          {(project.technologies as Technology[]).map((tech, i) => (
            <TechBadge
              name={tech.name!}
              key={`${project.title}-tech-${tech.name}`}
              {...techBadgeAnimation}
              transition={{ duration: 0.2, delay: 0.3 + i * 0.08 }}
            />
          ))}
        </div>

        <Link href={`/projects/${project.slug}`} className="text-lime">
          See project
          <HiArrowNarrowRight />
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
