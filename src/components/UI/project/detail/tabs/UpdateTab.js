import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// import SmsIcon from '@mui/icons-material/Sms';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import classes from '../detail.module.css'
import UpdateCard from "../cards/UpdateCard";

const UpdateTab = () => {

    const [data, setData] = useState([])

    const Datas = [
        {
            profileImage : "https://tumblbug-pci.imgix.net/51f30b224330817ed70ec31e4e372365fd9fd40a/6e9a642e6e4d5d647835e62e1f0158aec00ba4ff/1b5baeab4e7355611b72e07be02aac6c5d27b7d6/42ac12fa-0df2-4b12-9583-6ce7330db087.jpeg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=353d5369bd33efd846ac1cb91a813a83",
            nickName : "피곤하다",
            contents : "<h1>✿ 안녕하세요, 스타콘텐츠입니다! ✿</h1> 펀딩에 참여해 주신 많은 팬분들께서 다양한 의견과 질문을 보내주셨는데요<br/><br/>준비가 되지 않은 상태로 개별 답장을 드리는것 보다는 만족하실만한 리워드가 무엇인지<br/><br/>고민하고 준비하는 게 좋다고 생각하여 이번 공지로 말씀드리게 되었습니다! <br/><br/><br/>100% 달성 기념 🎁<br/><br/>'주연 6인의 명대사 랜덤 뽑기!' 스페셜 특전 영상이 모든 구성에 추가 제공됩니다! <br/><br/><br/> [추가 리워드] 스페셜 영상 명대사 랜덤 뽑기! <br/><br/><br/>🍓 각 캐릭터별 대사가 랜덤으로 들어있는 뽑기 머신이 주어진다.<br/>🍓 순서대로 캡슐을 뽑고, 안에 들어있는 대사를 확인한다. <br/>🍓 성우님들만의 해석으로 다른 캐릭터의 대사를 연기한다!  <br/><br/>6인의 성우분들께서 랜덤 뽑기를 돌려, 다른 배역의 대사를 연기하게 됩니다.<br/><br/>물론 본인의 배역과 동일한 캐릭터가 나오면 다시 뽑기를 진행하고요! 😊 <br/><br/><br/>악엔죽 성우님들이 연기하는 다른 캐릭터는 어떤 느낌일까요? <br/><br/>재밌는 스페셜 영상 기대해주세요~~! ♥<br/><br/><br/>[120% 달성시 추가 리워드]<br/><br/><br/>120% 달성시! 텀블벅 최초 공개 일러스트 (포스터와 동일) 엽서가 제공됩니다! <br/><br/>아름다운 페넬로페를 핑크박이 입혀진 엽서로 만나보세요! (❁´◡`❁)<br/><br/><br/>⏰ D-7  남은 펀딩 기간 동안 많은 응원 부탁드립니다! <br/><br/> ",
            commentcount : "12"
        },
        {
            profileImage : "https://tumblbug-pci.imgix.net/2d51df7588ddcaaeb8f383b5334127ec3b0e811a/294149b005d980a352da395511528f9bfe876fef/973b12c8827a57037aa41a19c6058c97f38c7f3c/788cf774-227b-4e0b-9e68-8a609230050f.jpeg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=7192b4443ce7e575f76a07e722f90e3f",
            nickName : "피곤하다아아아아",
            contents : "<div><h1>✿ 안녕하세요, 스타콘텐츠입니다! ✿</h1> 펀딩에 참여해 주신 많은 팬분들께서 다양한 의견과 질문을 보내주셨는데요<br/><br/>준비가 되지 않은 상태로 개별 답장을 드리는것 보다는 만족하실만한 리워드가 무엇인지<br/><br/>고민하고 준비하는 게 좋다고 생각하여 이번 공지로 말씀드리게 되었습니다! <br/><br/><br/>100% 달성 기념 🎁<br/><br/>'주연 6인의 명대사 랜덤 뽑기!' 스페셜 특전 영상이 모든 구성에 추가 제공됩니다! <br/><br/><br/> [추가 리워드] 스페셜 영상 명대사 랜덤 뽑기! <br/><br/><br/>🍓 각 캐릭터별 대사가 랜덤으로 들어있는 뽑기 머신이 주어진다.<br/>🍓 순서대로 캡슐을 뽑고, 안에 들어있는 대사를 확인한다. <br/>🍓 성우님들만의 해석으로 다른 캐릭터의 대사를 연기한다!  <br/><br/></div>}",
            commentcount : "1"
        },
        {
            profileImage : "https://tumblbug-pci.imgix.net/51f30b224330817ed70ec31e4e372365fd9fd40a/6e9a642e6e4d5d647835e62e1f0158aec00ba4ff/1b5baeab4e7355611b72e07be02aac6c5d27b7d6/42ac12fa-0df2-4b12-9583-6ce7330db087.jpeg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=353d5369bd33efd846ac1cb91a813a83",
            nickName : "피곤하다아아아아",
            contents : "<h1>✿ 안녕하세요, 스타콘텐츠입니다! ✿</h1> 펀딩에 참여해 주신 많은 팬분들께서 다양한 의견과 질문을 보내주셨는데요<br/><br/>준비가 되지 않은 상태로 개별 답장을 드리는것 보다는 만족하실만한 리워드가 무엇인지<br/><br/>고민하고 준비하는 게 좋다고 생각하여 이번 공지로 말씀드리게 되었습니다! <br/><br/><br/>100% 달성 기념 🎁<br/><br/> ",
            commentcount : "5"
        },
    ]

    let { id } = useParams()

    const findupdate = () => {
        axios.get(`http://localhost:3000/review/projectupdate/${id}`)
        .then(response => {
            setData(response.data)
            console.log(response.data)
        })
        .catch (e => {
            console.log(e)
        })
    }

    useEffect(() => {
        findupdate()
    }, [id])
    
    return (
        <div>
            {data.map((data, key) => (
                <UpdateCard data={data} key={key} />
            ))}
        </div>
    )
}

export default UpdateTab