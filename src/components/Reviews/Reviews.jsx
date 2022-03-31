import React, { useState } from "react";
import styles from "./Reviews.module.scss";
import IconButton from "../UI/button/IconButton";
import MobileButton from "../UI/button/MobileButton";
import Carousel from "../Carousel/Carousel";
import Modal from "../UI/modal/Modal";
import ReviewForm from "../ReviewForm/ReviewForm";

const Reviews = (props) => {
  const [modalActive, setModalActive] = useState (false)
  const windowWidth = window.innerWidth
  const reviews = [
    {
      img: "/assets/img/review1.jpg",
      name: "Буба Бубенцов",
      date: "08.01.2022",
      text: "Отличный коллектив, руководители понимают сам процесс работы каждого сотрудника и помогают всем без исключения. Система KPI позволяет реально хорошо зарабатывать по простому принципу - чем больше и лучше ты работаешь, тем больше денег получаешь. Соцпакет - отличная страховка ДМС, организовали курсы английского языка бесплатно, оплачивают тренажерный зал. Зарплату выплачивают всегда вовремя.",
    },
    {
      img: "/assets/img/review2.jpg",
      name: "Илья Анташкевич",
      date: "08.01.2022",
      text: "Год назад попытал счастье, откликнулся на вакансию, прошел собес и попал в компанию. Долго переживал что будет тяжело влиться, но тут прям классные ребята работают, все на одной волне. Всегда готовы помочь с любым вопросом. Для эффективной работы здесь нужно хорошо знать иностранные языки.",
    },
    {
      img: "/assets/img/review3.jpg",
      name: "Дмитрий Иванов",
      date: "26.12.2021",
      text: "Наша компания благодарна фирме ilink за сотрудничество. Хотелось бы отметить отличную работу сотрудников: все было выполнено качественно, со знанием дела, в установленные сроки. За время работы с компанией значительно увеличилась аудитория, сайт приносит стабильный доход, контент уникальный, грамотный и качественный. Будет продолжать работу и дальше. Мы довольны, что доверили создание сайта компании ilink.",
    },
    {
      img: "/assets/img/review4.jpg",
      name: "Юрина Маргарита",
      date: "16.12.2021",
      text: "Отвечала за найм и адаптацию сотрудников в компании, за поддержание на нужном уровне HR-бренда и трудового настроя коллектива. В компанию пришла без опыта работы HR-ом. Всему научилась здесь. Как теории, так и практике. Набрала опыт достаточно быстро. Есть программа обучения, поощряются различные курсы, и это большой плюс. В коллективе очень дружная атмосфера. Все дружелюбные, амбициозные.",
    },
  ];
  return (
    <div>
      <Modal active={modalActive} setActive={setModalActive}>
        <ReviewForm></ReviewForm>
      </Modal>
    
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.row}>
          <h1>Отзывы</h1>
          {
        windowWidth <= 320
        ? <MobileButton img={process.env.PUBLIC_URL + "/assets/icons/add.svg"} onClick={() => setModalActive(true)} />
        : <IconButton
        img={process.env.PUBLIC_URL + "/assets/icons/add.svg"}
        name={"Добавить отзыв"}
        onClick={() => setModalActive(true)}
      ></IconButton>
        }
          
        </div>
        <Carousel reviews={reviews}></Carousel>
      </div>
      <div >
        {/* <button className={styles.arrowLeft + " swiper-button-prev"}>
          <img src={"/assets/icons/arrow-right.svg"} alt="" />
        </button> */}
      </div>
      <div >
        {/* <button className={styles.arrowRight + " swiper-button-next" }>
          <img src={"/assets/icons/arrow-right.svg"} alt="" />
        </button> */}
      </div>
    </div>
    </div>
  );
};

export default Reviews;
