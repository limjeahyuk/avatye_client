import React, {useState} from "react";
import classes from "./createProject.module.css";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { ConstructionOutlined } from "@mui/icons-material";
 
const Gift = ({data, setData, date}) => {
    const [limitState, setLimitState] = useState(false);
    const [save, setSave] = useState(false);
    const [plusDate, setplusDate] = useState(0);
    const [giftNum, setGiftNum] = useState(0);

    const onChange = e => {
        const {name, value} = e.target
        setData({
            ...data,
            [name] : value
        })
    };

    const showLimitBtn = () => {
        if (limitState) {
            setLimitState(false)
        } else {
            setLimitState(true)
        }
    }

    const saveItem = () => {
        if (save) {
            setSave(false)
        } else {
            setSave(true)
        }
    }

    console.log(data)

    //날짜 계산
    let deliDate = new Date(date);
    const day = ['일', '월', '화', '수', '목', '금', '토']
    let payEndDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    let calDate = new Date(deliDate.setDate(date.getDate() + Number(plusDate)));
    let deliveryDate = calDate.getFullYear() + "-" + (calDate.getMonth() + 1) + "-" + calDate.getDate() + "(" + day[calDate.getDay()] + ")";

    const setDeliveryDate = (e) => {
        setplusDate(e.target.value);
        setData({
            ...data,
            giftDeliveryDate : calDate
        })
    }

    return(
        <div className={classes.fundingWrapper}>
            <div className={classes.infoItem}>
                <dl className={classes.giftItemList}>
                    <dt className={classes.giftDT}>
                        <div>내가 만든 선물 
                            <span className={classes.giftNum}>{giftNum}</span>
                        </div>
                        <div>
                            <span className={classes.orderBy}>정렬</span>
                            <span><HelpOutlineIcon className={classes.helpicon}/></span>
                        </div> 
                    </dt>
                    <div className={classes.createGiftBox}>
                        <span className={classes.giftPrice}>1,000원+</span>
                        <span className={classes.giftinfo}>선물없이 후원하기</span> 
                    </div>
                    {save && <div className={classes.createGiftBox}>    
                            <div className={classes.giftboxlist}>
                                <span className={classes.giftPrice}>{(data.giftPrice).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원+</span>
                                <button className={classes.deleteBTN} onClick={saveItem}><DeleteForeverOutlinedIcon className={classes.deleteIcon}/></button>
                            </div>
                            <div className={classes.giftDetail}>{data.giftDetail}</div>
                            <div>
                                <ul className={classes.giftTitle}>
                                    <li>{data.giftTitle}</li>
                                </ul>
                            </div>
                            <div className={classes.giftDetail}>예상 전달일 : {calDate.getFullYear() + "년 " + (calDate.getMonth()+1) + "월 " + calDate.getDate() + "일"}</div>
                            <div className={classes.flexDiv}>
                                <div className={classes.giftCount}>✓ {data.giftCount} 명이 선택</div>
                                <div className={classes.giftStock}>{data.giftStock}개 남음</div>
                            </div>
                        </div>}
                </dl>

                <div className={classes.createGiftForm}>
                    <div className={classes.createGiftTitle}>선물 만들기<span>*</span></div>
                    <div className={classes.createInfo}>
                        선물은 후원자에게 프로젝트의 가치를 전달하는 수단입니다. 다양한 금액대로 여러 개의 선물을 만들어주세요. 펀딩 성공률이 높아지고, 더 많은 후원 금액을 모금할 수 있어요
                    </div>
                    {/* 선물 아이템 */}
                    <div className={classes.createSection}>
                        <div className={classes.createGiftSubTitle}>선물 아이템 <HelpOutlineIcon className={classes.helpicon}/></div>
                        <div className={classes.createInfo}>선물을 구성하는 아이템을 추가해주세요.</div>
                        <input className={classes.createGiftInput} type="text" placeholder="아이템을 입력해주세요" onChange={onChange} name="giftTitle" value={data.giftTitle || ""} autoComplete="off"/>
                    </div>

                    {/* 선물 설명 */}
                    <div className={classes.createSection}>
                        <div className={classes.createGiftSubTitle}>선물 설명 <HelpOutlineIcon className={classes.helpicon}/></div>
                        <div className={classes.createInfo}>얼리버드, 리미티드 에디션 등 선물에 대한 설명을 입력해주세요.</div>
                        <input className={`${classes.createGiftInput} ${data.giftDetail.length > 50 && classes.valiNo}`} type="text" placeholder="선물세트 A, 배송비 포함" onChange={onChange} name="giftDetail" value={data.giftDetail || ""} autoComplete="off"/>
                        <div className={classes.checkContentLetters}>{data.giftDetail.length}/50</div>
                    </div>

                    {/* 수량제한 */}
                    <div className={classes.createSection}>
                        <div className={classes.createGiftSubTitle}>수량 제한 <HelpOutlineIcon className={classes.helpicon}/></div>
                        <div className={classes.limitDIV}>
                            <label className={classes.btndiv} htmlFor="yes"><input id="yes" type="radio" name="limit" onChange={showLimitBtn}/> 있음
                            {limitState && <div className={classes.qtyDiv}>
                                    <input className={classes.inputQTY} type="number" name="giftStock" value={data.giftStock || ""} onChange={onChange}/>
                                <div className={classes.gae}>개</div></div>}
                            </label>
                            <label className={classes.btndiv} htmlFor="no"><input id="no" type="radio" name="limit" onChange={() => {setLimitState(false)}} /> 없음</label>
                        </div>
                        {data.giftStock >= 1000 ? <div className={classes.validateNum}>1000개 이하의 개수를 입력해 주세요.</div> : data.giftStock < 1 ? <div className={classes.validateNum}>1개 이상의 개수를 입력해 주세요.</div> : <div></div>}
                    </div>

                    {/* 예상 전달일 */}
                    <div className={classes.createSection}>
                        <div className={classes.createGiftSubTitle}>예상 전달일 <HelpOutlineIcon className={classes.helpicon}/></div>
                        <div className={classes.deliveryDateDIV}>
                            <div className={classes.deliveryDateFlex}>
                                <div><CalendarMonthOutlinedIcon /></div>
                                <div className={classes.expectedAmount}>{deliveryDate}</div>
                            </div>
                            <div className={classes.deliveryDateFlex2}>
                                <div>결제 종료일({payEndDate})로부터</div>
                                <div className={classes.priceDIV}>
                                    <input className={classes.createGiftInput2} type="number" onChange={setDeliveryDate} name="plusDate" value={plusDate || ''} autoComplete="off"/>
                                <div className={classes.won2}>일 뒤</div>

                            </div>
                        </div>
                        </div>
                        {plusDate >= 1825 ? <div className={classes.validateNum}>최대 1825일 이내로 설정해주세요.</div> : plusDate < 1 ? <div className={classes.validateNum}>최소 1일 이상으로 설정해주세요.</div> : <div></div>}
                    </div>
                    
                    {/* 배송 여부 */}
                    <div className={classes.createSection}>
                        <div className={classes.createGiftSubTitle}>배송 여부</div>
                        <div className={classes.createInfo}>'네'를 선택하시면 선물 전달에 필요한 후원자의 주소를 후원 과정에서 수집합니다. 수집된 주소는 후원자가 결제를 완료한 후에 확인할 수 있습니다</div>
                        <div className={classes.limitDIV}>
                            <label className={classes.btndiv} htmlFor="deliveryYes"><input id="deliveryYes" type="radio" name="delivery" checked readOnly/> 네</label>
                            <label className={classes.btndiv} htmlFor="deliveryNo"><input id="deliveryNo" type="radio" name="delivery" /> 아니요</label>
                        </div>
                    </div>

                    {/* 최소 후원 금액 */}
                    <div className={classes.createSection}>
                        <div className={classes.createGiftSubTitle}>최소 후원 금액 <HelpOutlineIcon className={classes.helpicon}/></div>
                        <div className={classes.createInfo}>배송에 필요한 선물은 배송비를 포함해주세요.</div>
                        <div className={classes.priceDIV}>
                            <input className={classes.createGiftInput2} type="number" placeholder="1000원 이상의 금액을 입력해주세요" onChange={onChange} name="giftPrice" value={data.giftPrice || ""} autoComplete="off"/>
                            <div className={classes.won2}>원</div>
                        </div>
                        {data.giftPrice < 1000 ? 
                            <div className={classes.validateNum}> 1,000원 이상의 금액을 입력해주세요.</div> : 
                                data.giftPrice > 9999999999 ? <div className={classes.validateNum}>9,999,999,999원 이하의 금액을 입력해주세요.</div> : <div></div>}
                    </div>

                    <div>
                        <button className={classes.resetbtn} onClick={()=> {setData({...data, giftTitle : "", giftDetail : "", giftStock : 0, giftPrice : 1000})}}>초기화</button>
                        <button className={classes.savebtn} onClick={saveItem}>저장</button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Gift;