import React, { useEffect, useState } from "react";
import classes from './Header.module.css'
import Top from "./Top";
import Menu from './Menu';
import { useLocation} from "react-router-dom";
import Category from "./Category";
import Collapse from "@mui/material/Collapse";


const Headers = () => {
    const location = useLocation();
    const [isHeadBox, setIsHeadBox] = useState(true);
    const [isHover, setIsHover] = useState(false);

    useEffect(() => {
        const path = location.pathname
        const post = location.pathname.slice(0, 15);

        if (path === '/login' || path === '/join' || post === '/project-editor') {
            setIsHeadBox(false);
        } else {
            setIsHeadBox(true);
        }
    }, [location])

    const hoverHandler = (bool) => {
        setIsHover(bool);
    }

    return (
        <>
            {isHeadBox === true && <div className={classes.box}>
        <div className={classes.head}>
            <Top />
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