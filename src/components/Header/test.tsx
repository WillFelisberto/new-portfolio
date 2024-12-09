import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header, { HeaderProps } from '.';

jest.mock('./google-analytics', () => ({
  GoogleAnalytics: () => <div data-testid="google-analytics" />,
}));

jest.mock('./nav-item', () => {
  const MockNavItem = ({ label, href }: { label: string; href: string }) => (
    <a href={href} data-testid={`nav-item-${label}`}>
      {label}
    </a>
  );

  // Definindo a displayName
  MockNavItem.displayName = 'NavItem';

  return MockNavItem;
});

describe('Header component', () => {
  const defaultNavItems = [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
  ];

  it('renders the logo', () => {
    const { container } = render(<Header />);
    const logo = screen.getByAltText('Logo');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', '/images/logo.svg');

    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders the Google Analytics component', () => {
    render(<Header />);
    const googleAnalytics = screen.getByTestId('google-analytics');
    expect(googleAnalytics).toBeInTheDocument();
  });

  it('renders the navigation items by default', () => {
    render(<Header />);
    defaultNavItems.forEach(({ label }) => {
      const navItem = screen.getByTestId(`nav-item-${label}`);
      expect(navItem).toBeInTheDocument();
      expect(navItem).toHaveTextContent(label);
    });
  });

  it('renders custom navigation items when provided', () => {
    const customNavItems: HeaderProps['navItems'] = [
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ];
    render(<Header navItems={customNavItems} />);
    customNavItems.forEach(({ label }) => {
      const navItem = screen.getByTestId(`nav-item-${label}`);
      expect(navItem).toBeInTheDocument();
      expect(navItem).toHaveTextContent(label);
    });
  });

  it('does not render default navigation items when custom items are provided', () => {
    const customNavItems: HeaderProps['navItems'] = [
      { label: 'About', href: '/about' },
    ];
    render(<Header navItems={customNavItems} />);
    defaultNavItems.forEach(({ label }) => {
      const navItem = screen.queryByTestId(`nav-item-${label}`);
      expect(navItem).not.toBeInTheDocument();
    });
  });
});
