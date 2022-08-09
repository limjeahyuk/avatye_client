import React, { useState } from 'react';

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import ProfileTab from './Tab/ProfileTab';
import SupportProject from './Tab/SupportProject';
import UploadProject from './Tab/UploadProject';

import classes from './mytabs.module.css'

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
          <Box sx={{ p: 3 }}>
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

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Box className={classes.tabsbox} sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs className={classes.tabitem} value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="프로필" {...a11yProps(0)} />
                        <Tab label="올린 프로젝트" {...a11yProps(1)} />
                        <Tab label="후원한 프로젝트" {...a11yProps(2)} />
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
            </Box>
        </>
    )


}

export default MyTabs