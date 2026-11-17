'use client';

import { Publication } from '@/app/(payload)/payload-types';
import SectionTitle from '@/components/SectionTitle';
import TechBadge from '@/components/TechBadge';
import RichTextComponent from '@/components/RichText';
import { motion } from 'framer-motion';
import { HiExternalLink } from 'react-icons/hi';
import { TbBrandGithub, TbFileText } from 'react-icons/tb';

type PublicationsSectionProps = {
  publications: Publication[];
  title?: string;
  subtitle?: string;
};

export const PublicationsSection = ({
  publications,
  title = 'Publications & Research',
  subtitle = 'academic',
}: PublicationsSectionProps) => {
  if (!publications || publications.length === 0) return null;

  return (
    <section className="container flex flex-col gap-10 py-16 md:flex-row md:gap-4 lg:gap-16">
      <div className="max-w-[420px]">
        <SectionTitle subtitle={subtitle} title={title} />
        <p className="mt-6 text-muted">
          Peer-reviewed academic publications and scientific research in Edge
          AI, TinyML, and embedded intelligence developed in collaboration with
          UFSC.
        </p>
      </div>

      <div className="flex flex-1 flex-col gap-6">
        {publications.map((pub, i) => {
          const year = new Date(pub.publicationDate).getFullYear();
          return (
            <motion.article
              key={pub.id || pub.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="card-tactile card-tactile-interactive flex flex-col gap-4 rounded-xl p-6 sm:p-8"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="label-mono rounded-md border border-well bg-coral px-2.5 py-1 text-xs font-bold text-night shadow-chip">
                  IEEE XPLORE • {year}
                </span>

                <div className="flex items-center gap-3">
                  {pub.githubUrl && (
                    <a
                      href={pub.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Repository on GitHub"
                      className="rounded-md border border-line bg-surface p-2 text-muted transition-all hover:-translate-y-0.5 hover:border-lime hover:text-lime"
                    >
                      <TbBrandGithub size={18} />
                    </a>
                  )}
                  {pub.doiUrl && (
                    <a
                      href={pub.doiUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Read paper on IEEE Xplore"
                      className="flex items-center gap-1.5 rounded-md border border-line bg-raised px-3 py-1.5 font-mono text-xs font-semibold text-ink transition-all hover:-translate-y-0.5 hover:border-lime hover:text-lime"
                    >
                      <TbFileText size={16} />
                      <span>Read Paper</span>
                      <HiExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>

              <div>
                <h3 className="font-display text-xl font-extrabold text-ink sm:text-2xl">
                  {pub.doiUrl ? (
                    <a
                      href={pub.doiUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="transition-colors hover:text-lime"
                    >
                      {pub.title}
                    </a>
                  ) : (
                    pub.title
                  )}
                </h3>
                <p className="mt-1 text-sm font-medium text-dim">
                  Authors: {pub.authors}
                </p>
                <p className="label-mono mt-0.5 text-xs text-muted">
                  {pub.venue}
                </p>
              </div>

              {pub.abstract && (
                <div className="text-sm leading-relaxed text-muted">
                  <RichTextComponent lexicalData={pub.abstract} />
                </div>
              )}

              {pub.tags && pub.tags.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {pub.tags.map((tag, tagIdx) => (
                    <TechBadge key={tagIdx} name={tag.name || ''} />
                  ))}
                </div>
              )}
            </motion.article>
          );
        })}
      </div>
    </section>
  );
};
