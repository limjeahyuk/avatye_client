import React, { useState } from "react";
import classes from "./project.module.css"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HeartModal from "./heartmodal/HeartModal";
import moment from "moment";
import { Link } from "react-router-dom";

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

    

    let date1 = moment();
    let date2 = moment(project.endDate);

    date1.format()
    date2.format()

    return (
        <div>
            {project &&
                <div className={`${classes.cardbox} ${size === 'm' && classes.middle} ${size === 'l' && classes.large} ${size === 'xl' && classes.xlarge}`}>
                    <div className={classes.imgWrapper}>
                        <img className={classes.img} src={project.profileIMG} alt="subimg" />
                        <div className={classes.heartbox} onClick={openModal}><div className={!isClick ? classes.heart : classes.checkheart} onClick={Chagne}>{!isClick ? <FavoriteBorderIcon/> : <FavoriteIcon/>}</div></div>
                    </div>
                    <div className={classes.subInfoBox}>
                        <div className={classes.subInfo}><span>{project.name}</span><span className={classes.submiddleline}>|</span><Link to ={`/u/${project.userID}`}><span>{project.nickName}</span></Link></div>
                        <div className={classes.subtitle}>{project.LongTitle}</div>
                        {project.summary && <div className={classes.subdes}>{project.summary}</div>}
                            <div className={`${date2.diff(date1, "days") < 0 ? classes.finsubpercent : classes.subpercent}`}>{parseInt(project.nowPrice / project.goalPrice * 100)}% 달성 
                            {project.summary && <span className={classes.datebox}><span className={classes.subprice}>{project.nowPrice}원</span>
                            <span className={classes.subdate}>{date2.diff(date1, "days") < 0 ? (project.nowPrice / project.goalPrice * 100 < 100 ? "펀딩 무산" : "펀딩 성공") : (date2.diff(date1, "days") === 0 ?  "오늘 마감" : `${date2.diff(date1, "days")}일 남음`)}</span></span>}
                        </div>
                        {/* {test = moment(now).subtract(project.endDate)}
                        {console.log(test)} */}
                        {project.summary && 
                            <div className={classes.progressbarbox}> 
                                <div className={`${date2.diff(date1, "days") < 0 ? classes.finprogressbar : classes.progressbar}`} style={{ width: `${project.nowPrice / project.goalPrice * 100}` > 100 ? '100%' : `${project.nowPrice / project.goalPrice * 100}%`}}></div>
                            </div>
                        }
                    </div>
                </div>
            }
            
            <HeartModal showModal={showModal} closeModal={closeModal} content={content} />
        </div>
    )
}

export default ProjectCards