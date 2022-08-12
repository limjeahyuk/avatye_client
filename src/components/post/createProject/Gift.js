import React, {useState} from "react";
import classes from "./createProject.module.css";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import { CleaningServices } from "@mui/icons-material";

const Gift = () => {
    const [limitState, setLimitState] = useState(false);
    const [limitNum, setLimitNum] = useState(1);
    const [deliveryDate, setDeliveryDate] = useState();
    const [giftNum, setGiftNum] = useState(0);
    const [data, setData] = useState({
        giftItem : "",
        giftContent : "",
        limitQty : "",
        supportPrice : ""
    })

    const {giftItem, giftContent, limitQty, supportPrice} = data;

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

    const hideLimitBtn = () => {
        setLimitState(false)
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
                    {/* 만든 선물 뜨게하기 */}
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
                        <input className={classes.createGiftInput} type="text" placeholder="아이템을 입력해주세요" onChange={onChange} name="giftItem" value={giftItem} autoComplete="off"/>
                    </div>

                    {/* 선물 설명 */}
                    <div className={classes.createSection}>
                        <div className={classes.createGiftSubTitle}>선물 설명 <HelpOutlineIcon className={classes.helpicon}/></div>
                        <div className={classes.createInfo}>얼리버드, 리미티드 에디션 등 선물에 대한 설명을 입력해주세요.</div>
                        <input className={classes.createGiftInput} type="text" placeholder="선물세트 A, 배송비 포함" onChange={onChange} name="giftContent" value={giftContent} autoComplete="off"/>
                        <div className={classes.checkContentLetters}>{giftContent.length}/50</div>
                    </div>

                    {/* 수량제한 */}
                    <div className={classes.createSection}>
                        <div className={classes.createGiftSubTitle}>수량 제한 <HelpOutlineIcon className={classes.helpicon}/></div>
                        <div className={classes.limitDIV}>
                            <label className={classes.btndiv} htmlFor="yes"><input id="yes" type="radio" name="limit" onChange={showLimitBtn}/> 있음
                                {limitState && <div className={classes.qtyDiv}><input className={classes.inputQTY} type="text" name="limitNum" value={limitNum} onChange={(e) => {setLimitNum(e.target.value)}}/><div className={classes.gae}>개</div></div>}
                            </label>
                            <label className={classes.btndiv} htmlFor="no"><input id="no" type="radio" name="limit" onChange={hideLimitBtn} /> 없음</label>
                        </div>
                    </div>

                    {/* 예상 전달일 */}
                    <div className={classes.createSection}>
                        <div className={classes.createGiftSubTitle}>예상 전달일 <HelpOutlineIcon className={classes.helpicon}/></div>
                        <div className={classes.deliveryDateDIV}>
                            <div className={classes.deliveryDateFlex}>
                                <div><CalendarMonthOutlinedIcon /></div>
                                <div className={classes.expectedAmount}>date</div>
                            </div>
                            <div className={classes.deliveryDateFlex2}>
                                <div>결제 종료일()로부터</div>
                                <div className={classes.priceDIV}>
                                    <input className={classes.createGiftInput2} type="text" onChange={onChange} name="supportPrice" value={supportPrice} autoComplete="off"/>
                                <div className={classes.won2}>일 뒤</div>
                            </div>
                        </div>
                        </div>
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
                            <input className={classes.createGiftInput2} type="text" placeholder="1000원 이상의 금액을 입력해주세요" onChange={onChange} name="deliveryDate" value={deliveryDate} autoComplete="off"/>
                            <div className={classes.won2}>원</div>
                        </div>
                    </div>

                    <div>
                        <button className={classes.resetbtn}>초기화</button>
                        <button className={classes.savebtn}>저장</button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Gift;