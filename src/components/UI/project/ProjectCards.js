import React, { useState } from "react";

import classes from "./project.module.css"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HeartModal from "./heartmodal/HeartModal";

const ProjectCards = ({project, size}) => {
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
            {project &&
                <div className={`${classes.cardbox} ${size === 'm' && classes.middle} ${size === 'l' && classes.large} ${size === 'xl' && classes.xlarge}`}>
                    <div className={classes.imgWrapper}>
                        <img className={classes.img} src={project.profileIMG} alt="subimg" />
                        <div className={classes.heartbox} onClick={openModal}><div className={!isClick ? classes.heart : classes.checkheart} onClick={Chagne}>{!isClick ? <FavoriteBorderIcon/> : <FavoriteIcon/>}</div></div>
                    </div>
                    <div className={classes.subInfoBox}>
                        <div className={classes.subInfo}><span>{project.name}</span><span className={classes.submiddleline}>|</span><span>{project.nickName}</span></div>
                        <div className={classes.subtitle}>{project.LongTitle}</div>
                        {project.summary && <div className={classes.subdes}>{project.summary}</div>}
                        <div className={classes.subpercent}>{parseInt(project.nowAmount / project.goalprice * 100)}% 달성 {project.summary && <span className={classes.datebox}><span className={classes.subprice}>{project.nowAmount}원</span><span className={classes.subdate}>{parseInt(project.endDate.slice(8,10))}일 남음</span></span>}</div>
                        {project.summary && <div className={classes.progressbarbox}><div className={classes.progressbar} style={{ width: `${project.nowAmount / project.goalprice * 100}` > 100 ? '100%' : `${project.nowAmount / project.goalprice * 100}%`}}></div></div> }
                    </div>
                </div>
            }
            
            <HeartModal showModal={showModal} closeModal={closeModal} content={content} />
        </div>
    )
}

export default ProjectCards