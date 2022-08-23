import React, { useEffect, useState } from "react";
import classes from './Discover.module.css'
import SearchIcon from '@mui/icons-material/Search';
import axios from "axios";
import { useParams } from "react-router-dom";


import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ProjectCards from "../../components/ui/project/ProjectCards";
import DiscoverFilter from "../../components/discover/DiscoverFilter";

const Discover = () => {
    const [projects, setProjects] = useState([{}]);
    const { cont } = useParams();

    

    const sendRequest = async () => {
        const response = await axios.get(`http://localhost:3000/search/${cont}`);
        setProjects(response.data)
        console.log(response.data);
    }

    useEffect(() => {
        sendRequest();
    },[cont])

    return <div className={classes.cont}>
        <DiscoverFilter setProjects={setProjects} />
        <div className={classes.items}>
            {projects[0] && <Box className={classes.boxSize}>
            <div className={classes.boxTitle}><span>{projects.length}</span>개의 프로젝트가 있습니다.</div>
            <Grid container columns={{xs: 8}}>
                {projects.map((pro, key) => (
                    <Grid item xs={2} key={key}>
                        <ProjectCards project={pro} setProjects={setProjects} size={'l'} />
                    </Grid>
                ))}
            </Grid>
            </Box>}
            {!projects[0] && <div className={classes.noitem}>
                <div className={classes.boxTitle}><span>0</span>개의 프로젝트가 있습니다.</div>
                <div className={classes.icon}><SearchIcon />
                <h3>발견된 프로젝트가 없습니다.</h3></div>
            </div>}
        </div>
    </div>
}

export default Discover;