import React, { useState } from "react";
import classes from './Post.module.css'

const CategoryButton = ({ children, handler }) => {
    const [buttonClick, setButtonClick] = useState(false);

    const buttonHandler = () => {
        setButtonClick(true);
        handler(children);
    }

// 라디오 버튼
    return <li className={classes.categorybutton}>
        <button onClick={buttonHandler} style={{
            backgroundColor: buttonClick ? 'red' : 'white',
            color: buttonClick ? 'white' : 'black'
        }}>{children}</button>
    </li>
}

export default CategoryButton;