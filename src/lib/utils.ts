import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { format, differenceInMonths, differenceInYears } from 'date-fns';
import { enUS } from 'date-fns/locale';

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

interface FormattedDateRange {
  formattedStartDate: string;
  formattedEndDate: string;
  formattedDuration: string;
}

export function formatDateRange(
  startDate: string,
  endDate: string | null,
): FormattedDateRange {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();

  const formattedStartDate = format(start, 'MMM yyyy', { locale: enUS });
  const formattedEndDate = endDate
    ? format(new Date(endDate), 'MMM yyyy', { locale: enUS })
    : 'Present';

  const months = differenceInMonths(end, start);
  const years = differenceInYears(end, start);
  const monthsRemaining = months % 12;

  const formattedDuration =
    years > 0
      ? `${years} year${years > 1 ? 's' : ''}${
          monthsRemaining > 0
            ? ` and ${monthsRemaining} month${monthsRemaining > 1 ? 's' : ''}`
            : ''
        }`
      : `${months} month${months > 1 ? 's' : ''}`;

  return { formattedStartDate, formattedEndDate, formattedDuration };
}
