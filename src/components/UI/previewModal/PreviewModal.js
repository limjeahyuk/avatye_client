import React from "react";
import classes from './PreviewModal.module.css'
import CloseIcon from '@mui/icons-material/Close';

const PreviewModal = ({onConfig, imgsrc}) => {
    return <div>
        <div className={classes.backdrop} onClick={onConfig}></div>
        <div className={classes.modal}>
            <div>
                <div className={classes.close} onClick={onConfig}><CloseIcon /></div>
                <div className={classes.img}><img alt="ddd" src={imgsrc} /></div>
            </div>
        </div>
    </div>
}

export default PreviewModal