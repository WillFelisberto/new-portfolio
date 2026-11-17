import { Project, Technology } from '@/app/(payload)/payload-types';
import Image from 'next/image';
import { getProjectThumbnail } from '@/lib/project-image';

type ProjectCardProps = {
  project: Project;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const technologies = ((project.technologies as Technology[]) || [])
    .map((x) => x?.name)
    .filter(Boolean)
    .join(' • ');

  const categoryLabel =
    project.category === 'edge-ai' || project.slug === 'fadigai'
      ? 'Edge AI // TinyML'
      : project.category === 'web' ||
          project.slug === 'gatil-dos-resgatados' ||
          project.slug === 'shelfkeep'
        ? 'Fullstack // Web'
        : 'Tech Challenge';

  return (
    <div className="card-tactile card-tactile-interactive group flex h-[440px] flex-col overflow-hidden">
      <div className="relative h-48 w-full overflow-hidden border-b border-line">
        <Image
          width={380}
          height={200}
          className="h-full w-full object-cover transition-transform duration-500 ease-out-expo group-hover:scale-105"
          alt={`Thumbnail do projeto ${project.title}`}
          src={getProjectThumbnail(project)}
          unoptimized
        />
        <div className="absolute right-3 top-3">
          <span className="label-mono rounded border border-line/80 bg-night/85 px-2 py-0.5 text-[10px] text-coral backdrop-blur-sm">
            {categoryLabel}
          </span>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <strong className="font-display text-xl font-bold text-ink transition-colors group-hover:text-lime">
          {project.title}
        </strong>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">
          {project.shortDescription}
        </p>
        <span className="label-mono mt-auto block truncate text-xs text-dim">
          {technologies || 'Open Source Project'}
        </span>
      </div>
    </div>
  );
};
