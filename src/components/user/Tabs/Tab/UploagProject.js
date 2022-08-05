import axios from "axios";
import React, { useEffect, useState } from "react";

const UploadProject = () => {
    const [project, setProject] = useState({})

    const findPost = () => {
        axios.get("http://192.168.0.74:3000/mypage/upload")
        .then(response => {
            console.log(response.data)
            setProject(response.data)
        })
        .catch(e => {
            console.log(e)
        })
    }

    useEffect(() => {
        findPost();
    }, [])

   

    return(<>{project.cateName}</>)
}

export default UploadProject