'use client';
import { motion } from 'framer-motion';

import KnownTech, { KnownTechProps } from '@/components/KnownTech';
import SectionTitle from '@/components/SectionTitle';
import React from 'react';

const KnownTechs = ({
  technologies,
}: {
  technologies: KnownTechProps['tech'][];
}) => {
  return (
    <section className="container py-16">
      <SectionTitle subtitle={'skills'} title={'Knowledge'} />
      <div className="mt-[60px] grid w-full grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3">
        {technologies.map((tech) => (
          <motion.div key={`knownTech-${tech.name}`}>
            <KnownTech
              tech={{
                icon: tech.icon,
                name: tech.name,
              }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default KnownTechs;
