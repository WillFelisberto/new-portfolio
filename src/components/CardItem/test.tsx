import { render } from '@testing-library/react';

import CardItem from '.';

describe('<CardItem />', () => {
  const mockProps = {
    logoUrl: '/path/to/logo.png',
    logoAlt: 'Example Logo',
    title: 'Example Title',
    subtitle: 'Example Subtitle',
    dateRange: 'Jan 2020 • Dec 2023 • (3 years)',
    description: 'description',
    linkUrl: 'https://example.com',
    linkText: 'Example Link',
    additionalContent: <div>Additional Content</div>,
  };
  it('should render card with all required props correctly', () => {
    const { getByText, getByLabelText, getByAltText, container } = render(
      <CardItem {...mockProps} />,
    );

    expect(getByAltText(/Example Logo/i)).toBeInTheDocument();
    expect(getByText(/Example Title/i)).toBeInTheDocument();
    expect(getByLabelText(/Example Link/i)).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
