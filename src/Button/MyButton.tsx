import { FC, ReactNode } from 'react';
import styles from './MyButton.module.scss';

export interface MyButtonProps {
  color: string;
  big?: boolean;
  children: ReactNode;
}

const MyButton: FC<MyButtonProps> = ({ children, color, big, ...props }) => {
  const rootClasses = [styles.myButton]; // Используем styles.myButton вместо строки
  if (big) {
    rootClasses.push(styles.bigBtn); // Используем styles.bigBtn вместо строки
  }

  return (
    <button {...props} className={rootClasses.join(' ')} style={{ color }}>
      {children}
    </button>
  );
};

export default MyButton;
