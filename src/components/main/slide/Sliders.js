// import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import classes from "./slide.module.css"
import './slide.css'

import { Pagination, Navigation, Autoplay } from "swiper";

const Sliders = () => {

  return (
    <>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className={classes.mySwiper}
      >
        <SwiperSlide className={classes.myslide}>
          <div className={`${classes.swiperTitle} ${classes.swiperColor}`}>피규어 키링으로 만나는 <br/> &lt; 유미의 세포들 &gt;</div>
          <div className={`${classes.swiperDes} ${classes.swiperColor}`}>응큼세포부터 출출세포까지 7종의 귀여운 세포</div>
          <img src="https://tumblbug-assets.s3.ap-northeast-1.amazonaws.com/heroes/yumifigure.jpg?q=80&width=768&height=280&fit=crop" alt="image1"/>
        </SwiperSlide>
        <SwiperSlide className={classes.myslide}>
          <div className={classes.swiperTitle}>바다가 흐르는 <br/> 우산과 포스터</div>
          <div className={classes.swiperDes}>사진 작가의 시선으로 담은 아름다운 바다</div>
          <img src="https://tumblbug-assets.s3.ap-northeast-1.amazonaws.com/heroes/put_water_in.jpg?q=80&width=768&height=280&fit=crop" alt="image2"/>
        </SwiperSlide>
        <SwiperSlide className={classes.myslide}>
          <div className={`${classes.swiperTitle} ${classes.swiperColor}`}>펀딩 준비중인 <br/> 소상공인이라면 주목</div>
          <div className={`${classes.swiperDes} ${classes.swiperColor}`}>400만원 상당의 텀블벅 펀딩 프로모션 지원</div>
          <img src="https://tumblbug-assets.s3.ap-northeast-1.amazonaws.com/heroes/notices_318.jpg?q=80&width=768&height=280&fit=crop" alt="image3"/>
        </SwiperSlide>
        <SwiperSlide className={classes.myslide}>
          <div className={classes.swiperTitle}>책 한 권으로 경험하는</div>
          <div className={classes.swiperDes}>2022 공간 트렌드</div>
          <img src="images/img4.jpeg" alt="image4"/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Sliders;