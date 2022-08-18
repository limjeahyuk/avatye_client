import React from "react";
import classes from '../mypage.module.css'
import { useNavigate } from "react-router-dom";

const SettingProfileTab = () => {
    const navigater = useNavigate();

    return( 
        <div className={classes.settingBox}>
            <div className={classes.settingItemList}>
                <div className={classes.settingItem}>
                    {/* 프로필 사진 */}
                    <div className={classes.ItemTitle}>
                        <span>프로필 사진</span>
                        <button className={classes.changeBTN}>변경</button>
                    </div>
                    <div><img src="/images/profile.jpg" alt="userImage" /></div>
                </div>
                <div className={classes.settingItem}>
                    {/* 이름 */}
                    <div className={classes.ItemTitle}>
                        <span>이름</span>
                        <button className={classes.changeBTN}>변경</button>
                    </div>
                    <div>~~user 이름 뜨는 부분~~</div>
                </div>
                <div className={classes.settingItem}>
                    {/* 사용자 이름(URL) */}
                    <div className={classes.ItemTitle}>
                        <span>사용자 이름(URL)</span>
                        <button className={classes.changeBTN}>변경</button>
                    </div>
                    <div>http://www.tumblbug.com/u/<strong>URL넣기</strong></div>
                </div>
                <div className={classes.settingItem}>
                    {/* 소개 */}
                    <div className={classes.ItemTitle}>
                        <span>소개</span>
                        <button className={classes.changeBTN}>변경</button>
                    </div>
                    <div>~~소개 적는 부분~~</div>
                </div>
                <div className={classes.settingItem}>
                    {/* 웹사이트 */}
                    <div className={classes.ItemTitle}>
                        <span>웹사이트</span>
                        <button className={classes.changeBTN}>변경</button>
                    </div>
                    <div>~~웹사이트 적는 부분~~</div>
                </div>
                <div className={classes.settingItem}>
                    {/* 프라이버시 */}
                    <div className={classes.ItemTitle}>
                        <span>프라이버시</span>
                        <button className={classes.changeBTN}>변경</button>
                    </div>
                    <div>✓ 후원한 프로젝트 목록을 공개합니다.</div>
                </div>
            </div>


            <div className={classes.settingInfo}>
                <div className={classes.settingInfoTitle}>어떤 정보가 프로필에 공개되나요?</div>
                <div>
                    프로필 사진과, 이름, 사용자 이름, 소개글, 웹사이트 및 회원님과 관련된 프로젝트 등이 프로필 페이지에 공개 됩니다. 
                    프라이버시 설정을 활성화하시면 후원한 프로젝트 목록을 숨길 수 있습니다. 
                    <span className={classes.settingInfoLink}onClick={()=> {navigater('/mypage')}}> 내 프로필 바로가기</span>
                </div>
            </div>
        </div>
        );
}

export default SettingProfileTab