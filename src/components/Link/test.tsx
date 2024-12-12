import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Link from '.';

describe('<Link />', () => {
  it('renders correctly with default props', () => {
    const { container } = render(
      <Link href="https://example.com">Default Link</Link>,
    );

    const link = screen.getByRole('link', { name: /default link/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://example.com');
    expect(link).toHaveClass(
      'flex items-center gap-2 text-sm text-gray-300 transition-colors hover:text-sky-500',
    );

    expect(container).toMatchSnapshot();
  });

  it('applies custom class names', () => {
    render(
      <Link href="https://example.com" className="custom-class">
        Custom Class Link
      </Link>,
    );

    const link = screen.getByRole('link', { name: /custom class link/i });
    expect(link).toHaveClass('custom-class');
  });

  it('renders children content', () => {
    render(<Link href="https://example.com">Child Content</Link>);

    const link = screen.getByRole('link', { name: /child content/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveTextContent('Child Content');
  });
});
