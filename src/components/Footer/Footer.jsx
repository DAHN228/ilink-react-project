import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.container}>
      <span>© iLINK ACADEMY. ALL RIGHTS RESERVED. 2022</span>
      <div className={styles.contacts}>
        <div>
          <a href="">
            <img src={process.env.PUBLIC_URL + "/assets/icons/facebook.svg"} alt="" />
          </a>
        </div>

        <div>
          <a href="">
            <img src={process.env.PUBLIC_URL + "/assets/icons/reddit.svg"} alt="" />
          </a>
        </div>

        <div>
          <a href="">
            <img src={process.env.PUBLIC_URL + "/assets/icons/telegram.svg"} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
