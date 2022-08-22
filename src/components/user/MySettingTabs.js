import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { Cookies } from 'react-cookie';

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

    const cookies = new Cookies()
    const token = cookies.get('user_token')

    //각각의 탭에서 사용될 데이터 설정
    const [profileData, setProfileData] = useState({
        profileImg : "",
        name : "",
        comment : "",
        website : "",
        private : 0,
    });

    const [accountData, setAccountData] = useState({
        email : "",
        phone : "",
        password : ""
    });

    const [paymentData, setPaymentData] = useState({
        paymentIndex : "",
        div : "",
        cardNumber : "",
        cardEndDate : "",
        cardPassword : "",
        userBirth : "",
        bank : "",
        accountNumber : "",
        userName : "",
    });

    const [shippingData, setShippingData] = useState({
        shipIndex : "",
        userID : "",
        userName : "",
        address : "",
        phone : ""
    });

    //axios로 유저 정보 불러오기
    const readUserInfo = () => {                    
        axios.get('http://localhost:3000/mypage/userInfor', {headers : {'user_token': token}})
        .then(response => {
            console.log(response.data)
            setProfileData({...profileData,
                profileImg : response.data[0].profileImage,
                name : response.data[0].nickName,
                comment : response.data[0].comment,
                website : response.data[0].website,
                private : response.data[0].private
            })
            setAccountData({...accountData, 
                email : response.data[0].email,
                phone : response.data[0].phone
            })
            setPaymentData({...paymentData,
                div : response.data[0].DIV,
                cardNumber : response.data[0].cardNumber,
                cardEndDate : response.data[0].cardEndDate,
                cardPassword : response.data[0].cardPassword,
                userBirth : response.data[0].userBirth,
                bank : response.data[0].bank,
                accountNumber : response.data[0].accountNumber,
                userName : response.data[0].userName
            })
            setShippingData({...shippingData,
                userID : response.data[0].userID,
                userName : response.data[0].userName,
                address : response.data[0].address,
                phone : response.data[0].phone
            })
        }).catch(e => {
            console.log(e)
        })
    }

    useEffect(() => {
        readUserInfo();
    }, [])

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
                    <SettingProfileTab data={profileData} setData={setProfileData}/>
                </TabPanel>
                <TabPanel className={classes.tabscontent} value={value} index={1}>
                    <SettingAccountTab data={accountData} setData={setAccountData}/>   
                </TabPanel>
                <TabPanel className={classes.tabscontent} value={value} index={2}>
                    <SettingPaymentTab data={paymentData} setData={setPaymentData}/>
                </TabPanel>
                <TabPanel className={classes.tabscontent} value={value} index={3}>
                    <SettingShippingTab data={shippingData} setData={setShippingData}/>
                </TabPanel>
            </div>
        </>
    )


}

export default MySettingTabs