import React, { useState} from "react";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import classes from "../Modals/modals.module.css";
import CreditCardRoundedIcon from '@mui/icons-material/CreditCardRounded';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import MyPaymentCardModal from "./MyPaymentCardModal";
import MyPaymentAccountModal from "./MypaymentAccountModal";

const MyPaymentSettingModal = ({handler}) => {
    const [selectMethod, setSelectMethod] = useState(true);
    const [cardOpen, setCardOpen] = useState(false);
    const [accountOpen, setAccountOpen] = useState(false);

    const cardModalHandler = () => {
        if(cardOpen){
            setCardOpen(false);
            setSelectMethod(false);
        }else{
            setCardOpen(true);
            setSelectMethod(false);
        }
    };

    const accountModalHandler = () => {
        if(accountOpen){
            setAccountOpen(false);
            setSelectMethod(false);
        }else{
            setAccountOpen(true);
            setSelectMethod(false);
        }
    };

    return(
        <div>
            {selectMethod &&
            <div className={classes.modalContent2}>
                <div className={classes.modalTop}>
                    <span className={classes.modalTitle}>결제 수단 추가</span>
                    <button className={classes.closeButton}><CloseRoundedIcon onClick={handler} /></button>
                </div>

                <div><button className={classes.paymentBtn} onClick={cardModalHandler} value="card" ><CreditCardRoundedIcon /> 신용/체크 카드 등록</button></div>
                <div><button className={classes.paymentBtn} onClick={accountModalHandler} value="account" ><MonetizationOnOutlinedIcon /> 은행 계좌 등록</button></div>
            </div> }

            {cardOpen && <MyPaymentCardModal handler={cardModalHandler} />}
            {accountOpen && <MyPaymentAccountModal handler={accountModalHandler} />}
        </div>
    );
}

export default MyPaymentSettingModal;