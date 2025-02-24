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
  const checkboxId = `checkbox-${label.replace(/\s+/g, '-').toLowerCase()}`;
  const checkboxClasses = [styles.checkbox, styles[variant], className];

  return (
    <div className={styles.checkboxContainer}>
      <input
        type="checkbox"
        id={checkboxId}
        className={checkboxClasses.join(' ')}
        {...props}
      />
      <label htmlFor={checkboxId} className={styles.label}>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
