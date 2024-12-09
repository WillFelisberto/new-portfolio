import { render, screen } from '@testing-library/react';

import Footer from '.';

describe('<Footer />', () => {
  it('should render footer with provided text props', () => {
    const textFooterMade = 'Made with';
    const textFooterBy = 'by';

    const { container } = render(
      <Footer textFooterMade={textFooterMade} textFooterBy={textFooterBy} />,
    );

    expect(screen.getByText(/Made with/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Heart icon/i)).toBeInTheDocument();
    expect(screen.getByText(/by/i)).toBeInTheDocument();
    expect(screen.getByText(/Willian Souza/i)).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render footer when textFooterMade is empty', () => {
    const textFooterMade = '';
    const textFooterBy = 'by';

    render(
      <Footer textFooterMade={textFooterMade} textFooterBy={textFooterBy} />,
    );

    expect(screen.getByLabelText(/Heart icon/i)).toBeInTheDocument();
    expect(screen.getByText(/by/i)).toBeInTheDocument();
    expect(screen.getByText(/Willian Souza/i)).toBeInTheDocument();
  });
});
