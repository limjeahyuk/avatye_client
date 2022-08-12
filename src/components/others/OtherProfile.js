import axios from "axios";
import moment from "moment";
import 'moment/locale/ko';
import React, { useEffect, useState } from "react";
import SettingsIcon from '@mui/icons-material/Settings';

import classes from "./Tabs/mytabs.module.css"
import { useParams } from "react-router-dom";

const Profile = () => {
    const [data, setData] = useState([])
    const [time, setTime] = useState()

    let {params} = useParams()

    const findProfile = () => {
        axios.get(`http://192.168.0.74:3000/u/${params}/profile`)
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