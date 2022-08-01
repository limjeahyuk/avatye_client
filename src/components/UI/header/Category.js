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

const Category = () => {

    const one = [{
        icon: <AppsIcon />,
        cate: "전체"
    },
        {
            icon: < CasinoOutlinedIcon/>,
            cate: "보드게임&TRPG"
        },
        {
            icon: < SportsEsportsOutlinedIcon/>,
            cate: "디지털게임"
        },
        {
            icon: <BookOnlineOutlinedIcon />,
            cate: "웹툰&만화"
        },
        {
            icon: <BrushOutlinedIcon />,
            cate: "웹툰 리소스"
        }
    ]
    const two = [
        {
            icon: < EventNoteOutlinedIcon/> ,
            cate: "디자인문구"
        },
        {
            icon: < BugReportOutlinedIcon/> ,
            cate: "캐릭터 굿즈"
        },
        {
            icon: < ChairOutlinedIcon/> ,
            cate: "홈 리빙"
        },
        {
            icon: < WatchOutlinedIcon/> ,
            cate: "테크 가전"
        },
        {
            icon: <PetsOutlinedIcon /> ,
            cate: "반려동물"
        }
    ]

    const three = [
        {
            icon: <RestaurantOutlinedIcon /> ,
            cate: "푸드"
        },
        {
            icon: <AutoAwesomeOutlinedIcon /> ,
            cate: "향수 뷰티"
        },
        {
            icon: <CheckroomOutlinedIcon /> ,
            cate: "의류"
        },
        {
            icon: <WorkOutlineOutlinedIcon /> ,
            cate: "잡화"
        },
        {
            icon: < DiamondOutlinedIcon/> ,
            cate: "쥬얼리"
        }
    ]

    const four = [
        {
            icon: <AutoStoriesOutlinedIcon /> ,
            cate: "출판"
        },
        {
            icon: <AutoFixHighOutlinedIcon /> ,
            cate: "디자인"
        },
        {
            icon: <ColorLensOutlinedIcon /> ,
            cate: "예술"
        },
        {
            icon: <CameraAltOutlinedIcon /> ,
            cate: "사진"
        },
        {
            icon: < MusicNoteOutlinedIcon/> ,
            cate: "음악"
        }
    ]

    const five = [
        {
            icon: < VideocamOutlinedIcon/> ,
            cate: "영화 비디오"
        },
        {
            icon: <FaceOutlinedIcon /> ,
            cate: "공연"
        }
    ]

    return <div className={classes.category}>
        <div className={classes.items}>
            {one.map((item) => {
                return (
                    <div className={classes.item}>
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
                    <div className={classes.item}>
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
                    <div className={classes.item}>
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
                    <div className={classes.item}>
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
                    <div className={classes.item}>
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