import axios from "axios";
import React, { useState, useEffect } from "react";
import { Cookies } from "react-cookie";
import ProjectCards from "../ui/project/ProjectCards";

import classes from './fameproject.module.css'

const FameProject = () => {

    const [projects, setProjects] = useState([]);

    const cookie = new Cookies()
    const token = cookie.get('user_token')

    const Projects = () => {
        axios.get("http://localhost:3000/project/bestprojectlist", token ? {headers : {'user_token' : token}} : '')
        .then(response => {
            console.log(response.data)
            setProjects(response.data)
        })
        .catch(e => {
            console.log(e)
        })

    }

    useEffect(() => {
        Projects()
    }, [])

    return (
        <div>
            <div className={classes.famebadge}><span>달성률</span></div>
            <div className={classes.fametitle}><span className={classes.famecount}>{projects.length}</span>개의 프로젝트가 있습니다.</div>
            <div>{projects.endDate}</div>
            <div className={classes.famelistbox}>
                {projects.map((prol, key) => (
                    <div key={key}>
                        <ProjectCards project={prol} setProjects={setProjects} size={'l'} />
                    </div>
                ))}
            </div>
        </div>
    )
}



export default FameProject