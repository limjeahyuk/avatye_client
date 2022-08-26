import React from "react";

import classes from '../detail.module.css'
import CheckIcon from '@mui/icons-material/Check';
import { useNavigate } from "react-router-dom";

const SupportCard = ({Data}) => {

    let navigater = useNavigate()

    return (
        <div className={classes.rewardcards}>
            <div className={classes.rewardcard}>
                <div className={classes.rewardcontent} onClick={() => navigater('/support')}>
                    <div className={classes.rewardcheck}> <CheckIcon className={classes.rewardicon}/> {Data.giftStock}명이 선택 <span className={classes.rewardcount}><span>{Data.giftCount}개 남음</span></span></div>
                    <div className={classes.rewardbox}>
                        <div className={classes.rewardprice}>{Data.giftPrice}원 +</div>
                        <div className={classes.rewardgift}>{Data.giftTitle}</div>
                    </div>
                    <ul className={classes.rewarditemlist}>
                        <li className={classes.rewarditem}>{Data.giftDetail}</li>
                    </ul>
                    {/* <div>예상 전달일</div>
                    <div>
                        <div></div>
                        <div></div>
                    </div>
                    <button></button> */}
                </div>
            </div>
        </div>
    )
}

export default SupportCard