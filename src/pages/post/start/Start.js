import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../store/auth-context";
import classes from './Start.module.css'

const Start = () => {
    const navigater = useNavigate();
    const ctx = useContext(AuthContext);

    const startHandler = () => {
        if (ctx.isLogin) {
            navigater('/project-editor/start');
        } else {
            navigater('/login')
        }
        
    }

    return <div>
        <div className={classes.hero}>
            <div className={classes.left}>
            </div>
            <div className={classes.right}></div>
            <div className={classes.mid}>
                <div className={classes.img}></div>
                <div className={classes.cont}>
                    <h1>마음 속 프로젝트 아이디어 <br /> 텀블벅에서 현실로</h1>
                    <p>크라우드펀딩으로 프로젝트를 위한 자금도 모으고 <br />든든한 후원자 네트워크도 확보할 수 있습니다.</p>
                    <button className={classes.start} onClick={startHandler}>지금 시작</button>
                    <button className={classes.guide}>창작자 가이드</button>
                </div>
            </div>
        </div>
    </div>}

export default Start;