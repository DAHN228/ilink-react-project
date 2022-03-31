import React, { useEffect } from "react";
import Button from "../UI/button/Button";
import IconButton from "../UI/button/IconButton";
import MobileIconButton from "../UI/button/MobileIconButton";
import MobileTextButton from "../UI/button/MobileTextButton";
import styles from "./ReviewForm.module.scss";
import { useState } from "react";
import Error from "../UI/error/Error";
import Toast from "../Toast/Toast";
import MobileUploadFile from "../UI/button/MobileUploadFile";
import UploadFile from "../UI/button/UploadFile";
import UploadingFile from "../UI/uploading/UploadingFile";


const ReviewForm = (props) => {
  const windowWidth = window.innerWidth
  const [name, setName] = useState ('Имя Фамилия')
  const [review, setReview] = useState('Напишите пару слов о вашем опыте...')
  const [nameDirty, setNameDirty] = useState(false)
  const [reviewDirty, setReviewDirty] = useState(false)
  const [nameError, setNameError] = useState('Поле имя фамилия не может быть пустым')
  const [reviewError, setReviewError] = useState('Поле отзыв не может быть пустым')
  const [formValid, setFormValid] = useState('')
  const [toast, setToast] = useState()

  const PopToast = () => {
    return <Toast kind={'success'}/>
  }

  const onBtnClick = event => {
    setToast(<PopToast/>);
  };

  useEffect(() => {
    if (nameError || reviewError) {
     setFormValid(false)
    }
    else {
      setFormValid(true)
    }
  }, [nameError, reviewError])

  const nameHandler = (e) => {
    setName(e.target.value)
    const regex = /[^А-Яа-яЁё ]/g
    if (!regex.test(String(e.target.value))) {
      setNameError ('Некорректное имя очество')
    }
    if (!e.target.value) {
      setNameError('Поле имя фамилия не может быть пустым')
    }
    else {
      setNameError ('')
    }
  }
  const reviewHandler = (e) => {
    setReview(e.target.value)
    const regex = /d+[^А-Яа-яЁёA-Za-z ]/g
    if (!regex.test(String(e.target.value))) {
      setReviewError ('Некорректный отзыв')
    }
    if (!e.target.value) {
      setNameError('Поле отзыв не может быть пустым')
    }
    else {
      setReviewError ('')
    }
  }

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'name':
        setNameDirty(true)
        break
      case 'review':
        setReviewDirty(true)
        break
    }
  }

  return (
    <div>
      {toast}
    <div className={styles.container}>
      <span className={styles.header}>Отзыв</span>
      <form className={styles.form}>
        <div>
          <span className={styles.article}>Как вас зовут?</span>
          <br />
          <div className={styles.block}>
            <input onChange={e => nameHandler(e)} value={name} name='name' onBlur={e => blurHandler(e)} type="text" placehoder={"Имя Фамилия"} />
              { windowWidth <= 320 &&
                <div>
                  {(nameDirty && nameError) && <Error message={nameError}/>}
                  <MobileUploadFile/>
                  <UploadingFile name={"Photo 01-02-2021-20-33"}/>
                </div>
             }
              { windowWidth > 320 &&
                <div>
                  <UploadFile/>
                </div> 
              }
          </div>
          
          { windowWidth > 320 &&
            <div>
              <UploadingFile name={"Photo 01-02-2021-20-33"}/>
              {(nameDirty && nameError) && <Error message={nameError}/>}
            </div>
              }
          
        </div>
        <div>
          <span className={styles.article}>Все ли вам понравилось?</span>
          <br />
          
          <textarea onChange={e => reviewHandler(e)} value={review} name='review' onBlur={e => blurHandler(e)} cols="100" rows="8" maxLength={200}>
            Напишите пару слов о вашем опыте...
          </textarea>
          {(reviewDirty && reviewError) && <Error message={reviewError}/>}
        </div>
        {
        windowWidth <= 320
        ? <div className={styles.blockSubmit}>
        <div className={styles.row}>
        <img src={process.env.PUBLIC_URL + "/assets/icons/info.svg"} alt="" />
      <span className={styles.moderation}>
        Все отзывы проходят модерацию в течение 2 часов
      </span>
        </div>
     
        <MobileTextButton disabled={!formValid} name={"Отправить отзыв"} onClick={onBtnClick}/>
      
    </div>
        :<div className={styles.blockSubmit}>
        
          <Button disabled={!formValid} name={"Отправить отзыв"} onClick={onBtnClick}/>
       
        <img src={process.env.PUBLIC_URL + "/assets/icons/info.svg"} alt="" />

        <span className={styles.moderation}>
          Все отзывы проходят модерацию в течение 2 часов
        </span>
      </div>
        }
        
      </form>
    </div>
    </div>
  );
};

export default ReviewForm;
