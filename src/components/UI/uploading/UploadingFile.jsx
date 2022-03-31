import React from 'react'
import styles from './UploadingFile.module.scss'

const UploadingFile = ({name}) => {
  return (
    <div className={styles.container}>
        <img src={process.env.PUBLIC_URL + "/assets/icons/jpg.svg"} alt="" />
        <div className={styles.column}>
            <span>
                {name}
            </span>
            <div className={styles.progress}>
                <div className={styles.color}></div>
            </div>
        </div>
        <div className={styles.loader}>Loading...</div>           
    </div>
  )
}

export default UploadingFile