import React, { useEffect, useState } from "react";
import classes from './Discover.module.css'
import SearchIcon from '@mui/icons-material/Search';
import axios from "axios";
import { useParams } from "react-router-dom";


import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ProjectCards from "../../components/ui/project/ProjectCards";
import DiscoverFilter from "../../components/discover/DiscoverFilter";
import { Cookies } from "react-cookie";

const Discover = () => {
    const [percent, setPercent] = useState([0, 10000]);
    const [projects, setProjects] = useState([{}]);
    const [filterPro, setFilterPro] = useState([{}]);
    const [progress, setProgress] = useState('all');
    const { cont } = useParams(); 


    const cookie = new Cookies();
    const token = cookie.get('user_token')

    // 페이징 문제. 
    // 이벤트를 클라이언트에서,... 개수가 문제임.

    // 인피니티 스크롤 > 막 위에 2개 밑에 4개가 될 수도 있음. 페이징은 진짜 문제임. 페이징은 1페이지에 3개 2페이지에 5개가 나오는 불상사가 일어날 수있음.


    const sendRequest = async () => {
        const response = await axios.get(`http://localhost:3000/search/${encodeURIComponent(cont)}`, {
            headers: {
                'user_token': token
            }
        });
        setProjects(response.data)
        setFilterPro(response.data)
        console.log(response.data);
    }

    useEffect(() => {
        sendRequest();
        console.log(cont);
    }, [cont])
    
    // 한번에 알아볼 수 있게 하기.
    useEffect(() => {
        if (progress === 'all') {
            const filterProject = projects.filter(item => item.percent >= percent[0] && item.percent <= percent[1]);  
             setFilterPro(filterProject);
        } else {
            const filterProject = projects.filter(item => item.percent >= percent[0] && item.percent <= percent[1] && item.progress === progress);
            setFilterPro(filterProject);
        }

       
    }, [percent, progress])

    return <div className={classes.cont}>
        <DiscoverFilter percent={percent} setPercent={setPercent} progress={progress} setProgress={setProgress} />
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

export default Discover;