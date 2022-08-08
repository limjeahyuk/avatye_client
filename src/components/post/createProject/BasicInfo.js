import React from "react";
import classes from "./basicinfo.module.css";

const BasicInfo = () => {
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
                        <select name="category">
                            <option value="digitalGame">디지털 게임 </option>
                            <option value="webtoonResource">웹툰 리소스</option>
                            <option value="design">디자인 문구</option>
                        </select>
                    </div>
                    <div className={classes.selectCategory}>
                        <p>세부 카테고리</p>
                        <select name="detailcategory">
                            <option value="digitalGame">디지털 게임 </option>
                            <option value="webtoonResource">웹툰 리소스</option>
                            <option value="design">디자인 문구</option>
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
                        <p>긴 제목</p>
                        <input className={classes.inputDIV} type="text" placeholder="짧은 제목을 입력해주세요" autoComplete="off"/>
                        <span className={classes.checkLetters}>0/32</span>
                    </div>
                    <div>
                        <p>짧은 제목</p>
                        <input className={classes.inputDIV} type="text" placeholder="짧은 제목을 입력해주세요" autoComplete="off"/>
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
                    <textarea className={classes.summary}></textarea>
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
                </dl>

                <div className={classes.projectForm2}>
                    <div className={classes.projectIMG}>
                    <input type="file" accept=".jpg, .jpeg, .png" multiple />
                    </div>
                </div>
            </div>


        </div>
    )
}

export default BasicInfo;