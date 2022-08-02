import React, { useEffect } from "react";
import classes from './Header.module.css'
import Top from "./Top";
import Menu from './Menu';
import { useLocation} from "react-router-dom";

const Headers = () => {
    const location = useLocation();

    useEffect(() => {
        console.log(location);
    }, [location])

    return (
        <>
       {location.pathname !== '/login' && <div className={classes.box}>
        <div className={classes.head}>
            <Top />
            <Menu />
        </div>
        </div>
        }
        </>
    )
}

export default Headers;