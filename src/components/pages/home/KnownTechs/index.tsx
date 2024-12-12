'use client';
import { motion } from 'framer-motion';

import KnownTech, { KnownTechProps } from '@/components/KnownTech';
import SectionTitle from '@/components/SectionTitle';
import React from 'react';

const techs: KnownTechProps['tech'][] = [
  {
    icon: 'AiFillAlert',
    name: 'string',
  },
  {
    icon: 'AiFillAlert',
    name: 'strinsg',
  },
];
const KnownTechs = () => {
  return (
    <section className="container py-16">
      <SectionTitle subtitle={'Knowledge'} title={'skills'} />
      <div className="mt-[60px] grid w-full grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3">
        {techs.map((tech, i) => (
          <motion.div key={`knownTech-${tech.name}`}>
            <KnownTech
              key={i}
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
