import { render } from '@testing-library/react';

import TechBadge from '.';

describe('<TechBadge />', () => {
  // Renders badge with provided name prop
  it('should render badge with provided name text', () => {
    const { container, getByText } = render(<TechBadge name="React" />);

    expect(getByText('React')).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render empty badge when name prop is empty string', () => {
    const { container } = render(<TechBadge name="" />);

    const badge = container.querySelector('span');
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveTextContent('');
  });
});
