import { FC, ReactNode } from 'react';
import styles from './MyButton.module.scss';

export interface MyButtonProps {
  color: string;
  big?: boolean;
  children: ReactNode;
}

const MyButton: FC<MyButtonProps> = ({ children, color, big, ...props }) => {
  const rootClasses = [styles.myButton];
  if (big) {
    rootClasses.push(styles.bigBtn);
  }

  return (
    <button {...props} className={rootClasses.join(' ')} style={{ color }}>
      {children}
    </button>
  );
};

export default MyButton;
