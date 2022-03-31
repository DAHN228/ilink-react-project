import React from "react";
import styles from "./Header.module.scss";
import Button from "../UI/button/Button";
import MobileButton from "../UI/button/MobileButton";

const Header = ({ name, img }) => {
  const windowWidth = window.innerWidth
  return (
    <div className={styles.header}>
      <div className={styles.personData}>
        <div className={styles.personAvatarContainer}>
          <img
            className={styles.personAvatar}
            src={img}
            alt="Аватар пользователя"
          />
        </div>
        <span className={styles.personName}>{name}</span>
      </div>

      <div className={styles.logo}>
        <img src={process.env.PUBLIC_URL + "/assets/logo/ilink.svg"} alt="" />
        <img src={process.env.PUBLIC_URL + "/assets/logo/academy.svg"} alt="" />
      </div>
      <div>
        {
        windowWidth <= 320
        ? <MobileButton img={process.env.PUBLIC_URL + "/assets/icons/profile.svg"}/>
        : <Button name={"Панель управления"}/>
        }
        
      </div>
    </div>
  );
};

export default Header;
