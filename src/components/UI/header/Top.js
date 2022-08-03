import React from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import classes from './Header.module.css'
import { useNavigate } from "react-router-dom";

const Top = () => {
    const navigater = useNavigate();

    const loginState = true;


    return <div className={classes.top}>
        <img src="/logo.png" alt="logo" onClick={() => navigater('/')}/>
                    <div className={classes.user}>
                        <div className={classes.post} onClick={() => navigater('/start')}>
                            프로젝트 올리기
                        </div>
            {loginState ?
                <div className={classes.login} onClick={() => navigater('/login')}>
                    <AccountCircleIcon />로그인/회원가입</div>
                : <div className={classes.my} >
                    <FavoriteBorderIcon />
                    <NotificationsNoneIcon />
                    <div className={classes.login}><AccountCircleIcon />혁쨩</div>
                </div>}       
            </div>
        </div>
}

export default Top;