import React, {useEffect, useState} from "react";
import classes from '../mypage.module.css'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Cookies } from 'react-cookie';

const SettingProfileTab = () => {
    const navigater = useNavigate();
    const [changeImg, setChangeImg] = useState(false);
    const [changeName, setChangeName] = useState(false);
    const [changeComment, setChangeComment] = useState(false);
    const [changeWebsite, setChangeWebsite] = useState(false);
    const [changePrivacy, setChangePrivacy] = useState(false);
    const [data, setData] = useState({
        profileImg : "",
        name : "",
        comment : "",
        website : "",
        privacy : 0,
        email : "",
        password : "",
        phoneNumber : ""
    });

    const {name, comment, website, privacy, email, password, phoneNumber} = data;

    const cookies = new Cookies();
    const token = cookies.get('user_token');

    const [imgData, setImgData] = useState('');
    const [imgUrl, setImgUrl] = useState('/images/profile.jpg');

    const readUserInfo = () => {                    
        axios.get('http://localhost:3000/mypage/userInfor', {headers : {'user_token': token}})
        .then(response => {
            console.log(response.data)
            setData({...data, 
                profileImg : response.data[0].profileImage,
                name : response.data[0].nickName,
                comment : response.data[0].comment,
                website : response.data[0].website,
                privacy : response.data[0].private,
                email : response.data[0].email,
                phoneNumber : response.data[0].phone
            })
            setImgUrl(response.data[0].profileImage)
        }).catch(e => {
            console.log(e)
        })
    }

    useEffect(() => {
        readUserInfo();
    }, [])

    const valueChange = (e) => {
        const {name, value} = e.target
        setData({
            ...data,
            [name] : value
        })
    }

    const changeBtn = () => {
        if (changeImg) {
            setChangeImg(false)
        } else {
            setChangeImg(true)
        }
    }

    const nameChange = () => {
        if (changeName) {
            setChangeName(false)
        } else {
            setChangeName(true)
        }
    }

    const commentChange = () => {
        if (changeComment) {
            setChangeComment(false)
        } else {
            setChangeComment(true)
        }
    }

    const websiteChange = () => {
        if (changeWebsite) {
            setChangeWebsite(false)
        } else {
            setChangeWebsite(true)
        }
    }

    const privacyChange = () => {
        if (changePrivacy) {
            setChangePrivacy(false)
        } else {
            setChangePrivacy(true)
        }
    }

    const imageHandler = (e) => {
        setImgUrl(URL.createObjectURL(e.target.files[0]));
    }


    return( 
        <div className={classes.settingBox}>
            <div className={classes.settingItemList}>
                <div className={classes.settingItem}>
                    {/* 프로필 사진 */}
                    <div className={classes.ItemTitle}>
                        <span>프로필 사진</span>
                        {changeImg? <button onClick={changeBtn} className={classes.cancelBTN}>취소</button> : 
                            <button onClick={changeBtn} className={classes.changeBTN}>변경</button>}
                    </div>
                    {changeImg ? <div><div className={classes.itemFlex}>
                                <img src={imgUrl} alt="userImage" />
                                <div>
                                    <div>
                                        <input className={classes.uploadInput} id="ChangeImg" type="file" accept=".jpg, .jpeg, .png" onChange={imageHandler}/>
                                        <label htmlFor="ChangeImg" className={classes.fileUpload}>파일 업로드</label></div>
                                    <div className={classes.uploadInfo}>250 x 250 픽셀에 최적화되어 있으며, 10Mb 이하의 JPG, GIF, PNG 파일을 지원합니다.</div>
                                </div></div>
                                <button className={classes.saveImg}>저장</button>
                                </div>
                                 :  
                                <div><img src={imgUrl} alt="userImage" />
                                </div>}
                </div>  


                <div className={classes.settingItem}>
                    {/* 이름 */}
                    <div className={classes.ItemTitle}>
                        <span>이름</span>
                        {changeName? <button onClick={nameChange} className={classes.cancelBTN}>취소</button> : 
                            <button onClick={nameChange} className={classes.changeBTN}>변경</button>}
                    </div>
                    {changeName ? <div>
                                    <input className={classes.nameInput} name="name" value={name} onChange={valueChange} type="text" />
                                    <div><button className={classes.saveImg}>저장</button></div>
                                </div>
                                 :  
                                <div>{name}</div>}
                </div>


                <div className={classes.settingItem}>
                    {/* 소개 */}
                    <div className={classes.ItemTitle}>
                        <span>소개</span>
                        {changeComment? <button onClick={commentChange} className={classes.cancelBTN}>취소</button> : 
                            <button onClick={commentChange} className={classes.changeBTN}>변경</button>}
                    </div>
                    {changeComment ? 
                            <div>
                                <textarea className={classes.commentBox} onChange={valueChange} value={comment} name="comment" placeholder="자기소개를 입력해주세요"/>
                                <div><button className={classes.saveImg}>저장</button></div>
                            </div>
                            :  !comment ?
                                <div>등록된 소개가 없습니다.</div> : <div>{comment}</div>
                    }
                </div>


                <div className={classes.settingItem}>
                    {/* 웹사이트 */}
                    <div className={classes.ItemTitle}>
                        <span>웹사이트</span>
                        {changeWebsite? <button onClick={websiteChange} className={classes.cancelBTN}>취소</button> : 
                            <button onClick={websiteChange} className={classes.changeBTN}>변경</button>}
                    </div>
                    {changeWebsite ? <div>
                                    <div>
                                        <input className={classes.nameInput} type="text" name="webstie" value={website} onChange={valueChange}/>
                                    </div>
                                    <div><button className={classes.saveImg}>저장</button></div>
                                </div>
                                 :  !website ?
                                <div>등록된 웹사이트가 없습니다.</div> : <div>{website}</div>}
                </div>

                
                <div className={classes.settingItem}>
                    {/* 프라이버시 */}
                    <div className={classes.ItemTitle}>
                        <span>프라이버시</span>
                        {changePrivacy? <button onClick={privacyChange} className={classes.cancelBTN}>취소</button> : 
                            <button onClick={privacyChange} className={classes.changeBTN}>변경</button>}
                    </div>
                    {changePrivacy ? <div>
                                    <label><input type="checkbox" name="supportList" value="yes" /> 후원한 프로젝트 목록을 공개합니다.</label>
                                    <div><button className={classes.saveImg}>저장</button></div>
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