import axios from "axios";
import React, { useContext, useEffect } from "react";
import qs from 'qs'
import { useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../../store/auth-context";

const KakaoCallback = () => {
    const location = useLocation();
    const ctx = useContext(AuthContext);

    const code = location.search.slice(6);
    const navigater = useNavigate();

    let user;
    let token;
    let login;

    const kakao = {
        clientID: process.env.REACT_APP_CLIENTID,
        clientSecret: process.env.REACT_APP_CLIENTSECRET,
        redirectUri: process.env.REACT_APP_REDIRECTURI
    }

    async function fetchData() {
        try {
            token = await axios({
                method: 'POST',
                url: 'https://kauth.kakao.com/oauth/token',
                headers: {
                    'content-type': 'application/x-www-form-urlencoded'
                },
                data: qs.stringify({
                    grant_type: 'authorization_code',
                    // 특정 string 넣기 
                    client_id: kakao.clientID,
                    client_secret: kakao.clientSecret,
                    redirectUri: kakao.redirectUri,
                    code: code
                })
                //객체를 string으로 변환 
            })
            console.log(token);
        } catch (err) {
            console.log(err.data)
        }
        //kakao에게 요청
        try {
            user = await axios({
                method: "GET",
                url: 'https://kapi.kakao.com/v2/user/me',
                headers: {
                    Authorization: `Bearer ${token.data.access_token}`
                }
            })
        } catch (err) {
            console.log(err.data)
        }
        try {
            login = await axios({
                method: 'POST',
                url: 'http://localhost:3000/user/kakao',
                data: {
                    loginID: user.data.id,
                    nickName: user.data.properties.nickname,
                    email: user.data.kakao_account.email,
                    userProfile: user.data.properties.profile_image,
                }
            })
                
            if (login.data.login) {
                console.log(login.data);
                console.log(user.data.properties.profile_image);
                ctx.onLogin(login.data.token);
                ctx.updateUserData(login.data.nickName, login.data.profileImage)
                navigater('/');
            } else {
                alert('error')
            }
        } catch (err) {
            console.log(err);
        }
        
    }


    useEffect(() => {
        fetchData();
    }, [])
    return <>
        잠시만 기다려주세요. XD
    </>
}

export default KakaoCallback;