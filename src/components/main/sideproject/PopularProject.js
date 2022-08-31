import axios from "axios";
import moment from "moment";
import 'moment/locale/ko';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard"
import classes from "./sideproject.module.css"

const ProjectList = () => {
    const [data, setData] = useState([])
    const [time, setTime] = useState(undefined)

    // 192.168.0.74

    const bestProject = () => {
        axios.get("http://localhost:3000/main/bestproject")
        .then(response => {
            console.log(response.data)
            setData(response.data)

            setTime(moment(response.data[0].now).format('YY.MM.DD hh:mm'))
            
        })
        .catch(e => {
            console.log(e)
        })
    }

    useEffect(() => {
        bestProject()
    }, [])
    
    return (
        <div className={classes.listbox}>
            <div className={classes.listTitle}>인기 프로젝트 <span className={classes.more}><Link to={"/fame"}>전체보기</Link></span></div>
            {data && 
                <div className={classes.listdate}>
                    {time} 기준
                </div>}
            {data.map((datas, index) => (
                <ProjectCard data={datas} key={index} index={index} />
            ))}
            <Link to={"/fame"} className={classes.listbtn}>인기 프로젝트 전체보기</Link>
        </div>
    )
}

export default ProjectList