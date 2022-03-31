import React from "react";
import styles from "./IconButton.module.scss";

const IconButton = ({ name, img, onClick, disabled }) => {
  return (
    <button type={"button"} disabled={disabled} className={styles.button} onClick={onClick}>
      <img src={img}></img>
      <div className={styles.buttonText}>{name}</div>
    </button>
  );
};

export default IconButton;
