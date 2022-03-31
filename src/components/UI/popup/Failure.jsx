import React from 'react'
import styles from './Failure.module.scss'

const Failure = (props) => {
  return (
    <div className={styles.container}>
        <div className={styles.icons}>
        <div className={styles.iconSign}>
         <img src={process.env.PUBLIC_URL + "/assets/icons/fail.svg"} alt="" />
        </div>
        <div className={styles.iconBubbles}>
          <img src={process.env.PUBLIC_URL + "/assets/icons/redbubbles.svg"} alt="" />
        </div>
        </div>
        
        <div className={styles.column}>
        <div className={styles.header}>
            <span>
            Что-то не так...
            </span>
        </div>
        <div className={styles.text}>
            <span>
            Не получилось отправить отзыв.
            Попробуйте еще раз!
            </span>
        </div>
        </div>
    </div>
  )
}

export default Failure