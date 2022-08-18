import React, {useState} from "react";
import classes from '../mypage.module.css'
import { useNavigate } from "react-router-dom";

const SettingAccountTab = () => {
    const navigater = useNavigate();
    const [changePW, setChangePW] = useState(false);
    const [changePhone, setChangePhone] = useState(false);
    
    const pwChange = () => {
        if (changePW) {
            setChangePW(false)
        } else {
            setChangePW(true)
        }
    }

    const phoneChange = () => {
        if (changePhone) {
            setChangePhone(false)
        } else {
            setChangePhone(true)
        }
    }


    return( 
        <div className={classes.settingBox}>
            <div className={classes.settingItemList}>
                <div className={classes.settingItem}>
                    {/* 이메일 */}
                    <div className={classes.ItemTitle}>
                        <span>이메일</span>
                    </div>
                    <div>axios email</div>
                </div>

                <div className={classes.settingItem}>
                    {/* 비밀번호 */}
                    <div className={classes.ItemTitle}>
                        <span>비밀번호</span>
                        {changePW? <button onClick={pwChange} className={classes.cancelBTN}>취소</button> : 
                            <button onClick={pwChange} className={classes.changeBTN}>변경</button>}
                    </div>
                    {changePW ? <div>
                                    <div className={classes.currPW}>
                                        <div>현재 비밀번호</div>
                                        <div><input className={classes.nameInput} type="text" placeholder="현재 비밀번호"/></div>
                                    </div>

                                    <div>변경할 비밀번호</div>
                                    <div><input className={classes.nameInput} type="text" placeholder="변경할 비밀번호"/></div>
                                    <div><input className={classes.nameInput} type="text" placeholder="변경할 비밀번호 확인"/></div>
                                    <button className={classes.saveImg}>저장</button>
                                </div>
                                 :  
                                <div></div>}
                </div>

                <div className={classes.settingItem}>
                    {/* 연락처 */}
                    <div className={classes.ItemTitle}>
                        <span>연락처</span>
                        {changePhone? <button onClick={phoneChange} className={classes.cancelBTN}>취소</button> : 
                            <button onClick={phoneChange} className={classes.changeBTN}>변경</button>}
                    </div>
                    {changePhone ? <div>
                                    <input className={classes.nameInput} type="text" />
                                    <div><button className={classes.saveImg}>저장</button></div>
                                </div>
                                 :  
                                <div>axios 연락처</div>}
                </div>

                <div className={classes.settingItem}>
                    {/* 카카오톡 계정 연동 */}
                    <div className={classes.ItemTitle}>
                        <span>카카오 계정 연동</span>
                        <button className={classes.changeBTN}>연동</button>
                    </div>
                    <div>✓ 연동중입니다</div>
                </div>

                <div className={classes.settingItem}>
                    {/* 회원탈퇴 */}
                    <div className={classes.ItemTitle}>
                        <span>회원탈퇴</span>
                        <button className={classes.changeBTN}>탈퇴</button>
                    </div>
                </div>
            </div>


            <div className={classes.settingInfo}>
                <div className={classes.settingInfoTitle}>이메일과 연락처는 어디에 쓰이나요?</div>
                <div>
                이메일과 연락처로 프로젝트, 후원 및 결제 관련 알림을 드립니다. 배송 받는 분의 연락처는 개별 후원내역에서 변경해주세요.
                    <span className={classes.settingInfoLink}onClick={()=> {navigater('/mypage')}}> 내 후원현황 바로가기</span>
                </div>
            </div>
        </div>
    );
}

export default SettingAccountTab