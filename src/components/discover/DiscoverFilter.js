import React, { useState } from "react";
import classes from './DiscoverComponent.module.css'

import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useParams } from "react-router-dom";

const DiscoverFilter = ({setProjects}) => {

    const { cont } = useParams();

    const [projectState, setProjectState] = useState(false);
    const [projectPercent, setProjectPercent] = useState(false);

    const stateHandler = () => {
        if (projectState) {
            setProjectState(false)
        } else {
            setProjectState(true)
        }
    }

    const percentHandler = () => {
        if (projectPercent) {
            setProjectPercent(false)
        } else {
            setProjectPercent(true)
        }
    }

    const closeClickHandler = () => {
        console.log("close");
    }

    return <>
    <div className={classes.filter}>
            <div>
                <span>{cont} <CloseIcon onClick={closeClickHandler} /></span>
            </div>
            <div>
                <button onClick={stateHandler}>상태 <KeyboardArrowDownIcon /></button>
                <div className={`${projectState && classes.open} ${classes.box}`}>
                    <div>전체 프로젝트</div>
                    <div>진행중인 프로젝트</div>
                    <div>성사된 프로젝트</div>
                    <div>공개예정 프로젝트</div>
                </div>
            </div>
            <div>
                <button onClick={percentHandler}>달성률 <KeyboardArrowDownIcon /></button>
                <div className={`${projectPercent && classes.open} ${classes.box}`}>
                    <div>전체보기</div>
                    <div>75% 이하</div>
                    <div>75% - 100%</div>
                    <div>100% 이상</div>
                </div>
            </div>
            <div>
                <button>에디터 추천</button>
            </div>
            
        </div>
    </>
}

export default DiscoverFilter;