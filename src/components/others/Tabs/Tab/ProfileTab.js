import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import classes from '../mytabs.module.css'

const ProfileTab = () => {
    const [userProfile, setUserProfile] = useState({})

    let { params } = useParams()

    const findProfile = () => {
        axios.get(`http://localhost:3000/u/${params}`)
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
            {userProfile.Comment !== null ? 
                <div className={classes.intro}>{userProfile.Comment}</div> : <div className={classes.intro}>등록된 소개가 없습니다.</div>
            }
        </>
    )
}

export default ProfileTab