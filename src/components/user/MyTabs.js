import React, { useEffect, useState } from 'react';
import moment from "moment";
import 'moment/locale/ko';
import axios from 'axios';
import { Cookies } from 'react-cookie';
import { useNavigate } from "react-router-dom";

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import SettingsIcon from '@mui/icons-material/Settings';

import ProfileTab from './Tabs/ProfileTab';
import SupportProject from './Tabs/SupportProject';
import UploadProject from './Tabs/UploadProject';
import FollowingTab from './Tabs/FollowingTab';
import FollowerTab from './Tabs/FollowerTab';
import classes from './mypage.module.css'


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
    const [data, setData] = useState([])
    const [time, setTime] = useState()

    const cookies = new Cookies();
    const token = cookies.get('user_token');
    const navigater = useNavigate();

    const findProfile = () => {
        axios.get('http://localhost:3000/mypage/profile' ,{headers : {'user_token': token}})
        .then(response => {
            console.log(response.data)
            setData(response.data.userProfile)
            setCount(response.data.upLoadCount)
            setsuCount(response.data.buyCount)

            const asd = moment(response.data.userProfile.Date).format('YYYYMMDD')
            const result = moment(asd, "YYYYMMDD").fromNow()
            setTime(result)
        })
        .catch(e => {
            console.log(e)
        })
    }

    useEffect(() => {
        findProfile();
    }, [])


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <div>
                {data &&
                    <div className={classes.profilebox}>
                        {data.profileImage ? <img src={data.profileImage} alt="profileimg"/> : <img src="/images/profile.jpg" alt="profileimg"/>}
                        <div className={classes.profileInfo}>
                            <div>{data.nickName}<span><SettingsIcon onClick={() => {navigater('/usersetting')}}/></span></div>
                            <div>{time} ??????</div>
                        </div>
                    </div>
                } 
            </div>
            <div className={classes.tabsbox}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs className={classes.tabitem} value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab className={classes.tabitemTitle} label='?????????' {...a11yProps(0)} />
                        <Tab className={classes.tabitemTitle} label={`?????? ???????????? ${count.count}`} {...a11yProps(1)} />
                        <Tab className={classes.tabitemTitle} label={`????????? ???????????? ${sucount.count}`} {...a11yProps(2)} />
                        <Tab className={classes.tabitemTitle} label={`?????????`} {...a11yProps(3)} />
                        <Tab className={classes.tabitemTitle} label={`?????????`} {...a11yProps(4)} />
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
                    <FollowingTab/>
                </TabPanel>
                <TabPanel className={classes.tabscontent} value={value} index={4}>
                    <FollowerTab/>
                </TabPanel>
            </div>
        </>
    )


}

export default MyTabs