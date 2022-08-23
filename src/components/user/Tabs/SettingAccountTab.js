import React, {useState} from "react";
import classes from '../mypage.module.css'
import axios from "axios";
import { Cookies } from 'react-cookie';
import { useNavigate } from "react-router-dom";

const SettingAccountTab = ({data, setData}) => {
    const navigater = useNavigate();
    const cookies = new Cookies();
    const token = cookies.get('user_token');
    const [checkPw, setCheckPw] = useState(true);
    const [checkPw2, setCheckPw2] = useState(true);

    //button 
    const [changeBtn, setChangeBtn] = useState({
        changePw : false,
        changePhone: false
    }); 

    const {changePw, changePhone} = changeBtn;

    const btnChange = (e) => {
        const {name, value} = e.target;
        
        if (value === "false") {
            setChangeBtn({
                ...changeBtn,
                [name] : true
            })
        } else {
            setChangeBtn({
                ...changeBtn,
                [name] : false
            })
        }
    }

    //받아온 데이터
    const {email, currpassword, phone, password1, password2} = data;

    const valueChange = (e) => {
        const {name, value} = e.target
        setData({
            ...data,
            [name] : value
        })
    }
    
    //정보 변경
    const updateUserInfo = () => {
        const data = {
            password : password1,
            phone : phone
        }
        axios.put('http://localhost:3000/user/update', data, {headers: {user_token : token}})
        .then(response => {
            console.log("성공적으로 바꿨습니다");
            setChangeBtn({
                ...changeBtn,
                changePw : false,
                changePhone: false
            })
        })
    }

    //비밀번호 저장
    const checkPassword = () => {
        //1. 입력한 비밀번호가 DB에 저장된 비밀번호와 일치하는지 확인
        axios.get('http://localhost:3000/user/passwordcheck', {params : {password : currpassword}, headers: {user_token : token},})
        .then(response => {
            if (response.data === "ok"){
                setCheckPw(true)

                //2. 변경할 비밀번호와 비밀번호 확인부분 일치하는지 확인
                if (password1 === password2) {
                    updateUserInfo();
                } else {
                    setCheckPw2(false)
                }
            } else {
                setCheckPw(false)
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return( 
        <div className={classes.settingBox}>
            <div className={classes.settingItemList}>
                <div className={classes.settingItem}>
                    {/* 이메일 */}
                    <div className={classes.ItemTitle}>
                        <span>이메일</span>
                    </div>
                    <div>{email}</div>
                </div>

                <div className={classes.settingItem}>
                    {/* 비밀번호 */}
                    <div className={classes.ItemTitle}>
                        <span>비밀번호</span>
                        {changePw? <button onClick={btnChange} name="changePw" value={changePw} className={classes.cancelBTN}>취소</button> : 
                            <button onClick={btnChange} name="changePw" value={changePw} className={classes.changeBTN}>변경</button>}
                    </div>
                    {changePw ? <div>
                                    <div className={classes.currPW}>
                                        <div>현재 비밀번호</div>
                                        <div><input className={classes.nameInput} name="currpassword" value={currpassword} onChange={valueChange} type="password" placeholder="현재 비밀번호"/></div>
                                        {!checkPw && <div className={classes.valiNo}>현재 비밀번호가 일치하지 않습니다.</div>}
                                    </div>

                                    <div>변경할 비밀번호</div>
                                    <div><input className={`${classes.nameInput} ${password1 < 1 && classes.nameInputVali}`} type="password" name="password1" value={password1} onChange={valueChange} placeholder="변경할 비밀번호"/></div>
                                    {!password1 && <div className={classes.valiNo}>비워두시면 안됩니다.</div>}
                                    <div><input className={`${classes.nameInput} ${password2 < 1 && classes.nameInputVali}`} type="password" name="password2" value={password2} onChange={valueChange} placeholder="변경할 비밀번호 확인"/></div>
                                    {!password2 && <div className={classes.valiNo}>비워두시면 안됩니다.</div>}
                                    {!checkPw2 && <div className={classes.valiNo}>변경할 비밀번호 확인이 일치하지 않습니다.</div>}
                                    <button onClick={checkPassword} className={classes.saveImg}>저장</button>
                                </div>
                                 :  
                                <div></div>}
                </div>

                <div className={classes.settingItem}>
                    {/* 연락처 */}
                    <div className={classes.ItemTitle}>
                        <span>연락처</span>
                        {changePhone? <button onClick={btnChange} name="changePhone" value={changePhone} className={classes.cancelBTN}>취소</button> : 
                            <button onClick={btnChange} name="changePhone" value={changePhone} className={classes.changeBTN}>변경</button>}
                    </div>
                    {changePhone ? <div>
                                    <input className={classes.nameInput} onChange={valueChange} value={phone} name="phone" type="text" />
                                    <div><button onClick={updateUserInfo} className={classes.saveImg}>저장</button></div>
                                </div>
                                 :  
                                <div>{phone}</div>}
                </div>

                <div className={classes.settingItem}>
                    {/* 카카오톡 계정 연동 */}
                    <div className={classes.ItemTitle}>
                        <span>카카오 계정 연동</span>
                        <button className={classes.changeBTN}>연동</button>
                    </div>
                    <div>✓ 연동중입니다</div>
                </div>

                <div className={classes.settingItem}>
                    {/* 회원탈퇴 */}
                    <div className={classes.ItemTitle}>
                        <span>회원탈퇴</span>
                        <button className={classes.changeBTN}>탈퇴</button>
                    </div>
                </div>
            </div>


            <div className={classes.settingInfo}>
                <div className={classes.settingInfoTitle}>이메일과 연락처는 어디에 쓰이나요?</div>
                <div>
                이메일과 연락처로 프로젝트, 후원 및 결제 관련 알림을 드립니다. 배송 받는 분의 연락처는 개별 후원내역에서 변경해주세요.
                    <span className={classes.settingInfoLink}onClick={()=> {navigater('/mypage')}}> 내 후원현황 바로가기</span>
                </div>
            </div>
        </div>
    );
}

export default SettingAccountTab