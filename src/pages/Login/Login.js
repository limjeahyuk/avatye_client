import React from "react";
import classes from './Login.module.css'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import AppleIcon from '@mui/icons-material/Apple';
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import MailIcon from '@mui/icons-material/Mail';
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

    // 카카오 로그인 관련 계정
const kakao = {
  clientID: '630231afd01507218d07fba06f16720d',
  clientSecret: 'LRpqtId10A8c7UkqYfEuh51fKLyWSiQv',
  redirectUri: 'http://192.168.0.28:8080/kakao/callback'
}

    const navigator = useNavigate();

    return <div>
        <div className={classes.logo}><img alt="logo" src="/logo.png" onClick={() => navigator('/')} /></div>
        <div className={classes.png}></div>
        <div className={classes.login}>
            <div>
                <div className={classes.cont}>
                    <p>간편하게 로그인하고</p>
                    <p>세상에 하나뿐인 <br /> 특별한 프로젝트를 발견해보세요.  </p>
                </div>
                <a href={`https://kauth.kakao.com/oauth/authorize?client_id=${kakao.clientID}&redirect_uri=${kakao.redirectUri}&response_type=code&scope=profile_nickname,profile_image,account_email,birthday,`}>
                <button className={classes.loginbtn}>
                        < ChatBubbleIcon />
                        <p>카카오로 로그인</p> 
                    </button>
                    </a>
                <div className={classes.wrapper}>
                    <div>
                        <span>다른방법으로 로그인</span>
                    </div>
                </div>
                <div className={classes.circle}>
                    <button className={classes.naver}>N</button>
                    <button className={classes.face}>< FacebookTwoToneIcon /></button>
                    <button className={classes.apple}><AppleIcon /> </button>
                    <button className={classes.mail} onClick={() => navigator('/login/email')}><MailIcon/> </button>
                </div>
                <div className={classes.idno}>
                    아직 텀블벅 계정이 없으신가요?
                    <Link to='/join'>회원가입</Link>
                </div>
            </div>
        </div>
    </div>
}

export default Login;