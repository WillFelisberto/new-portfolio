import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import BackToTop from '.';

describe('BackToTop component', () => {
  beforeEach(() => {
    // Mockando o scrollY e o scrollTo
    Object.defineProperty(window, 'scrollY', {
      writable: true,
      configurable: true,
      value: 0,
    });

    Object.defineProperty(window, 'scrollTo', {
      writable: true,
      value: jest.fn(),
    });
  });

  const triggerScroll = (scrollValue: number) => {
    Object.defineProperty(window, 'scrollY', { value: scrollValue });
    fireEvent.scroll(window); // Dispara o evento de rolagem
  };

  it('should render the BackToTop component', () => {
    const { container } = render(<BackToTop />);
    triggerScroll(600); // Simula um scrollY > 500

    expect(
      screen.getByRole('button', { name: /back to top/i }),
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('does not render the button when scrollY is less than 500', () => {
    render(<BackToTop />);
    expect(
      screen.queryByRole('button', { name: /back to top/i }),
    ).not.toBeInTheDocument();
  });

  it('renders the button when scrollY is greater than 500', () => {
    render(<BackToTop />);
    triggerScroll(600); // Simula um scrollY > 500
    expect(
      screen.getByRole('button', { name: /back to top/i }),
    ).toBeInTheDocument();
  });

  it('hides the button when scrollY is less than or equal to 500 after being shown', async () => {
    render(<BackToTop />);
    triggerScroll(600); // Mostra o botão

    // Aguarda a exibição do botão
    await waitFor(() => {
      expect(
        screen.getByRole('button', { name: /back to top/i }),
      ).toBeInTheDocument();
    });

    triggerScroll(400); // Esconde o botão

    // Aguarda a remoção do botão
    await waitFor(() => {
      expect(
        screen.queryByRole('button', { name: /back to top/i }),
      ).not.toBeInTheDocument();
    });
  });

  it('scrolls to the top when the button is clicked', () => {
    render(<BackToTop />);
    triggerScroll(600); // Mostra o botão
    const button = screen.getByRole('button', { name: /back to top/i });
    fireEvent.click(button);
    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: 'smooth',
    });
  });
});
