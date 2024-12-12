import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import EducationCard, { Education } from '.';
import { CardItemProps } from '../CardItem';

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

jest.mock('@/lib/utils', () => ({
  formatDateRange: jest.fn(() => ({
    formattedStartDate: 'Jan 2020',
    formattedEndDate: 'Dec 2023',
    formattedDuration: '3 years',
  })),
}));

describe('<EducationCard />', () => {
  const mockEducation: Education = {
    title: 'Bachelor of Science',
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
              text: 'Studied advanced computer science topics, including algorithms, data structures, and machine learning.',
              type: 'text',
              version: 1,
            },
          ],
        },
      },
    },
    educationLogo: {
      url: '/path/to/logo.png',
    },
    url: 'https://university.edu',
    startDate: '2020-01-01',
    endDate: '2023-12-31',
    courseName: 'Information Technology',
  };

  it('renders the education details correctly', () => {
    const { container } = render(<EducationCard education={mockEducation} />);

    // Verifica se os dados do curso e instituição estão sendo renderizados
    expect(screen.getByText(/Information Technology/i)).toBeInTheDocument();
    expect(screen.getByText(/Bachelor of Science/i)).toBeInTheDocument();

    // Verifica o intervalo de datas formatado
    expect(
      screen.getByText('Jan 2020 • Dec 2023 • (3 years)'),
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
