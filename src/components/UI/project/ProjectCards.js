import React, { useState } from "react";

import classes from "./project.module.css"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HeartModal from "./heartmodal/HeartModal";

const ProjectCards = ({projects, size}) => {
    const [isClick, setClick] = useState(false)
    const [showModal, setShowModal] = useState(false);
    const [content, setContent] = useState("")

    const openModal = () => {
        setShowModal(true);  
    }

    const closeModal = () => {
        setShowModal(false);
    }

    const Chagne = (e) => {
        e.preventDefault();

        if(isClick) {
            setClick(false);
            setContent("취소되었습니다.")
            setTimeout(() => {
                setShowModal(false)
            }, 1000)
        } else {
            setClick(true)
            setContent("좋아하는 프로젝트에 추가되었습니다.")
            setTimeout(() => {
                setShowModal(false)
            }, 1000)
        }
    }

    return (
        <div>
            <div className={`${classes.cardbox} ${size === 'm' && classes.middle} ${size === 'l' && classes.large}`}>
                <div className={classes.imgWrapper}>
                    <img className={classes.img} src={projects.imgurl} alt="subimg" />
                    <div className={classes.heartbox} onClick={openModal}><div className={!isClick ? classes.heart : classes.checkheart} onClick={Chagne}>{!isClick ? <FavoriteBorderIcon/> : <FavoriteIcon/>}</div></div>
                </div>
                <div className={classes.subInfoBox}>
                    <div className={classes.subInfo}><span>{projects.category}</span><span className={classes.submiddleline}>|</span><span>{projects.username}</span></div>
                    <div className={classes.subtitle}>{projects.title}</div>
                    {projects.des && <div className={classes.subdes}>{projects.des}</div>}
                    <div className={classes.subpercent}>{projects.percent}% 달성 {projects.proNowAmount && <span className={classes.datebox}><span className={classes.subprice}>{projects.proNowAmount}원</span><span className={classes.subdate}>{projects.date}일 남음</span></span>}</div>
                    {projects.des && <div className={classes.progressbarbox}><div className={classes.progressbar} style={{ width: projects.percent > 100 ? '100%' : `${projects.percent}%`}}></div></div> }
                </div>
            </div>
            <HeartModal showModal={showModal} closeModal={closeModal} content={content} />
        </div>
    )
}

export default ProjectCards