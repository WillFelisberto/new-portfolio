import { Media, Project } from '@/app/(payload)/payload-types';

/**
 * Returns a resilient, high-quality image URL for any project.
 * Hierarchy:
 * 1. Known local high-resolution screenshots in /images/projects/[slug].png
 * 2. Uploaded CMS media URL if valid
 * 3. Dynamic GitHub Open Graph social preview (https://opengraph.githubassets.com/1/:user/:repo)
 * 4. Fallback isometric Acid Dark illustration
 */
export function getProjectThumbnail(project: Partial<Project>): string {
  // Specific projects with custom captured screenshots
  if (project.slug === 'gatil-dos-resgatados' || project.slug === 'gatil-cms') {
    return '/images/projects/gatil-cms.webp';
  }

  // Uploaded Payload media
  const media = project.thumbnail as Media | undefined;
  if (media?.url && typeof media.url === 'string' && media.url.length > 0) {
    return media.url;
  }

  // Dynamic GitHub OpenGraph preview
  if (project.githubUrl) {
    try {
      const url = new URL(project.githubUrl);
      const parts = url.pathname.replace(/^\/|\/$/g, '').split('/');
      if (parts.length >= 2) {
        const [owner, repo] = parts;
        return `https://opengraph.githubassets.com/1/${owner}/${repo}`;
      }
    } catch {
      // fallback
    }
  }

  return '/images/illustrations/projects-hero.png';
}
