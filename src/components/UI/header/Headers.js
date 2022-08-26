import React, { useContext, useEffect, useState } from "react";
import classes from './Header.module.css'
import Top from "./Top";
import Menu from './Menu';
import { useLocation} from "react-router-dom";
import Category from "./Category";
import Collapse from "@mui/material/Collapse";
import { Cookies } from "react-cookie";
import AuthContext from "../../../store/auth-context";


const Headers = () => {
    const cookies = new Cookies();
    const location = useLocation();
    const [isHeadBox, setIsHeadBox] = useState(true);
    const [isHover, setIsHover] = useState(false);
    const ctx = useContext(AuthContext);

    useEffect(() => {
        const loginpath = location.pathname.slice(0, 6);
        const joinpath = location.pathname.slice(0, 5);
        const post = location.pathname.slice(0, 15);
        const support = location.pathname;

        if (loginpath === '/login' || joinpath === '/join' || post === '/project-editor' || support === '/support') {
            setIsHeadBox(false);
        } else {
            setIsHeadBox(true);
        }
        ctx.checkCookie();
        window.scrollTo(0, 0);
        console.log(location.pathname);
    }, [location])

    const hoverHandler = (bool) => {
        setIsHover(bool);
    }

    return (
        <>
            {isHeadBox === true && <div className={classes.box}>
        <div className={classes.head}>
                    <Top/>
                    <Menu hoverHandler={hoverHandler} />
            <div className={classes.ani}>
                <Collapse
                    in={isHover}
                    onMouseOver={() => setIsHover(true)}
                    onMouseOut={()=>setIsHover(false)}>
                        <Category/>
                </Collapse>
            </div>
        </div>
        </div>
        }
        </>
    )
}

export default Headers;