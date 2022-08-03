import React, { useState } from "react";

import classes from "./notableproject.module.css"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const NotableProjectCard = ({projects, size}) => {
    const [isClick, setClick] = useState(false)

    const Chagne = (e) => {
        e.preventDefault();
        setClick(!isClick)
    }

    // `${size === s && classes.small} ${props == m $$ classes.middle}`
    return (
        <div>
            <div className={`${classes.cardbox} ${size === 'm' && classes.middle} ${size === 'l' && classes.large} `}>
                <div className={classes.imgWrapper}>
                    <img className={classes.img} src={projects.imgurl} alt="subimg" />
                    <div className={classes.heartbox}><div className={!isClick ? classes.heart : classes.checkheart} onClick={Chagne}>{!isClick ? <FavoriteBorderIcon/> : <FavoriteIcon/>}</div></div>
                </div>
                <div className={classes.subInfoBox}>
                    <div className={classes.subInfo}><span>{projects.category}</span><span className={classes.submiddleline}>|</span><span>{projects.username}</span></div>
                    <div className={classes.subtitle}>{projects.title}</div>
                    <div className={classes.subpercent}>{projects.percent}% 달성</div>
                </div>
            </div>
        </div>
    )
}

export default NotableProjectCard