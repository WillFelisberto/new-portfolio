'use client';

import Link from '@/components/Link';
import SectionTitle from '@/components/SectionTitle';
import { motion } from 'framer-motion';
import { HiArrowNarrowLeft } from 'react-icons/hi';

export const PageIntroduction = () => {
  return (
    <section className="flex h-[450px] w-full flex-col items-center justify-center bg-hero-image bg-cover bg-center bg-no-repeat px-2 lg:h-[630px]">
      <SectionTitle
        subtitle="projects"
        title="My projects"
        className="items-center text-center [&>h3]:text-4xl"
      />
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.6 }}
      >
        <p className="my-6 max-w-[640px] text-center text-sm text-gray-400 sm:text-base">
          Here you can see some of the projects I have developed. Feel free to
          browse and explore the projects to see how they were created, the
          technologies used, and the implemented features.
        </p>
        <Link href="/">
          <HiArrowNarrowLeft size={20} />
          Back to Home
        </Link>
      </motion.div>
    </section>
  );
};
