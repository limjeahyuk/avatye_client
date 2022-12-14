import axios from "axios";
import React, { useEffect, useState } from "react";
import { Cookies } from "react-cookie";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ProjectCards from "../../components/ui/project/ProjectCards";
import DiscoverFilter from "../../components/discover/DiscoverFilter";
import classes from './Discover.module.css'

import SearchIcon from '@mui/icons-material/Search';

const AllDiscover = () => {

    const [projects, setProjects] = useState([{}]);
    const [percent, setPercent] = useState([0, 10000]);
    const [filterPro, setFilterPro] = useState([{}]);


    const cookie = new Cookies();
    const token = cookie.get('user_token')

    const sendRequest = async() => {
        const response = await axios.get('http://localhost:3000/project', {
            headers: {
                 'user_token': token
            }
        });
        setProjects(response.data);
        setFilterPro(response.data);
        console.log(response.data);
    }

    useEffect(() => {
        sendRequest();
    }, [])
    
    useEffect(() => {
        const filterProject = projects.filter(item => item.percent >= percent[0] && item.percent <= percent[1]);
        setFilterPro(filterProject);
    },[percent])


    return <div className={classes.cont}>
        <DiscoverFilter setPercent={setPercent} percent={percent} />
        <div className={classes.items}>
            {filterPro[0] && <Box className={classes.boxSize}>
            <div className={classes.boxTitle}><span>{filterPro.length}</span>개의 프로젝트가 있습니다.</div>
            <Grid container columns={{xs: 8}}>
                {filterPro.map((pro, key) => (
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

export default AllDiscover