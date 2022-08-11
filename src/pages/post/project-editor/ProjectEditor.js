import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PostHeader from "../../../components/post/PostHeader";
import classes from './ProjectEditor.module.css'

const ProjectEditor = () => {
    const navigator = useNavigate();
    const [categoryState, setCategoryState] = useState('');
    const [isSummery, setIsSummery] = useState('');
    const [categoryData, setCategoryData] = useState([{}]);

    const sendRequest = async () => {
        const response = await axios.get("http://192.168.0.74:3000/category");
        setCategoryData(response.data);
    }

    useEffect(() => {
        sendRequest();
    },[])

    const textareaChangeHandler = (e) => {
        setIsSummery(String(e.target.value).replace(/ +/g," "))
    }

    const nextHandler = () => {
        if (categoryState && isSummery) {
            navigator('/project-editor/create', { state: { categoryState, isSummery } });
        }
    }
    
    return <>
        <PostHeader />
        <div className={classes.editor}>
            <div className={classes.left}>
            </div>
            <div className={classes.right}>
                    <div className={classes.cont}>
                        <h2>멋진 아이디어가 있으시군요! <br />어떤 프로젝트를 계획 중이신가요?</h2>
                        <p>나중에 변경 가능하니 너무 걱정마세요.</p>
                    <div className={classes.categorygroup}> 
                        {categoryData.map((item, index) => {
                            return <label key={index} className={classes.categorybutton}>
                                <input
                                    id={item.name}
                                    type="radio"
                                    value={item.name}
                                    name="items"
                                    checked={categoryState === `${item.name}`}
                                    onChange={(e) => setCategoryState(e.target.value)}
                                />
                                <button onClick={() => setCategoryState(`${item.name}`)}>{item.name}</button>
                                </label>
                            })}
                    </div>
                </div>
                {categoryState && <div className={classes.project}>
                    <h2>프로젝트를 간단하게 소개해주세요.</h2>
                    <p>나중에 수정 가능하니 편하게 적어주세요.</p>
                    <div className={classes.cont}>
                        <textarea
                            placeholder="프로젝트 요약을 입력해주세요."
                            onChange={textareaChangeHandler}
                            value={isSummery}
                            className={`${isSummery.trim().length < 11 && classes.falseoption}`}
                        ></textarea>
                        <div className={classes.guide}>
                            <span>최소 10자이상 입력해주세요.</span>
                            <span>{isSummery.trim().length} / 50</span>
                        </div>
                        <div className={classes.btn}>
<button onClick={nextHandler}>다음</button>
                        </div>
                    </div>
                </div>}
            </div>
        </div>
    </>
}

export default ProjectEditor;