import { render, screen, fireEvent } from '@testing-library/react';
import MyModal, { MyModalProps } from '../components/Modal/MyModal';

describe('MyModal', () => {
  const mockOnClose = jest.fn();
  const defaultProps: MyModalProps = {
    open: false,
    onClose: mockOnClose,
    children: <div>Modal Content</div>,
  };

  beforeEach(() => {
    mockOnClose.mockClear();
  });

  test('does not render when open is false', () => {
    render(<MyModal {...defaultProps} />);
    const modal = screen.getByTestId('modal');
    expect(modal).toBeInTheDocument();
  });

  test('renders when open is true', () => {
    render(<MyModal {...{ ...defaultProps, open: true }} />);
    const modal = screen.getByTestId('modal');
    expect(modal).toBeInTheDocument();
    expect(modal).toHaveTextContent('Modal Content');
  });

  test('handles onClose when clicking outside the modal', () => {
    render(<MyModal {...{ ...defaultProps, open: true }} />);
    const modal = screen.getByTestId('modal');
    fireEvent.click(modal);
    expect(defaultProps.onClose).toHaveBeenCalledTimes(1);
  });

  test('does not call onClose when clicking inside the content', () => {
    render(<MyModal {...{ ...defaultProps, open: true }} />);
    const modalContent = screen.getByText('Modal Content');
    fireEvent.click(modalContent);
    expect(defaultProps.onClose).toHaveBeenCalledTimes(0);
  });

  test('handles onClose when clicking the close button', () => {
    render(<MyModal {...{ ...defaultProps, open: true }} />);
    const closeButton = screen.getByRole('button');
    fireEvent.click(closeButton);
    expect(defaultProps.onClose).toHaveBeenCalledTimes(1);
  });
});
