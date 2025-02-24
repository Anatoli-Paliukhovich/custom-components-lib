import { render, screen, fireEvent } from '@testing-library/react';
import MySelect, { SelectInputProps } from '../components/Select/MySelect';

describe('MySelect', () => {
  const defaultProps: SelectInputProps = {
    label: 'Select age',
    error: false,
    helperText: 'Need some help?',
  };

  test('renders with default props', () => {
    render(<MySelect {...defaultProps} />);
    const select = screen.getByLabelText('Select age');
    const selectContainer = select.closest('div');
    expect(selectContainer).toBeInTheDocument();
    expect(selectContainer).toHaveClass('selectInput');
  });

  test('renders with custom className', () => {
    render(<MySelect {...defaultProps} className="custom-class" />);
    const select = screen.getByLabelText('Select age');
    const selectContainer = select.closest('div');
    expect(selectContainer).toHaveClass('custom-class');
  });

  test('renders with error state', () => {
    render(<MySelect {...defaultProps} error helperText="Error message" />);
    const select = screen.getByLabelText('Select age');
    expect(select).toHaveClass('error');
    expect(screen.getByText('Error message')).toBeInTheDocument();
  });

  test('handles focus and blur events', () => {
    render(<MySelect {...defaultProps} />);
    const select = screen.getByLabelText('Select age');
    const label = screen.getByText('Select age');
    expect(label).not.toHaveClass('active');
    fireEvent.focus(select);
    expect(label).toHaveClass('active');
    fireEvent.blur(select);
    expect(label).not.toHaveClass('active');
  });

  test('keeps label active after value selection', () => {
    render(
      <MySelect {...defaultProps}>
        <option value="34">34</option>
      </MySelect>
    );
    const select = screen.getByLabelText('Select age');
    const label = screen.getByText('Select age');
    fireEvent.change(select, { target: { value: '34' } });
    fireEvent.blur(select);
    expect(label).toHaveClass('active');
  });

  test('updates value when changed', () => {
    render(
      <MySelect {...defaultProps}>
        <option value="34">34</option>
      </MySelect>
    );
    const select = screen.getByLabelText('Select age') as HTMLSelectElement;
    fireEvent.change(select, { target: { value: '34' } });
    expect(select.value).toBe('34');
  });

  test('displays helper text when error is true', () => {
    const { rerender } = render(<MySelect {...defaultProps} />);
    expect(screen.queryByText('Need some help?')).not.toBeInTheDocument();
    rerender(<MySelect {...defaultProps} error />);
    expect(screen.getByText('Need some help?')).toBeInTheDocument();
  });

  test('renders options', () => {
    render(
      <MySelect {...defaultProps}>
        <option value="Anatoli">Anatoli</option>
        <option value="Anna">Anna</option>
      </MySelect>
    );
    const options = screen.getAllByRole('option');
    expect(options).toHaveLength(3);
    expect(options[1]).toHaveValue('Anatoli');
    expect(options[2]).toHaveValue('Anna');
  });
});
