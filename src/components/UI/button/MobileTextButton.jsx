import React from "react";
import styles from "./MobileTextButton.module.scss";

const MobileTextButton = ({ name, onClick, disabled}) => {
  return (
    <button type={"button"} disabled={disabled} className={styles.button} onClick={onClick}>
        <div className={styles.buttonText}>{name}</div>
    </button>
  );
};

export default MobileTextButton;
