import React from "react";

import classes from '../detail.module.css'

const SupportCard = ({Data}) => {

    return (
        <div className={classes.rewardcards}>
            <div className={classes.rewardcard}>
                <div className={classes.rewardcontent}>
                    <div className={classes.rewardcheck}>{Data.giftStock}명이 선택 <span className={classes.rewardcount}><span>{Data.giftCount}개 남음</span></span></div>
                    <div className={classes.rewardbox}>
                        <div className={classes.rewardprice}>{Data.giftPrice}원 +</div>
                        <div className={classes.rewardgift}>{Data.giftDetail}</div>
                    </div>
                    <ul className={classes.rewarditemlist}>
                        <li className={classes.rewarditem}>{Data.giftTitle}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SupportCard