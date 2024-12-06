import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '.';

describe('<Button />', () => {
  it('should render the button with the correct text', () => {
    const { container } = render(<Button>Click me!</Button>);
    const button = screen.getByRole('button', { name: /click me!/i });
    expect(button).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should apply default styles', () => {
    render(<Button>Click me!</Button>);
    const button = screen.getByRole('button', { name: /click me!/i });
    expect(button).toHaveClass(
      'flex items-center justify-center gap-2 rounded-lg bg-sky-600 px-4 py-3 text-gray-50 transition-all hover:bg-sky-500 disabled:opacity-50',
    );
  });

  it('should accept and apply custom class names', () => {
    render(<Button className="custom-class">Click me!</Button>);
    const button = screen.getByRole('button', { name: /click me!/i });
    expect(button).toHaveClass('custom-class');
  });

  it('should be clickable and call the onClick handler', async () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me!</Button>);
    const button = screen.getByRole('button', { name: /click me!/i });

    await userEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should render as disabled when disabled prop is passed', () => {
    render(<Button disabled>Click me!</Button>);
    const button = screen.getByRole('button', { name: /click me!/i });
    expect(button).toBeDisabled();
    expect(button).toHaveClass('disabled:opacity-50');
  });

  it('should not call onClick when disabled', async () => {
    const handleClick = jest.fn();
    render(
      <Button onClick={handleClick} disabled>
        Click me!
      </Button>,
    );
    const button = screen.getByRole('button', { name: /click me!/i });

    await userEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('should render children correctly', () => {
    render(
      <Button>
        <span>Child Text</span>
      </Button>,
    );
    const childText = screen.getByText(/child text/i);
    expect(childText).toBeInTheDocument();
  });
});
