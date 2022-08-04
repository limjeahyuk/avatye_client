import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard"
import classes from "./sideproject.module.css"

const ProjectList = () => {
    const [time, setTime] = useState("00:00")

    const currentTime = () => {
        const date = new Date();
        const hours = String(date.getHours()).padStart(2, "0")
        const minutes = String(date.getMinutes()).padStart(2, "0")
        setTime(`${hours}:${minutes}`)
    }

    const startTime = () => {
        setInterval(currentTime, 500)
    }

    useEffect(() => {
        startTime()
    }, [])

    const datas = [
        {
            id: "1",
            imgurl : "https://tumblbug-pci.imgix.net/873c897e881d022a0232b64dd3185ef30900d695/e27bb746631085e6b327fcd8e82a743fa2048139/0a1aa4b7b13924362a5dc7ed2c8370d80c7a01de/ae1af647-b782-428b-9ff6-3e19758040f3.jpeg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=1942384216057b2f6551975a64e4b413",
            category : "출판",
            username : "비공식 출판공방",
            title : "<로브 로망띠끄 1823~1845> 로맨틱 시대의 드레스",
            percent : "350"
        },
        {
            id: "2",
            imgurl : "https://tumblbug-pci.imgix.net/2d51df7588ddcaaeb8f383b5334127ec3b0e811a/613a2a1f5e2ed0552c9eac0dd124f66c6e7c42f5/d4ae8f7d90ea5f314a08b117b645603d3cc1a74f/b15a068a-6056-4a1f-bbcf-1c9e99bee7b7.jpeg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=d52ac47f845c8aa7592fbe6bb8241816",
            category : "웹툰 리소스",
            username : "김리프",
            title : "원경나무 풀잎브러쉬",
            percent : "1341"
        },
        {
            id: "3",
            imgurl : "https://tumblbug-pci.imgix.net/dc273b830b2750203ac90513d6ca792469a40afc/740dacc152c154221b8205d4ba9ba977985f4aa0/95ae3adafb4f7d149a9fbcc7a6a4e4053a60badd/e5b69541-91fe-4973-9d6e-348b91b41447.jpeg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=de8b7adb316a612d386cd830c449a537",
            category : "잡화",
            username : "Slowwa(슬로와)",
            title : "안 아파도 사용해요! <데일리 케어> 슬로와 손목 보호대",
            percent : "1534"
        },
        {
            id: "4",
            imgurl : "https://tumblbug-pci.imgix.net/2d51df7588ddcaaeb8f383b5334127ec3b0e811a/ceca2b8b39fd272bf28cbe934801aee28811cbc9/02a5fc06a4f3b72043f63a6fc5925b25adc891c0/ec816f73-1f37-4db3-84ff-d8e76d9b7c3c.jpeg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=20668880f3fa8284447a0b4c58552921",
            category : "출판",
            username : "visualinsight",
            title : "캐릭터 창작에 유용한 성격어휘 키트, [세상의 모든 성격]",
            percent : "437"
        },
        {
            id: "5",
            imgurl : "https://tumblbug-pci.imgix.net/873c897e881d022a0232b64dd3185ef30900d695/b415c067fe6a3a6a56379b44b96612b31e3b763f/88f1a5dc9bd284bed841d88620485bd39a607c98/9a9dbcd9-0848-41b7-9946-07f4ea71a873.png?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=4615c96de3fea8f862e8dd9c58f2b4b9",
            category : "디자인",
            username : "HCL",
            title : "[HCL 효과음 폰트] 보이는 소리/들리는 글자",
            percent : "3490"
        },
        {
            id: "6",
            imgurl : "https://tumblbug-pci.imgix.net/2d51df7588ddcaaeb8f383b5334127ec3b0e811a/489be3d34d96c069efbffe8f48d3fd956f65df97/3247e301e6fbf7f4f4c477401da401f9a77ede63/6be89fe4-0736-42c4-b949-d72d6da3670e.jpeg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=939b0dcc16b1aff48236fd63a91036f2",
            category : "푸드",
            username : "메이프트 그로서리",
            title : "월간커피, 한여름의 초콜릿 아이스크림 같은 콜드브루 커피",
            percent : "2200"
        },
        {
            id: "7",
            imgurl : "https://tumblbug-pci.imgix.net/dc273b830b2750203ac90513d6ca792469a40afc/b1938ad26802bb57a8ca2f85dc67627f1fc561e0/e4f99f6e8ffd16d9ac663b5ca8e755bc9daa8593/78f5a0aa-eab3-4f36-adcc-5452c3592866.jpeg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=58d2cc7eeb5277c236f85b068661e09c",
            category : "보드게임 · TRPG",
            username : "언더독 게임즈",
            title : "저런 공에는 이런 수가 딱이야! 망상 대폭발 커플링 게임",
            percent : "100"
        },
        {
            id: "8",
            imgurl : "https://tumblbug-pci.imgix.net/73934c23439fa4622eede4a25f7d849142e7612d/325c706eda6ab72a620641f40d3a52572b75247c/5f363138e87eb6dbdca58433006d7547ac56b2fc/1513b0d7-05a9-453b-a7a6-2ee3be239234.jpeg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=45a2a230592c13d78bfbe86f7ce14923",
            category : "잡화",
            username : "데칵_decak",
            title : "나의 애착 가방이 되어줘! decak의 마이백",
            percent : "3691"
        }   
    ]

    datas.sort(function(a,b) {
        return b.percent - a.percent
    })
    
    return (
        <div className={classes.listbox}>
            <div className={classes.listTitle}>인기 프로젝트 <span className={classes.more}>전체보기</span></div>
            <div className={classes.listdate}>22.08.02 {time} 기준</div>
            {datas.map((datas, index) => (
                <ProjectCard datas={datas} key={datas.id} index={index} />
            ))}
            <Link to={"/"} className={classes.listbtn}>인기 프로젝트 전체보기</Link>
        </div>
    )
}

export default ProjectList