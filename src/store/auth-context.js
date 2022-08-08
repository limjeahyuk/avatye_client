import React, { useEffect, useState } from "react";
import { Cookies } from "react-cookie";

const AuthContext = React.createContext({
    isLogin: false,
    onLogin: (token) => { },
    onLogout: () => {}
});

export const AuthContextProvider = (props) => {
    const cookies = new Cookies();
    const [isLogin, setIsLogin] = useState(false);

    const time = 1000 * 60 * 15;
    
    const isLoginHandler = (token) => {
        setIsLogin(true);
        cookies.set('user_token', token, {
            path: '/',
            expires: new Date(Date.now() + time)
        })
    }

    const isLogoutHandler = () => {
        setIsLogin(false);
        cookies.set('user_token', "", {
            path: '/',
            expires: 0
        })
    }

    useEffect(() => {
        if (cookies.get('user_token')) {
            setIsLogin(true)
        } else {
            setIsLogin(false)
        }
    },[isLogin])

    return <AuthContext.Provider value={{
        isLogin: isLogin,
        onLogin: isLoginHandler,
        onLogout: isLogoutHandler
    }}
    >{props.children}</AuthContext.Provider>
}

export default AuthContext;
