import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import ProfileTab from './Tab/ProfileTab';
import SupportProject from './Tab/SupportProject';
import UploadProject from './Tab/UploadProject';

import classes from './mytabs.module.css'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import FollowerTab from './Tab/FollowerTab';
import FollowingTab from './Tab/FollowingTab';

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

const MyTabs = () => {
    const [value, setValue] = useState(0);
    const [count, setCount] = useState({});
    const [sucount, setsuCount] = useState({});

    let { params } = useParams()


    const findUp = () => {
        axios.get(`http://192.168.0.74:3000/u/${params}/uploadcount`)
        .then(response => {
            setCount(response.data)
            console.log(response.data)
        })
        .catch(e => {
            console.log(e)
        })
    }

    const findSupport = () => {
        axios.get(`http://192.168.0.74:3000/u/${params}/buycount`)
        .then(response => {
            setsuCount(response.data)
            console.log(response.data)
        })
        .catch(e => {
            console.log(e)
        })
    }

    // ${count.count} ${sucount.count}

    useEffect(() => {
        findUp();
        findSupport();
    }, [])



    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <div className={classes.tabsbox}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs className={classes.tabitem} value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab className={classes.tabitemTitle} label='프로필' {...a11yProps(0)} />
                        <Tab className={classes.tabitemTitle} label={`올린 프로젝트 ${count.count}`} {...a11yProps(1)} />
                        <Tab className={classes.tabitemTitle} label={`후원한 프로젝트 ${sucount.count}`} {...a11yProps(2)} />
                        <Tab className={classes.tabitemTitle} label={`팔로워`} {...a11yProps(3)} />
                        <Tab className={classes.tabitemTitle} label={`팔로잉`} {...a11yProps(4)} />
                    </Tabs>
                </Box>
                <TabPanel className={classes.tabscontent} value={value} index={0}>
                    <ProfileTab />
                </TabPanel>
                <TabPanel className={classes.tabscontent} value={value} index={1}>
                    <UploadProject/>   
                </TabPanel>
                <TabPanel className={classes.tabscontent} value={value} index={2}>
                    <SupportProject/>
                </TabPanel>
                <TabPanel className={classes.tabscontent} value={value} index={3}>
                    <FollowerTab/>
                </TabPanel>
                <TabPanel className={classes.tabscontent} value={value} index={4}>
                    <FollowingTab/>
                </TabPanel>
            </div>
        </>
    )


}

export default MyTabs