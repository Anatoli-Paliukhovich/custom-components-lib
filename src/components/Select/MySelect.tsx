import { FC, useState } from 'react';
import styles from './MySelect.module.scss';

export interface SelectInputProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: boolean;
  helperText?: string;
  label: string;
  className?: string;
}

const SelectInput: FC<SelectInputProps> = ({
  error = false,
  helperText,
  label,
  className,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
    setIsFocused(false);
  };

  const rootClasses = [styles.selectInput, className];
  const labelClasses = [
    styles.label,
    isFocused || selectedValue ? styles.active : '',
    error ? styles.error : '',
  ];
  const selectClasses = [styles.select, error ? styles.error : ''];
  const arrowClasses = [
    styles.arrow,
    isFocused ? styles.arrowUp : '',
    error ? styles.error : '',
  ];

  const selectId = `select-${label.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <div className={rootClasses.join(' ')}>
      <select
        id={selectId}
        {...props}
        className={selectClasses.join(' ')}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        value={selectedValue}
      >
        <option value="" />
        {props.children}
      </select>
      <label htmlFor={selectId} className={labelClasses.join(' ')}>
        {label}
      </label>
      <span className={arrowClasses.join(' ')} />
      {error && <span className={styles.helperText}>{helperText}</span>}
    </div>
  );
};

export default SelectInput;
