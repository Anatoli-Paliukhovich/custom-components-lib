import { render, screen, fireEvent } from '@testing-library/react';
import MyButton, { MyButtonProps } from '../components/Button/MyButton';

describe('MyButton', () => {
  const defaultProps: MyButtonProps = {
    children: 'Click me',
    variant: 'contained',
    size: 'medium',
  };

  test('renders with default props', () => {
    render(<MyButton {...defaultProps} />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Click me');
    expect(button).not.toBeDisabled();
    expect(button).toHaveClass('myButton contained medium');
  });

  test('renders with custom className', () => {
    render(<MyButton {...defaultProps} className="custom-class" />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('custom-class');
  });

  test('renders as disabled when disabled prop is true', () => {
    render(<MyButton {...defaultProps} disabled />);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveClass('disabled');
  });

  test('renders with variant "text"', () => {
    render(<MyButton {...defaultProps} variant="text" />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('text');
  });

  test('renders with variant "contained"', () => {
    render(<MyButton {...defaultProps} variant="contained" />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('contained');
  });

  test('renders with variant "outlined"', () => {
    render(<MyButton {...defaultProps} variant="outlined" />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('outlined');
  });

  test('renders with size "small"', () => {
    render(<MyButton {...defaultProps} size="small" />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('small');
  });

  test('renders with size "medium"', () => {
    render(<MyButton {...defaultProps} size="medium" />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('medium');
  });

  test('renders with size "large"', () => {
    render(<MyButton {...defaultProps} size="large" />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('large');
  });

  test('handles onClick event handler when clicked', () => {
    const handleClick = jest.fn();
    render(<MyButton {...defaultProps} onClick={handleClick} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
