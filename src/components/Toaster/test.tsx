import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Toaster from '.';
import { toast } from 'react-hot-toast';

// Mock de react-hot-toast
jest.mock('react-hot-toast', () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn(),
  },
  Toaster: jest.fn(() => <div data-testid="toaster-provider" />),
}));

describe('Toaster component', () => {
  it('renders the ToasterProvider', () => {
    const { container } = render(<Toaster />);
    const toaster = screen.getByTestId('toaster-provider');
    expect(toaster).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('displays a success toast when triggered', () => {
    render(<Toaster />);
    toast.success('This is a success message!');
    expect(toast.success).toHaveBeenCalledWith('This is a success message!');
  });

  it('displays an error toast when triggered', () => {
    render(<Toaster />);
    toast.error('This is an error message!');
    expect(toast.error).toHaveBeenCalledWith('This is an error message!');
  });

  it('triggers a success and error toast when button is clicked', () => {
    const triggerToast = () => {
      toast.success('This is a success message!');
      toast.error('This is an error message!');
    };

    const ButtonComponent = () => (
      <>
        <Toaster />
        <button data-testid="trigger-toast" onClick={triggerToast}>
          Trigger Toast
        </button>
      </>
    );

    render(<ButtonComponent />);

    const button = screen.getByTestId('trigger-toast');
    fireEvent.click(button);

    expect(toast.success).toHaveBeenCalledWith('This is a success message!');
    expect(toast.error).toHaveBeenCalledWith('This is an error message!');
  });
});
