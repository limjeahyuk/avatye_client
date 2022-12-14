import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SupportCard from "./cards/SupportCard";
import classes from './detail.module.css'

const DetailSupport = ({data}) => {

    const [gift, setGift] = useState([])

    let { id } = useParams()

    const findgift = () => {
        axios.get(`http://localhost:3000/detail/gift/${id}`)
        .then(response => {
            setGift(response.data)
            console.log(response.data)
        })
        .catch(e => {
            console.log(e)
        })
    }

    useEffect(() => {
        findgift()
    }, [id])

    return(
        <div>
            <div className={classes.sellerbox}>
                <div className={classes.sellerintro}>창작자 소개</div>
                <div className={classes.sellerinfobox}>
                    <div className={classes.sellerinfo}>
                        <div className={classes.sellerprofile}><img src={`${data.userProfile}`} alt="profile" /></div>
                        <div>
                            <span className={classes.sellername}>{data.nickName}</span>
                            <span className={classes.sellerlogin}>마지막 로그인 {data.lastLogin === undefined ? 'loading..' : data.lastLogin.slice(0,10)}</span>
                        </div>
                    </div>
                    <div className={classes.sellerdes}>{data.Comment}</div>
                    <div className={classes.sellerbtn}>
                        <div className={classes.follow}>팔로우</div>
                        <div className={classes.inquiry}>창작자에게 문의</div>
                    </div>
                </div>
            </div>
            <div className={classes.supportbox}>
                <div></div>
                <div className={classes.supportcard}>
                    <div className={classes.cardtitle}>선물 선택</div>
                    <div className={classes.rewardcards} id= "1">
                        <div className={classes.rewardcard}>
                            <div className={classes.rewardcontent}>
                                <div className={classes.rewardbox}>
                                    <div className={classes.rewardprice}>1000원 +</div>
                                    <div className={classes.rewardgift}>선물없이 후원하기</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {gift.map((data, key) => (
                        <SupportCard Data={data} key={key} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default DetailSupport