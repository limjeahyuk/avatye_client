import React, { useEffect, useState } from "react";
import classes from './createProject.module.css';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import DownloadIcon from '@mui/icons-material/Download';
import axios from "axios";
import { Cookies } from "react-cookie";

const CreatorInfo = () => {
    const [bankState, setBankState] = useState(false);
    const [userData, setUserData] = useState({
        nickName: '',
        profileImage: '',
        comment: '',
        bank: '',
        account: ''
    });

    const cookie = new Cookies();
    const token = cookie.get('user_token');

    const sendRequest = async () => {
        const response = await axios.get("http://localhost:3000/mypage/profile", { headers : {'user_token' : token} })
        setUserData({
            ...userData,
            nickName: response.data.userProfile.nickName,
            profileImage: response.data.userProfile.profileImage,
            comment: response.data.userComment.comment
        });
    }

    const onChangeHandler = (e) => {
        const { name, value } = e.target
        setUserData({
            ...userData,
            [name]: value
        })

        console.log(userData);
    }

    useEffect(() => {
        sendRequest();
    },[])

    return(<div className={classes.cont}>
        <div className={classes.creator}>
            <div className={classes.name}>
                <div className={classes.contintro}>
                    <div>창작자 이름<span>*</span></div>   
                    <p>창작자 개인이나 팀을 대표할 수 있는 이름을 써주세요.</p>
                </div>
                <div>
                    <input type="text" value={userData.nickName} name="nickName" onChange={onChangeHandler}/>
                    <span>1/20</span>
                </div>
            </div>
            <div className={classes.img}>
                <div className={classes.contintro}>
                    <div>프로필 이미지<span>*</span></div>
                    <p>창작자 개인이나 팀의 사진을 올려주세요.</p>
                </div>
                <div>
                    <img src={userData.profileImage} alt="dd"/>
                    <div>
                        <input type="file" id="img" name="profileImage" onChange={onChangeHandler}/>
                        <label htmlFor="img"><DownloadIcon />이미지 파일 업로드</label>
                        <span>파일 형식은 jpg 또는 png 또는 gif로,</span>
                        <span>사이즈는 가로 200px, 세로 200px 이상으로 올려주세요.</span>
                    </div>
                </div>
            </div>
            <div className={classes.intro}>
                <div className={classes.contintro}>
                    <div>창작자 소개 <span>*</span></div>
                    <p>2~3문장으로 창작자님의 이력과 간단한 소개를 써주세요.</p>
                </div>
                <div>
                    <textarea name="comment" value={userData.comment || ''} onChange={onChangeHandler}></textarea>
                    <span>0/300</span>
                </div>
            </div>
            <div className={classes.bank}>
                <div className={classes.contintro}>
                    <div>입금 계좌<span>*</span></div>
                    <p>후원금을 전달받을 계좌를 등록해주세요. 법인사업자는 법인계좌로만 정산받을 수 있습니다.</p>
                </div>
                {!bankState && <div className={classes.bankcont}>
                    <div>
                        <div>
                            <CurrencyBitcoinIcon />
                            {userData.bank && <span className={classes.bankname}>{userData.bank}</span>}
                        </div>
                        {!userData.account && <span>후원금을 수령할 계좌를 등록해주세요.</span>}
                        {userData.account && <span>{userData.account}</span>}
                    </div>
                    <button onClick={() => setBankState(true)}>등록하기</button>
                </div>}
                {bankState && <div className={classes.bankinput}>
                    <div className={classes.names}>
                        <div>
                            <label htmlFor="bank">거래은행</label>
                            <select id="bank" name="bank" onChange={onChangeHandler} value={userData.bank}>
                                <option value="none" hidden>은행을 선택해주세요.</option>
                                <option value="KB국민은행">KB국민은행</option>
                                <option value="NH농협">NH농협</option>
                                <option value="IBK기업은행">IBK기업은행</option>
                                <option value="NH투자증권">NH투자증권</option>
                                <option value="SC은행">SC은행</option>
                                <option value="경남은행">경남은행</option>
                                <option value="광주은행">광주은행</option>
                                <option value="우체국">우체국</option>
                                <option value="우리은행">우리은행</option>
                                <option value="하나은행">하나은행</option>
                            </select>
                        </div>
                        <div>
                            <label>예금주명</label>
                            <input type="text" />
                        </div>
                    </div>
                    <div className={classes.num}>
                        <label htmlFor="num">계좌 번호</label>
                        <input id="num" name="account" placeholder="숫자로만 입력해주세요." onChange={onChangeHandler} value={userData.account || ''} />
                        <span>{userData.account.trim().length}/16</span>
                    </div>
                    <div className={classes.btn}>
                        <button onClick={() => setBankState(false)}>취소</button>
                        <button onClick={() => setBankState(false)}>등록</button>
                    </div>
                </div>}
            </div>
        </div>
    </div>
    )
}

export default CreatorInfo;