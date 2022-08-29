import React, { useEffect, useState } from "react";
import { Cookies } from "react-cookie";


const AuthContext = React.createContext({
    isLogin: false,
    userNick: '',
    onLogin: (token) => { },
    onLogout: () => { },
    userProfile: '',
    updateUserData: (nick, profile) => { },
    checkCookie: () => {}
});

//컨텍스트 활용을 좀 더 하기


export const AuthContextProvider = (props) => {
    const cookies = new Cookies();
    const [isLogin, setIsLogin] = useState(false);
    const [userNick, setUserNick] = useState('');
    const [userProfile, setUserProfile] = useState('');

    const time = 1000 * 60 * 15;
    
    const isLoginHandler = (token) => {
        setIsLogin(true);
        cookies.set('user_token', token ,{
            path: '/',
            expires: new Date(Date.now() + time)
        });
    }

    const isLogoutHandler = () => {
        setIsLogin(false);
        setUserNick('');
        setUserProfile('');
        cookies.set('user_token', "", {
            path: '/',
            expires: 0
        })
    }

    const onUpdateUserData = (nick, profile) => {
        setUserNick(nick);
        setUserProfile(profile);

        cookies.set('user_nickName', nick, {
            path: '/',
            expires: new Date(Date.now() + time)
        });
        cookies.set('user_profile', profile, {
            path: '/',
            expires: new Date(Date.now() + time)
        });
        // 합치는 것이 나아보임.
    }

    const onCheckCookie = () => {
        if (cookies.get('user_token')) {
            setIsLogin(true);
            setUserNick(cookies.get('user_nickName'));
            setUserProfile(cookies.get('user_profile'));
        } else {
            setIsLogin(false)
            setUserNick('');
            setUserProfile('');
        }
    }


    
    // 아자아자 화이팅!!

    return <AuthContext.Provider value={{
        isLogin: isLogin,
        userNick: userNick,
        userProfile: userProfile,
        onLogin: isLoginHandler,
        onLogout: isLogoutHandler,
        updateUserData: onUpdateUserData,
        checkCookie: onCheckCookie
    }}
    >{props.children}</AuthContext.Provider>
}

export default AuthContext;
