import axios from "axios";
import React, { useState, useEffect } from "react";
import { Cookies } from "react-cookie";
import ProjectCards from "../ui/project/ProjectCards";

import classes from './fameproject.module.css'

const FameProject = () => {

    const [project, setProject] = useState([]);

    const cookie = new Cookies()
    const token = cookie.get('user_token')

    const Projects = () => {
        if(token) {
            axios.get("http://192.168.0.74:3000/project/bestprojectlist", {headers : {'user_token' : token}})
            .then(response => {
                console.log(response.data)
                setProject(response.data)
            })
            .catch(e => {
                console.log(e)
            })
        } else {
            axios.get("http://192.168.0.74:3000/project/bestprojectlist")
            .then(response => {
                console.log(response.data)
                setProject(response.data)
            })
            .catch(e => {
                console.log(e)
            })
        }
    }

    useEffect(() => {
        Projects()
    }, [])

    return (
        <div>
            <div className={classes.famebadge}><span>달성률</span></div>
            <div className={classes.fametitle}><span className={classes.famecount}>{project.length}</span>개의 프로젝트가 있습니다.</div>
            <div>{project.endDate}</div>
            <div className={classes.famelistbox}>
                {project.map((prol, key) => (
                    <div key={key}>
                        <ProjectCards project={prol} size={'l'} />
                    </div>
                ))}
            </div>
        </div>
    )
}



export default FameProject