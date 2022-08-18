import React from "react";
import classes from '../mypage.module.css'
import { useNavigate } from "react-router-dom";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const SettingShippingTab = () => {
    const navigater = useNavigate();

    return( 
        <div className={classes.settingBox}>
            <div className={classes.settingItemList}>
                <div className={classes.settingItem}>
                    {/* 등록된 결제수단 */}
                    <div className={classes.ItemTitle}>
                        <span>프로필 사진</span>
                        <button className={classes.changeBTN}>+ 추가</button>
                    </div>
                    <div className={classes.payMethod}>
                        <div className={classes.noValueBox}>
                            <div><ErrorOutlineIcon className={classes.iconWidth}/></div>
                            <div>등록된 배송지가 없습니다.</div>
                            <div>배송지를 추가해주세요. </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className={classes.settingInfo}>
                <div className={classes.settingInfoTitle}>배송지를 삭제하면 예약된 후원의 배송지 정보도 삭제되나요?</div>
                <div>
                    현재 후원하신 프로젝트에 등록된 배송지가 삭제되거나 변경되진 않습니다. 이를 변경하시려면 후원현황에서 변경해주세요.
                    <span className={classes.settingInfoLink}onClick={()=> {navigater('/mypage')}}> 내 후원현황 바로가기</span>
                </div>
            </div>
        </div>
        );
}

export default SettingShippingTab