import React from "react";
import styles from "./PersonalData.module.scss";

const Personal_Data = ({
  img,
  name,
  date_of_birth,
  city,
  sex,
  sex_logo,
  age,
  about,
  pet,
  pet_logo,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.photoContainer}>
        <img className={styles.photo} src={img} alt="Personal Photo" />
      </div>

      <div className={styles.form}>
        <div className={styles.firstRow}>
          <span className={styles.name}>{name}</span>
          <span className={styles.date}>{date_of_birth}</span>
        </div>
        <span className={styles.row}>
          <p>
            <span className={styles.bold}>Город: </span>
            {city}
          </p>
          <p>
            <span className={styles.bold}>Пол: </span>
            {sex}
          </p>
          <img className={styles.sex} src={sex_logo} alt="" />
          <p>
            <span className={styles.bold}>Возраст: </span>
            {age}
          </p>
        </span>
        <span>
          <span className={styles.bold}>О себе: </span>
          {about}
        </span>
        <span className={styles.row}>
          <img className={styles.pet} src={pet_logo} alt=""/>
          <p>
            <span className={styles.bold}>Домашнее животное: </span>
            {pet}
          </p>
        </span>
      </div>
    </div>
  );
};

export default Personal_Data;
