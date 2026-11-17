/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SectionTitle from '.';

jest.mock('framer-motion', () => ({
  motion: {
    span: ({ children, ...props }: any) => <span {...props}>{children}</span>,
    h3: ({ children, ...props }: any) => <h3 {...props}>{children}</h3>,
  },
}));

describe('<SectionTitle />', () => {
  it('renders the title and subtitle with default styles', () => {
    const { container } = render(
      <SectionTitle title="Test Title" subtitle="Test Subtitle" />,
    );

    const subtitleElement = screen.getByText('../Test Subtitle');
    const titleElement = screen.getByRole('heading', { name: 'Test Title' });

    // Verifica se os textos estão na tela
    expect(subtitleElement).toBeInTheDocument();
    expect(titleElement).toBeInTheDocument();

    // Verifica classes padrão
    expect(subtitleElement).toHaveClass('label-mono text-coral');
    expect(titleElement).toHaveClass('text-4xl font-extrabold');

    expect(container).toMatchSnapshot();
  });

  it('applies additional className to the container', () => {
    render(
      <SectionTitle
        title="Test Title"
        subtitle="Test Subtitle"
        className="extra-class"
      />,
    );

    const container = screen
      .getByRole('heading', { name: 'Test Title' })
      .closest('div');
    expect(container).toHaveClass('extra-class');
  });

  it('highlights the last word as a chip by default', () => {
    render(<SectionTitle title="Test Title" subtitle="x" />);
    expect(screen.getByText('Title')).toHaveClass('chip-hl');
  });

  it('highlights a custom word', () => {
    render(
      <SectionTitle title="Big Test Title" subtitle="x" highlight="Test" />,
    );
    expect(screen.getByText('Test')).toHaveClass('chip-hl');
  });

  it('renders the motion props for animation', () => {
    render(<SectionTitle title="Test Title" subtitle="Test Subtitle" />);

    const subtitleElement = screen.getByText('../Test Subtitle');
    const titleElement = screen.getByRole('heading', { name: 'Test Title' });

    // Verifica se os atributos de animação estão aplicados
    expect(subtitleElement).toHaveAttribute('initial', expect.anything());
    expect(titleElement).toHaveAttribute('whileinview', expect.anything());
  });
});
