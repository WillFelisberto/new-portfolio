'use client';

import { useState, useMemo } from 'react';
import Link from '@/components/Link';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectCard } from './projectCard';
import EmptyState from '@/components/EmptyState';
import { Project, Technology } from '@/app/(payload)/payload-types';
import { HiOutlineSearch, HiX } from 'react-icons/hi';

type ProjectsListProps = {
  projects: Project[];
};

type CategoryKey = 'all' | 'edge-ai' | 'web' | 'challenges';

interface CategoryFilter {
  key: CategoryKey;
  label: string;
}

const CATEGORIES: CategoryFilter[] = [
  { key: 'all', label: 'All Projects' },
  { key: 'edge-ai', label: 'Edge AI // TinyML' },
  { key: 'web', label: 'Fullstack & Web' },
  { key: 'challenges', label: 'Technical Challenges' },
];

const getProjectCategory = (project: Project): CategoryKey => {
  if (project.category) return project.category as CategoryKey;
  const slug = project.slug || '';
  if (slug === 'fadigai') return 'edge-ai';
  if (slug === 'gatil-dos-resgatados' || slug === 'shelfkeep') return 'web';
  return 'challenges';
};

export const ProjectsList = ({ projects }: ProjectsListProps) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const counts = useMemo(() => {
    const map: Record<CategoryKey, number> = {
      all: projects.length,
      'edge-ai': 0,
      web: 0,
      challenges: 0,
    };

    projects.forEach((p) => {
      const cat = getProjectCategory(p);
      if (map[cat] !== undefined) {
        map[cat]++;
      }
    });

    return map;
  }, [projects]);

  const filteredProjects = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();

    return projects.filter((project) => {
      const cat = getProjectCategory(project);
      const matchesCategory =
        selectedCategory === 'all' || cat === selectedCategory;

      if (!matchesCategory) return false;

      if (!q) return true;

      const titleMatch = project.title?.toLowerCase().includes(q);
      const descMatch = project.shortDescription?.toLowerCase().includes(q);
      const techMatch = ((project.technologies as Technology[]) || []).some(
        (t) => t?.name?.toLowerCase().includes(q),
      );

      return titleMatch || descMatch || techMatch;
    });
  }, [projects, selectedCategory, searchQuery]);

  if (!projects?.length) {
    return (
      <section className="container py-32">
        <EmptyState
          title="No projects here yet"
          description="The workbench is empty for now. New builds are on the way, so check back soon."
          actionLabel="Back to Home"
          actionHref="/"
        />
      </section>
    );
  }

  return (
    <section className="container pb-32">
      {/* Filters Toolbar */}
      <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2">
          {CATEGORIES.map(({ key, label }) => {
            const isActive = selectedCategory === key;
            const count = counts[key] ?? 0;

            return (
              <button
                key={key}
                type="button"
                onClick={() => setSelectedCategory(key)}
                className={`label-mono flex items-center gap-2 rounded-md border px-3.5 py-2 text-xs transition-all duration-200 active:translate-y-0.5 ${
                  isActive
                    ? 'border-line bg-lime font-bold text-night shadow-tactile'
                    : 'border-line bg-surface text-muted hover:border-violet-electric hover:text-ink'
                }`}
                aria-pressed={isActive}
              >
                <span>{label}</span>
                <span
                  className={`rounded-full px-2 py-0.5 font-mono text-xs font-bold ${
                    isActive
                      ? 'bg-night/15 text-night'
                      : 'border border-line/60 bg-raised text-dim'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative min-w-[260px] flex-1 md:max-w-[340px]">
          <HiOutlineSearch
            size={18}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-dim"
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search projects or stack..."
            aria-label="Search projects by name, technology or keyword"
            className="w-full rounded-md border border-line bg-surface py-2 pl-9 pr-8 text-sm text-ink transition-colors placeholder:text-dim focus:border-lime focus:outline-none focus:ring-1 focus:ring-lime"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              aria-label="Clear search query"
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-dim hover:text-ink"
            >
              <HiX size={16} />
            </button>
          )}
        </div>
      </div>

      {/* Projects Grid or Filter Empty State */}
      {filteredProjects.length === 0 ? (
        <EmptyState
          title="No projects matched your filter"
          description="The probe scanner returned 0 signals. Try choosing another category or clearing your search query."
          actionLabel="Reset Filters"
          actionOnClick={() => {
            setSelectedCategory('all');
            setSearchQuery('');
          }}
          className="my-8"
        />
      ) : (
        <motion.div
          layout
          className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id || project.slug || project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="block h-full transition-transform hover:-translate-y-1"
                >
                  <ProjectCard project={project} />
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </section>
  );
};
