import axios from "axios";
import React, { useEffect, useState } from "react";
import { Cookies } from "react-cookie";

const ProfileTab = () => {
    const [userProfile, setUserProfile] = useState({})
    const cookies = new Cookies()
    const token = cookies.get('user_token')

    const findProfile = () => {
        axios.get('http://192.168.0.74:3000/mypage' ,{headers : {'user_token': token}})
        .then(res => {
            console.log(res.data)
            setUserProfile(res.data)
        })
        .catch(e => {
            console.log(e)
        })
    }

    useEffect(() => {
        findProfile()
    }, [])
    

    return (
        <> 
            {userProfile.Comment !== null ? <div>{userProfile.Comment}</div> : <div>등록된 소개가 없습니다.</div>}
        </>
    )
}

export default ProfileTab