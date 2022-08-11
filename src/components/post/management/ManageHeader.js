import React, { useState } from "react";
import classes from './Management.module.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ManageHeader = ({tabHandler, basic, funding}) => {
    const [contSave, setContSave] = useState(true);
    const [tabState, setTabState] = useState(1);

    const navigater = useNavigate();

    const tabNumHandler = (num) => {
        setTabState(num);
        tabHandler(num);
    }
    const createProjectHandler = () => {
        const data = {
            ...basic,
            ...funding
        }

        axios({
            url: 'http://localhost:3000/createProject',
            method: 'post',
            data: data
        }).then(function a(response) {
            console.log(response.data);
        }).catch(function (err) {
            console.log(err);
        })
    }

    return <div>
        <div className={classes.frame}>
            <div className={classes.top}>
                <div>
                    <div>
                        <ArrowBackIcon onClick={() => navigater('/') } />
                        <h2>프로젝트 기획</h2>
                    </div>
                    <button className={`${contSave && classes.save}`} onClick={createProjectHandler}><span>{contSave ? "저장" : "기획중"}</span></button>
                </div>
            </div>
            <div className={classes.bot}>
                <div>
                    <div onClick={() => tabNumHandler(1)} className={`${tabState === 1 && classes.tab}`}>
                        기본정보
                        <span>5</span>
                    </div>
                    <div onClick={() => tabNumHandler(2)} className={`${tabState === 2 && classes.tab}`}>
                        펀딩계획
                        <span>3</span>
                    </div>
                    <div onClick={() => tabNumHandler(3)} className={`${tabState === 3 && classes.tab}`}>
                        선물구성
                        <span>1</span>
                    </div>
                    <div onClick={() => tabNumHandler(4)} className={`${tabState === 4 && classes.tab}`}>
                        창작자정보
                        <span>5</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default ManageHeader;