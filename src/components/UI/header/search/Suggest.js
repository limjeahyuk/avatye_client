import React from "react";
import classes from '../Header.module.css'
import SearchIcon from '@mui/icons-material/Search';
import TagIcon from '@mui/icons-material/Tag';

const Suggest = () => {
    const data = [{
        name: '한복',
        icon: 'ser'
    },{
        name: '한국',
        icon: 'ser'
    },{
        name: '한복',
        icon: 'tag'
    },{
        name: '한국',
        icon: 'tag'
    },
    ]

    return <div className={classes.sug}>
        <div>추천 검색어</div>
        {data.map((item, index) => (
            <div key={index} className={classes.sugitem}>
                {item.icon === "ser" && <SearchIcon />}
                {item.icon === "tag" && <TagIcon />}
                {item.name}</div>
        ))}
        </div>
}

export default Suggest;