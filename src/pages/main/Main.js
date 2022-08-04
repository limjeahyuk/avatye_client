import React from "react";
import Sliders from "../../components/main/slide/Sliders";
import ProjectList from "../../components/main/sideproject/ProjectList"
import NotableProject from "../../components/main/notableprojects/NotableProject";
import Project from "../../components/main/notableprojects/Project";
import Footer from "../../components/UI/Footer";

import classes from "./main.module.css"

const Main = () => {
    return (
        <>
        <div className={classes.mainbox}>
            <div className={classes.maindetail}>
                <div className={classes.mainleft}><Sliders/><NotableProject/></div>
                <div><ProjectList/></div>
            </div>
            <div><Project/></div>
        </div>
        <div><Footer /></div>
        </>
    )
}

export default Main;