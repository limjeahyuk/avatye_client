import React, { useEffect, useState } from "react";
import classes from "./createProject.module.css";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { useLocation } from "react-router-dom";
import axios from "axios";

const BasicInfo = () => {
    const [categoryData, setCategoryData] = useState([{}]);
    const [selectCategory, setSelectCategory] = useState([]);

    const { state } = useLocation();

    const [data, setData] = useState({
        category : state.categoryState,
        detailcategory : "",
        longTitle : "",
        shortTitle : "",
        summary : state.isSummery,
        profileIMG : "",
        video : "",
        webAddress : "",
        searchTag : ""
    });

    const {category, detailcategory, longTitle, shortTitle, summary, profileIMG, video, webAddress, searchTag} = data;

    const onChange = e => {
        const {name, value} = e.target
        setData({
            ...data,
            [name] : value
        })
    };

    const filterData = (cate) => {
        return categoryData.filter((item) => ( item.name === cate ));
    }

    const sendRequest = async () => {
        try {
            const response = await axios.get('http://192.168.0.74:3000/category'); 
            console.log(response.data);
            setCategoryData(response.data);
            const first = response.data.filter((item) => (item.name === state.categoryState));
            setSelectCategory(first[0].catename.split(','));
            console.log(first[0].catename.split(','));
        } catch (err) {
            console.log(err);
        } 
    }

    useEffect(() => {
        sendRequest();
    }, []);

    useEffect(() => {
        if (selectCategory[0]) {
        console.log(filterData(category)[0].catename.split(','));
            setSelectCategory(filterData(category)[0].catename.split(','));
        }
    }, [category])

    return(
        <div className={classes.infoWrapper}>
            {/* 카테고리 선택 */}
            <div className={classes.infoItem}>
                <dl className={classes.projectInfo}>
                    <dt>프로젝트 카테고리 <span>*</span> </dt>
                    <dd>프로젝트 성격과 가장 일치하는 카테고리를 선택해주세요. <br/>
                        적합하지 않을 경우 운영자에 의해 조정될 수 있습니다.
                    </dd>
                </dl>

                <div className={classes.projectForm}>
                    <div className={classes.selectCategory}>
                        <p>카테고리</p>
                        <select name="category" onChange={onChange} value={category}>
                            {categoryData.map((item, index) => (
                                <option value={item.name} key={index}>{item.name}</option>
                            ))}
                        </select>
                    </div>

                    <div className={classes.selectCategory}>
                        <p>세부 카테고리</p>
                        <select name="detailcategory" onChange={onChange} value={detailcategory}>
                            {selectCategory.map((item, index) => (
                                <option value={item} key={index}>{item}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            {/* 프로젝트 제목 */}
            <div className={classes.infoItem}>
                <dl className={classes.projectInfo}>
                    <dt>프로젝트 제목 <span>*</span> </dt>
                    <dd>프로젝트의 주제, 창작물의 특징이 드러나는 멋진 제목을 붙여주세요.
                    </dd>
                </dl>

                <div className={classes.projectForm2}>
                    <div>
                        <p>긴 제목 <HelpOutlineIcon className={classes.helpicon}/></p>
                        <input className={classes.inputDIV} type="text" placeholder="긴 제목을 입력해주세요" onChange={onChange} name="longTitle" value={longTitle} autoComplete="off"/>
                        <span className={classes.checkLetters}>0/32</span>
                    </div>
                    <div>
                        <p>짧은 제목 <HelpOutlineIcon className={classes.helpicon}/></p>
                        <input className={classes.inputDIV} type="text" placeholder="짧은 제목을 입력해주세요" onChange={onChange} name="shortTitle" value={shortTitle} autoComplete="off"/>
                        <span className={classes.checkLetters}>0/7</span>
                    </div>
                </div>
            </div>

            {/* 프로젝트 요약 */}
            <div className={classes.infoItem}>
                <dl className={classes.projectInfo}>
                    <dt>프로젝트 요약 <span>*</span> </dt>
                    <dd>후원자분들이 프로젝트를 빠르게 이해할 수 있도록<br/>
                        명확하고 간략하게 소개해주세요.
                    </dd>
                </dl>

                <div className={classes.projectForm2}>
                    <div>
                    <HelpOutlineIcon className={classes.helpicon}/>
                    <textarea className={classes.summary} onChange={onChange} name="summary" value={summary}></textarea>
                    <span className={classes.checkLetters}>0/50</span>
                    </div>
                </div>
            </div>

            {/* 프로젝트 대표 이미지*/}
            <div className={classes.infoItem}>
                <dl className={classes.projectInfo}>
                    <dt>프로젝트 대표 이미지 <span>*</span> </dt>
                    <dd>후원자들이 프로젝트의 내용을 쉽게 파악하고 좋은 인상을 받을 수 있도록 이미지 가이드라인을 따라 주세요.
                    </dd>
                    <div className={classes.projectInfoNotice}>
                        <span className={classes.noticeSpan}><ErrorOutlineIcon className={classes.noticeIcon}/> 1개 이상의 이미지를 등록하면 이미지 슬라이더 형태로 제공됩니다.</span><br/>
                        푸시 메시지 등 이미지가 1개만 제공되는 상황에서 대표 이미지가 활용됩니다.
                    </div>
                </dl>

                <div className={classes.projectForm2}>
                <HelpOutlineIcon className={classes.helpicon}/>
                <input className={classes.fileUpload} id="imgUpload" type="file" accept=".jpg, .jpeg, .png" multiple />
                    <div className={classes.projectIMG}>
                        <label htmlFor="imgUpload">
                            <span className={classes.projectIMGspan}><FileUploadIcon className={classes.uploadIcon}/> 이미지 업로드(0/5)</span>
                            <p>
                                최소 1개, 최대 5개까지 업로드 가능 <br/>
                                파일 형식 : jpg 또는 png / 사이즈 : 가로 1,240px, 세로 930px 이상</p>
                            <p>이미지를 등록하면 즉시 반영됩니다.</p>
                        </label>
                    </div>
                </div>
            </div>

            {/* 프로젝트 대표 영상 */}
            <div className={classes.infoItem}>
                <dl className={classes.projectInfo}>
                    <dt>프로젝트 대표 영상 <span>*</span> </dt>
                    <dd>
                    2~3분 이내의 짧은 영상으로 프로젝트를 효과적으로 소개해보세요. 대표 영상을 등록하시면 프로젝트 상세에서 이미지와 함께 제공됩니다.
                    </dd>
                </dl>

                <div className={classes.projectForm2}>
                <input className={classes.fileUpload} id="videoUpload" type="file" accept=".jpg, .jpeg, .png"/>
                    <div className={classes.projectIMG}>
                        <label htmlFor="videoUpload">
                        <p>
                            <div className={classes.videoUploadDIV}><FileUploadIcon className={classes.uploadIcon}/> 영상 업로드</div>
                            파일 형식은 mov, mp4, wmv, avi로 <br/>
                            용량은 최대 200MB까지 가능합니다 <br/>
                            이미지를 등록하면 즉시 반영됩니다.
                        </p>
                        </label>
                    </div>
                </div>
            </div>

            {/* 프로젝트 페이지 주소 */}
            <div className={classes.infoItem}>
                <dl className={classes.projectInfo}>
                    <dt>프로젝트 페이지 주소<span>*</span> </dt>
                    <dd>프로젝트 페이지로 접속하기 위한 웹페이지 주소(URL)를 설정 해주세요.
                    </dd>
                </dl>

                <div className={classes.projectForm2}>
                    <div>
                        <p>www.tumblbug.avatye.com:8080/</p>
                        <input className={classes.inputDIV2} type="text" placeholder="URL을 입력해주세요" onChange={onChange} name="webAddress" value={webAddress} autoComplete="off" />
                        <button className={classes.checkDuplication}>중복확인</button><br/>
                        <span className={classes.checkValidate}>최소 3자 이상 입력해주세요.</span>
                        <span className={classes.checkLetters2}>0/28</span>
                    </div>
                </div>
            </div>

            {/* 검색태그 */}
            <div className={classes.infoItem}>
                <dl className={classes.projectInfo}>
                    <dt>검색 태그<span>*</span> </dt>
                    <dd>잠재 후원자의 관심사를 고려한 검색 태그를 입력해주세요. 외부 검색엔진이나 텀블벅에서 해당 태그로 검색한 후원자가 프로젝트를 발견할 수 있습니다.
                    </dd>
                    <div className={classes.projectInfoNotice}>
                        <span className={classes.noticeSpan}><ErrorOutlineIcon className={classes.noticeIcon}/> 검색 태그 설정 시 꼭 알아두세요!</span><br/>
                        검색 태그는 프로젝트 승인 후 변경이 불가합니다. 적합하지 않을 경우 운영자에 의해 조정될 수 있습니다.
                    </div>
                </dl>

                <div className={classes.projectForm2}>
                    <div>
                        <textarea placeholder="예시) 뱃지, 웹툰, 에코백, 고양이, 유기견" className={classes.summary} onChange={onChange} name="searchTag" value={searchTag}></textarea>
                        <span className={classes.checkValidate}>쉼표(,)와 문자로만 최소 2자이상 입력해주세요</span>
                        <span className={classes.checkLetters3}>0/125</span>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default BasicInfo;