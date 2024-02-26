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
    <div className="banner" >
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
   
      </Swiper>
    </div>
  );
}

export default BannerCard;
