import React, { useEffect, useState } from "react";

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import DetailTop from './DetailTop'
import PlanTab from "./tabs/PlanTab";

import classes from './detail.module.css'
import DetailSupport from "./DetailSupport";
import UpdateTab from "./tabs/UpdateTab";
import ReviewTab from "./tabs/ReviewTab";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Cookies } from "react-cookie";


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

const DetailTabs = (props) => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const cookie = new Cookies()
    const token = cookie.get('user_token')

    const [scrollY, setScrollY] = useState(0);
    const [scrollActive, setScrollActive] = useState(false);
    const [view, setView] = useState(true);
    const [data, setData] = useState([]);

    let { id } = useParams();

    const findproejct = () => {
        axios.get(`http://localhost:3000/detail/${id}`, token ? {headers: {'user_token' : token}} : '' )
        .then(response => {
            setData(response.data[0])
            console.log(response.data)
        })
        .catch(e => {
            console.log(e)
        })
    }

    const scrollFixed = () => {
        if (scrollY > 800) {
            setScrollY(window.pageYOffset);
            setScrollActive(true);
        } else {
            setScrollY(window.pageYOffset);
            setScrollActive(false);
        }
    };

    useEffect(() => {
        findproejct()
    }, [id])

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
            <DetailTop data={data} />
            <Box className={`${classes.tabsbox} ${scrollActive ? classes.fixed : classes.tabsbox}`} sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} className={classes.tabs} onChange={handleChange} aria-label="basic tabs example">
                    <Tab onClick={() => setView(true)} className={classes.tabsname} label='프로젝트 계획' {...a11yProps(0)} />
                    <Tab onClick={() => setView(true)} className={classes.tabsname} label={`업데이트${data.updateCount}`} {...a11yProps(1)} />
                    <Tab onClick={() => setView(true)} className={classes.tabsname} label={`커뮤니티${data.reviewCount}`} {...a11yProps(2)} />
                    <Tab onClick={() => setView(true)} className={classes.tabsname} label='추천' {...a11yProps(3)} />
                </Tabs>
            </Box>
            <div className={classes.panelbox}>
                <div className={classes.panelboxcontent}>
                    <TabPanel value={value} index={0}>
                        <PlanTab data={data} />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <UpdateTab/>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <ReviewTab setView={setView} />
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        여기는 일단 패스요~{data.name}
                    </TabPanel>
                    {view && <DetailSupport data={data} />}
                </div>
            </div>
        </div>
    )
}

export default DetailTabs