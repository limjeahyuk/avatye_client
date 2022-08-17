import React, { useEffect, useState } from "react";
import ProjectCards from "../ProjectCards";

import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

import classes from "./heartproject.module.css"

const HeartProjects = () => {
    
    // const [heartproject, setheartproject] = useState([])
    const [open, setOpen] = useState(false);
    const [test, setTest] = useState('진행중');
    
    const handleChange = (event) => {
        setTest((event.target.value) || '');
        
        if(event.target.value === '전체') {} else if (event.target.value === '진행중') {} else {}
    };
    
    const handleClick = () => {
        setOpen(true);
    };
    
    const handleDelete = () => {
        setOpen(false);
    };
    
    // useEffect(() => {

    // },[])

    return (
        <div className={classes.heartbox}>
            <div className={classes.hearttitle}>관심 프로젝트</div>
            <div className={classes.subtitle}>좋아한 (개수)</div>
            <div className={classes.border}></div>
            <div className={classes.hearttab}>
                <Stack>
                    <Chip className={classes.test2} label={test} open={open} variant="outlined" onDelete={handleDelete} onClick={handleClick} />
                </Stack>
                <div onClick={handleDelete}>
                    {open &&
                        <Select
                            className={classes.test2}
                            value={test}
                            onChange={handleChange}
                            onClick={e => e.stopPropagation()}
                        >
                            <MenuItem onClick={handleDelete} value={'전체'}>전체</MenuItem>
                            <MenuItem onClick={handleDelete} value={'진행중'}>진행중</MenuItem>
                            <MenuItem onClick={handleDelete} value={'종료된'}>종료된</MenuItem>
                        </Select>
                    }
                </div>
                {test === '진행중' && <div>sadasdad</div>}
                {/* <ProjectCards projects={projects} setProjects={setProjects} size={'l'} /> */}
            </div>
        </div>
    )
}

export default HeartProjects