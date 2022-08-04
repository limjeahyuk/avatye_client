import { collapseClasses } from "@mui/material";
import React from "react";
import classes from "./footer.module.css";

const Footer = () => {
    return (
    <div className={classes.footerWrapper}>
        <div className={classes.footerItem}>
            <div className={classes.footerItem1}>
                <div className={classes.item1Guide}>
                    <div>
                        <div className={classes.itemTitle}>텀블벅</div>
                        <p>공지사항</p>
                        <p>서비스 소개</p>
                        <p>채용</p>
                        <p>2021 연말결산</p>
                    </div>
                    <div>
                        <div className={classes.itemTitle}>이용안내</div>
                        <p>헬프 센터</p>
                        <p>첫 후원 가이드</p>
                        <p>창작자 가이드</p>
                        <p>제휴·협력</p>
                    </div>
                    <div>
                        <div className={classes.itemTitle}>정책</div>
                        <p>이용약관</p>
                        <p>개인정보 처리방침</p>
                        <p>프로젝트 심사 기준</p>
                    </div>
                    <div>
                        <div className={classes.itemTitle}>App</div>
                        <p>안드로이드</p>
                        <p>IOS</p>
                    </div>
                </div>

                <div>
                    <div className={classes.customerSupport}>고객지원</div>
                    <div>평일 9:00 ~ 17:00(12:00 ~ 14:00 제외)</div>
                    <button className={classes.questionbtn}>텀블벅에 문의</button>
                </div>
            </div>

            <div className={classes.footerItem2}>
                <div className={classes.companyProfile}>
                    <div><strong>회사명</strong> 텀블벅(주)</div>
                    <div><strong>주소</strong> 안양시 만안구 석수동 210 - 70 301호</div> 
                    <div><strong>대표</strong> 임재혁</div> 
                    <div><strong>사업자등록번호</strong> 105-87-52823</div> 
                    <div><strong>통신판매업 신고번호</strong> 2019-3010165-30-2-02129</div> 
                    <div><strong>대표번호</strong> 02-6080-0760</div><br/>
                    <div>© 2022 Tumblbug Inc.</div>
                </div>

                <div>
                    버튼 넣어야 됨
                </div>
            </div>
        </div>

        <div className={classes.footerNotifyWrapper}>
            <div className={classes.footerNotify}>
                텀블벅은 플랫폼 제공자로서 프로젝트의 당사자가 아니며, 직접적인 통신판매를 진행하지 않습니다. 프로젝트의 완수 및 선물제공의 책임은 해당 프로젝트의 창작자에게 있으며, 프로젝트와 관련하여 후원자와 발생하는 법적 분쟁에 대한 책임은 해당 창작자가 부담합니다.
            </div>
        </div>
        
    </div>
    );
}

export default Footer;