import React, {useEffect, useState} from "react";
import classes from './support.module.css'
import SavingsIcon from '@mui/icons-material/Savings';
import ChangeShipping from "./modal/ChangeShipping";

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
    const [test, setTest] = useState([])

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

    const [openModal, setOpenModal] = useState(false);

    const modalHandler = () => {
        if(openModal){
            setOpenModal(false)
        }else{
            setOpenModal(true)
        }
    }
    
    const navigater = useNavigate();

    const findproject = () => {
        axios.get(`http://localhost:3000/detail/${data.projectIndex}`)
        .then(response => {
            console.log(response.data)
            setDetail(response.data[0])
            setTest(response.data)
        }).catch(e => {
            console.log(e)
        })
    }

    console.log(shipping.userID)
    

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

    const order = () => {
        if(token) {
            axios.post('http://localhost:3000/order', { projectIndex: data.projectIndex, giftIndex : detail.giftIndex, paymentIndex : payment.paymentIndex, orderPrice : data.giftPrice, shippingIndex : shipping.shipIndex}, {headers : {'user_token' : token}})
            .then(response => {
                console.log(response.data)
                navigater('/')
                alert('??????????????????.')
            })
            .catch(e => {
                console.log(e)
            })
        } else {
            alert('??????????????????')
            navigater('/login')
        }

    }

    let date1 = moment();
    let date2 = moment(detail.endDate);

    date1.format()
    date2.format()

    return (
        <div>
            <div className={classes.supportHeader}>
                <div>
                    <img src="./logo.png" alt="logoImg" onClick={() => navigater('/')}/>
                    <span>??</span>
                    <span className={classes.supportTitle}> ???????????? ????????????</span>
                </div>
            </div> 

            <div className={classes.supportContainer}>
                <div className={classes.supportProject}>
                    <div><img src={`${detail.titleProfile}`} alt="supportProjectImg"/></div>
                    <div className={classes.supportPrjectInfo}>
                        <div>{detail.cateName} | {detail.nickName}</div>
                        <div>{detail.longTitle}</div>
                        <div>
                            <span>{detail.nowPrice === undefined ? 'loading..' : detail.nowPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}???</span><span>{parseInt(detail.nowPrice / detail.goalPrice * 100)}%</span><span>?? {date2.diff(date1, "days")}??? ??????</span>
                        </div>
                    </div>
                </div>

                <div className={classes.supportInfoListWrapper}>
                    {/* ?????? ??? ?????? ????????? */}

                    <div className={classes.supportInfoList}>
                        {/* ?????? ?????? */}
                        <div className={classes.infoTitle}>?????? ??????</div>
                        <div className={classes.supportItemBox}>
                            <div>
                                <div className={classes.item}>
                                    <div>?????? ??????</div>
                                    <div>
                                        {data.giftTitle}
                                        <ul className={classes.giftul}>
                                            <li>{data.giftDetail}</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className={classes.item}>
                                    <div>?????? ??????</div>
                                    <div>
                                        {detail.nowPrice === undefined ? 'loading..' : data.giftPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}???
                                    </div>
                                </div>
                                
                                <div className={classes.item}>
                                    <div>?????? ?????????</div>
                                    <div>{detail.nowPrice === undefined ? 'loading..' : data.giftDeliveryDate.slice(0,10)}</div>
                                </div>
                            </div>
                            <div>
                                <div><button className={classes.changebtn} onClick={modalHandler}>??????</button></div>
                                {openModal && <ChangeShipping Data={test} handler={modalHandler} /> }
                            </div>
                        </div>
                        
                        {/* ????????? ?????? */}
                        <div className={classes.infoTitle}>????????? ??????</div>
                        <div className={classes.supportItemBox}>
                            <div>
                                <div className={classes.item}>
                                    <div>?????????</div>
                                    <div>{user.phone}</div>
                                </div>

                                <div className={classes.item}>
                                    <div>?????????</div>
                                    <div>{user.email}</div>
                                </div>

                                <div className={classes.tinyinfo}>
                                    * ??? ???????????? ???????????? ?????? ?????? ????????? ???????????????.<br/>
                                    * ????????? ??? ????????? ????????? ?????? ???????????? ???????????????
                                </div>
                            </div>
                        </div>


                        {/* ????????? */}
                        <div className={classes.infoTitle}>?????????</div>
                        <div className={classes.supportItemBox}>
                            <div className={classes.shippinginfo}>
                                {shipping !== [] ? 
                                    <div>
                                        <div><span className={classes.shippingName}>{shipping.userName}</span></div>
                                        <div>{shipping.address}</div>
                                        <div>{shipping.phone}</div> 
                                    </div>
                                    :
                                    <div>????????? ?????? +</div>}
                                
                            </div>
                            <div>
                                <div>{shipping !== [] && <button className={classes.changebtn}>??????</button>}</div>
                            </div>
                        </div>

                        {/* ???????????? */}
                        <div className={classes.infoTitle}>????????????</div>
                        <div className={`${classes.supportItemBox} ${classes.supportItem2}`}>
                            <div>
                                <label className={classes.radiolabel}><input type="radio" name="payment" value="card" defaultChecked onClick={cardOpen}/>?????? ??? ??????</label>
                                <label className={classes.radiolabel}><input type="radio" name="payment" value="naverpay" onClick={()=>{setCheckCard(false)}}/>???????????????</label>
                            </div>
                        </div>
                        {payment !== [] && checkCard ? 
                            <div className={classes.cardOpen}>
                                <div>
                                    {payment.DIV === "card" ?  <CreditCardIcon /> : <SavingsIcon /> }
                                    <div>{payment.DIV === "card" ? payment.cardNumber : payment.bank +"/"+payment.accountNumber}</div>
                                </div>
                                <div>{payment === [] && <button className={classes.changebtn}>??????</button>}</div>
                            </div>
                            : 
                            <div className={classes.add}>???????????? ?????? +</div>
                        }
                        </div>
                        
                    {/* ?????? ?????? ?????? */}
                    <div className={classes.supportInfo}>
                        <div className={classes.supportPrice}>
                            <div>?????? ?????? ??????</div>
                            <div>{detail.nowPrice === undefined ? 'loading..' : data.giftPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}???</div>
                        </div>

                        <div className={classes.paymentInfo}>???????????? ?????????, ????????? <span>2022.09.06</span> ??? ???????????????. ??????????????? ??????????????? ????????? ??????, ????????? ????????? ???????????? ???????????????.</div>

                        <div>
                            <button onClick={order} className={classes.supportBtn}>????????????</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Support;