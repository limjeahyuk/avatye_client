import React from "react";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import classes from "./mypage.module.css";

const MySettingModal = ({handler}) => {
    return(
        <div className={classes.modalContent}>
            <div>
                배송지 추가
                <button><CloseRoundedIcon onClick={handler} /></button>
            </div>

            <div>
                <div>받는 사람</div>
                <div><input type="text" placeholder="받는 분 성함을 입력해주세요." /></div>
            </div>

            <div>
                <div>주소</div>
                <div><input type="text" placeholder="받는 분의 주소를 입력해주세요." /></div>
            </div>

            <div>
                <div>받는 사람 휴대폰 번호</div>
                <div><input type="text" placeholder="받는 분 휴대폰 번호를 입력해주세요." /></div>
                <label><input type="checkbox" name="basicAddress" value="yes" /> 기본 배송지로 등록</label>
            </div>

        </div>
    );
}

export default MySettingModal;