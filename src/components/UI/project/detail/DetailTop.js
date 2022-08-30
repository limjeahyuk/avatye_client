
import React, { useEffect, useState } from "react";


import { Swiper, SwiperSlide } from "swiper/react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

import classes from './detail.module.css'
import moment from "moment";
import { Cookies } from "react-cookie";
import axios from "axios";
import { Link } from "react-scroll";

const DetailTop = ({ data }) => {
    

    const cookie = new Cookies()
    const token = cookie.get('user_token')

    const [heart, setHeart] = useState('');
    const [heartCount, setHeartCount] = useState('');


    // 숫자의 경우 정보를 빼와서 하자 어떤 일이 생길 지 모름.!!!
    const heartClickHandler = () => {
        if(token) {
            axios.post(`http://localhost:3000/heart/${data.projectIndex}`, {} , {headers : {'user_token': token}})
            .then(response => {
                console.log(response.data.result);
                setHeart(response.data.result);
                if (response.data.result === 1) {
                    setHeartCount(heartCount + 1);
                } else {
                    setHeartCount(heartCount - 1)
                }
            })
            .catch(e => {
                console.log(e)
            })
        } else {
            alert('로그인 하세요')
        }
        
    }

    // 감사합니다!

    useEffect(() => {
        setHeart(data.heartCheck);
        setHeartCount(data.heart);
    },[data])


    let date1 = moment();
    let date2 = moment(data.endDate);

    date1.format()
    date2.format()

    return (
        <>
            {data &&
                <div className={classes.topbox}>
                    <div className={classes.catebox}>
                        <span className={classes.topcategory}>{data.cateName}</span>
                        <h1 className={classes.toptitle}>{data.longTitle}</h1>
                    </div>
                    <div className={classes.topcontent}>
                        <Swiper
                            pagination={false}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className={classes.slider}>
                            <SwiperSlide>
                                <img src={`${data.titleProfile}`} alt="slide-img"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://tumblbug-pci.imgix.net/873c897e881d022a0232b64dd3185ef30900d695/2634a07c79681e85ad778e99c5ce2d60053edfee/5d461585042288dcff72c3f2a018dbe4937d1aba/30aa952a-20d3-4989-8b8c-9c4a3e4c54b7.png?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=e401ee88d8d2d206dc82c341d95d3c39" alt="slide-img"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://tumblbug-pci.imgix.net/873c897e881d022a0232b64dd3185ef30900d695/2634a07c79681e85ad778e99c5ce2d60053edfee/5d461585042288dcff72c3f2a018dbe4937d1aba/ea81fa7a-7ec2-4a8d-9575-f7c3cc8f69e4.png?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=75e5d5dfdf4d2bee5f29a2f106a7e7bd" alt="slide-img"/>
                            </SwiperSlide>
                        </Swiper>
                        <div className={classes.toptextbox}>
                            <div className={classes.toptext}>
                                <div className={classes.pricebox}>
                                    <div className={classes.pricename}>모인 금액</div>
                                    <div className={classes.price}>
                                        {data.nowPrice === undefined ? 'loading...' : data.nowPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                        <span className={classes.priceback}>원</span>
                                        <span className={classes.pricepercent}>{parseInt(data.percent)}%</span>
                                    </div>
                                </div>
                                <div className={classes.finishdatebox}>
                                    <div className={classes.datename}>남은시간</div>
                                    <div className={classes.date}>{date2.diff(date1, "days") <= 0 ? '0' : date2.diff(date1, "days")}<span className={classes.dateback}>일</span></div>
                                </div>
                                <div className={classes.sponserbox}>
                                    <div className={classes.sponsername}>후원자</div>
                                    <div className={classes.sponser}>{data.sponsor}<span className={classes.sponserback}>명</span></div>
                                </div>
                            </div>
                            <div className={classes.subbox}>
                                <div className={classes.subtextbox}>
                                    <div>
                                        <span className={classes.goal}>목표 금액</span> 
                                        <span className={classes.goalback}>
                                            {data.nowPrice === undefined ? 'loading...' : data.goalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
                                        </span>
                                    </div>
                                    <div className={classes.boxmargin}>
                                        <span className={classes.period}>펀딩 기간</span>
                                        <span className={classes.periodback}>
                                            {data.nowPrice === undefined ? 'loading...' : `${data.beginDate.slice(0,10).replace(/-/g,'.')} ~ ${data.endDate.slice(0,10).replace(/-/g,'.')} `}
                                            <span className={classes.periodbadge}>{date2.diff(date1, "days") <= 0 ? '마감' : `${date2.diff(date1, "days")}일 남음`}</span></span>
                                    </div>
                                    <div className={classes.boxmargin}>
                                        <span className={classes.cash}>결제</span>
                                        <span className={classes.cashback}>목표금액 달성시 {data.nowPrice === undefined ? 'loading...' : data.endDate.slice(0,10).replace(/-/g,'.')}에 결제 진행</span>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.btnbox}>
                                <div className={classes.heart}  onClick={heartClickHandler}>
                                    <div className={classes.heartbtn}>
                                        {heart !== 1 ? <FavoriteBorderIcon className={classes.hearticon} />
                                            : <FavoriteIcon className={classes.fillhearticon} />}
                                        <div className={classes.heartcount}>{heartCount}</div>
                                    </div>
                                </div>
                                <div className={classes.share}>
                                    <div className={classes.sharebtn}>
                                        <ShareIcon className={classes.shareicon}/>
                                        <div className={classes.sharecount}>{data.share}</div>
                                    </div>
                                </div>
                                <div className={classes.support}><Link to="1" spy={true} smooth={true}><button className={classes.supportbtn}>이 프로젝트 후원하기</button></Link></div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            }
        </>
    )
}

export default DetailTop