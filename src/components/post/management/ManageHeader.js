import React, { useState } from "react";
import classes from './Management.module.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Cookies } from "react-cookie";

const ManageHeader = ({tabHandler, basic, funding}) => {
    const [contSave, setContSave] = useState(true);
    const [tabState, setTabState] = useState(1);


    const cookie = new Cookies();
    const token = cookie.get('user_token')

    const navigater = useNavigate();

    const tabNumHandler = (num) => {
        setTabState(num);
        tabHandler(num);
    }

    const imgSaveHandler = async () => {
        console.log(basic.img)
         //formdata로 이미지 저장
        const formdata = new FormData();
        formdata.append('img', basic.img);

        const config = {
            Headers: {
                'content-type': 'multipart/form-data',
            },
        };

        const f = await axios.post('http://localhost:3000/img', formdata, config)
            .then((res) => {
                console.log(res.data);
                return res.data;
            }).catch((error) => {
                console.log(error);
            })
        
        return f;
    }

    const createProjectHandler = async () => {
        
        try {
            const imgurl = await imgSaveHandler();
            const data = {
                ...basic,
                imgUrl: imgurl
            };

            console.log(imgurl);
            console.log(data);

            await axios({
                url: 'http://localhost:3000/project/createProject',
                method: 'post',
                data: data,
                headers: {
                 'user_token' : token
                }
            }).then(function a(response) {
                console.log(response.data);
            }).catch(function (err) {
                console.log(err);
            })
        }
        catch {
            console.log("error");
        }
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