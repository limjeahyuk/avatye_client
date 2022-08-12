import React, { useState } from "react";
import classes from "./project.module.css"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HeartModal from "./heartmodal/HeartModal";
import moment from "moment";
import { Link } from "react-router-dom";
import axios from "axios";
import { Cookies } from "react-cookie";

const ProjectCards = ({project, size, setProjects}) => {
    const [isClick, setClick] = useState()
    const [showModal, setShowModal] = useState(false);
    const [content, setContent] = useState("");

    const cookie = new Cookies()
    const token = cookie.get('user_token')

    const openModal = () => {
        if(token) {
            setShowModal(true);
        } else {
            setShowModal(false)
        }
       
    }

    const closeModal = () => {
        setShowModal(false);
    }

    const Chagne = (e, projectIndex) => {
        e.preventDefault();
        if(!token) {

           alert("로그인 해주세요")

        } else {
            if(project.heartCheck === 1) {

                setClick(1)

                setProjects((prev) => prev.map(pro => pro.projectIndex === project.projectIndex ? {...project, heartCheck: isClick} : pro));

                axios.get(`http://localhost:3000/heart/add/${projectIndex}`, {headers : {'user_token': token}})
                .then(response => {
                    console.log(response.data.result)
                })
                .catch(e => {
                    console.log(e)
                })

                setContent("취소되었습니다.")
                setTimeout(() => {
                    setShowModal(false)
                }, 1000)

            } else {
                setClick(0)

                setProjects((prev) => prev.map(pro => pro.projectIndex === project.projectIndex ? {...project, heartCheck: isClick} : pro));

                axios.get(`http://localhost:3000/heart/add/${projectIndex}`, {headers : {'user_token': token}})
                .then(response => {
                    console.log(response.data.result)
                })
                .catch(e => {
                    console.log(e)
                })

                setContent("좋아하는 프로젝트에 추가되었습니다.")

                setTimeout(() => {
                    setShowModal(false)
                }, 1000)
            }
        }
        
    }

    // 날짜
    
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
                        {project.nowPrice && <div className={classes.heartbox} onClick={openModal}><div className={project.heartCheck !== 1 ? classes.heart : classes.checkheart} onClick={(e)=> Chagne(e, project.projectIndex)}>{project.heartCheck !== 1 ? <FavoriteBorderIcon/> : <FavoriteIcon/>}</div></div>}
                    </div>
                    <div className={classes.subInfoBox}>
                        <div className={classes.subInfo}><span>{project.name}</span><span className={classes.submiddleline}>|</span><Link to ={`/u/${project.userID}`}><span>{project.nickName}</span></Link></div>
                        <div className={classes.subtitle}>{project.LongTitle}</div>
                        {project.summary && <div className={classes.subdes}>{project.summary}</div>}
                        {project.nowPrice &&
                            <div className={`${date2.diff(date1, "days") < 0 ? classes.finsubpercent : classes.subpercent}`}>{parseInt(project.nowPrice / project.goalPrice * 100)}% 달성
                                {project.summary && <span className={classes.datebox}><span className={classes.subprice}>{project.nowPrice}원</span>
                                <span className={classes.subdate}>{date2.diff(date1, "days") < 0 ? (project.nowPrice / project.goalPrice * 100 < 100 ? "펀딩 무산" : "펀딩 성공") : (date2.diff(date1, "days") === 0 ?  "오늘 마감" : `${date2.diff(date1, "days")}일 남음`)}</span></span>}
                            </div>
                        }
                        {project.nowPrice && 
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