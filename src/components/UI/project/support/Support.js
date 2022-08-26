import React, {useState} from "react";
import classes from './support.module.css'
import SavingsIcon from '@mui/icons-material/Savings';
import { useNavigate } from "react-router-dom";

const Support = () => {
    const [checkCard, setCheckCard] = useState(false);

    const navigater = useNavigate();

    const cardOpen = () => {
        if (checkCard) {
            setCheckCard(false)
        } else {
            setCheckCard(true)
        }
    }

    return (
        <div>
            <div className={classes.supportHeader}>
                <div>
                    <img src="./logo.png" alt="logoImg" onClick={() => navigater('/')}/>
                    <span>·</span>
                    <span className={classes.supportTitle}> 프로젝트 후원하기</span>
                </div>
            </div> 

            <div className={classes.supportContainer}>
                <div className={classes.supportProject}>
                    <div><img src="https://tumblbug-pci.imgix.net/51f30b224330817ed70ec31e4e372365fd9fd40a/78e55c1987e2f7cef287e73074c72b9b9b4526d2/1dc4eb21958c4408417a1ccbd25cd7e9ea8cae15/a87e587f-1187-4657-99de-226c89129749.jpeg?auto=format%2Ccompress&fit=crop&h=465&lossless=true&w=620&s=c6962383b03df1e9dfe75522b58e5d2c" alt="supportProjectImg"/></div>
                    <div className={classes.supportPrjectInfo}>
                        <div>뷰티 | 성공맛집 드레싱 테이블</div>
                        <div>[모공수면팩] 자는동안 완성되는 모공관리/주름관리, 1일1팩</div>
                        <div>
                            <span>50000원</span><span>900%</span><span>· 11일 남음</span>
                        </div>
                    </div>
                </div>

                <div className={classes.supportInfoListWrapper}>
                    {/* 선물 및 각종 정보들 */}

                    <div className={classes.supportInfoList}>
                        {/* 선물 정보 */}
                        <div className={classes.infoTitle}>선물 정보</div>
                        <div className={classes.supportItemBox}>
                            <div>
                                <div className={classes.item}>
                                    <div>선물 구성</div>
                                    <div>
                                        [얼리버드 1차] 단품 1개 20% 할인
                                        <ul className={classes.giftul}>
                                            <li>블루탄지 모공슬리핑팩 30ml (x1)</li>
                                            <li>기초샘플 4종 (x1)</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className={classes.item}>
                                    <div>선물 금액</div>
                                    <div>15,000원</div>
                                </div>
                                
                                <div className={classes.item}>
                                    <div>예상 전달일</div>
                                    <div>2022년 9월 14일</div>
                                </div>
                            </div>
                            <div>
                                <div><button className={classes.changebtn}>변경</button></div>
                            </div>
                        </div>
                        
                        {/* 후원자 정보 */}
                        <div className={classes.infoTitle}>후원자 정보</div>
                        <div className={classes.supportItemBox}>
                            <div>
                                <div className={classes.item}>
                                    <div>연락처</div>
                                    <div>010-4830-2092</div>
                                </div>

                                <div className={classes.item}>
                                    <div>이메일</div>
                                    <div>ldfu0269@naver.com</div>
                                </div>

                                <div className={classes.tinyinfo}>
                                    * 위 연락처와 이메일로 후원 관련 소식이 전달됩니다.<br/>
                                    * 연락처 및 이메일 변경은 계정 설정에서 가능합니다
                                </div>
                            </div>
                        </div>


                        {/* 배송지 */}
                        <div className={classes.infoTitle}>배송지</div>
                        <div className={classes.supportItemBox}>
                            <div className={classes.shippinginfo}>
                                <div><span className={classes.shippingName}>이민지</span></div>
                                <div>[16304] 경기도 수원시 장안구 경수대로 어쩌구 그 다음부터 비밀 </div>
                                <div>010-4830-2092</div>
                            </div>
                            <div>
                                <div><button className={classes.changebtn}>변경</button></div>
                            </div>
                        </div>

                        {/* 결제수단 */}
                        <div className={classes.infoTitle}>결제수단</div>
                        <div className={classes.supportItemBox}>
                            <div>
                                <label className={classes.radiolabel}><input type="radio" name="payment" value="card" onClick={()=>{cardOpen()}}/>카드 및 계좌</label>
                                <label className={classes.radiolabel}><input type="radio" name="payment" value="naverpay" onClick={()=>{setCheckCard(false)}}/>네이버페이</label>
                            </div>
                        </div>
                        {checkCard && <div className={classes.cardOpen}>
                            <div>
                                <SavingsIcon />
                                <div>신한은행 / 110-500-835616</div>
                            </div>
                            <div>
                                
                            </div>
                                <div><button className={classes.changebtn}>변경</button></div>
                            </div>}
                    </div>

                    {/* 최종 후원 금액 */}
                    <div className={classes.supportInfo}>
                        <div className={classes.supportPrice}>
                            <div>최종 후원 금액</div>
                            <div>15,000원</div>
                        </div>

                        <div className={classes.paymentInfo}>프로젝트 성공시, 결제는 <span>2022.09.06</span> 에 진행됩니다. 프로젝트가 무산되거나 중단된 경우, 예약된 결제는 자동으로 취소됩니다.</div>

                        <div>
                            <button className={classes.supportBtn}>후원하기</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Support;