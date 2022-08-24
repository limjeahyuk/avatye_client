import React, {useState} from "react";
import axios from "axios";
import { Cookies } from 'react-cookie';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import classes from "../Modals/modals.module.css";

const MyPaymentAccountModal = ({handler}) => {
    const cookies = new Cookies();
    const token = cookies.get('user_token');
    const [payAccountData, setPayAccountData] = useState({
        div : "BANK",
        bank : "",
        accountNumber : "",
        userName : "",
        userBirth : ""
    })

    const {div, bank, accountNumber, userName, userBirth} = payAccountData;

    const valueChange = (e) => {
        const {name, value} = e.target
        setPayAccountData({
            ...payAccountData,
            [name] : value
        })
    }

    const banklist = ["농협", "우리은행", "SC은행", "삼성증권", "씨티은행", "대구은행", "부산은행", "광주은행", "제주은행", "경남은행",
             "새마을금고", "신협", "우체국", "하나은행", "신한은행", "산업은행", "기업은행", "국민은행", "외한은행", "유안타증권"]
    return(
        <div className={classes.modalContent}>
            <div className={classes.modalTop}>
                <span className={classes.modalTitle}>은행 계좌 등록</span>
                <button className={classes.closeButton}><CloseRoundedIcon onClick={handler} /></button>
            </div>

            <div className={classes.modalItem}>
                <div>결제 은행</div>
                <div className={classes.selectBox}>
                    <select className={classes.selectBank} name="paymentBank">
                        {banklist.map((item, index) => (
                            <option value={item} key={index}>{item}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className={classes.modalItem}>
                <div>계좌 번호</div>
                <div><input className={classes.modalNumberInput} type="number" placeholder="공백, -없이 입력해주세요." /></div>
            </div>

            <div className={classes.modalItem}>
                <div className={classes.itemBox}>
                    <div>
                        <div>예금주명</div>
                        <div><input className={classes.modalNumberInput2} type="number" placeholder="예금주 명을 입력해주세요." /></div>
                    </div>
                    <div>
                        <div>예금주 생년월일</div>
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

export default MyPaymentAccountModal;