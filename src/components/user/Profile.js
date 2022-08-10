import axios from "axios";
import moment from "moment";
import 'moment/locale/ko';
import React, { useEffect, useState } from "react";
import { Cookies } from "react-cookie";
import SettingsIcon from '@mui/icons-material/Settings';

import classes from "./Tabs/mytabs.module.css"

const Profile = () => {
    const [data, setData] = useState([])
    const [time, setTime] = useState()
    const cookie = new Cookies()
    const token = cookie.get("user_token")

    const findProfile = () => {
        axios.get('http://192.168.0.74:3000/mypage/profile' ,{headers : {'user_token': token}})
        .then(response => {
            console.log(response.data)
            setData(response.data)

            const asd = moment(response.data.Date).format('YYYYMMDD')
            const result = moment(asd, "YYYYMMDD").fromNow()
            setTime(result)
        })
        .catch(e => {
            console.log(e)
        })
    }

    useEffect(() => {
        findProfile()
    }, [])

    return (
        <div>
            {data &&
                <div className={classes.profilebox}>
                    {data.profileImage ? <img src={data.profileImage} alt="profileimg"/> : <img src="/images/profile.jpg" alt="profileimg"/>}
                    <div className={classes.profileInfo}>
                        <div>{data.nickName}<span><SettingsIcon /></span></div>
                        <div>{time} 가입</div>
                    </div>
                </div>
            } 
        </div>
    )
}

export default Profile;