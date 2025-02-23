import { FC } from 'react';
import styles from './MySwitch.module.scss';

export interface MySwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
}

const MySwitch: FC<MySwitchProps> = ({
  checked,
  onChange,
  disabled = false,
  className = '',
}) => {
  const handleToggle = () => {
    if (!disabled) {
      onChange(!checked);
    }
  };
  const rootClasses = [styles.switchContainer, className];
  if (disabled) {
    rootClasses.push(styles.disabled);
  }

  return (
    <div className={rootClasses.join(' ')} onClick={handleToggle}>
      <div className={`${styles.switch} ${checked ? styles.checked : ''}`}>
        <div
          className={`${styles.circle} ${checked ? styles.checkedCircle : ''}`}
        />
      </div>
    </div>
  );
};

export default MySwitch;
