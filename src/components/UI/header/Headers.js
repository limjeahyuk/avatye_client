import React, { useEffect } from "react";
import classes from './Header.module.css'
import Top from "./Top";
import Menu from './Menu';
import { useLocation} from "react-router-dom";
import Category from "./Category";
import Collapse from "@mui/material/Collapse";
import { Cookies } from "react-cookie";


const Headers = () => {
    const cookies = new Cookies();
    const location = useLocation();
    const [isHeadBox, setIsHeadBox] = useState(true);
    const [isHover, setIsHover] = useState(false);
    const [userState, setUserState] = useState(false);

    useEffect(() => {
        const path = location.pathname
        const post = location.pathname.slice(0, 15);

        if (path === '/login' || path === '/join' || post === '/project-editor') {
            setIsHeadBox(false);
        } else {
            setIsHeadBox(true);
        }

        if (cookies.get('user_token')) {
            setUserState(true);
        } else {
            setUserState(false);
        }
        
    }, [location])

    return (
        <>
       {location.pathname !== '/login' && <div className={classes.box}>
        <div className={classes.head}>
                    <Top loginstate={userState} />
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