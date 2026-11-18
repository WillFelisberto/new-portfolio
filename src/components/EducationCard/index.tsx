import { formatDateRange } from '@/lib/utils';
import CardItem from '../CardItem';
import { Education, Media } from '@/app/(payload)/payload-types';

type EducationCardProps = {
  education: Education;
  isFirst?: boolean;
  isLast?: boolean;
};

const EducationCard = ({ education, isFirst, isLast }: EducationCardProps) => {
  const {
    startDate,
    endDate,
    description,
    courseName,
    educationLogo,
    title,
    url,
  } = education;

  const { formattedStartDate, formattedEndDate, formattedDuration } =
    formatDateRange(startDate!, endDate!);

  // Distinguish academic milestones with authentic circuit label tags
  const jumperLabel = courseName?.toLowerCase().includes('mestrado')
    ? '// EDGE AI [UFSC]'
    : '// B.SC. TIC';

  return (
    <CardItem
      logoUrl={(educationLogo as Media).url!}
      logoAlt={`Logo da empresa ${title}`}
      subtitle={courseName!}
      title={title!}
      education
      dateRange={`${formattedStartDate} • ${formattedEndDate} • (${formattedDuration})`}
      description={description}
      linkUrl={url!}
      isFirst={isFirst}
      isLast={isLast}
      jumperColor="lime"
      jumperLabel={jumperLabel}
    />
  );
};

export default EducationCard;
