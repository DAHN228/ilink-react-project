import React from 'react'
import styles from './Error.module.scss'

const Error = ({message}) => {
  return (
    <div className={styles.container}>
        <img src={process.env.PUBLIC_URL + "/assets/icons/error.svg"} alt="" />
        <span>{message}</span>
    </div>
  )
}

export default Error