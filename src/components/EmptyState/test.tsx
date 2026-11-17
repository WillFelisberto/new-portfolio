import { render, screen } from '@testing-library/react';
import EmptyState from '.';

describe('<EmptyState />', () => {
  it('renders title, description and action', () => {
    render(
      <EmptyState
        title="Nothing here"
        description="Come back later"
        actionLabel="Go home"
        actionHref="/"
      />,
    );
    expect(screen.getByText('Nothing here')).toBeInTheDocument();
    expect(screen.getByText('Come back later')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /go home/i })).toHaveAttribute(
      'href',
      '/',
    );
  });

  it('omits the action when no link is given', () => {
    render(<EmptyState title="Nothing" description="Empty" />);
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });
});
