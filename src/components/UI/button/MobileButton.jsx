import React from 'react'
import styles from './MobileButton.module.scss'

const MobileButton = ({img, onClick, disabled}) => {
  return (
    <button type={"button"} disabled={disabled} className={styles.button} onClick={onClick}>
        <img src={img} alt=""/>
    </button>
  )
}

export default MobileButton