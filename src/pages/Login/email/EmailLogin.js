import React from "react";
import classes from './Email.module.css'
import AppleIcon from '@mui/icons-material/Apple';
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import MailIcon from '@mui/icons-material/Mail';
import { Link, useNavigate } from "react-router-dom";

const EmailLogin = () => {
    
    // 카카오 로그인 관련 계정
const kakao = {
  clientID: process.env.REACT_APP_CLIENTID,
  clientSecret: process.env.REACT_APP_CLIENTSECRET,
  redirectUri: process.env.REACT_APP_REDIRECTURI
}

    const navigator = useNavigate();

    return <div>
        <div className={classes.logo}><img alt="logo" src="/logo.png" onClick={() => navigator('/')} /></div>
        <div className={classes.png}></div>
        <div className={classes.login}>
            <div>

        <h2>이메일로 로그인</h2>
                <form>
                    <div>
                        <label>이메일 주소</label>
                        <input type="email" />
                    </div>
                    <div>
                        <label>비밀번호</label>
                        <input type="password"/>
                    </div>
                    <button>로그인</button>
                </form>
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
                    <div>
                        아직 텀블벅 계정이 없으신가요?
                        <Link to='/join'>회원가입</Link>
                    </div>
                    <div>
                        혹시 비밀번호를 잊으셨나요?
                        <Link to='/join'>비밀번호재설정</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default EmailLogin;