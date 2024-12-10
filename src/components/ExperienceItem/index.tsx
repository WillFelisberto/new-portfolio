import { formatDateRange } from '@/lib/utils';
import CardItem from '../CardItem';
import TechBadge from '../TechBadge';

export type WorkExperience = {
  companyLogo: {
    url: string;
  };
  role: string;
  companyName: string;
  companyUrl: string;
  startDate: string;
  endDate: string | null;
  technologies: { name: string }[];
  description: string;
};

type ExperienceItemProps = {
  experience: WorkExperience;
};

const ExperienceItem = ({ experience }: ExperienceItemProps) => {
  const {
    startDate,
    endDate,
    description,
    companyName,
    companyLogo,
    companyUrl,
    technologies,
  } = experience;

  const { formattedStartDate, formattedEndDate, formattedDuration } =
    formatDateRange(startDate, endDate);

  const additionalContent = (
    <>
      <p className="mb-3 mt-6 text-sm font-semibold text-gray-400">Skills</p>
      <div className="mb-8 flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[350px]">
        {technologies.map((tech, i) => (
          <TechBadge
            name={tech.name}
            key={`experience-${companyName}-tech-${tech.name}`}
            transition={{ duration: 0.2, delay: i * 0.1 }}
          />
        ))}
      </div>
    </>
  );

  return (
    <CardItem
      logoUrl={companyLogo.url}
      logoAlt={`Logo da empresa ${companyName}`}
      title={companyName}
      subtitle={experience.role}
      dateRange={`${formattedStartDate} • ${formattedEndDate} • (${formattedDuration})`}
      description={description}
      linkUrl={companyUrl}
      linkText={`@ ${companyName}`}
      additionalContent={additionalContent}
    />
  );
};

export default ExperienceItem;
