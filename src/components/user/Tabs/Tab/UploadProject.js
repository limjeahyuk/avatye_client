import axios from "axios";
import React, { useEffect, useState } from "react";
import { Cookies } from "react-cookie";
import ProjectCards from "../../../ui/project/ProjectCards";

import classes from "../mytabs.module.css"

const UploadProject = () => {
    const [project, setProject] = useState([])
    const cookies = new Cookies()
    const token = cookies.get('user_token')

    const findPost = () => {
        axios.get("http://192.168.0.74:3000/mypage/upload" ,{headers : {'user_token': token}})
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

    return(
        <div>
            {project ?
                <div>
                    <div className={classes.upprolength}><span>{project.length}</span>개의 프로젝트가 있습니다.</div>
                    <div className={classes.upprojectbox}>
                        {project.map((prol, key) => (
                            <div key={key}>
                                <ProjectCards project={prol} size={'xl'} />
                            </div>
                        ))}
                    </div>
                </div>
                :
                <div>
                    <div className={classes.upprolength}><span>{project.length}</span>개의 프로젝트가 있습니다.</div>
                    <div>올린 프로젝트가 없습니다</div>
                </div>
            }
        </div>
    )
}

export default UploadProject