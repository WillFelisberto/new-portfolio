import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContactForm from '.';
import axios from 'axios';
import { toast } from 'react-hot-toast';

jest.mock('axios');
jest.mock('react-hot-toast', () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn(),
  },
}));

jest.mock('../SectionTitle', () => {
  const SectionTitleMock = ({
    title,
    subtitle,
  }: {
    title: string;
    subtitle: string;
  }) => (
    <div>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  );

  SectionTitleMock.displayName = 'SectionTitleMock';

  return SectionTitleMock;
});

describe('<ContactForm />', () => {
  const mockArgs = {
    title: 'Contact Us',
    subtitle: 'We would love to hear from you',
    button: 'Send Message',
    labelName: 'Your Name',
    LabelMensagem: 'Your Message',
    successMessage: 'Message sent successfully!',
    errorMessage: 'Failed to send the message. Please try again later.',
  };

  it('renders the form fields and button after animation', async () => {
    const { container } = render(<ContactForm {...mockArgs} />);

    // Aguarda a animação ser aplicada e o formulário aparecer
    await waitFor(() => {
      expect(
        screen.getByPlaceholderText(mockArgs.labelName),
      ).toBeInTheDocument();
      expect(screen.getByPlaceholderText('E-mail')).toBeInTheDocument();
      expect(
        screen.getByPlaceholderText(mockArgs.LabelMensagem),
      ).toBeInTheDocument();
      expect(screen.getByText(mockArgs.button)).toBeInTheDocument();
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  it('submits the form successfully and shows a success message', async () => {
    (axios.post as jest.Mock).mockResolvedValueOnce({});

    render(<ContactForm {...mockArgs} />);

    fireEvent.change(screen.getByPlaceholderText(mockArgs.labelName), {
      target: { value: 'John Doe' },
    });
    fireEvent.change(screen.getByPlaceholderText('E-mail'), {
      target: { value: 'john.doe@example.com' },
    });
    fireEvent.change(screen.getByPlaceholderText(mockArgs.LabelMensagem), {
      target: { value: 'Hello, this is a test message!' },
    });

    fireEvent.click(screen.getByText(mockArgs.button));

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith('/api/contact', {
        name: 'John Doe',
        email: 'john.doe@example.com',
        message: 'Hello, this is a test message!',
      });
      expect(toast.success).toHaveBeenCalledWith(mockArgs.successMessage);
    });
  });

  it('shows an error message when the form submission fails', async () => {
    (axios.post as jest.Mock).mockRejectedValueOnce(
      new Error('Failed to send'),
    );

    render(<ContactForm {...mockArgs} />);

    fireEvent.change(screen.getByPlaceholderText(mockArgs.labelName), {
      target: { value: 'John Doe' },
    });
    fireEvent.change(screen.getByPlaceholderText('E-mail'), {
      target: { value: 'john.doe@example.com' },
    });
    fireEvent.change(screen.getByPlaceholderText(mockArgs.LabelMensagem), {
      target: { value: 'Hello, this is a test message!' },
    });

    fireEvent.click(screen.getByText(mockArgs.button));

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith('/api/contact', {
        name: 'John Doe',
        email: 'john.doe@example.com',
        message: 'Hello, this is a test message!',
      });
      expect(toast.error).toHaveBeenCalledWith(mockArgs.errorMessage);
    });
  });
});
