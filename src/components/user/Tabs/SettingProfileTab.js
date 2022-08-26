import React, { useState, useEffect} from "react";
import classes from '../mypage.module.css'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Cookies } from 'react-cookie';

const SettingProfileTab = ({data, setData}) => {
    const navigater = useNavigate();
    const cookies = new Cookies();
    const token = cookies.get('user_token');

    //button 
    const [changeBtn, setChangeBtn] = useState({
        changeImg : false,
        changeName : false,
        changeComment : false,
        changeWebsite : false,
        changePrivacy : false,
    }); 

    const {changeImg, changeName, changeComment, changeWebsite, changePrivacy} = changeBtn;

    //버튼 변경
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
    const {profileImg, name, comment, website, privacy} = data;
    const [imgUrl, setImgUrl] = useState(profileImg || "/images/profile.jpg");

    useEffect(() => {
        setImgUrl(profileImg);
    }, [profileImg]);

    console.log(imgUrl);

    //데이터 값 변경
    const valueChange = (e) => {
        const {name, value} = e.target
        setData({
            ...data,
            [name] : value
        })
    }

    //이미지 변경
    const imageHandler = (e) => {
        setImgUrl(URL.createObjectURL(e.target.files[0]));
    }

    const imgSaveHandler = async (e) => {
        //imageHandler 실행
        imageHandler(e);

         //formdata로 이미지 저장
        const formdata = new FormData();
        formdata.append('img', e.target.files[0]);

        const config = {
            Headers: {
                'content-type': 'multipart/form-data',
            },
        };

        const f = await axios.post('http://localhost:3000/img', formdata, config)
            .then((res) => {
                console.log(res.data);
                setImgUrl(res.data);
            }).catch((error) => {
                console.log(error);
            })
        
        return f;
    }
    
    //프라이버시 변경
    const isChecked = (e) => {
        if (e.target.checked) {
            setData({
                ...data,
                privacy : 1
            })
        } else {
            setData({
                ...data,
                privacy : 0
            })
        }
    }  

    //정보 변경
    const updateUserInfo = () => {
        const data = {
            profileImage : imgUrl,
            nickName : name,
            comment : comment,
            webAdress : website,
            private : privacy,
        }
        axios.put('http://localhost:3000/user/update', data, {headers: {user_token : token}})
        .then(response => {
            console.log("성공적으로 바꿨습니다");
            setChangeBtn({
                ...changeBtn,
                changeImg : false,
                changeName : false,
                changeComment : false,
                changeWebsite : false,
                changePrivacy : false,
            })
        })
    }

    return( 
        <div className={classes.settingBox}>
            <div className={classes.settingItemList}>
                <div className={classes.settingItem}>
                    {/* 프로필 사진 */}
                    <div className={classes.ItemTitle}>
                        <span>프로필 사진</span>
                        {changeImg? <button onClick={btnChange} name="changeImg" value={changeImg} className={classes.cancelBTN}>취소</button> : 
                            <button onClick={btnChange} name="changeImg" value={changeImg} className={classes.changeBTN}>변경</button>}
                    </div>
                    {changeImg ? <div><div className={classes.itemFlex}>
                                <img src={imgUrl} alt="userImage" />
                                <div>
                                    <div>
                                        <input className={classes.uploadInput} id="ChangeImg" type="file" accept=".jpg, .jpeg, .png" onChange={imgSaveHandler}/>
                                        <label htmlFor="ChangeImg" className={classes.fileUpload}>파일 업로드</label></div>
                                    <div className={classes.uploadInfo}>250 x 250 픽셀에 최적화되어 있으며, 10Mb 이하의 JPG, GIF, PNG 파일을 지원합니다.</div>
                                </div></div>
                                <button onClick={updateUserInfo} className={classes.saveImg}>저장</button>
                                </div>
                                 :  
                                <div><img src={imgUrl} alt="userImage" />
                                </div>}
                </div>  


                <div className={classes.settingItem}>
                    {/* 이름 */}
                    <div className={classes.ItemTitle}>
                        <span>이름</span>
                        {changeName? <button onClick={btnChange} name="changeName" value={changeName} className={classes.cancelBTN}>취소</button> : 
                            <button onClick={btnChange} name="changeName" value={changeName} className={classes.changeBTN}>변경</button>}
                    </div>
                    {changeName ? <div>
                                    <input className={`${classes.nameInput} ${name < 1 && classes.nameInputVali}`} name="name" value={name} onChange={valueChange} type="text" />
                                    {!name && <div className={classes.valiNo}>이름을 비워두시면 안됩니다.</div>}
                                    <div><button onClick={updateUserInfo} className={classes.saveImg}>저장</button></div>
                                </div>
                                 :  
                                <div>{name}</div>}
                </div>


                <div className={classes.settingItem}>
                    {/* 소개 */}
                    <div className={classes.ItemTitle}>
                        <span>소개</span>
                        {changeComment? <button onClick={btnChange} name="changeComment" value={changeComment} className={classes.cancelBTN}>취소</button> : 
                            <button onClick={btnChange} name="changeComment" value={changeComment} className={classes.changeBTN}>변경</button>}
                    </div>
                    {changeComment ? 
                            <div>
                                <textarea className={classes.commentBox} onChange={valueChange} value={comment} name="comment" placeholder="자기소개를 입력해주세요"/>
                                <div><button onClick={updateUserInfo} className={classes.saveImg}>저장</button></div>
                            </div>
                            :  !comment ?
                                <div>등록된 소개가 없습니다.</div> : <div>{comment}</div>
                    }
                </div>


                <div className={classes.settingItem}>
                    {/* 웹사이트 */}
                    <div className={classes.ItemTitle}>
                        <span>웹사이트</span>
                        {changeWebsite? <button onClick={btnChange} name="changeWebsite" value={changeWebsite} className={classes.cancelBTN}>취소</button> : 
                            <button onClick={btnChange} name="changeWebsite" value={changeWebsite}  className={classes.changeBTN}>변경</button>}
                    </div>
                    {changeWebsite ? <div>
                                    <div>
                                        <input className={classes.nameInput} type="text" name="website" value={website} onChange={valueChange}/>
                                    </div>
                                    <div><button onClick={updateUserInfo} className={classes.saveImg}>저장</button></div>
                                </div>
                                 :  !website ?
                                <div>등록된 웹사이트가 없습니다.</div> : <div>{website}</div>}
                </div>

                
                <div className={classes.settingItem}>
                    {/* 프라이버시 */}
                    <div className={classes.ItemTitle}>
                        <span>프라이버시</span>
                        {changePrivacy? <button onClick={btnChange} name="changePrivacy" value={changePrivacy} className={classes.cancelBTN}>취소</button> : 
                            <button onClick={btnChange} name="changePrivacy" value={changePrivacy} className={classes.changeBTN}>변경</button>}
                    </div>
                    {changePrivacy ? privacy === 1 ? 
                                <div>
                                    <label><input type="checkbox" name="supportList" value="yes" onChange={isChecked} defaultChecked/> 후원한 프로젝트 목록을 공개합니다.</label>
                                    <div><button onClick={updateUserInfo} className={classes.saveImg}>저장</button></div>
                                </div> :
                                <div>
                                    <label><input type="checkbox" name="supportList" value="yes" onChange={isChecked} /> 후원한 프로젝트 목록을 공개합니다.</label>
                                    <div><button onClick={updateUserInfo} className={classes.saveImg}>저장</button></div>
                                </div>
                                 :  !privacy ?
                                <div>후원한 프로젝트 목록을 공개하지 않습니다.</div> : <div>✓ 후원한 프로젝트 목록을 공개합니다.</div>}
                </div>
            </div>


            <div className={classes.settingInfo}>
                <div className={classes.settingInfoTitle}>어떤 정보가 프로필에 공개되나요?</div>
                <div>
                    프로필 사진과, 이름, 사용자 이름, 소개글, 웹사이트 및 회원님과 관련된 프로젝트 등이 프로필 페이지에 공개 됩니다. 
                    프라이버시 설정을 활성화하시면 후원한 프로젝트 목록을 숨길 수 있습니다. 
                    <span className={classes.settingInfoLink}onClick={()=> {navigater('/mypage')}}> 내 프로필 바로가기</span>
                </div>
            </div>
        </div>
        );
}

export default SettingProfileTab