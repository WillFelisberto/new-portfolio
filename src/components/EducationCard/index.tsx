import { formatDateRange } from '@/lib/utils';
import CardItem from '../CardItem';

export type Education = {
  title: string;
  description: string;
  educationLogo: {
    url: string;
  };
  url: string;
  startDate: string;
  endDate: string;
  courseName: string;
};

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
    formatDateRange(startDate, endDate);

  return (
    <CardItem
      logoUrl={educationLogo.url}
      logoAlt={`Logo da empresa ${title}`}
      title={courseName}
      dateRange={`${formattedStartDate} • ${formattedEndDate} • (${formattedDuration})`}
      description={description}
      linkUrl={url}
      linkText={`Go to ${title}`}
    />
  );
};

export default EducationCard;
