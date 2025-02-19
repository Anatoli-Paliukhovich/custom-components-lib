import { FC } from 'react';
import styles from './MyCheckbox.module.scss';

export type CheckboxVariant = 'basic' | 'disabled';
export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  variant?: CheckboxVariant;
  className?: string;
}

const Checkbox: FC<CheckboxProps> = ({
  label,
  variant = 'basic',
  className,
  ...props
}) => {
  const checkboxClasses = [styles.checkbox, styles[variant], className];

  return (
    <div className={styles.checkboxContainer}>
      <input type="checkbox" className={checkboxClasses.join(' ')} {...props} />
      <label className={styles.label}>{label}</label>
    </div>
  );
};

export default Checkbox;
