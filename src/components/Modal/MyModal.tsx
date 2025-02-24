import { FC, ReactNode } from 'react';
import styles from './MyModal.module.scss';

export interface MyModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

const MyModal: FC<MyModalProps> = ({ open, onClose, children }) => {
  return (
    <div
      data-testid="modal"
      className={`${styles.modal} ${open ? styles.open : ''}`}
      onClick={onClose}
    >
      <div className={styles.modalBody}>
        <div
          className={`${styles.modalContent} ${open ? styles.open : ''}`}
          onClick={e => e.stopPropagation()}
        >
          <button className={styles.closeBtn} onClick={onClose}>
            &times;
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

export default MyModal;
