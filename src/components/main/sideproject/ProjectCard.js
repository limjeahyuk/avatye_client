import React from "react";

import classes from "./sideproject.module.css"

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";

const ProjectList = ({data, index}) => {

    return (
        <div>
           <Card sx={{ maxWidth: 314 }} className={classes.card}>
                <Link to={`/detail/${data.projectIndex}`}>
                    <CardMedia
                        component="img"
                        width="108px"
                        image={data.profileIMG}
                        alt="project-img"
                        className={classes.imgWide}
                    />
                </Link>
                <Typography className={`${classes.rank} ${index > 2 && classes.good}`}>{index+1}</Typography>
                <CardContent className={classes.cardContent}>  
                    <div className={classes.subbox}>
                        <Typography className={classes.subdes}>
                            <Link to ={`/category/${data.name}`}><span>{data.name}</span></Link>
                            <span className={classes.middleline}>|</span>
                            <span>
                                <Link to ={`/u/${data.userID}`}>{data.nickName}</Link>
                            </span>
                        </Typography>
                        <Typography></Typography>
                        <Typography className={classes.title}>
                            {data.longTitle}
                        </Typography>
                    </div> 
                    <Typography className={classes.percent}>{parseInt(data.percent)}% 달성</Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default ProjectList