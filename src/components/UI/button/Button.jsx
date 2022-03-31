import React from "react";
import styles from "./Button.module.scss";

const Button = ({ name, onClick, disabled}) => {
  return (
    <button type={"button"} disabled={disabled} className={styles.button} onClick={onClick}>
        <div className={styles.buttonText}>{name}</div>
    </button>
  );
};

export default Button;
