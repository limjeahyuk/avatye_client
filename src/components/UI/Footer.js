import React, { useEffect, useState } from "react";
import classes from "./footer.module.css";
//SNS button
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import { useLocation } from "react-router-dom";

const Footer = () => {

    const location = useLocation();
    const [isFooter, setIsFooter] = useState(true);

    useEffect(() => {
        const loginpath = location.pathname.slice(0, 6);
        const joinpath = location.pathname.slice(0, 5);
        const post = location.pathname.slice(0, 15);

        if (loginpath === '/login' || joinpath === '/join' || post === '/project-editor') {
            setIsFooter(false);
        } else {
            setIsFooter(true);
        }
    },[location])

    return (<>
        {isFooter === true && <div className={classes.footerWrapper}>
        <div className={classes.footerItem}>
            <div className={classes.footerItem1}>
                <div className={classes.item1Guide}>
                    <div className={classes.guideColumn}>
                        <div className={classes.itemTitle}>텀블벅</div>
                        <p>공지사항</p>
                        <p>서비스 소개</p>
                        <p>채용</p>
                        <p>2021 연말결산</p>
                    </div>
                    <div className={classes.guideColumn}>
                        <div className={classes.itemTitle}>이용안내</div>
                        <p>헬프 센터</p>
                        <p>첫 후원 가이드</p>
                        <p className={classes.creatorGuide}>창작자 가이드</p>
                        <p>제휴·협력</p>
                    </div>
                    <div className={classes.guideColumn}>
                        <div className={classes.itemTitle}>정책</div>
                        <p>이용약관</p>
                        <p>개인정보 처리방침</p>
                        <p>프로젝트 심사 기준</p>
                    </div>
                    <div className={classes.guideColumn}>
                        <div className={classes.itemTitle}>App</div>
                        <p><button className={classes.tumblebugAPP}><img className={classes.androids}src="/images/android.png" width="14px" alt="android" /> 안드로이드</button></p>
                        <p><button className={classes.tumblebugAPP}> iOS</button></p>
                    </div>
                </div>

                <div>
                    <div className={classes.customerSupport}>고객지원</div>
                    <div className={classes.questionTime}>평일 9:00 ~ 17:00(12:00 ~ 14:00 제외)</div>
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
                    <div><strong>대표번호</strong> 02-6080-0760</div>
                    <div className={classes.copyright}>© 2022 Tumblbug Inc.</div>
                </div>

                <div className={classes.btnWrapper}>
                    <div className={classes.tumblebugSNS}><img className={classes.kakaoIMG}src="/images/kakao.png" alt="android" /></div>
                    <div className={classes.tumblebugSNS}><FacebookIcon /></div>
                    <div className={classes.tumblebugSNS}><TwitterIcon /></div>
                    <div className={classes.tumblebugSNS}><InstagramIcon /></div>
                    <div className={classes.tumblebugSNS}><img className={classes.kakaoIMG}src="/images/naver.png" alt="naver" /></div>
                    <div className={classes.tumblebugSNS}><ArrowDropDownCircleIcon /></div>
                </div>
            </div>
        </div>

        <div className={classes.footerNotifyWrapper}>
            <div className={classes.footerNotify}>
                텀블벅은 플랫폼 제공자로서 프로젝트의 당사자가 아니며, 직접적인 통신판매를 진행하지 않습니다. 프로젝트의 완수 및 선물제공의 책임은 해당 프로젝트의 창작자에게 있으며, 프로젝트와 관련하여 후원자와 발생하는 법적 분쟁에 대한 책임은 해당 창작자가 부담합니다.
            </div>
        </div>
        
    </div >}
        </>

        
    );
}

export default Footer;