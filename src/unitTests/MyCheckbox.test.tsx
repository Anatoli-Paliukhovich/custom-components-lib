import { render, screen, fireEvent } from '@testing-library/react';
import Checkbox, { CheckboxProps } from '../components/Checkbox/MyCheckbox';

describe('Checkbox', () => {
  const defaultProps: CheckboxProps = {
    label: 'Example text',
    variant: 'basic',
  };

  test('renders with default props', () => {
    render(<Checkbox {...defaultProps} />);
    const checkbox = screen.getByRole('checkbox');
    const label = screen.getByText('Example text');
    expect(checkbox).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(checkbox).not.toBeDisabled();
    expect(checkbox).toHaveClass('checkbox basic');
  });

  test('renders with custom className', () => {
    render(<Checkbox {...defaultProps} className="custom-class" />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveClass('custom-class');
  });

  test('renders with "disabled"', () => {
    render(<Checkbox {...defaultProps} variant="disabled" />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveClass('disabled');
  });

  test('handles onChange event handler when clicked', () => {
    const handleChange = jest.fn();
    render(<Checkbox {...defaultProps} onChange={handleChange} />);
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test('checks the checkbox when clicked', () => {
    render(<Checkbox {...defaultProps} />);
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });

  test('unchecks the checkbox when clicked 2 times', () => {
    render(<Checkbox {...defaultProps} />);
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });
});
