import React, { useState } from "react";
import classes from './Management.module.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";

const ManageHeader = () => {
    const [contSave, setContSave] = useState(true);

    const navigater = useNavigate();

    return <div>
        <div className={classes.frame}>
            <div className={classes.top}>
                <div>
                    <div>
                        <ArrowBackIcon onClick={() => navigater('/') } />
                        <h2>프로젝트 기획</h2>
                    </div>
                    <button className={`${contSave && classes.save}`}><span>{contSave ? "저장" : "기획중"}</span></button>
                </div>
            </div>
            <div className={classes.bot}>
                <div>
                    <div>
                        기본정보
                        <span>5</span>
                    </div>
                    <div>
                        펀딩계획
                        <span>3</span>
                    </div>
                    <div>
                        선물구성
                        <span>1</span>
                    </div>
                    <div>
                        창작자정보
                        <span>5</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default ManageHeader;