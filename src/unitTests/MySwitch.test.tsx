import { render, screen, fireEvent } from '@testing-library/react';
import MySwitch, { MySwitchProps } from '../components/Switch/MySwitch';

describe('MySwitch', () => {
  const mockOnClose = jest.fn();
  const defaultProps: MySwitchProps = {
    checked: false,
    onChange: mockOnClose,
  };

  beforeEach(() => {
    mockOnClose.mockClear();
  });

  test('renders with default props', () => {
    render(<MySwitch {...defaultProps} />);
    const switchElem = screen.getByTestId('switch');
    expect(switchElem).toBeInTheDocument();
    expect(switchElem).not.toHaveClass('checked');
  });

  test('handles onChange when clicked', () => {
    render(<MySwitch {...defaultProps} />);
    const switchElem = screen.getByTestId('switch');
    fireEvent.click(switchElem);
    expect(defaultProps.onChange).toHaveBeenCalledWith(true);
  });

  test('toggles checked state when clicked', () => {
    render(<MySwitch {...{ ...defaultProps, checked: true }} />);
    const switchElem = screen.getByTestId('switch');
    fireEvent.click(switchElem);
    expect(defaultProps.onChange).toHaveBeenCalledWith(false);
  });

  test('does not call onChange when disabled', () => {
    render(<MySwitch {...{ ...defaultProps, disabled: true }} />);
    const switchElem = screen.getByTestId('switch');
    fireEvent.click(switchElem);
    expect(defaultProps.onChange).not.toHaveBeenCalled();
  });

  test('renders with custom className', () => {
    render(<MySwitch {...{ ...defaultProps, className: 'custom-class' }} />);
    const switchElem = screen.getByTestId('switch');
    expect(switchElem).toHaveClass('custom-class');
  });

  test('adds disabled class when disabled', () => {
    render(<MySwitch {...{ ...defaultProps, disabled: true }} />);
    const switchElem = screen.getByTestId('switch');
    expect(switchElem).toHaveClass('disabled');
  });
});
