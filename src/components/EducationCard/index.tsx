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
  const isMaster =
    courseName?.toLowerCase().includes('mestrado') ||
    courseName?.toLowerCase().includes('master') ||
    title?.toLowerCase().includes('mestrado');

  const jumperLabel = isMaster ? '// EDGE AI' : '// B.SC. TIC';
  const degreeBadge = isMaster ? 'MSc' : 'BSc';

  // Use crisp, official high-res UFSC vector WebP instead of the low-res 64px image
  const rawLogoUrl = (educationLogo as Media)?.url;
  const resolvedLogoUrl =
    !rawLogoUrl || rawLogoUrl.includes('ufsc')
      ? '/images/ufsc.webp'
      : rawLogoUrl;

  return (
    <CardItem
      logoUrl={resolvedLogoUrl}
      logoAlt={`Logo oficial ${title}`}
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
      degreeBadge={degreeBadge}
      isHighlightedNode={isMaster}
    />
  );
};

export default EducationCard;
