'use client';
import { motion } from 'framer-motion';

import KnownTech from '@/components/KnownTech';
import SectionTitle from '@/components/SectionTitle';
import React from 'react';
import { Technology } from '@/app/(payload)/payload-types';

const KnownTechs = ({ technologies }: { technologies: Technology[] }) => {
  return (
    <section className="container py-16">
      <SectionTitle subtitle={'skills'} title={'Knowledge'} />
      <div className="mt-10 grid w-full grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-3 sm:gap-4">
        {technologies.map((tech) => (
          <motion.div key={`knownTech-${tech.name}`}>
            <KnownTech
              tech={{
                icon: tech.icon!,
                name: tech.name!,
              }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default KnownTechs;
