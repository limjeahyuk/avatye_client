import React, {useState} from "react";
import classes from "./createProject.module.css";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Funding = () => {
    const [goalprice, setGoalPrice] = useState(0);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [dropDown, setDropDown] = useState(false);
    const [startTime, setStartTime] = useState("12시 00분");

    const priceHandler =(e) => {
        setGoalPrice(e.target.value.replace(/[^0-9]/g, ''))
    }

    const selectTime = () => {
        if (dropDown) {
            setDropDown(false)
        } else {
            setDropDown(true)
        }
    }

    const startTimeSetting = (e) => {
        setStartTime(e.target.innerText)
        setDropDown(false)
    }

    //남은 시간
    const lefttime = (endDate.getTime() - startDate.getTime()) / 1000 / 60 / 60 / 24;

    let paymentFee = (goalprice * 0.03) + ((goalprice * 0.03) * 0.1)
    let platformFee = (goalprice * 0.05) + ((goalprice * 0.05) * 0.1)
    
    const numFormat = (data) => {
        return Math.round(data).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
    }

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
                    <div>목표금액</div>
                    <div className={classes.goalpriceinputDIV}>
                        <input className={classes.goalPrice} name="goalprice" value={numFormat(goalprice)} onChange={priceHandler} type="text"/>
                        <span className={classes.won}>원</span>
                    </div>
                    <div className={classes.estimatePrice}>
                        <div className={classes.amount}>
                            <span>목표 금액 달성 시 예상 수령액</span>
                            <span className={classes.expectedAmount}>
                                {numFormat(goalprice- (paymentFee + platformFee))}원</span>
                        </div>
                        <div>
                            <div className={classes.calAmount}>
                                <span>총 수수료</span>
                                <span>{numFormat(paymentFee+platformFee)}원</span>
                            </div>
                            <div className={classes.calAmount}>
                                <span>결제대행 수수료 (총 결제액의 3% + VAT)</span>
                                <span>{numFormat(paymentFee)}원</span>
                            </div>
                            <div className={classes.calAmount}>
                                <span>플랫폼 수수료(총 모금액의 5%+VAT)</span>
                                <span>
                                    {numFormat(platformFee)}원</span>
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

                <div className={classes.fundingDateDIV}>
                    <ul style={{listStyleType : "disc"}} className={classes.list}>
                        <li className={classes.listLi}>
                            <div className={classes.dateDIV}>
                                <div>시작일
                                    <div className={classes.calender}><CalendarMonthOutlinedIcon /><DatePicker className={classes.selectDate} dateFormat="yyyy/MM/dd" minDate={startDate} selected={startDate} onChange={date => setStartDate(date)} /></div>
                                </div>
                                <div className={classes.startTime}>시작시간
                                    <div className={classes.selectTimeDIV} onClick={selectTime}>{startTime} <KeyboardArrowDownIcon />
                                </div>
                                {dropDown && <div className={classes.selectTime}>
                                    <ul className={classes.timeUL}>
                                        <li onClick={startTimeSetting}>09시 00분</li>
                                        <li onClick={startTimeSetting}>09시 30분</li>
                                        <li onClick={startTimeSetting}>10시 00분</li>
                                        <li onClick={startTimeSetting}>10시 30분</li>
                                        <li onClick={startTimeSetting}>11시 00분</li>
                                        <li onClick={startTimeSetting}>11시 30분</li>
                                        <li onClick={startTimeSetting}>12시 00분</li>
                                        <li onClick={startTimeSetting}>12시 30분</li>
                                        <li onClick={startTimeSetting}>13시 00분</li>
                                        <li onClick={startTimeSetting}>13시 30분</li>
                                        <li onClick={startTimeSetting}>14시 00분</li>
                                        <li onClick={startTimeSetting}>14시 30분</li>
                                        <li onClick={startTimeSetting}>15시 00분</li>
                                        <li onClick={startTimeSetting}>15시 30분</li>
                                        <li onClick={startTimeSetting}>16시 00분</li>
                                        <li onClick={startTimeSetting}>16시 30분</li>
                                        <li onClick={startTimeSetting}>17시 00분</li>
                                        <li onClick={startTimeSetting}>17시 30분</li>
                                        <li onClick={startTimeSetting}>18시 00분</li>
                                    </ul>
                                </div>}
                                </div>
                            </div>
                        </li>
                        <li className={classes.listLi}>
                            <div>
                                펀딩 기간<br/>
                                <span className={classes.endPayment}>{lefttime}일</span>
                            </div>
                        </li>
                        <li className={classes.listLi}>
                            <div>종료일 <HelpOutlineIcon className={classes.helpicon}/><br/>
                                <div className={classes.calender}><CalendarMonthOutlinedIcon /><DatePicker className={classes.selectDate} dateFormat="yyyy/MM/dd" minDate={startDate} selected={endDate} onChange={date => setEndDate(date)} /></div>
                            </div>
                        </li>
                        <li className={classes.listLi}>
                            <div>후원자 결제 종료 <HelpOutlineIcon className={classes.helpicon}/><br/>
                            <span className={classes.endPayment}>종료일 다음 날부터 7일</span></div>
                        </li>
                        <li className={classes.listLi}> 
                            <div>정산일 <HelpOutlineIcon className={classes.helpicon}/><br/>
                            <span className={classes.endPayment}>후원자 결제 종료 다음 날부터 7영업일</span></div>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Funding;