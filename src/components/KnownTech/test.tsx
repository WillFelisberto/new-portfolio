import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import KnownTech from '.';
import { FaReact } from 'react-icons/fa';

describe('<KnownTech />', () => {
  const mockTech = {
    name: 'React',
    icon: <FaReact data-testid="tech-icon" />,
  };

  it('renders the tech name', () => {
    const { container } = render(<KnownTech tech={mockTech} />);

    const nameElement = screen.getByText(mockTech.name);
    expect(nameElement).toBeInTheDocument();
    expect(nameElement).toHaveClass('font-medium');

    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders the tech icon', () => {
    render(<KnownTech tech={mockTech} />);

    const iconElement = screen.getByTestId('tech-icon');
    expect(iconElement).toBeInTheDocument();
  });
});
