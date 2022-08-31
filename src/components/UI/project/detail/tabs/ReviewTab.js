import React, { useEffect, useState } from "react";

import classes from '../detail.module.css'
import ReviewCard from "../cards/ReviewCard";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import axios from "axios";
import { useParams } from "react-router-dom";
import { Cookies } from "react-cookie";

const ReviewTab = (props) => {

    const [write, setWrite] = useState(true)
    const [count, setCount] = useState(0)
    const [data, setData] = useState([])
    const [isSelect, setSelect] = useState(0)
    const [input, setInput] = useState('')

    let { id } = useParams();

    const cookie = new Cookies()
    const token = cookie.get('user_token')

    const lengthcount = (e) => {
        const length = e.target.textLength
        const value = e.target.value;

        if (length > 1000) {
            alert('최대글자입니다')
        } else {
            setCount(length)
            setInput(value)
        }
    }

    const findreview = () => {
        axios.get(`http://localhost:3000/review/which=community&projectID=${id}`)
        .then(response => {
            setData(response.data);
            console.log(response.data)
        })
        .catch(e => {
            console.log(e)
        })
    }

    const writereview = (e) => {
        e.preventDefault();

        if(token) {
            axios({
                method : 'POST',
                url : 'http://localhost:3000/review/community',
                data : {
                    comment : input,
                    projectID : id,
                    which : 'community'
                },
                headers : {
                    'user_token' : token
                }
            })
            .then(response => {
                console.log(response.data)
                alert('작성됐습니다.')
                window.location.reload()
            })
            .catch(e => {
                console.log(e)
            })
        } else {
            alert('로그인하세요')
        }
    }

    useEffect(() => {
        findreview()
    }, [id])

    const test = () => {
        setSelect(!isSelect)
    }

    return (
        <div>
            {write ?
                token ? 
                    <div className={classes.commentwrap}>
                        <div style={{padding: '16px'}}>커뮤니티, 후원후기</div>
                        <div className={classes.commentbox2} 
                            onClick={() => {
                                setWrite(false)
                                props.setView(false)
                            }}>
                            <span>프로젝트에 대한 후기를 남겨주세요!</span>
                        </div>
                        {data.map((data, key) => (
                            <ReviewCard data={data} key={key} />
                        ))}
                    </div> 
                :
                    <div className={classes.commentwrap}>
                        <div style={{padding: '16px'}}>커뮤니티, 후원후기</div>
                        <div className={classes.commentbox}>
                            <span>후원자만 글을 쓸 수 있어요.</span>
                        </div>
                        {data.map((data, key) => (
                            <ReviewCard data={data} key={key} />
                        ))}
                    </div>
                :
                <div>
                    <div className={classes.editheader}>
                        <div className={classes.editcontainer}>
                            <button
                                className={classes.editback} 
                                onClick={() => {
                                    setWrite(true)
                                    props.setView(true)
                                }}
                            >
                                <ArrowBackIcon className={classes.editicon} /> 게시글 작성</button>
                            <button type="submit" onClick={writereview} className={`${classes.editsend} ${count > 10 ? classes.edittsend :classes.editsend}`} disabled={!(count > 10)}>등록</button>
                            {console.log(count)}
                        </div>
                    </div>
                    <div className={classes.notice}>
                        <div className={classes.editcontentbox}>
                            <div className={`${classes.editcontent} ${count > 10 ? classes.editcontent : classes.edituncontent}`}>
                                <div className={classes.editwrite}>
                                    <textarea value={input} placeholder="프로젝트 및 창작자님에 대해 어떤 이야기가 하고 싶으신가요?" onChange={lengthcount}></textarea>
                                </div>
                            </div>
                            <div className={` ${classes.edituncount} ${count >= 1 && count < 10 ? classes.editcount : classes.edituncount}`}>
                                {count >= 1 && count < 10 && <p>10자 이상 1000이내로 입력해주세요.</p>}
                                <span className={`${classes.asd} ${count >= 1 && count < 10 && classes.countspan}`}>{count}/1000</span>
                            </div>
                        </div>
                        <div className={classes.guide}>
                            <div>
                                <div className={classes.guidetitle}>어떤 내용의 글인가요?</div>
                                <div>
                                    <div className={isSelect ? classes.guideunselect : classes.guideselect} onClick={test}>응원글</div>
                                    <div className={isSelect ? classes.guideselect : classes.guideunselect} onClick={test}>의견</div>
                                </div>
                            </div>
                            <div className={classes.guideanswer}>후원하신 프로젝트 창작자에게 응원의 한마디를 남겨주세요. 창작자에게 후원금만큼 큰 힘이 됩니다.</div>
                            <div className={classes.noticetextbox}>
                                <div className={classes.texttitle}><InfoOutlinedIcon className={classes.texticon} />유의사항</div>
                                <ul className={classes.textlist}>
                                    <li>창작자에게 궁금하신 점이 있다면 ‘창작자에게 문의'로 질문해주세요.</li>
                                    <li>텀블벅커뮤니티 운영원칙을 준수해주세요. 프로젝트와 무관한 내용이나 광고, 도배, 욕설, 혐오 조장, 외설, 사칭 등은 예고 없이 삭제될 수 있습니다.</li>
                                    <li>운영원칙 위반 누적시 텀블벅 이용이 제한될 수 있으며, 타인에 대한 모욕이나 명예훼손 등의 경우 법적 책임이 발생할 수도 있습니다.</li>
                                </ul>
                            </div>
                        </div>
                    </div>  
                </div>
            }
        </div>
    )
}

export default ReviewTab