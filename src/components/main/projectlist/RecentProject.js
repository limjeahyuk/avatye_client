import React from "react";
import ProjectCards from "../../ui/project/ProjectCards";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import classes from "./projectlist.module.css"

const RecentProject = () => {

    const data = JSON.parse(localStorage.getItem('data')).reverse();

    return (
        <>
            <Box className={classes.bothbox}>
                <div className={classes.bothtitle}>최근 본 프로젝트 <span className={classes.bothmore}>전체보기</span></div>
                <Swiper
                    className={classes.swipersize}
                    slidesPerView={5}
                    slidesPerGroup={5}
                    navigation={true}
                    modules={[Pagination, Navigation]}>
                    <Grid container>
                        {data.map((prom) => (
                            <SwiperSlide key={prom.id}>
                                <Grid item xs={2.4}>  
                                    <ProjectCards project={prom} key={prom.id} size={'m'} />
                                </Grid>
                            </SwiperSlide>
                        ))}
                    </Grid>
                </Swiper>
            </Box>
        </>
    )
}

export default RecentProject