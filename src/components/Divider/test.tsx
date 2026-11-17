import { render } from '@testing-library/react';

import Divider from '.';

describe('<Divider />', () => {
  // Renders divider with default styling classes
  it('should render with default styling classes when no className prop is provided', () => {
    const { container } = render(<Divider />);

    const divider = container.firstChild;

    expect(divider).toHaveClass('my-8', 'w-full', 'border-b', 'border-dashed');

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly when className prop is undefined', () => {
    const { container } = render(<Divider className={undefined} />);

    const divider = container.firstChild;

    expect(divider).toHaveClass('my-8', 'w-full', 'border-b', 'border-dashed');
    expect(divider).not.toHaveClass('undefined');
  });
});
