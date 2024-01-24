import React, { useRef, useState } from "react";

//import swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles

import "swiper/css";
import "swiper/css/effect-cards";

import "./BannerCards.css";

// import required models
import { EffectCards } from "swiper/modules";

function BannerCard() {
  return (
    <div className="banner">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
      </Swiper>
    </div>
  );
}

export default BannerCard;
