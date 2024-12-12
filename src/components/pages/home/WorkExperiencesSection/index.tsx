import ExperienceItem, {
  WorkExperienceProps,
} from '@/components/ExperienceItem';
import SectionTitle from '@/components/SectionTitle';

type WorkExperienceSection = {
  experiences: WorkExperienceProps[];
};

const WorkExperienceSection = ({ experiences }: WorkExperienceSection) => {
  return (
    <section className="container flex flex-col gap-10 py-16 md:flex-row md:gap-4 lg:gap-16">
      <div className="max-w-[420px]">
        <SectionTitle
          subtitle={'experiences'}
          title={'Professional Experience'}
        />
        <p className="mt-6 text-gray-400">
          {
            "I am always open to new challenges and exciting projects. Let's work together to create amazing solutions for your company"
          }
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {experiences?.map((experience) => (
          <ExperienceItem
            key={experience.companyName}
            experience={experience}
          />
        ))}
      </div>
    </section>
  );
};

export default WorkExperienceSection;
