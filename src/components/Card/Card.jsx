import React from "react";
import styles from "./Card.module.scss";

const Card = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.rowStart}>
          <img src={props.img} alt="" />
          <span className={styles.name}>{props.name}</span>
        </div>
        <span className={styles.date}>{props.date}</span>
      </div>
      <span className={styles.text}>{props.text}</span>
    </div>
  );
};

export default Card;
