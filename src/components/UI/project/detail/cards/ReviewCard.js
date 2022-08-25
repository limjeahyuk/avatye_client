import React from "react";

import SmsIcon from '@mui/icons-material/Sms';
import classes from '../detail.module.css'

const ReviewCard = ({data}) => {
    return (
        <div>
            <div className={classes.commentlist}>
                <div className={classes.reviewcontent}>
                    <div className={classes.buyerinfo}>
                        <div className={classes.buyerprofile}>
                            <img src={`${data.profileImage}`} alt="profile" />
                        </div>
                        <div>
                            <span className={classes.buyername}>{data.nickName}</span>
                            <div className={classes.buyerlogin}>
                                <span className={classes.buyer}>응원글</span>
                                <span className={classes.writetime}><span className={classes.dot}>・</span><span>{data.uploadDate.slice(0,10).replace(/-/g,'.')}</span></span>
                            </div>
                        </div>
                    </div>
                    <div className={classes.reviewbox}>
                        <div className={classes.review}>
                            <div className={classes.reviewcomment} dangerouslySetInnerHTML={{__html: data.comment}}>
                            </div>
                        </div>
                        <div className={classes.view}></div>
                    </div>
                    <div className={classes.chat}>
                        <div><SmsIcon className={classes.chaticon}/> 12</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewCard