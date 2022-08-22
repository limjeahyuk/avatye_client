import React, { useEffect, useState } from "react";
import classes from './detail.module.css'

const DetailSupport = () => {

    return(
        <div>
            <div className={classes.sellerbox}>
                <div className={classes.sellerintro}>창작자 소개</div>
                <div className={classes.sellerinfobox}>
                    <div className={classes.sellerinfo}>
                        <div className={classes.sellerprofile}><img src="/images/profile.jpg" alt="profile" /></div>
                        <div>
                            <span className={classes.sellername}>닉네임</span>
                            <span className={classes.sellerlogin}>마지막...로그인??</span>
                        </div>
                    </div>
                    <div className={classes.sellerdes}>소개부분입니다소개부분입니다소개부분입니다소개부분입니다소개부분입니다소개부분입니다소개부분입니다소개부분입니다소개부분입니다소개부분입니다</div>
                    <div className={classes.sellerbtn}>
                        <div className={classes.follow}>팔로우</div>
                        <div className={classes.inquiry}>창작자에게 문의</div>
                    </div>
                </div>
            </div>
            <div className={classes.stickly}>
                <div></div>
                <div className={classes.supportcard}>
                    <div className={classes.cardtitle}>선물 선택</div>
                    <div className={classes.rewardcards}>
                        <div className={classes.rewardcard}>
                            <div className={classes.rewardcontent}>
                                <div className={classes.rewardprice}>1000원 +</div>
                                <div>선물없이 후원하기</div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.rewardcards}>
                        <div className={classes.rewardcard}>
                            <div className={classes.rewardcontent}>
                                <div className={classes.rewardprice}>30000원 +</div>
                                <div>상품 1</div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.rewardcards}>
                        <div className={classes.rewardcard}>
                            <div className={classes.rewardcontent}>
                                <div className={classes.rewardprice}>99000원 +</div>
                                <div>상품 1</div>
                                <div>상품 2</div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.rewardcards}>
                        <div className={classes.rewardcard}>
                            <div className={classes.rewardcontent}>
                                <div className={classes.rewardprice}>1000원 +</div>
                                <div>선물없이 후원하기</div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.rewardcards}>
                        <div className={classes.rewardcard}>
                            <div className={classes.rewardcontent}>
                                <div className={classes.rewardprice}>30000원 +</div>
                                <div>상품 1</div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.rewardcards}>
                        <div className={classes.rewardcard}>
                            <div className={classes.rewardcontent}>
                                <div className={classes.rewardprice}>99000원 +</div>
                                <div>상품 1</div>
                                <div>상품 2</div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.rewardcards}>
                        <div className={classes.rewardcard}>
                            <div className={classes.rewardcontent}>
                                <div className={classes.rewardprice}>1000원 +</div>
                                <div>선물없이 후원하기</div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.rewardcards}>
                        <div className={classes.rewardcard}>
                            <div className={classes.rewardcontent}>
                                <div className={classes.rewardprice}>30000원 +</div>
                                <div>상품 1</div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.rewardcards}>
                        <div className={classes.rewardcard}>
                            <div className={classes.rewardcontent}>
                                <div className={classes.rewardprice}>99000원 +</div>
                                <div>상품 1</div>
                                <div>상품 2</div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className={classes.test5}>asdas</div>
        </div>
    )
}

export default DetailSupport