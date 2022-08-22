import React from "react";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import classes from "../Modals/modals.module.css";

const MyShippingSettingModal = ({handler}) => {
    return(
        <div className={classes.modalContent}>
            <div className={classes.modalTop}>
                <span className={classes.modalTitle}>배송지 추가</span>
                <button className={classes.closeButton}><CloseRoundedIcon onClick={handler} /></button>
            </div>

            <div className={classes.modalItem}>
                <div>받는 사람</div>
                <div><input className={classes.modalNameInput} type="text" placeholder="받는 분 성함을 입력해주세요." /></div>
            </div>

            <div className={classes.modalItem}>
                <div>주소</div>
                <div><input className={classes.modalAddInput} type="text" placeholder="받는 분의 주소를 입력해주세요." /></div>
            </div>

            <div className={classes.modalItem}>
                <div>받는 사람 휴대폰 번호</div>
                <div><input className={classes.modalPhoneInput} type="text" placeholder="받는 분 휴대폰 번호를 입력해주세요." /></div>
                <label><input type="checkbox" name="basicAddress" value="yes" /> 기본 배송지로 등록</label>
            </div>

            <div><button className={classes.saveShippingBtn}>등록 완료</button></div>

        </div>
    );
}

export default MyShippingSettingModal;