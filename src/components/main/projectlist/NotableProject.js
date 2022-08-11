import React, { useEffect, useState } from "react";
import ProjectCards from "../../ui/project/ProjectCards";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import classes from "./projectlist.module.css"
import axios from "axios";
import { Cookies } from "react-cookie";

const NotableProject = () => {
    const [project, setProject] = useState([]);
    const cookie = new Cookies()
    const token = cookie.get('user_token')

    const pointproject = () => {
        if (token) {
            axios.get("http://192.168.0.74:3000/main/pointproject", {headers : {'user_token': token}})
            .then(response => {
                console.log(response.data);
                setProject(response.data)
            })
            .catch(e => {
                console.log(e)
            })
        } else {
            axios.get("http://192.168.0.74:3000/main/pointproject")
            .then(response => {
                console.log(response.data);
                setProject(response.data)
            })
            .catch(e => {
                console.log(e)
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
                {project.map((pro, key) => (
                    <Grid item xs={2} key={key}>
                        <ProjectCards project={pro} setProject={setProject}/>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default NotableProject