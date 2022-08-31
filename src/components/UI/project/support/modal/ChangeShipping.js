import React, { useState } from "react";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import classes from '../../detail/detail.module.css';
import SupportCard from '../../detail/cards/SupportCard'

const ChangeShipping = ({handler, Data}) => {

    const [support, setSupport] = useState(Data)

    return(
        <div className={classes.modalContent}>
            <div className={classes.modalTop}>
                <span className={classes.modalTitle}>선물 변경</span>
                <button className={classes.closeButton}><CloseRoundedIcon onClick={handler} /></button>
            </div>

            <div className={classes.supportbox}>
                <div className={classes.supportcard}>
                    <div className={classes.rewardcards}>
                        <div className={classes.rewardcard}>
                            <div className={classes.rewardcontent}>
                                <div className={classes.rewardbox}>
                                    <div className={classes.rewardprice}>1000원 +</div>
                                    <div className={classes.rewardgift}>선물없이 후원하기</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {support.map((data) => (
                        <SupportCard Data={data} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ChangeShipping