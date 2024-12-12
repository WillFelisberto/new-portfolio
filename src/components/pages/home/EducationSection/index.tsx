'use client';
import EducationCard, { Education } from '@/components/EducationCard';
import SectionTitle from '@/components/SectionTitle';
import { motion } from 'framer-motion';

type EducationSectionProps = {
  educations: Education[];
  title: string;
  subtitle: string;
};

export const EducationSection = ({
  educations,
  title,
  subtitle,
}: EducationSectionProps) => {
  console.log('🚀 ~ educations:', educations);
  return (
    <section className="container py-16">
      <SectionTitle subtitle={subtitle} title={title} />
      <div className="mt-[60px] grid w-full grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3">
        {educations.map((edu, i) => (
          <motion.div
            key={`education-${edu.title}`}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.15, delay: i * 0.1 }}
          >
            <EducationCard education={edu} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
