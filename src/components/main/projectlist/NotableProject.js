import React, { useEffect, useState } from "react";
import ProjectCards from "../../ui/project/ProjectCards";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import classes from "./projectlist.module.css"
import { Cookies } from "react-cookie";
import axios from "axios";

const NotableProject = () => {
    const [projects, setProjects] = useState([]);
    const cookie = new Cookies()
    const token = cookie.get('user_token')

    // 192.168.0.74

    const pointproject = () => {
        if (token) {
            axios.get("http://localhost:3000/main/pointproject", {headers : {'user_token': token}})
            .then(response => {
                setProjects(response.data)
                console.log(response.data);
            })

        } else {
            axios.get("http://localhost:3000/main/pointproject")
            .then(response => {
                setProjects(response.data)
                console.log(response.data);
            })
            
        }
    }

    useEffect(() => {
        pointproject()
    }, [])

    return (
        <Box className={classes.boxSize}>
            <div className={classes.boxTitle}>주목할 만한 프로젝트</div>
            <Grid container columns={{xs: 8}}>
                {projects.map((pro, key) => (
                    <Grid item xs={2} key={key}>
                        <ProjectCards project={pro} setProjects={setProjects}/>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default NotableProject