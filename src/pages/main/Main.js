import React from "react";
import Sliders from "../../components/main/slide/Sliders";
import PopularProject from "../../components/main/sideproject/PopularProject"
import NotableProject from "../../components/main/projectlist/NotableProject";
import RecentProject from "../../components/main/projectlist/RecentProject";

import classes from "./main.module.css"


const Main = () => {
    return (
        
        <div className={classes.mainbox}>
            <div className={classes.maindetail}>
                <div className={classes.mainleft}><Sliders/><NotableProject/></div>
                <div><PopularProject /></div>
            </div>
            <div><RecentProject/></div>
        </div> 
    )
}

export default Main;