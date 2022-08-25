import React, {useState, useEffect} from "react";
import axios from "axios";
import { Cookies } from 'react-cookie';
import classes from '../mypage.module.css'
import { useNavigate } from "react-router-dom";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import MyPaymentSettingModal from "../Modals/MyPaymentSettingModal";
import CreditCardIcon from '@mui/icons-material/CreditCard';
import SavingsIcon from '@mui/icons-material/Savings';

const SettingPaymentTab = ({data, setData}) => {
    const navigater = useNavigate();
    const cookies = new Cookies();
    const token = cookies.get('user_token');
    
    const [openModal, setOpenModal] = useState(false);

    const modalHandler = () => {
        if(openModal){
            setOpenModal(false)
        }else{
            setOpenModal(true)
        }
    }

    //중복 값 제거
    useEffect(() => {
        setData(data.filter((arr, index, callback) => 
            index === callback.findIndex(t => t.paymentIndex === arr.paymentIndex)))
    }, []);

    //결제수단 삭제
    const deletePayment = (paymentIndex) => {
        axios.delete('http://localhost:3000/user/payment', {headers : {'user_token': token}, data : {paymentIndex : paymentIndex}, })
        .then(response => {
            alert("성공적으로 삭제되었습니다.")
            setData(data.filter(item => item.paymentCheck === 1));
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return( 
        <div>
            {openModal && <MyPaymentSettingModal handler={modalHandler} /> }
        
        <div className={classes.settingBox}>
            <div className={classes.settingItemList}>
                <div className={classes.settingItem}>
                     {/* 등록된 결제수단 */}
                    {data.length === 1 ? 
                        <div>
                            <div className={classes.ItemTitle}>
                                <span>등록된 결제수단</span>
                                <button className={classes.changeBTN} onClick={modalHandler}>+ 추가</button>
                            </div>
                            <div className={classes.payMethod}>
                                <div className={classes.noValueBox}>
                                    <div><ErrorOutlineIcon className={classes.iconWidth}/></div>
                                    <div>등록된 결제수단이 없습니다.</div>
                                    <div>결제수단을 추가해주세요. </div>
                                </div>
                            </div>
                        </div> :
                            <div>
                            
                                <div className={classes.ItemTitle}>
                                    <span>등록된 결제수단</span>
                                    <button className={classes.changeBTN} onClick={modalHandler}>+ 추가</button>
                                </div>

                                {data && data.filter(item => item.paymentCheck === 1).map((val, index) => { 
                                    return (
                                        <div key={index}>
                                            <div className={classes.shippingList}>
                                                <div>
                                                    <div className={classes.paymentDIV}>{val.div === "card" ? <CreditCardIcon /> : <SavingsIcon />}</div> 
                                                    <div>{val.div === "bank" ? val.bank+" / "+val.accountNumber : val.cardNumber}</div>
                                                </div>

                                                <div>
                                                    <button onClick={() => deletePayment(val.paymentIndex)} className={classes.optionButton}>삭제</button>
                                                </div>
                                            </div>
                                        
                                        </div>
                                    );
                                })}
                            </div>
                    }
                </div>
            </div>


            <div className={classes.settingInfo}>
                <div className={classes.settingInfoTitle}>결제수단을 등록/삭제하면 현재 후원에 등록한 결제수단이 변경/삭제되나요?</div>
                <div>
                    아닙니다. 이곳에서 결제수단을 등록/삭제하더라도 이미 후원에 등록한 결제수단이 변경/삭제되지 않습니다. 
                    이를 변경하시려면 후원현황에서 변경해주세요. <br/>
                    <span className={classes.settingInfoLink}onClick={()=> {navigater('/mypage')}}> 후원현황 바로가기</span>
                </div>
            </div>
        </div>
        </div>
        );
}

export default SettingPaymentTab