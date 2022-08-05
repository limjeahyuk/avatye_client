import React from "react";
import classes from './heartmodal.module.css'

const HeartModal = ({showModal, closeModal, content}) => {

    return(
        <>
            {showModal &&
                <div onClick={closeModal} className={classes.modalback}>
                    <div className={classes.modal} onClick={e => e.stopPropagation()}>
                        <div>{content}</div>
                    </div>
                </div>
            }
        </>
    )
}

export default HeartModal