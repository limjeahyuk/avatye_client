import React from "react";
import SmsIcon from '@mui/icons-material/Sms';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import classes from '../detail.module.css'

const UpdateCard = ({Datas}) => {
    return (
        <div>
            <div className={classes.updatebox}>
                <div className={classes.updatecontent}>
                    <div className={classes.sellerinfo}>
                        <div className={classes.sellerprofile}>
                            <img src={`${Datas.profileImage}`} alt="profile" />
                        </div>
                        <div>
                            <span className={classes.sellername}>{Datas.nickName}</span>
                            <div className={classes.sellerlogin}>
                                <span className={classes.seller}>★<span className={classes.sellerjob}>창작자</span></span>
                                <span className={classes.writetime}><span className={classes.dot}>・</span><span>글 작성시간</span></span>
                            </div>
                        </div>
                    </div>
                    <div className={classes.contentbox}>
                        <div className={classes.content} dangerouslySetInnerHTML={{__html: Datas.contents}}>
                            {/* {Datas.contents} */}
                        </div>
                        <div className={classes.view}></div>
                    </div>
                    <div className={classes.chat}>
                        <div><SmsIcon className={classes.chaticon}/> {Datas.commentcount}</div>
                        <div>더보기 <ArrowForwardIcon className={classes.chaticon}/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateCard