import React, {useState} from "react";
import axios from "axios";
import { Cookies } from 'react-cookie';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import classes from "../Modals/modals.module.css";

const MyShippingSettingModal = ({handler}) => {
    const cookies = new Cookies();
    const token = cookies.get('user_token');
    const [shippingData, setShippingData] = useState({
        userName : "",
        address : "",
        phone : ""
    })

    const {userName, address, phone} = shippingData;

    const valueChange = (e) => {
        const {name, value} = e.target
        setShippingData({
            ...shippingData,
            [name] : value
        })
    }

    //배송지 추가
    const insertShipping = () => {
        const data = {
            userName : userName,
            address : address,
            phone : phone
        }
        axios.post('http://localhost:3000/user/shipping', data, {headers: {user_token : token}}).
        then(()=> {
            console.log("shipping 목록에 성공적으로 추가되었습니다.");
            alert("배송지가 추가되었습니다.");
            handler();
        })
    }

    return(
        <div className={classes.modalContent}>
            <div className={classes.modalTop}>
                <span className={classes.modalTitle}>배송지 추가</span>
                <button className={classes.closeButton}><CloseRoundedIcon onClick={handler} /></button>
            </div>

            <div className={classes.modalItem}>
                <div>받는 사람</div>
                <div><input className={classes.modalNameInput} name="userName" value={userName} onChange={valueChange} type="text" placeholder="받는 분 성함을 입력해주세요." /></div>
            </div>

            <div className={classes.modalItem}>
                <div>주소</div>
                <div><input className={classes.modalAddInput} name="address" value={address} onChange={valueChange} type="text" placeholder="받는 분의 주소를 입력해주세요." /></div>
            </div>

            <div className={classes.modalItem}>
                <div>받는 사람 휴대폰 번호</div>
                <div><input className={classes.modalPhoneInput} name="phone" value={phone} onChange={valueChange} type="text" placeholder="받는 분 휴대폰 번호를 입력해주세요." /></div>
                <label><input type="checkbox" name="basicAddress" value="yes" /> 기본 배송지로 등록</label>
            </div>

            <div><button onClick={insertShipping} className={classes.saveShippingBtn}>등록 완료</button></div>

        </div>
    );
}

export default MyShippingSettingModal;