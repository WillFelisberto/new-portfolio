'use client';
import { motion } from 'framer-motion';

import KnownTech from '@/components/KnownTech';
import SectionTitle from '@/components/SectionTitle';
import React from 'react';
import { Technology } from '@/app/(payload)/payload-types';

const KnownTechs = ({ technologies }: { technologies: Technology[] }) => {
  return (
    <section className="container py-16">
      <div className="flex flex-col gap-2">
        <SectionTitle subtitle={'skills'} title={'Knowledge'} />
        <p className="mt-2 max-w-2xl text-sm text-muted sm:text-base">
          Modular technical stack spanning high-scale frontend architectures,
          distributed backend platforms, and graduate research in Edge AI and
          embedded intelligence.
        </p>
      </div>

      <div className="mt-8 grid w-full grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
        {technologies.map((tech, index) => (
          <motion.div key={`knownTech-${tech.name}`}>
            <KnownTech
              tech={{
                icon: tech.icon!,
                name: tech.name!,
              }}
              index={index}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default KnownTechs;
