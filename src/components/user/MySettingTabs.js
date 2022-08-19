import React, { useState, useEffect} from 'react';

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import SettingProfileTab from './Tabs/SettingProfileTab';
import SettingAccountTab from './Tabs/SettingAccountTab';
import SettingPaymentTab from './Tabs/SettingPaymentTab';
import SettingShippingTab from './Tabs/SettingShippingTab';
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

const MySettingTabs = () => {
    const [value, setValue] = useState(0);

    // const cookies = new Cookies()
    // const token = cookies.get('user_token')

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <div className={classes.settingTitle}>
                설정
            </div>
            <div className={classes.tabsbox}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs className={classes.tabitem} value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab className={classes.tabitemTitle} label='프로필' {...a11yProps(0)} />
                        <Tab className={classes.tabitemTitle} label='계정' {...a11yProps(1)} />
                        <Tab className={classes.tabitemTitle} label='결제수단' {...a11yProps(2)} />
                        <Tab className={classes.tabitemTitle} label='배송지' {...a11yProps(3)} />
                    </Tabs>
                </Box>
                <TabPanel className={classes.tabscontent} value={value} index={0}>
                    <SettingProfileTab />
                </TabPanel>
                <TabPanel className={classes.tabscontent} value={value} index={1}>
                    <SettingAccountTab/>   
                </TabPanel>
                <TabPanel className={classes.tabscontent} value={value} index={2}>
                    <SettingPaymentTab/>
                </TabPanel>
                <TabPanel className={classes.tabscontent} value={value} index={3}>
                    <SettingShippingTab/>
                </TabPanel>
            </div>
        </>
    )


}

export default MySettingTabs