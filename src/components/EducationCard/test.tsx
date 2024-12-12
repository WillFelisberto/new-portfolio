import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import EducationCard from '.';
import { CardItemProps } from '../CardItem';
import { Education } from '@/app/(payload)/payload-types';

jest.mock('../CardItem', () => ({
  __esModule: true,
  default: ({ title, subtitle, dateRange }: CardItemProps) => (
    <div>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <p>{dateRange}</p>
    </div>
  ),
}));

jest.mock('@/lib/utils', () => ({
  formatDateRange: jest.fn(() => ({
    formattedStartDate: 'Jan 2020',
    formattedEndDate: 'Dec 2023',
    formattedDuration: '3 years',
  })),
}));

describe('<EducationCard />', () => {
  const mockEducation: Education = {
    id: '1',
    createdAt: '2022-01-01',
    updatedAt: '2022-01-01',
    title: 'University of Technology',
    description: {
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
            text: 'Studied advanced computer science topics, including algorithms, data structures, and machine learning.',
            type: 'text',
            version: 1,
          },
        ],
      },
    },
    educationLogo: {
      url: '/ufsc.jpg',
      id: 'sadas',
      createdAt: '2022-01-01',
      updatedAt: '2022-01-01',
    },
    url: 'https://university.tech',
    startDate: '2018-01-01',
    endDate: '2022-01-01',
    courseName: 'Computer Science',
  };

  it('renders the education details correctly', () => {
    const { container } = render(<EducationCard education={mockEducation} />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      /university of technology/i,
    );
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      /computer science/i,
    );

    // Verifica o intervalo de datas formatado
    expect(
      screen.getByText('Jan 2020 • Dec 2023 • (3 years)'),
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
