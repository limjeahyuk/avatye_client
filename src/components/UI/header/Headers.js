import React from "react";
import classes from './Header.module.css'
import Top from "./Top";
import Menu from './Menu';
import Category from "./Category";

const Headers = () => {

    return (
        <div className={classes.box}>
            <div className={classes.head}>
                <Top />
                <Menu />
            </div>
        </div>
    )
}

export default Headers;