import React from "react";
import styles from "./Modal.module.scss";

const Modal = ({ children, active, setActive }) => {

  const rootClasses = [styles.modal]


  if (active) {
    rootClasses.push(styles.active)
  }

  return (
    <div className={rootClasses.join(" ")} onClick={() => setActive(false)}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>{children}</div>
    </div>
  );
};

export default Modal;
