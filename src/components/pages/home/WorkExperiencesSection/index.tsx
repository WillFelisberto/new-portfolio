import { Workexperience } from '@/app/(payload)/payload-types';
import ExperienceItem from '@/components/ExperienceItem';
import SectionTitle from '@/components/SectionTitle';

type WorkExperienceSection = {
  experiences: Workexperience[];
};

const WorkExperienceSection = ({ experiences }: WorkExperienceSection) => {
  return (
    <section className="container flex flex-col gap-10 py-16 md:flex-row md:gap-4 lg:gap-16">
      <div className="max-w-[420px]">
        <SectionTitle
          subtitle={'experiences'}
          title={'Professional Experience'}
        />
        <p className="mt-6 text-muted">
          {
            "I am always open to new challenges and exciting projects. Let's work together to create amazing solutions for your company"
          }
        </p>
      </div>

      <div className="flex flex-col">
        {experiences?.map((experience, index) => (
          <ExperienceItem
            key={experience.companyName}
            experience={experience}
            isFirst={index === 0}
            isLast={index === experiences.length - 1}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default WorkExperienceSection;
