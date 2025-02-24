import { render, screen, fireEvent } from '@testing-library/react';
import MyInput, { MyInputProps } from '../components/Input/MyInput';

describe('MyInput', () => {
  const defaultProps: MyInputProps = {
    label: 'password',
    variant: 'outlined',
    error: false,
  };

  test('renders with default props', () => {
    render(<MyInput {...defaultProps} />);
    const input = screen.getByLabelText('password');
    const inputContainer = input.closest('div');
    expect(inputContainer).toBeInTheDocument();
    expect(inputContainer).toHaveClass('myInput outlined');
    expect(input).not.toBeDisabled();
  });

  test('renders with custom className', () => {
    render(<MyInput {...defaultProps} className="custom-class" />);
    const input = screen.getByLabelText('password');
    const inputContainer = input.closest('div');
    expect(inputContainer).toHaveClass('custom-class');
  });

  test('renders with error state', () => {
    render(<MyInput {...defaultProps} error helperText="Error message" />);
    const input = screen.getByLabelText('password');
    const inputContainer = input.closest('div');
    expect(input).toHaveClass('error');
    expect(inputContainer).toHaveClass('error');
    expect(screen.getByText('Error message')).toBeInTheDocument();
  });

  test('renders with variant "outlined"', () => {
    render(<MyInput {...defaultProps} variant="outlined" />);
    const input = screen.getByLabelText('password');
    const inputContainer = input.closest('div');
    expect(inputContainer).toHaveClass('outlined');
  });

  test('renders with variant "standard"', () => {
    render(<MyInput {...defaultProps} variant="standard" />);
    const input = screen.getByLabelText('password');
    const inputContainer = input.closest('div');
    expect(inputContainer).toHaveClass('standard');
  });

  test('renders with variant "filled"', () => {
    render(<MyInput {...defaultProps} variant="filled" />);
    const input = screen.getByLabelText('password');
    const inputContainer = input.closest('div');
    expect(inputContainer).toHaveClass('filled');
  });

  test('handles focus and blur events', () => {
    render(<MyInput {...defaultProps} />);
    const input = screen.getByLabelText('password');
    expect(screen.getByText('password')).not.toHaveClass('active');
    fireEvent.focus(input);
    expect(screen.getByText('password')).toHaveClass('active');
    fireEvent.blur(input);
    expect(screen.getByText('password')).not.toHaveClass('active');
  });

  test('updates value on change', () => {
    render(<MyInput {...defaultProps} />);
    const input = screen.getByLabelText('password') as HTMLInputElement;
    expect(input.value).toBe('');
    fireEvent.change(input, { target: { value: 'newValue' } });
    expect(input.value).toBe('newValue');
  });
});
