import React, { useState } from "react";

import classes from '../detail.module.css'
import ReviewCard from "../cards/ReviewCard";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ReviewTab = (props) => {

    const Datas = [
        {
            profileImage : "https://tumblbug-pci.imgix.net/3ade3b098b2ff9e757bae3e290e4c4497f0c40f7/9490f1e4e4186fd1a8a9a70f8d99d9eec3ce04d0/08eadb84fe53c05d061f95a5db6dc4bb2619e19d/061fc07c-349a-4a21-8808-34dcfab879d3.jpeg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=9cedd486152b146ff7290b2c917b6a37",
            nickName : "테스트합니다~~~~~",
            contents : "몇가지 문의사항이 있어 글 남깁니다. <br/>데일리 보이스와 단문은 모든 성우님 동일한 글인가요? <br/>단문이 시츄에이션 드라마 개념이라고 하셨는데 홍보영상에 있는 그런 류의 내용인지, 미리 대본이나 시놉을 알려주실 계획은 없으신가요? <br/><br/시낭송은 저작권 만료된 시 중에서 선정한다고 하셨는데 이것또한 모든 성우님들께서 같은 시를 낭독하시는지 궁금합니다. 시낭송의 경우 여러 컨텐츠에서 이미 많이 한적이 있어서 가능하다면 다른 컨텐츠에서 나오지 않았던 다양한 시로 선정해 주십사 부탁드립니다. <br/><br/>러닝타임이 세트 당 3시간30분 예상이라고 하셨는데 한 성우당 러닝타임이 어느정도 되는지도 궁금합니다. (단문,프리토크 시간이 어느정도 되는지..) <br/>프리토크를 짝을 지어 진행한다고 하셨는데 성우님 개개인으로 프리토크 질행할 계획은 없으신가요?<br/>프리토크 질문은 구입자들이 할수있는지도 궁금합니다.<br/>현실적으로 원하는 성우를 택해서 그 조합으로 구매한다는게 어려운건 압니다.<br/>혹시 원하는 성우만 선택해서 개별구매 형식의 계획도 없으신지 조심스럽게 의견 드립니다.<br/><br/>가장 궁금한건 역시나 컨텐츠의 내용입니다.<br/>전체적 대본이 어렵다면 어떠한 컨셉이다, 시놉이라도 알려주시면 구입하는데있어<br/>더 도움이 되지 않을까 합니다."
        },
        {
            profileImage : "https://tumblbug-pci.imgix.net/3ade3b098b2ff9e757bae3e290e4c4497f0c40f7/9490f1e4e4186fd1a8a9a70f8d99d9eec3ce04d0/08eadb84fe53c05d061f95a5db6dc4bb2619e19d/061fc07c-349a-4a21-8808-34dcfab879d3.jpeg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=9cedd486152b146ff7290b2c917b6a37",
            nickName : "테스트합니다",
            contents : "몇가지 문의사항이 있어 글 남깁니다. <br/>데일리 보이스와 단문은 모든 성우님 동일한 글인가요? <br/>단문이 시츄에이션 드라마 개념이라고 하셨는데 홍보영상에 있는 그런 류의 내용인지, 미리 대본이나 시놉을 알려주실 계획은 없으신가요?"
        },
        {
            profileImage : "https://tumblbug-pci.imgix.net/3ade3b098b2ff9e757bae3e290e4c4497f0c40f7/9490f1e4e4186fd1a8a9a70f8d99d9eec3ce04d0/08eadb84fe53c05d061f95a5db6dc4bb2619e19d/061fc07c-349a-4a21-8808-34dcfab879d3.jpeg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=9cedd486152b146ff7290b2c917b6a37",
            nickName : "테스트합니다",
            contents : "몇가지 문의사항이 있어 글 남깁니다. <br/>데일리 보이스와 단문은 모든 성우님 동일한 글인가요? <br/>단문이 시츄에이션 드라마 개념이라고 하셨는데 홍보영상에 있는 그런 류의 내용인지, 미리 대본이나 시놉을 알려주실 계획은 없으신가요? <br/><br/시낭송은 저작권 만료된 시 중에서 선정한다고 하셨는데 이것또한 모든 성우님들께서 같은 시를 낭독하시는지 궁금합니다. 시낭송의 경우 여러 컨텐츠에서 이미 많이 한적이 있어서 가능하다면 다른 컨텐츠에서 나오지 않았던 다양한 시로 선정해 주십사 부탁드립니다. <br/><br/>러닝타임이 세트 당 3시간30분 예상이라고 하셨는데 한 성우당 러닝타임이 어느정도 되는지도 궁금합니다. "
        }
    ]

    const [write, setWrite] = useState(true)

    return (
        <div>
            {write ? 
                <div className={classes.commentwrap}>
                    <div style={{padding: '16px'}}>커뮤니티, 후원후기</div>
                    <div className={classes.commentbox} 
                        onClick={() => {
                            setWrite(false)
                            props.setView(false)
                        }}>
                        <span>후원자만 글을 쓸 수 있어요.</span>
                    </div>
                    {Datas.map((data, key) => (
                        <ReviewCard Data={data} key={key} />
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
                            <button className={classes.editsend}>등록</button>
                        </div>
                    </div>
                    <div className={classes.notice}>
                        <div className={classes.editcontent}>
                            <div className={classes.editwrite}>
                                <textarea></textarea>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div>어떤 내용의 글인가요?</div>
                                <div>
                                    <div>응원글</div>
                                    <div>의견</div>
                                </div>
                            </div>
                            <div>후원하신 프로젝트 창작자에게 응원의 한마디를 남겨주세요. 창작자에게 후원금만큼 큰 힘이 됩니다.</div>
                            <div>
                                <div>! 유의사항</div>
                                <ul>
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