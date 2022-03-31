import React from 'react'
import styles from './Success.module.scss'

const Success = (props) => {
  return (
    <div className={styles.container}>
        <div className={styles.icons}>
        <div className={styles.iconSign}>
         <img src={process.env.PUBLIC_URL + "/assets/icons/success.svg"} alt="" />
        </div>
        <div className={styles.iconBubbles}>
          <img src={process.env.PUBLIC_URL + "/assets/icons/greenbubbles.svg"} alt="" />
        </div>
        </div>
        <div className={styles.column}>
        <div className={styles.header}>
            <span>
            Успешно!
            </span>
        </div>
        <div className={styles.text}>
            <span>
            Спасибо за отзыв о нашей компании :)
            </span>
        </div>
        </div>
    </div>
  )
}

export default Success