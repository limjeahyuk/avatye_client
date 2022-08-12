import axios from "axios";
import React, { useEffect, useState } from "react";
import { Cookies } from "react-cookie";
import { useParams } from "react-router-dom";
import ProjectCards from "../../../ui/project/ProjectCards";
import classes from "../mytabs.module.css"

const SupportProject = () => {
    const [projects, setProjects] = useState([]);

    let {params} = useParams()

    const cookie = new Cookies()
    const token = cookie.get('user_token')

    const findBuy = () => {
        if(token) {
            axios.get(`http://192.168.0.74:3000/u/${params}/buy`, { headers : {'user_token' : token} })
            .then(res => {
                console.log(res.data)
                setProjects(res.data)
            })
            .catch(e => {
                console.log(e)
            })
        } else {
            axios.get(`http://192.168.0.74:3000/u/${params}/buy`)
            .then(res => {
                console.log(res.data)
                setProjects(res.data)
            })
            .catch(e => {
                console.log(e)
            })
        }
    }

    useEffect(() => {
        findBuy()
    }, [])
    
    return (
        <>
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
        </>
    )
}

export default SupportProject