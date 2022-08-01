import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./slide.css"

import { Pagination, Navigation } from "swiper";

const Sliders = () => {

  return (
    <>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        loop={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="images/img1.jpg" /></SwiperSlide>
        <SwiperSlide><img src="images/img2.jpg" /></SwiperSlide>
        <SwiperSlide><img src="images/img3.jpg" /></SwiperSlide>
        <SwiperSlide><img src="images/img4.jpg" /></SwiperSlide>
      </Swiper>
    </>
  );
}

export default Sliders;