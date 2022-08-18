import React from "react";
import classes from '../mypage.module.css'
import { useNavigate } from "react-router-dom";


const SettingAccountTab = () => {
    const navigater = useNavigate();

    return( 
        <div className={classes.settingBox}>
            <div className={classes.settingItemList}>
                <div className={classes.settingItem}>
                    {/* 이메일 */}
                    <div className={classes.ItemTitle}>
                        <span>이메일</span>
                        <button className={classes.changeBTN}>변경</button>
                    </div>
                    <div>~~userEmail~~</div>
                </div>
                <div className={classes.settingItem}>
                    {/* 비밀번호 */}
                    <div className={classes.ItemTitle}>
                        <span>비밀번호</span>
                        <button className={classes.changeBTN}>변경</button>
                    </div>
                </div>
                <div className={classes.settingItem}>
                    {/* 연락처 */}
                    <div className={classes.ItemTitle}>
                        <span>연락처</span>
                        <button className={classes.changeBTN}>변경</button>
                    </div>
                    <div>01048302092</div>
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