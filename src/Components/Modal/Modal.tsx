import styles from './Modal.module.css';
import {FC} from "react";
const Modal: FC<any> = ({ title, onRemove, onClose }) => {
    return (
        <div className={styles.modal} >
            <div className={styles.modalContent}>
                <h2>{ title }</h2>
                <button onClick={onRemove}>Ok</button>
                <button onClick={onClose}>Cancel</button>
            </div>
        </div>
    );
};

export default Modal;
