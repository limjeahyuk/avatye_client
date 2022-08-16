import React, { useEffect, useState } from "react";
import { Cookies } from "react-cookie";

const AuthContext = React.createContext({
    isLogin: false,
    userNick: '',
    onLogin: (token, nickName) => { },
    onLogout: () => {}
});


export const AuthContextProvider = (props) => {
    const cookies = new Cookies();
    const [isLogin, setIsLogin] = useState(false);
    const [userNick, setUserNick] = useState('');

    const time = 1000 * 60 * 15;
    
    const isLoginHandler = (token, nickName) => {
        setIsLogin(true);
        cookies.set('user_token', token, {
            path: '/',
            expires: new Date(Date.now() + time)
        });
        cookies.set('user_nickName', nickName, {
            path: '/',
            expires: new Date(Date.now() + time)
        });
        setUserNick(nickName);
    }

    const isLogoutHandler = () => {
        setIsLogin(false);
        setUserNick('');
        cookies.set('user_token', "", {
            path: '/',
            expires: 0
        })
    }

    useEffect(() => {
        if (cookies.get('user_token')) {
            console.log("auth context true")
            setIsLogin(true);
            setUserNick(cookies.get('user_nickName'));
        } else {
            console.log("auth context false")
            setIsLogin(false)
        }
    }, [])
    
    // 아자아자 화이팅!!

    return <AuthContext.Provider value={{
        isLogin: isLogin,
        userNick: userNick,
        onLogin: isLoginHandler,
        onLogout: isLogoutHandler
    }}
    >{props.children}</AuthContext.Provider>
}

export default AuthContext;
