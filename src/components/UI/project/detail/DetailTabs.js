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

    const [scrollY, setScrollY] = useState(0);
    const [scrollActive, setScrollActive] = useState(false);
    const [view, setView] = useState(true);
    const [data, setData] = useState([]);

    let { id } = useParams();

    const findproejct = () => {
        axios.get(`http://localhost:3000/detail/${id}`)
        .then(response => {
            setData(response.data[0]);
            console.log(response.data[0]);
            const recently = {
                goalPrice: response.data[0].goalPrice,
                heartCheck: null,
                longTitle: response.data[0].longTitle,
                name: response.data[0].cateName,
                nickName: response.data[0].nickName,
                nowPrice: response.data[0].nowPrice,
                percent: response.data[0].percent,
                profileIMG: response.data[0].titleProfile,
                projectIndex: response.data[0].projectIndex,
                userID: response.data[0].userID
            }
            localUpload(recently);
        })
        .catch(e => {
            console.log(e)
        })
    }

    useEffect(() => {
        findproejct()
    }, [id])


    const scrollFixed = () => {
        if (scrollY > 800) {
            setScrollY(window.pageYOffset);
            setScrollActive(true);
        } else {
            setScrollY(window.pageYOffset);
            setScrollActive(false);
        }
    };

    const localUpload = (item) => {
        let get_local = localStorage.getItem("data");

        if (get_local === null) {
            get_local = [];
        } else {
            get_local = JSON.parse(get_local);
        }

        get_local = get_local.filter(item => item.projectIndex !== Number(id));

        get_local.push(item);
        get_local = [...get_local];
        localStorage.setItem('data', JSON.stringify(get_local));
        console.log(JSON.parse(localStorage.getItem('data')))
    }

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
                        <PlanTab data={data}/>
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