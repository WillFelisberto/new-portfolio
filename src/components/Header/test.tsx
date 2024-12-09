import { fireEvent, render, screen } from '@testing-library/react';
import { usePathname } from 'next/navigation';

import Header from '.';
import NavItem from './nav-item';

describe('<Header />', () => {
  it('renders navigation items', () => {
    const { container } = render(<Header />);

    const navItems = ['Home', 'Projects'];

    navItems.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });

    expect(container.firstChild).toMatchSnapshot();
  });
  it('renders the logo', () => {
    render(<Header />);

    const logo = screen.getByAltText('Logo');
    expect(logo).toBeInTheDocument();
  });

  it('renders the flag button', () => {
    render(<Header />);

    const flag = screen.getByAltText('United States Flag');
    expect(flag).toBeInTheDocument();
  });

  it('warns when flag button is clicked', () => {
    const consoleWarnMock = jest
      .spyOn(console, 'warn')
      .mockImplementation(() => {});

    render(<Header />);

    const flagButton = screen.getByRole('button');

    fireEvent.click(flagButton);

    expect(consoleWarnMock).toHaveBeenCalledWith(
      'Localization change functionality is no longer supported.',
    );

    consoleWarnMock.mockRestore();
  });
});

// Mock da função usePathname do Next.js
jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}));

describe('<NavItem />', () => {
  it('renders the label and link correctly', () => {
    // Mock para retornar um pathname qualquer
    (usePathname as jest.Mock).mockReturnValue('/');

    render(<NavItem label="Home" href="/" />);

    const link = screen.getByRole('link', { name: /home/i });

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/');
  });

  it('applies active class when pathname matches href', () => {
    // Mock para simular o pathname atual igual ao href
    (usePathname as jest.Mock).mockReturnValue('/projects');

    render(<NavItem label="Projects" href="/projects" />);

    const link = screen.getByRole('link', { name: /projects/i });

    expect(link).toHaveClass('text-gray-50');
  });

  it('does not apply active class when pathname does not match href', () => {
    // Mock para simular o pathname atual diferente do href
    (usePathname as jest.Mock).mockReturnValue('/about');

    render(<NavItem label="Home" href="/" />);

    const link = screen.getByRole('link', { name: /home/i });

    expect(link).not.toHaveClass('text-gray-50');
  });
});
