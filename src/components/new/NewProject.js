import axios from "axios";
import React, { useState, useEffect } from "react";
import { Cookies } from "react-cookie";
import ProjectCards from "../ui/project/ProjectCards";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import classes from './newproject.module.css'

const NewProject = () => {

    const [projects, setProjects] = useState([]);
    const [percent, setPercent] = useState([0, 10000]);
    const [projectPercent, setProjectPercent] = useState(false);
    const [firstPercent, setFirstPercent] = useState(0);
    const [lastPercent, setLastPercent] = useState(100);
    const [percentVal, setPercentVal] = useState('good');

    const [filterPro, setFilterPro] = useState([{}]);


    const cookie = new Cookies()
    const token = cookie.get('user_token')

    const Projects = () => {
        axios.get("http://localhost:3000/project/newprojectlist", token ? { headers : {'user_token' : token}} : '')
        .then(response => {
            console.log(response.data)
            setProjects(response.data)
            setFilterPro(response.data);
        })
        .catch(e => {
            console.log(e)
        }) 
    }

    useEffect(() => {
        Projects()
    }, [])


     const onSubmitHandler = (e) => {
        e.preventDefault();
        setProjectPercent(false);
        setPercent([Number(firstPercent), Number(lastPercent)]);
    }

    const firstChangeHandler = (e) => {
        setFirstPercent(e.target.value);

        if (Number(firstPercent) >= Number(lastPercent)) {
            setPercentVal(`${lastPercent} 보다 낮은 값을 입력해주세요.`)
        } else {
            setPercentVal("good");
        }
    }

    const lastChangeHandler = (e) => {
        setLastPercent(e.target.value);

        if (Number(lastPercent) <= Number(firstPercent)) {
            setPercentVal(`${firstPercent} 보다 큰 값을 입력해주세요.`)
        }else{
            setPercentVal("good");
        }
    }

    const percentHandler = () => {
         if (projectPercent) {
            setProjectPercent(false)
        } else {
            setProjectPercent(true)
        }
    }

    useEffect(() => {
        Projects()
    }, [])

    useEffect(() => {
        const filterProject = projects.filter(item => item.percent >= percent[0] && item.percent <= percent[1]);  
        setFilterPro(filterProject);
    },[percent])


    return (
        <div>
            <div className={classes.famebadge}>
                <div className={classes.filter}>
                {percent[0] === 0 && percent[1] === 10000
                    ? <button onClick={percentHandler}>달성률 <KeyboardArrowDownIcon /></button>
                    : <button onClick={() => setPercent([0, 10000])}>
                        {percent[0] === 0 && `${percent[1]}% 이하`}
                        {percent[1] === 10000 && `${percent[0]}% 이상`}
                        {percent[0] !== 0 && percent[1] !== 10000 && `${percent[0]}% - ${percent[1]}%`}
                    </button>}
                <div className={`${projectPercent && classes.open} ${classes.box}`}>
                    <div onClick={() => {
                        setPercent([0, 10000]);
                        setProjectPercent(false);
                    }}>전체보기</div>
                    <div onClick={() => {
                        setPercent([0, 75]);
                        setProjectPercent(false);
                    }}>75% 이하</div>
                    <div onClick={() => {
                        setPercent([75, 100]);
                        setProjectPercent(false);
                    }}>75% - 100%</div>
                    <div onClick={() => {
                        setPercent([100, 10000]);
                        setProjectPercent(false);
                    }}>100% 이상</div>
                    <form onSubmit={onSubmitHandler}>
                        <div>직접입력</div>
                        <div className={classes.input}>
                            <div className={classes.number}>
                                <input type="number" value={firstPercent} onChange={firstChangeHandler} max='9999' />
                                %
                            </div>
                            -
                            <div className={classes.number}>
                                <input type="number" value={lastPercent} onChange={lastChangeHandler} max='9999'/>
                                %
                            </div>
                        </div>
                        {percentVal !== 'good' && <div className={classes.warning}>{percentVal}</div>}
                        <button disabled={percentVal !== 'good'} className={`${percentVal === 'good' && classes.good}`}>입력값 적용</button>
                    </form>
                </div>
            </div>   
            </div>
            <div className={classes.fametitle}><span className={classes.famecount}>{projects.length}</span>개의 프로젝트가 있습니다.</div>
            <div>{projects.endDate}</div>
            <div className={classes.famelistbox}>
                {filterPro.map((prol, key) => (
                    <div key={key}>
                        <ProjectCards project={prol} setProjects={setProjects} size={'l'} />
                    </div>
                ))}
            </div>
        </div>
    )
}



export default NewProject