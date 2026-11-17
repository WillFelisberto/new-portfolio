import { Project, Technology } from '@/app/(payload)/payload-types';
import Image from 'next/image';
import { getProjectThumbnail } from '@/lib/project-image';

type ProjectCardProps = {
  project: Project;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const technologies = (project.technologies as Technology[])
    .map((x) => x.name!)
    .join(', ');
  return (
    <div className="card-tactile card-tactile-interactive group flex h-[436px] flex-col overflow-hidden">
      <div className="h-48 w-full overflow-hidden border-b border-line">
        <Image
          width={380}
          height={200}
          className="h-full w-full object-cover transition-transform duration-500 ease-out-expo group-hover:scale-105"
          alt={`Thumbnail do projeto ${project.title}`}
          src={getProjectThumbnail(project)}
          unoptimized
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <strong className="font-display text-xl font-bold text-ink transition-colors group-hover:text-lime">
          {project.title}
        </strong>
        <p className="mt-2 line-clamp-4 text-muted">
          {project.shortDescription}
        </p>
        <span className="label-mono mt-auto block truncate text-xs text-dim">
          {technologies}
        </span>
      </div>
    </div>
  );
};
