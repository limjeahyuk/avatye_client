import React, {useState} from "react";
import axios from "axios";
import { Cookies } from 'react-cookie';
import classes from '../mypage.module.css'
import { useNavigate } from "react-router-dom";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import MyPaymentSettingModal from "../Modals/MyPaymentSettingModal";

const SettingPaymentTab = ({data, setData}) => {
    const navigater = useNavigate();
    const cookies = new Cookies();
    const token = cookies.get('user_token');
    
    const [paymentList, setPaymentList] = useState(0);
    const [openModal, setOpenModal] = useState(false);

    const modalHandler = () => {
        if(openModal){
            setOpenModal(false)
        }else{
            setOpenModal(true)
        }
    }

    console.log(data)

    return( 
        <div>
            {openModal && <MyPaymentSettingModal handler={modalHandler} /> }
        
        <div className={classes.settingBox}>
            <div className={classes.settingItemList}>
                <div className={classes.settingItem}>
                     {/* 등록된 결제수단 */}
                    {paymentList === 0 ? 
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
                            <div>받는 사람 이름 <span>기본</span></div> 
                            <div>받는 사람 장소</div>
                            <div>받는 사람 전화번호</div>
                        </div> }
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