import React, { useState } from "react";
import classes from './DiscoverComponent.module.css'

import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useNavigate, useParams } from "react-router-dom";
import { Cookies } from "react-cookie";

const DiscoverFilter = ({percent, setPercent, progress, setProgress}) => {

    const { cont } = useParams();

    const cookie = new Cookies();
    const token = cookie.get('user_token')
    const navigater = useNavigate();
    const [projectState, setProjectState] = useState(false);
    const [projectPercent, setProjectPercent] = useState(false);
    const [firstPercent, setFirstPercent] = useState(0);
    const [lastPercent, setLastPercent] = useState(100);
    const [percentVal, setPercentVal] = useState('good');

    const stateHandler = () => {
        if (projectState) {
            setProjectState(false)
        } else {
            setProjectState(true)
            setProjectPercent(false);
        }
    }

    const percentHandler = () => {
        if (projectPercent) {
            setProjectPercent(false)
        } else {
            setProjectPercent(true)
            setProjectState(false);
        }
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

    const closeClickHandler = async() => {
        navigater('/discover');
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        setProjectPercent(false);
        setPercent([Number(firstPercent), Number(lastPercent)]);
    }

    return <>
    <div className={classes.filter}>
            <div>
                {cont && <span>{cont} <CloseIcon onClick={closeClickHandler} /></span>}
            </div>
            {cont && <div>
                {progress === 'all'
                    ? <button onClick={stateHandler}>상태 <KeyboardArrowDownIcon /></button>
                    : <button onClick={stateHandler}>
                        {progress === 'ing' && '진행중인 프로젝트'}
                        {progress === 'end' && '성사된 프로젝트'}
                        {progress === 'begin' && '공개예정 프로젝트'}
                    </button>}
                <div className={`${projectState && classes.open} ${classes.box}`}>
                    <div onClick={() => {
                        setProgress('all');
                        setProjectState(false);
                    }}>전체 프로젝트</div>
                    <div onClick={() => {
                        setProgress('ing');
                        setProjectState(false);
                    }}>진행중인 프로젝트</div>
                    <div onClick={() => {
                        setProgress('end');
                        setProjectState(false);
                    }}>성사된 프로젝트</div>
                    <div onClick={() => {
                        setProgress('begin');
                        setProjectState(false);
                    }}>공개예정 프로젝트</div>
                </div>
            </div>}
            <div>
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
            <div>
                <button>에디터 추천</button>
            </div>
            
        </div>
    </>
}

export default DiscoverFilter;