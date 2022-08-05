import React from "react";
import classes from './Post.module.css'
import DehazeIcon from '@mui/icons-material/Dehaze';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';

const PostHeader = () => {
    return <div className={classes.head}>
        <div>
            <div className={classes.project}>
                <div>
                    <DehazeIcon />
                    <span>프로젝트 둘러보기</span>
                </div>
                <span>프로젝트 올리기</span>
            </div>
            <div className={classes.logo}><img src="/logo.png" alt="logo" /></div>
            <div className={classes.user}>
                <SearchIcon />
                <div>
                    <span>혁쨩</span>
                    <AccountCircleIcon />
                </div>
            </div>
        </div>
    </div>
}

export default PostHeader;