import React from "react";
import classes from './Login.module.css'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import AppleIcon from '@mui/icons-material/Apple';
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import MailIcon from '@mui/icons-material/Mail';
import { Link, useNavigate } from "react-router-dom";
import BoltIcon from '@mui/icons-material/Bolt';

const Join = () => {
     const navigator = useNavigate();

    return <div>
        <div className={classes.logo}><img alt="logo" src="/logo.png" onClick={() => navigator('/')} /></div>
        <div className={`${classes.png} ${classes.join}`}></div>
        <div className={classes.login}>
            <div>
                <div className={`${classes.cont} ${classes.join}`}>
                    <p>회원가입</p>
                </div>
                <a href="http://localhost:3000/user/kakao">
                <button className={classes.joinbtn}>
                        <div className={classes.btn}>
                        < ChatBubbleIcon />
                        <p>카카오로 가입하기</p>
                    </div> 
                    <div className={classes.word}>
                    <div><BoltIcon /></div>
                    <span>3초만에 빠른 회원가입</span>
                </div>
                    </button>
                    </a>
                
                <div className={classes.wrapper}>
                    <div>
                        <span>다른방법으로 회원가입</span>
                    </div>
                </div>
                <div className={classes.circle}>
                    <button className={classes.naver}>N</button>
                    <button className={classes.face}>< FacebookTwoToneIcon /></button>
                    <button className={classes.apple}><AppleIcon /> </button>
                    <button className={classes.mail}><MailIcon/> </button>
                </div>
                <div className={classes.idno}>
                    이미 계정이 있으신가요?
                    <Link to='/login'>로그인</Link>
                </div>
            </div>
        </div>
    </div>
}

export default Join;