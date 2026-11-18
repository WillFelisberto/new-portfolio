import { formatDateRange } from '@/lib/utils';
import CardItem from '../CardItem';
import TechBadge from '../TechBadge';
import {
  Media,
  Technology,
  Workexperience,
} from '@/app/(payload)/payload-types';

type ExperienceItemProps = {
  experience: Workexperience;
  isFirst?: boolean;
  isLast?: boolean;
  index?: number;
};

const ExperienceItem = ({
  experience,
  isFirst,
  isLast,
  index = 0,
}: ExperienceItemProps) => {
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
    formatDateRange(startDate!, endDate!);

  const additionalContent = (
    <>
      <p className="label-mono mb-3 mt-6 text-dim">Skills</p>
      <div className="mb-8 flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[350px]">
        {(technologies as Technology[]).map((tech, i) => (
          <TechBadge
            name={tech.name!}
            key={`experience-${companyName}-tech-${tech.name}`}
            transition={{ duration: 0.2, delay: i * 0.1 }}
          />
        ))}
      </div>
    </>
  );

  // Technical bus label for the jumper wire (e.g. // BUS.01, // BUS.02, ...)
  const jumperLabel = `// BUS.0${index + 1}`;

  return (
    <CardItem
      logoUrl={(companyLogo as Media).url!}
      logoAlt={`Logo da empresa ${companyName}`}
      title={companyName!}
      subtitle={experience.role!}
      dateRange={`${formattedStartDate} • ${formattedEndDate} • (${formattedDuration})`}
      description={description}
      linkUrl={companyUrl!}
      additionalContent={additionalContent}
      isFirst={isFirst}
      isLast={isLast}
      jumperColor="violet"
      jumperLabel={jumperLabel}
    />
  );
};

export default ExperienceItem;
