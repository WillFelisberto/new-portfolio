import { formatDateRange } from '@/lib/utils';
import CardItem from '../CardItem';
import { Education, Media } from '@/app/(payload)/payload-types';

type EducationCardProps = {
  education: Education;
};

const EducationCard = ({ education }: EducationCardProps) => {
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
    />
  );
};

export default EducationCard;
