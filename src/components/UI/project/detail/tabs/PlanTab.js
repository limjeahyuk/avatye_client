import React, { useRef } from "react";

import classes from '../detail.module.css'
  

const PlanTab = ({data}) => {

    return(
        <div className={classes.planbox}>
            <div className={classes.plancontent} dangerouslySetInnerHTML={{__html: data.contents}}></div>
        </div>
    )
}

export default PlanTab