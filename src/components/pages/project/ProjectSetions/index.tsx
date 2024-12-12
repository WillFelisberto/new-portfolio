'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeUpAnimation } from '@/lib/animations';
import { Project } from '@/components/ProjectCard';
import RichTextComponent from '@/components/RichText';

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
          <h2 className="text-2xl font-medium text-gray-300 md:text-3xl">
            {section.title}
          </h2>

          {section.description && (
            <motion.div
              className="my-4 max-w-[640px] text-justify text-sm text-gray-400 sm:my-6 sm:text-base"
              {...fadeUpAnimation}
            >
              <RichTextComponent lexicalData={section.description} />
            </motion.div>
          )}

          <Image
            width={1080}
            height={672}
            className="aspect-auto w-full rounded-lg object-cover"
            alt={section.image.alt || `Imagem da sessão ${section.title}`}
            src={section.image.url}
            unoptimized
          />
        </motion.div>
      ))}
    </section>
  );
};
