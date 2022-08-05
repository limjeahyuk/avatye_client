import React from "react";

import classes from "./sideproject.module.css"

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const ProjectList = ({datas, index}) => {

    return (
        <div>
           <Card sx={{ maxWidth: 314 }} className={classes.card}>
                <CardMedia
                    component="img"
                    width="108px"
                    image={datas.imgurl}
                    alt="project-img"
                    className={classes.imgWide}
                />
                <Typography className={`${classes.rank} ${index > 2 && classes.good}`}>{index+1}</Typography>
                <CardContent className={classes.cardContent}>  
                    <div className={classes.subbox}>
                        <Typography className={classes.subdes}><span>{datas.category}</span><span className={classes.middleline}>|</span><span>{datas.username}</span></Typography>
                        <Typography></Typography>
                        <Typography className={classes.title}>
                            {datas.title}
                        </Typography>
                    </div> 
                    <Typography className={classes.percent}>{datas.percent}% 달성</Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default ProjectList