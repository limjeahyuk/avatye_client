import React, {useState} from "react";
import axios from "axios";
import { Cookies } from 'react-cookie';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import classes from "../Modals/modals.module.css";

const MyPaymentCardModal = ({handler}) => {
    const cookies = new Cookies();
    const token = cookies.get('user_token');
    const [cardData, setCardData] = useState({
        div : "CARD",
        cardNumber : "",
        cardEndDate : "",
        cardPassword : "",
        userBirth : ""
    })

    const {div, cardNumber, cardEndDate, cardPassword, userBirth} = cardData;

    const valueChange = (e) => {
        const {name, value} = e.target
        setCardData({
            ...cardData,
            [name] : value
        })
    }

    let month = [];
    for(var i=1; i <= 12; i++) {
        month.push(i)
    }

    let year = [];
    for(var i=2022; i <= 2032; i++) {
        year.push(i)
    }
    

    return(
        <div className={classes.modalContent}>
            <div className={classes.modalTop}>
                <span className={classes.modalTitle}>신용/체크 카드 등록</span>
                <button className={classes.closeButton}><CloseRoundedIcon onClick={handler} /></button>
            </div>

            <div className={classes.modalItem}>
                <div>카드 번호</div>
                <div><input className={classes.modalNumberInput} type="number" placeholder="0000 - 0000 - 0000 - 0000" /></div>
            </div>

            <div className={classes.modalItem}>
                <div>카드 유효기간</div>
                <div className={classes.selectBox}>
                    <select name="cardMonth">
                        {month.map((item, index) => (
                            <option value={item} key={index}>{item}</option>
                        ))}
                    </select>
                    <select name="cardYear">
                        {year.map((item, index) => (
                            <option value={item} key={index}>{item}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className={classes.modalItem}>
                <div className={classes.itemBox}>
                    <div>
                        <div>카드 비밀번호 앞 2자리</div>
                        <div><input className={classes.modalNumberInput2} type="number" placeholder="앞 2자리를 입력해주세요" /></div>
                    </div>
                    <div>
                        <div>소유주 생년월일</div>
                        <div><input className={classes.modalNumberInput2} type="number" placeholder="예)920101" /></div>
                    </div>
                </div>
            </div>

            <div>
                <label className={classes.basicAdd}><input type="checkbox" name="basicPayment" value="yes" defaultChecked /> 기본 결제수단으로 등록</label>
            </div>

            <div><button className={classes.saveShippingBtn}>등록 완료</button></div>
            
        </div>
    );
}

export default MyPaymentCardModal;