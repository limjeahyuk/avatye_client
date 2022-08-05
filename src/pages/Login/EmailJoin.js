import { SatelliteAlt } from "@mui/icons-material";
import React, { useReducer } from "react";
import { Link } from "react-router-dom";
import classes from './Login.module.css';

const nameReducer = (state, action) => {
        if (action.type === 'USER_INPUT') {
            return { value: action.val, isValid: action.val.trim().length>2 };
        }
        if (action.type === 'INPUT_BLUR') {
            return { value: state.value, isValid: state.value.trim().length>2 };
        }
        return { value: '', isValid: false };
}
    
const emailReducer = (state, action) => {
    if (action.type === 'EMAIL_INPUT') {
        if (!action.val.includes('@')) {
            return {emailValue: action.val,
                emailChackValid: state.emailChackValue,
                emailValid: '이메일 형식을 맞춰주세요.',
                emailChackValid: state.emailChackValid
            }
        } else {
            if (action.val === state.emailChackValue || state.emailChackValue === null) {
                return {
                    emailValue: action.val,
                    emailChackValue: state.emailChackValue,
                    emailValid: "good",
                    emailChackValid: state.emailChackValid
                }
            } else {
                return {
                    emailValue: action.val,
                    emailChackValue: state.emailChackValue,
                    emailValid: '주소가 일치하지 않습니다.',
                    emailChackValid: state.emailChackValid
                }
            }
        }
    }

    if (action.type === 'EMAILCHACK_INPUT') {
        if (!action.val.includes('@')) {
            return {emailValue: state.emailValue,
                emailChackValid: action.val,
                emailValid: state.emailValid,
                emailChackValid: "이메일 형식이 다릅니다."
            }
        } else {
            if (action.val === state.emailValue) {
                return {
                    emailValue: state.emailValue,
                    emailChackValue: action.val,
                    emailValid: state.emailValid,
                    emailChackValid: "good"
                }
            } else {
                return {
                    emailValue: state.emailValue,
                    emailChackValue: action.val,
                    emailValid: state.emailValid,
                    emailChackValid: '주소가 일치하지 않습니다.'
                }
            }
        }
    }
    return {emailValue: '', emailChackValue: '', emailValid: false, emailChackValid: false}
}

const passwordReducer = (state, action) => {
    
}


const EmailJoin = () => {
    const kakao = {
        clientID: process.env.REACT_APP_CLIENTID,
        clientSecret: process.env.REACT_APP_CLIENTSECRET,
        redirectUri: process.env.REACT_APP_REDIRECTURI
    }

    const [nameState, dispatchName] = useReducer(nameReducer, {
        value: '',
        isValid: null,
    });

    const [emailState, dispatchEmail] = useReducer(emailReducer, {
        emailValue: '',
        emailChackValue: '',
        emailValid: null,
        emailChackValid: null,
    })

    const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
        value: '',
        isValid: null
    })
    
   
    return <div className={classes.emailjoin}>
        <div className={classes.logo}>
            <img src="/logo.png" alt="logo" />
        </div>
        <div className={classes.form}>
            <h2>이메일로 가입하기</h2>
            <form>
                <div className={classes.name}>
                    <label>이름</label>
                    <input
                        type="text"
                        placeholder="사용하실 이름을 입력해주세요."
                        value={nameState.value}
                        onChange={(e) => dispatchName({type: 'USER_INPUT', val: e.target.value})}
                        onBlur={() => dispatchName({type: 'INPUT_BLUR'})}
                    />
                    {!nameState.isValid && <div>이름을 입력해주세요.</div>}
                </div>
                <div className={classes.email}>
                    <label>이메일</label>
                    <input type="email" placeholder="이메일 주소를 입력해주세요." value={emailState.emailValue} onChange={(e) => dispatchEmail({type: 'EMAIL_INPUT', val: e.target.value})}/>
                    {emailState.emailValid !== "good" && <div>{emailState.emailValid}</div>}
                    <input type="email" placeholder="이메일 주소를 확인합니다." value={emailState.emailChackValue} onChange={(e) => dispatchEmail({type: 'EMAILCHACK_INPUT', val: e.target.value})} />
                    {emailState.emailChackValid !== "good" && <div>{ emailState.emailChackValid}</div>}
                </div>
                <div className={classes.pwd}>
                    <label>비밀번호</label>
                    <input type="password" placeholder="비밀번호를 입력해주세요." />
                    <div>비밀번호를 입력해주세요.</div>
                    <input type="password" placeholder="비밀번호를 확인합니다." />
                    <div>비밀번호를 한번 더 입력해주세요.</div>
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
             <a href={`https://kauth.kakao.com/oauth/authorize?client_id=${kakao.clientID}&redirect_uri=${kakao.redirectUri}&response_type=code&scope=profile_nickname,profile_image,account_email,birthday,`}>
                    <img src="/kakaostart.png" alt="kakao" className={classes.kakaologin} />
            </a>
            

        </div>

    </div>
}

export default EmailJoin;