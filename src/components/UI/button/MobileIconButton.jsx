import React from "react";
import styles from "./MobileIconButton.module.scss";

const MobileIconButton = ({ name, img, onClick, disabled }) => {
  return (
    <button type={"button"} disabled={disabled} className={styles.button} onClick={onClick}>
      <img src={img}></img>
      <div className={styles.buttonText}>{name}</div>
    </button>
  );
};

export default MobileIconButton;
