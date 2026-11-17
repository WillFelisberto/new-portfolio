'use client';
import { Education } from '@/app/(payload)/payload-types';
import EducationCard from '@/components/EducationCard';
import SectionTitle from '@/components/SectionTitle';

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
  return (
    <section className="container flex flex-col gap-10 py-16 md:flex-row md:gap-4 lg:gap-16">
      <div className="max-w-[420px]">
        <SectionTitle subtitle={subtitle} title={title} />
        <p className="mt-6 text-muted">
          Academic foundation in Information and Communication Technologies at
          UFSC, currently developing graduate research focused on Edge AI and
          TinyML.
        </p>
      </div>

      <div className="flex flex-1 flex-col gap-4">
        {educations?.map((edu) => (
          <EducationCard
            key={`education-${edu.id || edu.courseName || edu.title}`}
            education={edu}
          />
        ))}
      </div>
    </section>
  );
};
