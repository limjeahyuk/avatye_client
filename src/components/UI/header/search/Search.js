import React, { useState } from "react";
import classes from '../Header.module.css'
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import Best from "./Best";
import Suggest from "./Suggest";
import { useNavigate } from "react-router-dom";

const Search = ({ handler }) => {

    const [isInput, setIsInput] = useState('');
    const navigator = useNavigate();

    const searchContHandler = (e) => {
        setIsInput(String(e.target.value).replace(/\//g, ""));
    }


    const searchSubmitHandler = (e) => {
        e.preventDefault();
        console.log("ok");
        navigator(`/discover/${encodeURIComponent(isInput.trim())}`);
        setIsInput('');
        handler();
    }

    return <div className={classes.searchpage}>
        <div className={classes.searchHeader}>
            <form className={classes.searchInput} onSubmit={searchSubmitHandler}>
                <SearchIcon />
                <input type="text" placeholder="검색어를 입력해주세요." value={isInput} onChange={searchContHandler } />
            </form>
            <CloseIcon onClick={handler} />
        </div>
        <div className={classes.searchCont}>
            <div className={classes.contpage}>
                {!isInput && <Best />}
                {isInput && <Suggest />}
            </div>
        </div>
        
    </div>
}

export default Search