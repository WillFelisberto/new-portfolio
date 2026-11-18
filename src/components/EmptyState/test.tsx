import { render, screen, fireEvent } from '@testing-library/react';
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

  it('triggers actionOnClick when provided', () => {
    const handleClick = jest.fn();
    render(
      <EmptyState
        title="No results"
        description="Try again"
        actionLabel="Reset"
        actionOnClick={handleClick}
      />,
    );
    const button = screen.getByRole('button', { name: /reset/i });
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
