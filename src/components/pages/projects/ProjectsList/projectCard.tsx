import { Media, Project, Technology } from '@/app/(payload)/payload-types';
import Image from 'next/image';

type ProjectCardProps = {
  project: Project;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const technologies = (project.technologies as Technology[])
    .map((x) => x.name!)
    .join(', ');
  return (
    <div className="group flex h-[436px] flex-col overflow-hidden rounded-lg border-2 border-gray-800 bg-gray-800 opacity-70 transition-all hover:border-sky-500 hover:opacity-100">
      <div className="h-48 w-full overflow-hidden">
        <Image
          width={380}
          height={200}
          className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110"
          alt={`Thumbnail do projeto ${project.title}`}
          src={(project.thumbnail as Media)!.url!}
          unoptimized
        />
      </div>
      <div className="flex flex-1 flex-col p-8">
        <strong className="font-medium text-gray-50/90 transition-all group-hover:text-sky-500">
          {project.title}
        </strong>
        <p className="mt-2 line-clamp-4 text-gray-400">
          {project.shortDescription}
        </p>
        <span className="mt-auto block truncate text-sm font-medium text-gray-300">
          {technologies}
        </span>
      </div>
    </div>
  );
};
