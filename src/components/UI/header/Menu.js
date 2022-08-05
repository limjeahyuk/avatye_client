import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import classes from './Header.module.css'
import { Link } from "react-router-dom";
import DehazeIcon from '@mui/icons-material/Dehaze';
import Search from "./search/Search";

const Menu = ({hoverHandler}) => {
    const [isSearch, setIsSearch] = useState(false);

    const SearchHandler = () => {
        setIsSearch(false);
    }

    return(
        <div>
            {isSearch && <Search handler={SearchHandler} />}
            <div className={classes.cont}>
                <div className={classes.menu}>
                    <div
                        onMouseOver={() => hoverHandler(true)}
                        className={classes.categorymenu}
                    >
                <div className={classes.ham}><DehazeIcon /></div>
                카테고리
            </div>
            <div className={classes.action}><Link to="/" className={classes.home}>홈</Link></div>
            <div><Link to="/fame">인기</Link></div>
            <div><Link to="/">신규</Link></div>
            <div><Link to="/">마감임박</Link></div>
            <div><Link to="/">공개예정</Link></div>
        </div>
            <div className={classes.search}>
                <input type="text" defaultValue="검색어를 입력해주세요."  onClick={() => setIsSearch(true)} />
                <SearchIcon />
                </div>
            </div>
        </div>
        )
}

export default Menu;