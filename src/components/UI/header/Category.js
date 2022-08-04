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

    const one = [{
        id: 1,
        icon: <AppsIcon />,
        cate: "전체",
        url: '/'
    },
        {
            id: 2,
            icon: < CasinoOutlinedIcon/>,
            cate: "보드게임&TRPG",
        url: '/'
        },
        {
            id: 3,
            icon: < SportsEsportsOutlinedIcon/>,
            cate: "디지털게임",
        url: '/'
        },
        {
            id: 4,
            icon: <BookOnlineOutlinedIcon />,
            cate: "웹툰&만화",
        url: '/'
        },
        {
            id: 5,
            icon: <BrushOutlinedIcon />,
            cate: "웹툰 리소스",
        url: '/'
        }
    ]
    const two = [
        {
            id: 6,
            icon: < EventNoteOutlinedIcon/> ,
            cate: "디자인문구",
        url: '/'
        },
        {
            id: 7,
            icon: < BugReportOutlinedIcon/> ,
            cate: "캐릭터 굿즈",
        url: '/'
        },
        {
            id: 8,
            icon: < ChairOutlinedIcon/> ,
            cate: "홈 리빙",
        url: '/'
        },
        {
            id: 9,
            icon: < WatchOutlinedIcon/> ,
            cate: "테크 가전",
        url: '/'
        },
        {
            id: 10,
            icon: <PetsOutlinedIcon /> ,
            cate: "반려동물",
        url: '/'
        }
    ]

    const three = [
        {
            id: 11,
            icon: <RestaurantOutlinedIcon /> ,
            cate: "푸드",
        url: '/'
        },
        {
            id: 12,
            icon: <AutoAwesomeOutlinedIcon /> ,
            cate: "향수 뷰티",
        url: '/'
        },
        {
            id: 13,
            icon: <CheckroomOutlinedIcon /> ,
            cate: "의류",
        url: '/'
        },
        {
            id: 14,
            icon: <WorkOutlineOutlinedIcon /> ,
            cate: "잡화",
        url: '/'
        },
        {
            id: 15,
            icon: < DiamondOutlinedIcon/> ,
            cate: "쥬얼리",
        url: '/'
        }
    ]

    const four = [
        {
            id: 16,
            icon: <AutoStoriesOutlinedIcon /> ,
            cate: "출판",
        url: '/'
        },
        {
            id: 17,
            icon: <AutoFixHighOutlinedIcon /> ,
            cate: "디자인",
        url: '/'
        },
        {
            id: 18,
            icon: <ColorLensOutlinedIcon /> ,
            cate: "예술",
        url: '/'
        },
        {
            id: 19,
            icon: <CameraAltOutlinedIcon /> ,
            cate: "사진",
        url: '/'
        },
        {
            id: 20,
            icon: < MusicNoteOutlinedIcon/> ,
            cate: "음악",
        url: '/'
        }
    ]

    const five = [
        {
            id: 21,
            icon: < VideocamOutlinedIcon/> ,
            cate: "영화 비디오",
        url: '/'
        },
        {
            id: 22,
            icon: <FaceOutlinedIcon /> ,
            cate: "공연",
        url: '/'
        }
    ]

    const navigater = useNavigate();

    return <div className={classes.category}>
        <div className={classes.items}>
            {one.map((item) => {
                return (
                    <div className={classes.item} key={item.id} onClick={() => navigater(`${item.url}`)}>
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
            {two.map((item) => {
                return (
                    <div className={classes.item} key={item.id}>
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
                    <div className={classes.item} key={item.id}>
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
                    <div className={classes.item} key={item.id}>
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
                    <div className={classes.item} key={item.id}>
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