import styles from './Modal.module.css';
import {FC} from "react";
const Modal: FC<any> = ({ title, onRemove, setIsModal }) => {
    const onClose = () => {
        setIsModal(false);
    };

    return (
        <div className={styles.modal}>
            <div className={styles.modalOverlay} onClick={onClose}></div>
            <div className={styles.modalContent}>
                <h2 className={styles.title}>{ title }</h2>
                <div className={styles.footer}>
                    <button className={styles.buttonCancel} onClick={onClose}>Cancel</button>
                    <button className={styles.buttonOk} onClick={onRemove}>Ok</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
