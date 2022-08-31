import React from "react";
import classes from './Header.module.css'
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
import { useNavigate } from "react-router-dom";

const Category = () => {

const one = [
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
    }
]

const two = [
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
    }
]

const three = [
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
    }
]

const four = [
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
    }
]

const five = [
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

    return <div className={classes.category}>
        <div className={classes.items}>
            {one.map((item) => {
                return (
                    <div className={classes.item} key={item.id} onClick={() => navigater(`/category/${item.cate}`)}>
                        <div className={classes.icon}>
                            {item.icon}
                        </div>
                        <div className={classes.cate}>
                            {item.cate === "all" ? '전체' : item.cate}
                        </div>
                    </div>
                )
            })}
        </div>
        <div className={classes.items}>
            {two.map((item) => {
                return (
                    <div className={classes.item} key={item.id} onClick={() => navigater(`/category/${item.cate}`)}>
                        <div className={classes.icon}>
                            {item.icon}
                        </div>
                        <div className={classes.cate}>
                            {item.cate}
                        </div>
                    </div>
                )
            })}
        </div>
        <div className={classes.items}>
            {three.map((item) => {
                return (
                    <div className={classes.item} key={item.id} onClick={() => navigater(`/category/${item.cate}`)}>
                        <div className={classes.icon}>
                            {item.icon}
                        </div>
                        <div className={classes.cate}>
                            {item.cate}
                        </div>
                    </div>
                )
            })}
        </div>
        <div className={classes.items}>
            {four.map((item) => {
                return (
                    <div className={classes.item} key={item.id} onClick={() => navigater(`/category/${item.cate}`)}>
                        <div className={classes.icon}>
                            {item.icon}
                        </div>
                        <div className={classes.cate}>
                            {item.cate}
                        </div>
                    </div>
                )
            })}          
        </div>
        <div className={classes.items}>
            {five.map((item) => {
                return (
                    <div className={classes.item} key={item.id} onClick={() => navigater(`/category/${item.cate}`)}>
                        <div className={classes.icon}>
                            {item.icon}
                        </div>
                        <div className={classes.cate}>
                            {item.cate}
                        </div>
                    </div>
                )
            })}
            </div>
    </div>
}

export default Category;