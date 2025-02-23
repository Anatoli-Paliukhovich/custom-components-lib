import { render, screen } from '@testing-library/react';
import MyButton, { MyButtonProps } from '../components/Button/MyButton';

describe('MyButton', () => {
  const defaultProps: MyButtonProps = {
    children: 'Click me',
    variant: 'contained',
    size: 'medium',
  };

  it('renders with default props', () => {
    render(<MyButton {...defaultProps} />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Click me');
    expect(button).not.toBeDisabled();
    expect(button).toHaveClass('myButton contained medium');
  });

  it('renders with custom className', () => {
    render(<MyButton {...defaultProps} className="custom-class" />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('custom-class');
  });

  it('renders as disabled when disabled prop is true', () => {
    render(<MyButton {...defaultProps} disabled />);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveClass('disabled');
  });

  it('renders with variant "text"', () => {
    render(<MyButton {...defaultProps} variant="text" />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('text');
  });

  it('renders with variant "contained"', () => {
    render(<MyButton {...defaultProps} variant="contained" />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('contained');
  });

  it('renders with variant "outlined"', () => {
    render(<MyButton {...defaultProps} variant="outlined" />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('outlined');
  });

  it('renders with size "small"', () => {
    render(<MyButton {...defaultProps} size="small" />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('small');
  });

  it('renders with size "medium"', () => {
    render(<MyButton {...defaultProps} size="medium" />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('medium');
  });

  it('renders with size "large"', () => {
    render(<MyButton {...defaultProps} size="large" />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('large');
  });
});
