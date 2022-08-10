import React, { useEffect, useState } from "react";
import ProjectCards from "../../ui/project/ProjectCards";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import classes from "./projectlist.module.css"
import axios from "axios";

const NotableProject = () => {
    const [project, setProject] = useState([]);

    const pointproject = () => {
        axios.get("http://192.168.0.74:3000/main/pointproject")
        .then(response => {
            console.log(response.data);
            setProject(response.data)
        })
        .catch(e => {
            console.log(e)
        })

    }

    useEffect(() => {
        pointproject()
    }, [])

    // const project = [
    //     {
    //         id: "1",
    //         profileIMG : "https://tumblbug-pci.imgix.net/dc273b830b2750203ac90513d6ca792469a40afc/e766beb7fdfd0e12ab7dc51559c7430630c8fa32/13fd7b02cad9784ee132cac03dda7796610dfedc/41a12231-f262-4df3-b2bf-af6c5ff94c9c.png?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=0f0b7043e6cee1b0b18a3462a762945f",
    //         name : "디지털 게임",
    //         nickName : "에이케이커뮤니케이션즈",
    //         LongTitle : "꽃수를 연기해라, 판타지 BL <함부로 소설 쓰지 맙시다>",
    //         nowAmount: "2262700",
    //         goalprice: "1200000"
    //     },
    //     {
    //         id: "2",
    //         profileIMG : "https://tumblbug-pci.imgix.net/dc273b830b2750203ac90513d6ca792469a40afc/8192fc98c71267a1d26400590b0f4bca453e7926/413facece400d1c843dce41fd6ad585b8a585fbb/ca81107c-3f14-4f86-acd2-63df6bd24fb5.jpeg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=a83038cc3d9704a4e3d6adc4909d9250",
    //         name : "출판",
    //         nickName : "삶의 카운슬러 한울",
    //         LongTitle : "미래를 예언하는 레노먼드카드",
    //         nowAmount: "1300000",
    //         goalprice: "10000000"
    //     },
    //     {
    //         id: "3",
    //         profileIMG : "https://tumblbug-pci.imgix.net/dc273b830b2750203ac90513d6ca792469a40afc/f2bdbbd07b3485e95f04791dbb7dfe0a0ac8b22b/9203f313a5a829961345331e5cc5a9230b08888c/b5b54861-d757-453d-8eb8-83bb2d57500d.jpeg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=3c6573130f6d3c70b9de16c82deb126c",
    //         name : "캐릭터 · 굿즈",
    //         nickName : "Elinini",
    //         LongTitle : "바둑이들의 뮤즈 <뮤둑이 인형>",
    //         nowAmount: "5291000",
    //         goalprice: "1000000"
    //     },
    //     {
    //         id: "4",
    //         profileIMG : "https://tumblbug-pci.imgix.net/dc273b830b2750203ac90513d6ca792469a40afc/abcd6669390c74bdc8b38a59bb064fcd541188b9/c813d07b04d612b9f4cba2bbd03fec7de9c23e66/29fbf149-8d70-4141-b5b3-48bb43c507ed.jpeg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=5b9403b0680806cd6952a42b775f2b56",
    //         name : "의류",
    //         nickName : "소언",
    //         LongTitle : "아름다운 길조, 봉황문 울 가디건",
    //         nowAmount: "5291000",
    //         goalprice: "1000000"
    //     },
    //     {
    //         id: "5",
    //         profileIMG : "https://tumblbug-pci.imgix.net/873c897e881d022a0232b64dd3185ef30900d695/b415c067fe6a3a6a56379b44b96612b31e3b763f/88f1a5dc9bd284bed841d88620485bd39a607c98/9a9dbcd9-0848-41b7-9946-07f4ea71a873.png?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=4615c96de3fea8f862e8dd9c58f2b4b9",
    //         name : "디자인",
    //         nickName : "HCL",
    //         LongTitle : "[HCL 효과음 폰트] 보이는 소리/들리는 글자",
    //         nowAmount: "5291000",
    //         goalprice: "1000000"
    //     },
    //     {
    //         id: "6",
    //         profileIMG : "https://tumblbug-pci.imgix.net/2d51df7588ddcaaeb8f383b5334127ec3b0e811a/489be3d34d96c069efbffe8f48d3fd956f65df97/3247e301e6fbf7f4f4c477401da401f9a77ede63/6be89fe4-0736-42c4-b949-d72d6da3670e.jpeg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=939b0dcc16b1aff48236fd63a91036f2",
    //         name : "푸드",
    //         nickName : "메이프트 그로서리",
    //         LongTitle : "월간커피, 한여름의 초콜릿 아이스크림 같은 콜드브루 커피",
    //         nowAmount: "5291000",
    //         goalprice: "1000000"
    //     },
    //     {
    //         id: "7",
    //         profileIMG : "https://tumblbug-pci.imgix.net/dc273b830b2750203ac90513d6ca792469a40afc/b1938ad26802bb57a8ca2f85dc67627f1fc561e0/e4f99f6e8ffd16d9ac663b5ca8e755bc9daa8593/78f5a0aa-eab3-4f36-adcc-5452c3592866.jpeg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=58d2cc7eeb5277c236f85b068661e09c",
    //         name : "보드게임 · TRPG",
    //         nickName : "언더독 게임즈",
    //         LongTitle : "저런 공에는 이런 수가 딱이야! 망상 대폭발 커플링 게임",
    //         nowAmount: "5291000",
    //         goalprice: "1000000"
    //     },
    //     {
    //         id: "8",
    //         profileIMG : "https://tumblbug-pci.imgix.net/73934c23439fa4622eede4a25f7d849142e7612d/325c706eda6ab72a620641f40d3a52572b75247c/5f363138e87eb6dbdca58433006d7547ac56b2fc/1513b0d7-05a9-453b-a7a6-2ee3be239234.jpeg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=45a2a230592c13d78bfbe86f7ce14923",
    //         name : "잡화",
    //         nickName : "데칵_decak",
    //         LongTitle : "나의 애착 가방이 되어줘! decak의 마이백",
    //         nowAmount: "5291000",
    //         goalprice: "1000000"
    //     }   
    // ]

    return (
        <Box className={classes.boxSize}>
            <div className={classes.boxTitle}>주목할 만한 프로젝트</div>
            <Grid container columns={{xs: 8}}>
                {project.map((projects, key) => (
                    <Grid item xs={2} key={key}>
                        <ProjectCards project={projects}/>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default NotableProject