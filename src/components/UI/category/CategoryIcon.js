import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import classes from './category.module.css'

//슬라이더
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

//아이콘
import AppsIcon from '@mui/icons-material/Apps';
import CasinoOutlinedIcon from '@mui/icons-material/CasinoOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import BookOnlineOutlinedIcon from '@mui/icons-material/BookOnlineOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import BugReportOutlinedIcon from '@mui/icons-material/BugReportOutlined';
import ChairOutlinedIcon from '@mui/icons-material/ChairOutlined';
import WatchOutlinedIcon from '@mui/icons-material/WatchOutlined';
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import CheckroomOutlinedIcon from '@mui/icons-material/CheckroomOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import FaceOutlinedIcon from '@mui/icons-material/FaceOutlined';

const CategoryIcon = () => {

    let { id } = useParams();
    console.log(id)

    const category = [
        {
            id: 1,
            icon: <AppsIcon />,
            cate: "all",
        },
        {
            id: 2,
            icon: < CasinoOutlinedIcon/>,
            cate: "보드게임&TRPG",
        },
        {
            id: 3,
            icon: < SportsEsportsOutlinedIcon/>,
            cate: "디지털 게임",
        },
        {
            id: 4,
            icon: <BookOnlineOutlinedIcon />,
            cate: "웹툰&만화",
        },
        {
            id: 5,
            icon: <BrushOutlinedIcon />,
            cate: "웹툰 리소스",
        },
        {
            id: 6,
            icon: < EventNoteOutlinedIcon/> ,
            cate: "디자인문구",
        },
        {
            id: 7,
            icon: < BugReportOutlinedIcon/> ,
            cate: "캐릭터 굿즈",
        },
        {
            id: 8,
            icon: < ChairOutlinedIcon/> ,
            cate: "홈 리빙",
        },
        {
            id: 9,
            icon: < WatchOutlinedIcon/> ,
            cate: "테크 가전",
        },
        {
            id: 10,
            icon: <PetsOutlinedIcon /> ,
            cate: "반려동물",
        },
        {
            id: 11,
            icon: <RestaurantOutlinedIcon /> ,
            cate: "푸드",
        },
        {
            id: 12,
            icon: <AutoAwesomeOutlinedIcon /> ,
            cate: "향수 뷰티",
        },
        {
            id: 13,
            icon: <CheckroomOutlinedIcon /> ,
            cate: "의류",
        },
        {
            id: 14,
            icon: <WorkOutlineOutlinedIcon /> ,
            cate: "잡화",
        },
        {
            id: 15,
            icon: < DiamondOutlinedIcon/> ,
            cate: "쥬얼리",
        },
        {
            id: 16,
            icon: <AutoStoriesOutlinedIcon /> ,
            cate: "출판",
        },
        {
            id: 17,
            icon: <AutoFixHighOutlinedIcon /> ,
            cate: "디자인",
        },
        {
            id: 18,
            icon: <ColorLensOutlinedIcon /> ,
            cate: "예술",
        },
        {
            id: 19,
            icon: <CameraAltOutlinedIcon /> ,
            cate: "사진",
        },
        {
            id: 20,
            icon: < MusicNoteOutlinedIcon/> ,
            cate: "음악",
        },
        {
            id: 21,
            icon: < VideocamOutlinedIcon/> ,
            cate: "영화 비디오",
        },
        {
            id: 22,
            icon: <FaceOutlinedIcon /> ,
            cate: "공연",
        }
    ]

    const navigater = useNavigate();

    return (
        <Box>
            <Swiper
                className={classes.topCategory}
                slidesPerView={15}
                modules={[Pagination, Navigation]}>
                <Grid container>
                    {category.map((prom) => ( 
                        <SwiperSlide key={prom.id} className={`${classes.hoverIcon} ${prom.cate === id && classes.currentIcon}`} onClick={() => navigater(`/category/${prom.cate}`)}>
                            <Grid item xs={2.4}>  
                                <div className={classes.cateIcon}>{prom.icon}</div>
                                <div className={classes.cateName}>{prom.cate}</div>
                            </Grid>
                        </SwiperSlide>
                    ))}
                </Grid>
            </Swiper>
        </Box>
    );
}

export default CategoryIcon