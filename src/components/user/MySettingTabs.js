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
        privacy : 0,
    });

    const [accountData, setAccountData] = useState({
        email : "",
        phone : "",
        currpassword : "",
        password1 : "",
        password2 : "",
    });

    const [paymentData, setPaymentData] = useState([{
        paymentCheck : 0,
        paymentIndex : "",
        div : "",
        cardNumber : "",
        cardEndDate : "",
        cardPassword : "",
        userBirth : "",
        bank : "",
        accountNumber : "",
        userName : "",
    }]);

    const [shippingData, setShippingData] = useState([{
        shipIndex : "",
        shippingCheck : 0,
        userID : "",
        userName : "",
        address : "",
        shipphone : ""
    }]);

    //axios로 유저 정보 불러오기
    const readUserInfo = () => {                    
        axios.get('http://localhost:3000/mypage/userinfor', {headers : {'user_token': token}})
        .then(response => {
            console.log(response.data)
            setProfileData({...profileData,
                profileImg : response.data[0].profileImage,
                name : response.data[0].nickName,
                comment : response.data[0].comment,
                website : response.data[0].website,
                privacy : response.data[0].private
            });
            setAccountData({...accountData, 
                email : response.data[0].email,
                phone : response.data[0].phone
            });

            // 서버에서 데이터 다시 받아서 새로 고치자!
            // setState 안에 map이 들어가는 것은 좀 많이 이상함.
            // set 은 한번만! set이 불릴 때마다 렌더링 되는 데.... ㅠ,ㅠ
            // paymentData 여러개해야됨.
            (response.data).map((val, index) => (
                setPaymentData(paymentData => [...paymentData, {
                    div : response.data[index].DIV,
                    paymentCheck : response.data[index].paymentCheck,
                    paymentIndex : response.data[index].paymentIndex,
                    cardNumber : response.data[index].cardNumber,
                    cardEndDate : response.data[index].cardEndDate,
                    cardPassword : response.data[index].cardPassword,
                    userBirth : response.data[index].userBirth,
                    bank : response.data[index].bank,
                    accountNumber : response.data[index].accountNumber,
                    userName : response.data[index].userName
                }])
            ));
            
            //shippingData 여러개    
            (response.data).map((val, index) => (
                setShippingData(shippingData => [...shippingData, {
                    shipIndex : response.data[index].shipIndex,
                    shippingCheck : response.data[index].shippingCheck,
                    userID : response.data[index].userID,
                    userName : response.data[index].userName,
                    address : response.data[index].address,
                    shipphone : response.data[index].shipPhone
                }])
            ));
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