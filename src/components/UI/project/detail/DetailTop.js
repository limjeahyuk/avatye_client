import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import { Pagination, Navigation } from "swiper";

import classes from './detail.module.css'

const DetailTop = () => {

    return (
        <div className={classes.topbox}>
            <div className={classes.topcategory}>카테고리</div>
            <h1 className={classes.toptitle}>롱 타이틀</h1>
            <div className={classes.topcontent}>
                <Swiper
                    pagination={false}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className={classes.slider}>
                    <SwiperSlide>
                        <img src="https://tumblbug-pci.imgix.net/873c897e881d022a0232b64dd3185ef30900d695/2634a07c79681e85ad778e99c5ce2d60053edfee/5d461585042288dcff72c3f2a018dbe4937d1aba/ea81fa7a-7ec2-4a8d-9575-f7c3cc8f69e4.png?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=75e5d5dfdf4d2bee5f29a2f106a7e7bd"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://tumblbug-pci.imgix.net/873c897e881d022a0232b64dd3185ef30900d695/2634a07c79681e85ad778e99c5ce2d60053edfee/5d461585042288dcff72c3f2a018dbe4937d1aba/30aa952a-20d3-4989-8b8c-9c4a3e4c54b7.png?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=e401ee88d8d2d206dc82c341d95d3c39"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://tumblbug-pci.imgix.net/873c897e881d022a0232b64dd3185ef30900d695/2634a07c79681e85ad778e99c5ce2d60053edfee/5d461585042288dcff72c3f2a018dbe4937d1aba/ea81fa7a-7ec2-4a8d-9575-f7c3cc8f69e4.png?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=75e5d5dfdf4d2bee5f29a2f106a7e7bd"/>
                    </SwiperSlide>
                </Swiper>
                <div className={classes.toptextbox}>
                    <div className={classes.toptext}>
                        <div className={classes.pricebox}>
                            <div className={classes.pricename}>모인 금액</div>
                            <div className={classes.price}>
                                2,312,312
                                <span className={classes.priceback}>원</span>
                                <span className={classes.pricepercent}>퍼센트%</span>
                            </div>
                        </div>
                        <div className={classes.finishdatebox}>
                            <div className={classes.datename}>남은시간</div>
                            <div className={classes.date}>123<span className={classes.dateback}>일</span></div>
                        </div>
                        <div className={classes.sponserbox}>
                            <div className={classes.sponsername}>후원자</div>
                            <div className={classes.sponser}>asd<span className={classes.sponserback}>명</span></div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>목표 금액 <span>asdsdasd원</span></div>
                            <div>펀딩 기간 <span>2022.12.08 ~ 2023.01.20</span><span>89일 남음</span></div>
                            <div>결제 <span>목표금액 달성시 2023.02.10에 결제 진행</span></div>
                        </div>
                        <div>
                            <button>하트 + 하트 수</button>
                            <button>공유 + 공유 수</button>
                            <button>이 프로젝트 후원하기</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default DetailTop