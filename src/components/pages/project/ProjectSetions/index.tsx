'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeUpAnimation } from '@/lib/animations';
import RichTextComponent from '@/components/RichText';
import { Media, Project } from '@/app/(payload)/payload-types';

export const ProjectSections = ({ sections }: Pick<Project, 'sections'>) => {
  if (!sections) return null;
  return (
    <section className="container my-12 flex flex-col gap-8 md:my-32 md:gap-32">
      {sections.map((section) => (
        <motion.div
          key={section.title}
          className="flex flex-col items-center gap-6 md:gap-12"
          {...fadeUpAnimation}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-3xl font-extrabold md:text-4xl">
            {section.title}
          </h2>

          {section.description && (
            <motion.div
              className="my-4 max-w-[640px] text-base text-muted sm:my-6"
              {...fadeUpAnimation}
            >
              <RichTextComponent lexicalData={section.description} />
            </motion.div>
          )}

          <Image
            width={1080}
            height={672}
            className="aspect-auto w-full rounded-xl border border-line bg-surface object-cover p-1.5 shadow-card"
            alt={
              (section.image as Media)!.alt ||
              `Imagem da sessão ${section.title}`
            }
            src={(section.image as Media)!.url!}
            unoptimized
          />
        </motion.div>
      ))}
    </section>
  );
};
