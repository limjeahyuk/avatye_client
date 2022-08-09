import React from "react";
import classes from "./createProject.module.css";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const Funding = () => {
    return (
        <div className={classes.fundingWrapper}>
            <div className={classes.infoItem}>
                <dl className={classes.projectInfo}>
                    <dt>목표 금액 <span>*</span> </dt>
                    <dd>프로젝트를 완수하기 위해 필요한 금액을 설정해주세요.
                    </dd>
                    <div className={classes.projectInfoNotice}>
                        <span className={classes.noticeSpan}><ErrorOutlineIcon className={classes.noticeIcon}/> 목표 금액 설정 시 꼭 알아두세요!</span><br/>
                        <ul>
                            <li>종료일까지 목표금액을 달성하지 못하면 후원자 결제가 진행되지 않습니다.</li>
                            <li>종료 전 후원 취소를 대비해 10% 이상 초과 달성을 목표로 해주세요.</li>
                            <li>제작비, 선물 배송비, 인건비, 예비 비용 등을 함께 고려해주세요.</li>
                        </ul>
                    </div>
                </dl>

                <div className={classes.goalPriceDIV}>
                    <p>목표금액</p>
                    <input type="text" className={classes.goalPriceInput} /><span className={classes.won}>원</span>
                    <div className={classes.estimatePrice}>
                        <div className={classes.amount}>
                            <span>목표 금액 달성 시 예상 수령액</span>
                            <span>0원</span>
                        </div>
                        <div>
                            <div className={classes.calAmount}>
                                <span>총 수수료</span>
                                <span>0원</span>
                            </div>
                            <div className={classes.calAmount}>
                                <span>결제대행 수수료 (총 결제액의 3% + VAT)</span>
                                <span>0원</span>
                            </div>
                            <div className={classes.calAmount}>
                                <span>플랫폼 수수료(총 모금액의 5%+VAT)</span>
                                <span>0원</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={classes.infoItem}>
                <dl className={classes.projectInfo}>
                    <dt>펀딩 일정 <span>*</span> </dt>
                    <dd>설정한 일시가 되면 펀딩이 자동 시작됩니다. 펀딩 시작 전까지 날짜를 변경할 수 있고, 즉시 펀딩을 시작할 수도 있습니다.
                    </dd>
                </dl>

            </div>

        </div>
    )
}

export default Funding;