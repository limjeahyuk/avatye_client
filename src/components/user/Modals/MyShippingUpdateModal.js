import React, {useState} from "react";
import axios from "axios";
import { Cookies } from 'react-cookie';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import classes from "../Modals/modals.module.css";

const MyShippingUpdateModal = ({handler, data}) => {
    const cookies = new Cookies();
    const token = cookies.get('user_token');
    const [shippingData, setShippingData] = useState({
        shipIndex : data.shipIndex,
        userName : data.userName,
        address : data.address,
        phone : data.shipphone,
    })

    const {shipIndex, userName, address, phone} = shippingData;

    const valueChange = (e) => {
        const {name, value} = e.target
        setShippingData({
            ...shippingData,
            [name] : value
        })
    }

    // insert면 insert / update라면 update
    // props로 변경 해주자.
    // 배송지 수정
    const updateShipping = () => {
        const data = {
            shippingIndex : shipIndex,
            userName : userName,
            address : address,
            phone : phone
        };
        axios.put('http://localhost:3000/shipping', data, {headers: {user_token : token}}).
        then(()=> {
            console.log('배송지가 수정되었습니다.');
            alert("배송지가 수정되었습니다.");
            handler();
        })
    }

    return(
        <div className={classes.modalContent}>
            <div className={classes.modalTop}>
                <span className={classes.modalTitle}>배송지 수정</span>
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

            <div><button onClick={()=> updateShipping()} className={classes.saveShippingBtn}>등록 완료</button></div>

        </div>
    );
}

export default MyShippingUpdateModal;