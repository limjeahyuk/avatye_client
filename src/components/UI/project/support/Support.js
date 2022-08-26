import React, {useEffect, useState} from "react";
import classes from './support.module.css'
import SavingsIcon from '@mui/icons-material/Savings';

import CreditCardIcon from '@mui/icons-material/CreditCard';
import { useLocation } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import { Cookies } from "react-cookie";

import { useNavigate } from "react-router-dom";


const Support = () => {
    const [checkCard, setCheckCard] = useState(true);


    const [detail, setDetail] = useState([]);
    const [user, setUser] = useState([]);
    const [shipping, setShipping] = useState([]);
    const [payment, setPayment] = useState([]);

    const location = useLocation();
    const {data} = location.state;

    const cookie = new Cookies()
    const token = cookie.get('user_token')

    const cardOpen = (e) => {
        if (e.target.checked) {
            setCheckCard(true)
        } else {
            setCheckCard(false)
        }
    }
    
    
    const navigater = useNavigate();

    const findproject = () => {
        axios.get(`http://localhost:3000/detail/${data.projectIndex}`)
        .then(response => {
            console.log(response.data)
            setDetail(response.data[0])
        }).catch(e => {
            console.log(e)
        })
    }

    const finduser = () => {
        axios.get('http://localhost:3000/order', {headers: {'user_token' : token}})
        .then(response => {
            console.log(response.data);
            setUser(response.data.userData);
            setShipping(response.data.shippingData[0])
            setPayment(response.data.paymentData[0])
            
        })
        .catch(e => {
            console.log(e)
        })
    }

    useEffect(() => {
        findproject()
        finduser()
    }, [])

    let date1 = moment();
    let date2 = moment(detail.endDate);

    date1.format()
    date2.format()

    return (
        <div>
            <div className={classes.supportHeader}>
                <div>
                    <img src="./logo.png" alt="logoImg" onClick={() => navigater('/')}/>
                    <span>·</span>
                    <span className={classes.supportTitle}> 프로젝트 후원하기</span>
                </div>
            </div> 

            <div className={classes.supportContainer}>
                <div className={classes.supportProject}>
                    <div><img src={`${detail.titleProfile}`} alt="supportProjectImg"/></div>
                    <div className={classes.supportPrjectInfo}>
                        <div>{detail.cateName} | {detail.nickName}</div>
                        <div>{detail.longTitle}</div>
                        <div>
                            <span>{detail.nowPrice}원</span><span>{parseInt(detail.nowPrice / detail.goalPrice * 100)}%</span><span>· {date2.diff(date1, "days")}일 남음</span>
                        </div>
                    </div>
                </div>

                <div className={classes.supportInfoListWrapper}>
                    {/* 선물 및 각종 정보들 */}

                    <div className={classes.supportInfoList}>
                        {/* 선물 정보 */}
                        <div className={classes.infoTitle}>선물 정보</div>
                        <div className={classes.supportItemBox}>
                            <div>
                                <div className={classes.item}>
                                    <div>선물 구성</div>
                                    <div>
                                        {data.giftTitle}
                                        <ul className={classes.giftul}>
                                            <li>{data.giftDetail}</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className={classes.item}>
                                    <div>선물 금액</div>
                                    <div>
                                        {data.giftPrice}원
                                    </div>
                                </div>
                                
                                <div className={classes.item}>
                                    <div>예상 전달일</div>
                                    <div>{data.giftDeliveryDate}</div>
                                </div>
                            </div>
                            <div>
                                <div><button className={classes.changebtn}>변경</button></div>
                            </div>
                        </div>
                        
                        {/* 후원자 정보 */}
                        <div className={classes.infoTitle}>후원자 정보</div>
                        <div className={classes.supportItemBox}>
                            <div>
                                <div className={classes.item}>
                                    <div>연락처</div>
                                    <div>{user.phone}</div>
                                </div>

                                <div className={classes.item}>
                                    <div>이메일</div>
                                    <div>{user.email}</div>
                                </div>

                                <div className={classes.tinyinfo}>
                                    * 위 연락처와 이메일로 후원 관련 소식이 전달됩니다.<br/>
                                    * 연락처 및 이메일 변경은 계정 설정에서 가능합니다
                                </div>
                            </div>
                        </div>


                        {/* 배송지 */}
                        <div className={classes.infoTitle}>배송지</div>
                        <div className={classes.supportItemBox}>
                            <div className={classes.shippinginfo}>
                                {shipping ? 
                                    <div>
                                        <div><span className={classes.shippingName}>{shipping.userName}</span></div>
                                        <div>{shipping.address}</div>
                                        <div>{shipping.phone}</div> 
                                    </div>:
                                    <div>없숴</div>}
                                
                            </div>
                            <div>
                                <div><button className={classes.changebtn}>변경</button></div>
                            </div>
                        </div>

                        {/* 결제수단 */}
                        <div className={classes.infoTitle}>결제수단</div>
                        <div className={classes.supportItemBox}>
                            <div>
                                <label className={classes.radiolabel}><input type="radio" name="payment" value="card" defaultChecked onClick={cardOpen}/>카드 및 계좌</label>
                                <label className={classes.radiolabel}><input type="radio" name="payment" value="naverpay" onClick={()=>{setCheckCard(false)}}/>네이버페이</label>
                            </div>
                        </div>
                        {payment && checkCard ? 
                            <div className={classes.cardOpen}>
                                <div>
                                    {payment.DIV === "card" ?  <CreditCardIcon /> : <SavingsIcon /> }
                                    <div>{payment.DIV === "card" ? payment.cardNumber : payment.bank +"/"+payment.accountNumber}</div>
                                </div>
                                <div><button className={classes.changebtn}>변경</button></div>
                            </div>
                            : 
                            <div>없슈</div>
                        }
                        </div>
                        
                    {/* 최종 후원 금액 */}
                    <div className={classes.supportInfo}>
                        <div className={classes.supportPrice}>
                            <div>최종 후원 금액</div>
                            <div>{data.giftPrice}원</div>
                        </div>

                        <div className={classes.paymentInfo}>프로젝트 성공시, 결제는 <span>2022.09.06</span> 에 진행됩니다. 프로젝트가 무산되거나 중단된 경우, 예약된 결제는 자동으로 취소됩니다.</div>

                        <div>
                            <button className={classes.supportBtn}>후원하기</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Support;