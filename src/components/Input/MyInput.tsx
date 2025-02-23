import { FC, useState } from 'react';
import styles from './MyInput.module.scss';

export type Variant = 'outlined' | 'standard' | 'filled';

export interface MyInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  helperText?: string;
  variant?: Variant;
  label: string;
  className?: string;
}

const MyInput: FC<MyInputProps> = ({
  error = false,
  helperText,
  variant = 'outlined',
  label,
  className,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    if (!inputValue) {
      setIsFocused(false);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const rootClasses = [styles.myInput, styles[variant], className];
  const labelClasses = [
    styles.label,
    isFocused || inputValue ? styles.active : '',
    error ? styles.error : '',
  ];
  const inputClasses = [styles.input, error ? styles.error : ''];

  return (
    <div className={rootClasses.join(' ')}>
      <input
        {...props}
        className={inputClasses.join(' ')}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        value={inputValue}
      />
      <label className={labelClasses.join(' ')}>{label}</label>
      {error && <span className={styles.helperText}>{helperText}</span>}
    </div>
  );
};

export default MyInput;
