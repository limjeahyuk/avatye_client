import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import classes from './Header.module.css'
import { Link } from "react-router-dom";
import DehazeIcon from '@mui/icons-material/Dehaze';
import Category from "./Category";
import Collapse from "@mui/material/Collapse";

const Menu = () => {
    const [isHover, setIsHover] = useState(false);

    return(
        <>
            <div className={classes.cont}>
                <div className={classes.menu}>
                    <div
                        onMouseOver={() => setIsHover(true)}
                    >
                <div className={classes.ham}><DehazeIcon /></div>
                카테고리
            </div>
            <div className={`${classes.action}`}><Link to="/">홈</Link></div>
            <div><Link to="/">인기</Link></div>
            <div><Link to="/">신규</Link></div>
            <div><Link to="/">마감임박</Link></div>
            <div><Link to="/">공개예정</Link></div>
        </div>
            <div className={classes.search}>
                <input type="text" />
                <SearchIcon />
            </div>
            </div>
            {isHover && <Collapse in={isHover}>
                <Category />
            </Collapse>}
        </>
        )
}

export default Menu;