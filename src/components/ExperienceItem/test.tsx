import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ExperienceItem, { WorkExperience } from '.';
import { CardItemProps } from '../CardItem';
import { formatDateRange } from '@/lib/utils';

jest.mock('../CardItem', () => ({
  __esModule: true,
  default: ({ title, subtitle, dateRange, linkText }: CardItemProps) => (
    <div>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <p>{dateRange}</p>
      <a href="#">{linkText}</a>
    </div>
  ),
}));

jest.mock('../TechBadge', () => ({
  __esModule: true,
  default: ({ name }: { name: string }) => <span>{name}</span>,
}));

jest.mock('@/lib/utils', () => ({
  formatDateRange: jest.fn(() => ({
    formattedStartDate: 'Jan 2020',
    formattedEndDate: 'Jan 2023',
    formattedDuration: '3 years',
  })),
}));

describe('<ExperienceItem />', () => {
  it('should render experience item with all required fields when valid experience data is provided', () => {
    const mockExperience: WorkExperience = {
      companyLogo: {
        url: '/ufsc.jpg',
      },
      role: 'Software Engineer',
      companyName: 'TechCorp',
      companyUrl: 'https://techcorp.com',
      startDate: '2020-01-01',
      endDate: '2023-01-01',
      technologies: [
        { name: 'React' },
        { name: 'Node.js' },
        { name: 'TypeScript' },
      ],
      description: {
        lexicalData: {
          root: {
            direction: 'ltr',
            format: '',
            indent: 0,
            type: 'root',
            version: 1,
            children: [
              {
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Developed and maintained scalable web applications.',
                type: 'text',
                version: 1,
              },
            ],
          },
        },
      },
    };

    const { formattedStartDate, formattedEndDate, formattedDuration } =
      formatDateRange('2023-01-01', null);

    const { container } = render(
      <ExperienceItem experience={mockExperience} />,
    );

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'TechCorp',
    );

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Software Engineer',
    );
    expect(screen.getByRole('paragraph')).toHaveTextContent(
      `${formattedStartDate} • ${formattedEndDate} • (${formattedDuration})`,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
