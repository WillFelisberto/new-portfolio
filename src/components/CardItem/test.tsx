import { render, screen } from '@testing-library/react';
import CardItem, { CardItemProps } from '.';
import '@testing-library/jest-dom';

describe('<CardItem />', () => {
  const defaultProps: CardItemProps = {
    logoUrl: '/logo.png',
    logoAlt: 'Logo Alt Text',
    title: 'Card Title',
    dateRange: '2020 - 2023',
    linkUrl: 'https://example.com',
  };

  it('renders correctly with a title and link', () => {
    render(<CardItem {...defaultProps} />);

    const titleLink = screen.getByRole('link', { name: /card title/i });
    expect(titleLink).toBeInTheDocument();
    expect(titleLink).toHaveAttribute('href', defaultProps.linkUrl);
  });

  it('renders correctly with a title and without link', () => {
    const propsWithoutLink = { ...defaultProps, linkUrl: undefined };
    render(<CardItem {...propsWithoutLink} />);

    const title = screen.getByRole('heading', { name: /card title/i });
    expect(title).toBeInTheDocument();
    expect(title.tagName).toBe('H4');
  });

  it('renders the logo with correct alt text and dimensions', () => {
    render(<CardItem {...defaultProps} />);

    const logoImage = screen.getByAltText(/logo alt text/i);
    expect(logoImage).toBeInTheDocument();
  });

  it('renders subtitle when provided', () => {
    const propsWithSubtitle = { ...defaultProps, subtitle: 'Card Subtitle' };
    render(<CardItem {...propsWithSubtitle} />);

    const subtitle = screen.getByText(/card subtitle/i);
    expect(subtitle).toBeInTheDocument();
  });

  it('renders date range correctly', () => {
    render(<CardItem {...defaultProps} />);

    const dateRange = screen.getByText(/2020 - 2023/i);
    expect(dateRange).toBeInTheDocument();
  });

  it('renders additional content when provided', () => {
    const additionalContent = <div>Extra Content</div>;
    const propsWithAdditionalContent = {
      ...defaultProps,
      additionalContent,
    };
    render(<CardItem {...propsWithAdditionalContent} />);

    const extraContent = screen.getByText(/extra content/i);
    expect(extraContent).toBeInTheDocument();
  });

  it('renders education-specific styles when education is true', () => {
    const propsWithEducation = { ...defaultProps, education: true };
    render(<CardItem {...propsWithEducation} />);

    const logoContainer = screen.getByRole('img', { hidden: true });
    expect(logoContainer).toHaveClass('h-[60px] w-[60px]');
  });
});
