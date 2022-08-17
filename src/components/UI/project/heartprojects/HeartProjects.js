import React, { useEffect, useState } from "react";
import ProjectCards from "../ProjectCards";

import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

import classes from "./heartproject.module.css"
import axios from "axios";
import { Cookies } from "react-cookie";

const HeartProjects = () => {
    
    const [heartProject, setHeartProject] = useState([])
    const [open, setOpen] = useState(false);
    const [select, setSelect] = useState('진행중');
    const [fil, setfil] = useState([]);

    const cookie = new Cookies()
    const token = cookie.get('user_token')
    
    const handleChange = (event) => {
        setSelect((event.target.value) || '');

        if(event.target.value === '종료된') {
            const finish = heartProject.filter((project) => project.progress === 'end');
            setfil(finish)
        } else if (event.target.value === '진행중') {
            const progress = heartProject.filter((project) => project.progress === 'ing');
            setfil(progress)
        } else {
            setfil(heartProject)
        }
    };
    
    const handleClick = () => {
        setOpen(true);
    };
    
    const handleDelete = () => {
        setOpen(false);
       
    };
    
    const findheart = () => {
        axios.get("http://localhost:3000/heart/list", token ? {headers : {'user_token': token}} : '')
        .then(response => {
            setHeartProject(response.data)
            console.log(response.data);

            const progress = response.data.filter((project) => project.progress === 'ing');
            setfil(progress)
        })
        .catch(e => {
            console.log(e)
        })

    }
    
    useEffect(() => {
        findheart()
    }, [])

    const onRemove = projectIndex => {

        if(select === '진행중') {
            const progress = heartProject.filter((project) => project.progress === 'ing');
            setfil(progress.filter(data => data.projectIndex !== projectIndex));
        } else if (select === '종료된') {
            const finish = heartProject.filter((project) => project.progress === 'end');
            setfil(finish.filter(data => data.projectIndex !== projectIndex))
        } else {
            setfil(heartProject.filter(data => data.projectIndex !== projectIndex))
        }

        setHeartProject(heartProject.filter(data => data.projectIndex !== projectIndex))
        
    };

    

    return (
        <div className={classes.heartbox}>
            <div className={classes.hearttitle}>관심 프로젝트</div>
            <div className={classes.subtitle}>좋아한{fil.length}</div>
            <div className={classes.border}></div>
            <div className={classes.hearttab}>
                <Stack>
                    <Chip className={classes.test2} label={select} open={open} variant="outlined" onDelete={handleDelete} onClick={handleClick} />
                </Stack>
                <div onClick={handleDelete}>
                    {open &&
                        <Select
                            className={classes.test2}
                            value={select}
                            onChange={handleChange}
                            onClick={e => e.stopPropagation()}
                        >
                            <MenuItem onClick={handleDelete} value={'전체'}>전체</MenuItem>
                            <MenuItem onClick={handleDelete} value={'진행중'}>진행중</MenuItem>
                            <MenuItem onClick={handleDelete} value={'종료된'}>종료된</MenuItem>
                        </Select>
                    }
                </div>

                {select &&
                    <div className={classes.listbox}> 
                        {fil.map((data, key) => (
                                <ProjectCards project={data} key={data.projectIndex} setProjects={setHeartProject} size={'l'} onRemove={onRemove}/>
                            ))
                        }
                    </div>
                }

            </div>
        </div>
    )
}

export default HeartProjects