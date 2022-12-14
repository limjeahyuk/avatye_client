import React from "react";
import ProjectCards from "../../ui/project/ProjectCards";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import classes from "./projectlist.module.css"

const RecentProject = () => {

    const data = JSON.parse(localStorage.getItem('data'));

    //reverse 보다 애초에 처음에 값넣을 때 리버스 되도록 하기.
    //localstorge 길이도 생각할 것. 제한을 하던 시간이 지나면 없어지게 하던가
    // 그런식으로 처리하기.

    return (
        <>
            {data && <Box className={classes.bothbox}>
                <div className={classes.bothtitle}>최근 본 프로젝트 <span className={classes.bothmore}>전체보기</span></div>
                <Swiper
                    className={classes.swipersize}
                    slidesPerView={5}
                    slidesPerGroup={5}
                    navigation={true}
                    modules={[Pagination, Navigation]}>
                    <Grid container>
                        {data.reverse().map((prom, index) => (
                            <SwiperSlide key={index}>
                                <Grid item xs={2.4}>  
                                    <ProjectCards project={prom} size={'m'} />
                                </Grid>
                            </SwiperSlide>
                        ))}
                    </Grid>
                </Swiper>
            </Box>}
        </>
    )
}

export default RecentProject