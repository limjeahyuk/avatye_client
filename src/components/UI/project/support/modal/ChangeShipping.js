import React from "react";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import classes from './modal.module.css';
import SupportCard from '../../detail/cards/SupportCard'

const ChangeShipping = ({handler}) => {
    return(
        <div className={classes.modalContent}>
            <div className={classes.modalTop}>
                <span className={classes.modalTitle}>선물 변경</span>
                <button className={classes.closeButton}><CloseRoundedIcon onClick={handler} /></button>
            </div>

            <div className={classes.modalItem}>
                <div className={classes.createGiftBox}>
                    {/* <SupportCard /> */}
                    <div>
                        <div className={classes.flexDiv}>
                            <div className={classes.giftCount}>✓ 3 명이 선택</div>
                            <div className={classes.giftStock}>100개 남음</div>
                        </div>
                        <div>
                            <span className={classes.giftPrice}>100000원+</span>
                        </div>
                        <div className={classes.giftDetail}>야호</div>
                        <div>
                            <ul className={classes.giftTitle}>
                                <li>선물 어쩌꾸저쩌꾸꾸꾸꾺</li>
                            </ul>
                        </div>
                    </div> 
                </div>
                
            </div>

        </div>
    )
}

export default ChangeShipping