import axios from "axios";
import React, { useEffect, useState } from "react";
import { Cookies } from "react-cookie";
import { useParams } from "react-router-dom";
import ProjectCards from "../../ui/project/ProjectCards";

import classes from "../otherpage.module.css"

const UploadProject = () => {
    const [projects, setProjects] = useState([])

    let {params} = useParams()

    const cookie = new Cookies()
    const token = cookie.get('user_token')

    const findPost = () => {
        axios.get(`http://localhost:3000/u/${params}/upload`, token ? { headers : {'user_token' : token} } : '')
        .then(response => {
            console.log(response.data)
            setProjects(response.data)
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
            {projects.length !== 0 ?
                <div>
                    <div className={classes.upprolength}><span>{projects.length}</span>개의 프로젝트가 있습니다.</div>
                    <div className={classes.upprojectbox}>
                        {projects.map((prol, key) => (
                            <div key={key}>
                                <ProjectCards project={prol} setProjects={setProjects} size={'xl'} />
                            </div>
                        ))}
                    </div>
                </div>
                :
                <div>
                    <div className={classes.upprolength}><span>{projects.length}</span>개의 프로젝트가 있습니다.</div>
                    <div>올린 프로젝트가 없습니다</div>
                </div>
            }
        </div>
    )
}

export default UploadProject