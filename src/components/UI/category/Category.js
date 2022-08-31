import axios from "axios";
import React, { useEffect, useState } from "react";
import { Cookies } from "react-cookie";
import { useParams } from "react-router-dom";
import ProjectCards from "../project/ProjectCards";
import CategoryIcon from "./CategoryIcon";

import classes from './category.module.css'

const Category = () => {
    const [projects, setProjects] = useState([])

    let { id } = useParams();
    id = decodeURIComponent(id);
    console.log(id)
    id = id.replace(" ", " · ")
    id = id.replace("&"," · ");
    id = id.replace(" · · ", " · ")
    console.log(id)

    const cookie = new Cookies()
    const token = cookie.get('user_token')

    const find = () => {
        axios.get(`http://localhost:3000/category/${id}`, token ? {headers: {'user_token' : token}} : '')
        .then(res => {
            setProjects(res.data)
            console.log(res.data)
        })
        .catch(e => {
            console.log(e)
        })
    }

    useEffect(() => {
        find()
    }, [id])

    return (
        <div>
            <CategoryIcon />
            <div className={classes.textbox}>
                <div className={classes.title}>{id === 'all' ? '전체' : id}</div>
                <div className={classes.count}><span>{projects.length}</span>개의 프로젝트가 있습니다.</div>
            </div>
            <div className={classes.catebox}>
                {projects.map((data, key) => (
                    <div className={classes.cateitem} key={key}>
                        <ProjectCards project={data} setProjects={setProjects} size={'l'} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Category