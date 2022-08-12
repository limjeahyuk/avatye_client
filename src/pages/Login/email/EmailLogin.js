import React, { useContext, useEffect, useReducer, useState } from "react";
import classes from './Email.module.css'
import AppleIcon from '@mui/icons-material/Apple';
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import { Link, useNavigate } from "react-router-dom";
import { loginReducer } from "./EmailJoinReducer";
import axios from "axios";
import AuthContext from "../../../store/auth-context";

const EmailLogin = () => {
    const navigater = useNavigate();
    const ctx = useContext(AuthContext);

    const [formChange, setFormChange] = useState(false);
    const [formValid, setFormValid] = useState(false);

    const [loginState, dispatchLogin] = useReducer(loginReducer, {
        emailValue: '',
        passwordValue: '',
        emailValid: '이메일을 작성해주세요.',
        passwordValid: '비밀번호를 작성해주세요.'
    })
    
    // 카카오 로그인 관련 계정
    const kakao = {
        clientID: process.env.REACT_APP_CLIENTID,
        clientSecret: process.env.REACT_APP_CLIENTSECRET,
        redirectUri: process.env.REACT_APP_REDIRECTURI
    }

    const navigator = useNavigate();

    const emailChangeHandler = (e) => {
        setFormChange(false);
        if (e.target.value.includes('@')) {
            dispatchLogin({ type: 'EMAIL_INPUT', val: e.target.value });
        } else {
            dispatchLogin({ type: 'EMAIL_ERROR', val: e.target.value });
        }
        
    }

    const passwordChangeHandler = (e) => {
        setFormChange(false)
        if (e.target.value.length < 6) {
            dispatchLogin({ type: 'PASSWORD_ERROR', val: String(e.target.value).replace(/ /g, "") })
        } else {
            dispatchLogin({ type: 'PASSWORD_INPUT', val: String(e.target.value).replace(/ /g, "") })
        }
    }

    const { emailValid: isEmailValid, passwordValid: isPasswordValid } = loginState;

    useEffect(() => {
        const identifier = setTimeout(() => {
            console.log('useEffect')
            setFormValid(isEmailValid === null && isPasswordValid === null);
        }, 500);

        return () => {
            console.log('clean')
            clearTimeout(identifier);
        }

    }, [isEmailValid, isPasswordValid]);

    const loginSubmitHandler = (e) => {
        e.preventDefault();

        if (formValid) {
            axios({
                url: "http://192.168.0.74:3000/user/login",
                method: 'post',
                data: {
                    userEmail: loginState.emailValue,
                    userPassword: loginState.passwordValue
                }
            }).then(function a(response) {
                if (response.data.login) {
                    ctx.onLogin(response.data.token, response.data.nickName);
                    navigater('/');
                } else {
                    setFormChange(true);
                    dispatchLogin({ type: 'LOGIN_FAILED' });
                }
            }).catch(function (error) {
                setFormChange(true);
                switch (error.response.data.errors[0].param) {
                    case "userEmail":
                        dispatchLogin({ type: 'EMAIL_FAILED' });
                        break;
                    case "userPassword":
                        dispatchLogin({ type: 'PASSWORD_FAILED' });
                        break;
                    default:
                        console.log("omg");
                        break;
                }
            })
        } else {
            setFormChange(true);
        }
        

    }

    return <div>
        <div className={classes.logo}><img alt="logo" src="/logo.png" onClick={() => navigator('/')} /></div>
        <div className={classes.png}></div>
        <div className={classes.login}>
            <div>

                <h2>이메일로 로그인</h2>
                <form onSubmit={loginSubmitHandler}>
                    <div>
                        <label>이메일 주소</label>
                        <input
                            type="email"
                            value={loginState.emailValue}
                            onChange={emailChangeHandler}
                            placeholder="이메일 주소를 입력해주세요."
                            className={`${formChange && loginState.emailValid !== null && classes.redborder}`}
                        />
                        {formChange && <div>{loginState.emailValid}</div>}
                    </div>
                    <div>
                        <label>비밀번호</label>
                        <input
                            type="password"
                            value={loginState.passwordValue}
                            onChange={passwordChangeHandler}
                            placeholder="비밀번호를 입력해주세요."
                            className={`${formChange && loginState.passwordValid !== null && classes.redborder}`}
                        />
                        {formChange && <div>{loginState.passwordValid}</div>}
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
                    <a href={`https://kauth.kakao.com/oauth/authorize?client_id=${kakao.clientID}&redirect_uri=${kakao.redirectUri}&response_type=code&scope=profile_nickname,profile_image,account_email,birthday,`}>
                        <img src="/kakao.png" alt="kakao" />
                    </a>
                </div>
                <div className={classes.idno}>
                    <div>
                        아직 텀블벅 계정이 없으신가요?
                        <Link to='/join'>회원가입</Link>
                    </div>
                    <div>
                        혹시 비밀번호를 잊으셨나요?
                        <Link to='/join'>비밀번호 재설정</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default EmailLogin;