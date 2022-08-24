import React from "react";
import SmsIcon from '@mui/icons-material/Sms';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import classes from '../detail.module.css'

const UpdateCard = ({data}) => {
    return (
        <div>
            <div className={classes.updatebox}>
                <div className={classes.updatecontent}>
                    <div className={classes.sellerinfo}>
                        <div className={classes.sellerprofile}>
                            <img src={`${data.profileImage}`} alt="profile" />
                        </div>
                        <div>
                            <span className={classes.sellername}>{data.nickName}</span>
                            <div className={classes.sellerlogin}>
                                <span className={classes.seller}>★<span className={classes.sellerjob}>창작자</span></span>
                                <span className={classes.writetime}><span className={classes.dot}>・</span><span>{}</span>{data.uploadDate.slice(0,10)}</span>
                            </div>
                        </div>
                    </div>
                    <div className={classes.contentbox}>
                        <div className={classes.content} dangerouslySetInnerHTML={{__html: data.comment}}>
                        </div>
                        <div className={classes.view}></div>
                    </div>
                    <div className={classes.chat}>
                        <div><SmsIcon className={classes.chaticon}/> {data.commentcount}</div>
                        <div>더보기 <ArrowForwardIcon className={classes.chaticon}/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateCard