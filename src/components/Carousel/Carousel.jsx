import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import styles from "./Carousel.module.scss";
import Card from "../Card/Card";

const Carousel = ({ reviews }) => {
  return (
    <div className={styles.container}>
      <Swiper
        loop={true}
        modules={[Navigation, Pagination]}
        spaceBetween={24}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          clickable: true,
        }}
        grabCursor={true}
        slidesPerView={1}
        slidesPerGroup={1}
        breakpoints={{
          900: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        }}
        className={styles.slider}
      >
        {reviews.map((obj) => (
          <SwiperSlide className={styles.slide} key={obj.id}>
            <Card
              className={styles.slide}
              img={process.env.PUBLIC_URL + obj.img}
              name={obj.name}
              date={obj.date}
              text={obj.text}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
