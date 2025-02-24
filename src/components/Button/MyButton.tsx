import { FC, ReactNode } from 'react';
import styles from './MyButton.module.scss';

export type Variant = 'text' | 'contained' | 'outlined';
export type Size = 'small' | 'medium' | 'large';

export interface MyButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  size?: Size;
  variant?: Variant;
  className?: string;
  disabled?: boolean;
}

const MyButton: FC<MyButtonProps> = ({
  children,
  size = 'medium',
  variant = 'contained',
  disabled = false,
  className,
  ...props
}) => {
  const rootClasses = [styles.myButton, styles[variant], styles[size]];

  if (disabled) {
    rootClasses.push(styles.disabled);
  }

  if (className) {
    rootClasses.push(className);
  }

  return (
    <button {...props} className={rootClasses.join(' ')} disabled={disabled}>
      {children}
    </button>
  );
};

export default MyButton;
