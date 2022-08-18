import React, { useEffect, useState } from "react";

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import DetailTop from './DetailTop'
import PlanTab from "./tabs/PlanTab";

import classes from './detail.module.css'


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <div>{children}</div>
          </Box>
        )}
      </div>
    );
  }
  
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};
  
function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const DetailTabs = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [scrollY, setScrollY] = useState(0);
    const [scrollActive, setScrollActive] = useState(false);
    

    const scrollFixed = () => {
        if (scrollY > 800) {
            setScrollY(window.pageYOffset);
            console.log(scrollY)
            setScrollActive(true);
        } else {
            setScrollY(window.pageYOffset);
            setScrollActive(false);
        }
    };

    useEffect(() => {
        const scrollListener = () => {
          window.addEventListener('scroll', scrollFixed);
        };
        scrollListener();
        return () => {
          window.removeEventListener('scroll', scrollFixed);
        };
    });

    return (
        <div>
            <DetailTop/>
            <Box className={`${classes.tabsbox} ${scrollActive ? classes.test : classes.tabsbox}`} sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} className={classes.tabs} onChange={handleChange} aria-label="basic tabs example">
                    <Tab className={classes.tabsname} label='프로젝트 계획' {...a11yProps(0)} />
                    <Tab className={classes.tabsname} label='업데이트' {...a11yProps(1)} />
                    <Tab className={classes.tabsname} label='커뮤니티' {...a11yProps(2)} />
                    <Tab className={classes.tabsname} label='추천' {...a11yProps(3)} />
                </Tabs>
            </Box>
            <TabPanel className={classes.tabscontent} value={value} index={0}>
                <div className={classes.contentsize}>
                    <PlanTab/>
                </div>
            </TabPanel>
            <TabPanel className={classes.tabscontent} value={value} index={1}>
                <div className={classes.contentsize}>
                    귀찮다
                </div>
            </TabPanel>
            <TabPanel className={classes.tabscontent} value={value} index={2}>
                <div className={classes.contentsize}>
                    언제 다 만들지..
                </div>
            </TabPanel>
            <TabPanel className={classes.tabscontent} value={value} index={3}>
                <div className={classes.contentsize}>
                    여기는 일단 패스요~
                </div>
            </TabPanel>
        </div>
    )
}

export default DetailTabs