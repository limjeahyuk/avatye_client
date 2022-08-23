import React, {useState} from "react";
import axios from "axios";
import { Cookies } from 'react-cookie';
import classes from '../mypage.module.css'
import { useNavigate } from "react-router-dom";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import MyShippingSettingModal from "../Modals/MyShippingSettingModal";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const SettingShippingTab = ({data, setData}) => {
    const navigater = useNavigate();
    const cookies = new Cookies();
    const token = cookies.get('user_token');
    
    const [openModal, setOpenModal] = useState(false);
    const [option, setOption] = useState(false);

    console.log(data)

    const modalHandler = () => {
        if(openModal){
            setOpenModal(false)
        }else{
            setOpenModal(true)
        }
    }

    const openDropdown = () => {
        if (option) {
            setOption(false)
        } else {
            setOption(true)
        }
    }

    console.log(data.shipIndex)

    //배송지 삭제
    const deleteShipping = () => {
        axios.delete('http://localhost:3000/user/shipping', {headers : {'user_token': token}, data : {shippingIndex : data.shipIndex}, })
        .then(response => {
            console.log("성공적으로 삭제되었습니다.");
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return(
        <div>
            {openModal && <MyShippingSettingModal handler ={modalHandler} /> }
        
            
        <div className={classes.settingBox}>
            <div className={classes.settingItemList}>
                <div className={classes.settingItem}>
                    {/* 등록된 결제수단 */}
                    {!data.address ? <div>
                        <div className={classes.ItemTitle}>
                           <span>등록된 배송지</span>
                            <button className={classes.changeBTN} onClick={modalHandler}>+ 추가</button>
                        </div>
                        <div className={classes.payMethod}>
                            <div className={classes.noValueBox}>
                                <div><ErrorOutlineIcon className={classes.iconWidth}/></div>
                                <div>등록된 배송지가 없습니다.</div>
                                <div>배송지를 추가해주세요. </div>
                            </div>
                        </div>
                        </div> :
                        <div>
                            <div>
                                <div className={classes.ItemTitle}>
                                    <span>등록된 배송지</span>
                                    <button className={classes.changeBTN} onClick={modalHandler}>+ 추가</button>
                                </div>

                                <div className={classes.shippingList}>
                                    <div>
                                        <div><span className={classes.shippingUserName}>{data.userName}</span></div> 
                                        <div>{data.address}</div>
                                        <div>{data.shipphone}</div>
                                    </div>
                                    <div>
                                        <button onClick={openDropdown} className={classes.shippingbtn}><MoreHorizIcon /></button>
                                    </div>
                                </div>
                            </div>
                            {option && <div className={classes.optionDiv}>
                                        <button className={classes.optionButton}>수정</button>
                                        <button onClick={deleteShipping} className={classes.optionButton}>삭제</button>
                                        </div>}
                        </div> }

                </div>
            </div>


            <div className={classes.settingInfo}>
                <div className={classes.settingInfoTitle}>배송지를 삭제하면 예약된 후원의 배송지 정보도 삭제되나요?</div>
                <div>
                    현재 후원하신 프로젝트에 등록된 배송지가 삭제되거나 변경되진 않습니다. 이를 변경하시려면 후원현황에서 변경해주세요.
                    <span className={classes.settingInfoLink} onClick={()=> {navigater('/mypage')}}> 내 후원현황 바로가기</span>
                </div>
            </div>
        </div>

        
        </div>
        );
}

export default SettingShippingTab