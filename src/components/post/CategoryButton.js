import React from "react";
import classes from './Post.module.css'

const CategoryButton = ({children, handler}) => {
    return <li className={classes.categorybutton}>
        <button onClick={() => handler(children)}>{children}</button>
    </li>
}

export default CategoryButton;