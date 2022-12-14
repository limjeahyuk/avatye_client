import React, { useEffect, useReducer, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { emailReducer, nameReducer, passwordReducer } from "./EmailJoinReducer";
import classes from './Email.module.css';
import axios from "axios";

const EmailJoin = () => {
    const navigater = useNavigate();

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
        passwordValue: '',
        passwordChackValue: '',
        passwordValid: null,
        passwordChackValid: null
    })

    const [formValid, setFormValid] = useState(false);

    const emailHandler = (e) => {
        if (e.target.value.includes('@')) {
            dispatchEmail({type: 'EMAIL_INCLUDE', val: e.target.value})           
        } else {
            dispatchEmail({type: 'EMAIL_ERROR', val: e.target.value})
        }

    }

    const emailChackHandler = (e) => {
        if (e.target.value.includes('@')) {
            dispatchEmail({type: 'EMAILCHACK_INCLUDE', val: e.target.value})
        } else {
            dispatchEmail({type: 'EMAILCHACK_ERROR', val: e.target.value})   
        }
    }

    const passwordHandler = (e) => {
        if (e.target.value.length < 6) {
            dispatchPassword({type: 'PASSWORD_ERROR', val: String(e.target.value).replace(/ /g,"")})
        } else {
            dispatchPassword({type: 'PASSWORD_INPUT', val: String(e.target.value).replace(/ /g,"")})
        }
    }

    const passwordChackHandler = (e) => {
        if (e.target.value.length < 6) {
            dispatchPassword({type: 'PASSWORDCHACK_ERROR', val: String(e.target.value).replace(/ /g,"")})
        } else {
            dispatchPassword({type: 'PASSWORDCHACK_INPUT', val: String(e.target.value).replace(/ /g,"")})
        }
    }

    const { isValid: nameIsValid } = nameState;
    const { emailValid: isEmailValid, emailChackValid: isEmailChackValid } = emailState;
    const { passwordValid: isPasswordValid, passwordChackValid: isPasswordChackValid } = passwordState;

    useEffect(() => {
        const identifier = setTimeout(() => { 
        console.log('useEffect')
        setFormValid(nameIsValid && isEmailValid === 'good' && isEmailChackValid === 'good' && isPasswordValid === 'good' && isPasswordChackValid === 'good');
    }, 500);

    return () => {
        console.log('clean');
        clearTimeout(identifier);
    };

    }, [nameIsValid, isEmailValid, isEmailChackValid, isPasswordValid, isPasswordChackValid])


    // ???????????? ????????? ???.
    const submitHandler = (e) => {
        e.preventDefault();
        if (formValid) {
            const userData = {
                userNickName: nameState.value,
                userEmail: emailState.emailValue,
                userPassword: passwordState.passwordValue
            }

            axios({
                url: "http://localhost:3000/user/join",
                method: 'post',
                data: userData
            }).then(function a(response) {
                console.log(response.data);
                switch (response.data) {
                    case "article":
                        dispatchEmail({ type: 'EMAIL_ARTICLE' });
                        break;
                    case "OK":
                        alert("???????????? ?????????????????????.");
                        navigater('/login/email');
                        break;
                    default:
                        console.log("wow");
                        break;
                }
            }).catch(function (error) {
                switch (error.response.data.errors[0].param) {
                    case "userEmail":
                        dispatchEmail({ type: 'EMAIL_FAILED' });
                        break;
                    case "userNickName":
                        dispatchName({ type: 'NAME_FAILED' });
                        break;
                    case "userPassword":
                        dispatchPassword({ type: 'PASSWORD_FAILED' });
                        break;
                    default:
                        console.log("omg");
                        break;
                }
            });
        } else {
            console.log('false');
        }
    }
   
    return <div className={classes.emailjoin}>
        <div className={classes.logo}>
            <img src="/logo.png" alt="logo" onClick={() => navigater('/')}/>
        </div>
        <div className={classes.form}>
            <h2>???????????? ????????????</h2>
            <form onSubmit={submitHandler}>
                <div className={classes.name}>
                    <label>??????</label>
                    <input
                        type="text"
                        placeholder="???????????? ????????? ??????????????????."
                        value={nameState.value}
                        onChange={(e) => dispatchName({type: 'USER_INPUT', val: e.target.value})}
                        onBlur={() => dispatchName({ type: 'INPUT_BLUR' })}
                        maxLength='20'
                        className={`${nameIsValid === false && classes.redborder}`}
                        
                    />
                    {nameIsValid === false && <div>????????? 3??? ??????, 20??? ????????? ???????????????.</div>}
                </div>
                <div className={classes.email}>
                    <label>?????????</label>
                    <input
                        type="email"
                        placeholder="????????? ????????? ??????????????????."
                        value={emailState.emailValue}
                        onChange={emailHandler}
                        onBlur={() => dispatchEmail({type: 'EMAIL_BLUR'})}
                        className={`${!(isEmailValid === 'good' || isEmailValid === null) && classes.redborder}`}
                    />
                    {isEmailValid !== "good" && <div>{isEmailValid}</div>}
                    <input
                        type="email"
                        placeholder="????????? ????????? ???????????????."
                        value={emailState.emailChackValue}
                        onChange={emailChackHandler}
                        onBlur={() => dispatchEmail({type: 'EMAILCHACK_BLUR'})}
                        className={`${!(isEmailChackValid === 'good' || isEmailChackValid === null) && classes.redborder}`}
                    />
                    {isEmailChackValid !== "good" && <div>{isEmailChackValid}</div>}
                </div>
                <div className={classes.pwd}>
                    <label>????????????</label>
                    <input
                        type="password"
                        placeholder="??????????????? ??????????????????."
                        value={passwordState.passwordValue}
                        onChange={passwordHandler}
                        onBlur={() => dispatchPassword({ type: 'PASSWORD_BLUR' })}
                        maxLength='20'
                        className={`${!(isPasswordValid === 'good' || isPasswordValid === null) && classes.redborder}`}
                    />
                    {isPasswordValid !== 'good' && <div>{isPasswordValid}</div>}
                    <input
                        type="password"
                        placeholder="??????????????? ???????????????."
                        value={passwordState.passwordChackValue}
                        onChange={passwordChackHandler}
                        onBlur={() => dispatchPassword({ type: 'PASSWORDCHACK_BLUR' })}
                        maxLength='20'
                        className={`${!(isPasswordChackValid === 'good' || isPasswordValid === null) && classes.redborder}`}
                    />
                    {isPasswordChackValid !== 'good' && <div>{isPasswordChackValid}</div>}
                </div>
                <button className={classes.btn}>????????????</button>
            </form>
            <div className={classes.before}>
                ?????? ????????? ????????? ????????????????
                <Link to='/login'>?????? ???????????? ???????????????</Link>
            </div>
            <div className={classes.or}>
                <div className={classes.left} />
                <span>??????</span>
                <div className={classes.right} />
            </div>
             <a href={`https://kauth.kakao.com/oauth/authorize?client_id=${kakao.clientID}&redirect_uri=${kakao.redirectUri}&response_type=code&scope=profile_nickname,profile_image,account_email,birthday,`}>
                    <img src="/kakaostart.png" alt="kakao" className={classes.kakaologin} />
            </a>
            

        </div>

    </div>
}

export default EmailJoin;