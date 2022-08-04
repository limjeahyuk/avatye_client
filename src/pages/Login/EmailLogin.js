import React from "react";
import { Link } from "react-router-dom";
import classes from './Login.module.css';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

const EmailLogin = () => {
    return <div className={classes.emailjoin}>
        <div className={classes.logo}>
            <img src="/logo.png" alt="logo" />
        </div>
        <div className={classes.form}>
            <h2>이메일로 가입하기</h2>
            <form>
                <div className={classes.name}>
                    <label>이름</label>
                    <input type="text" placeholder="사용하실 이름을 입력해주세요." />
                </div>
                <div className={classes.email}>
                    <label>이메일</label>
                    <input type="text" placeholder="이메일 주소를 입력해주세요." />
                    <input type="text" placeholder="이메일 주소를 확인합니다." />
                </div>
                <div className={classes.pwd}>
                    <label>비밀번호</label>
                    <input type="text" placeholder="비밀번호를 입력해주세요." />
                    <input type="text" placeholder="비밀번호를 확인합니다." />
                </div>
                <button className={classes.btn}>가입하기</button>
            </form>
            <div className={classes.before}>
                이미 텀블벅 계정이 있으신가요?
                <Link to='/login'>기존 계정으로 로그인하기</Link>
            </div>
            <div className={classes.or}>
                <div className={classes.left} />
                <span>또는</span>
                <div className={classes.right} />
            </div>
            <a href="/">
                <img src="/kakaostart.png" alt="kakao" className={classes.kakaologin} />
            </a>
            

        </div>

    </div>
}

export default EmailLogin;