import React, {useState} from "react";
import axios from "axios";
import { Cookies } from 'react-cookie';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import classes from "../Modals/modals.module.css";

const MyPaymentCardModal = ({handler}) => {
    const cookies = new Cookies();
    const token = cookies.get('user_token');
    const [cardData, setCardData] = useState({
        div : "card",
        cardNumber : "",
        selectMonth : "",
        selectYear : "",
        cardPassword : "",
        userBirth : ""
    })

    const {div, cardNumber, selectMonth, selectYear, cardPassword, userBirth} = cardData;

    const valueChange = (e) => {
        const {name, value} = e.target
        setCardData({
            ...cardData,
            [name] : value
        })
    }

    //카드 등록
    const insertCard = () => {
        const data = {
            div : div,
            cardNumber: cardNumber,
            cardEndDate : selectYear + "/" +selectMonth,
            cardPassword : cardPassword,
            userBirth : userBirth
        }
        console.log(data)
        axios.post('http://localhost:3000/user/payment', data, {headers: {user_token : token}}).
        then(()=> {
            alert("카드가 추가되었습니다.");
            handler();
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
    
    console.log(cardData)

    return(
        <div className={classes.modalContent}>
            <div className={classes.modalTop}>
                <span className={classes.modalTitle}>신용/체크 카드 등록</span>
                <button className={classes.closeButton}><CloseRoundedIcon onClick={handler} /></button>
            </div>

            <div className={classes.modalItem}>
                <div>카드 번호</div>
                <div><input className={classes.modalNumberInput} name="cardNumber" value={cardNumber} onChange={valueChange} type="text" placeholder="0000 - 0000 - 0000 - 0000" autoFocus/></div>
            </div>

            <div className={classes.modalItem}>
                <div>카드 유효기간</div>
                <div className={classes.selectBox}>
                    <select name="selectMonth" onChange={valueChange}>
                        {month.map((item, index) => (
                            <option value={item} key={index}>{item}</option>
                        ))}
                    </select>
                    <select name="selectYear" onChange={valueChange}>
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
                        <div><input className={`${classes.modalNumberInput2} ${cardPassword < 1 && classes.valiNoOutline}`} name="cardPassword" value={cardPassword} onChange={valueChange} type="password" placeholder="앞 2자리를 입력해주세요"/></div>
                        {!cardPassword && <div className={classes.valiNo}>비워두시면 안됩니다.</div>}
                    </div>
                    <div>
                        <div>소유주 생년월일</div>
                        <div><input className={`${classes.modalNumberInput2} ${userBirth < 1 && classes.valiNoOutline}`} name="userBirth" value={userBirth} onChange={valueChange} type="number" placeholder="예)920101" /></div>
                        {!userBirth && <div className={classes.valiNo}>비워두시면 안됩니다.</div>}
                    </div>
                </div>
            </div>

            <div>
                <label className={classes.basicAdd}><input type="checkbox" name="basicPayment" value="yes" defaultChecked /> 기본 결제수단으로 등록</label>
            </div>

            <div><button onClick={insertCard} className={classes.saveShippingBtn}>등록 완료</button></div>
            
        </div>
    );
}

export default MyPaymentCardModal;