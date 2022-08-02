import React from "react";
import classes from '../Header.module.css'

const Best = () => {
    const data = [{
        name: '한복',
        search: 10
    }, {
        name: '향수',
        search: 90
    }, {
        name: '고양이 에세이',
        search: 800
    }, {
        name: 'bl',
        search: 700
    }, {
        name: '웹툰',
        search: 600
    }, {
        name: '가방',
        search: 500
    }, {
        name: '타로',
        search: 400
    }, {
        name: '화산귀한',
        search: 300
    }, {
        name: '인형',
        search: 200
    }, {
        name: '고양이',
        search: 100
        }];
    
    const sortData = data.sort(function (a, b) {
        return b.search - a.search;
    });

    return <div className={classes.best}>
                    <div className={classes.title}>
                        <span>텀블벅 인기 검색어</span>
                        <span className={classes.time}>08.02 13:00기준</span>
                    </div>
                    <div className={classes.bestcont}>
                        {sortData.map((item, index) => {
                            return (
                                <div className={classes.bestitem} key={index}>
                                    <div><span>{ index+1}</span><span>{item.name}</span></div>
                                    <div>-</div> 
                                </div>
                            )
                        })}
                    </div>
                </div>
}

export default Best;