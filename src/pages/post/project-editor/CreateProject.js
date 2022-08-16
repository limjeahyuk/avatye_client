import React, { useState } from "react";
import BasicInfo from "../../../components/post/createProject/BasicInfo";
import ManageHeader from "../../../components/post/management/ManageHeader";
import Funding from '../../../components/post/createProject/Funding';
import Gift from "../../../components/post/createProject/Gift";
import CreatorInfo from "../../../components/post/createProject/CreatorInfo";
import { useLocation } from "react-router-dom";

const CreateProject = () => {
    const [projectTab, setProjectTab] = useState(1);

    const { state } = useLocation();

    const tabHandler = (num) => {
        setProjectTab(num);
    }

    const [basicdata, setBasicData] = useState({
        category : state.categoryState,
        detailcategory : "",
        longTitle : "",
        shortTitle : "",
        summary : state.isSummery,
        img : "",
        video : "",
        webAddress : "",
        searchTag : ""
    });

    const [fundingData, setFundingData] = useState({
        goalprice: 0,
        startDate: new Date(),
        endDate: new Date(),
        startTime: "12시 00분",
        payDate: new Date()
    })

    const [giftData, setGiftData] = useState([{
        giftTitle : "",
        giftDetail : "",
        giftPrice : 1000,
        giftCount : 0,
        giftStock : 1,
        giftDeliveryDate : new Date(),
    }])

    return <>
        <ManageHeader tabHandler={tabHandler} basic={basicdata} funding={fundingData}/>
        {projectTab === 1 && <BasicInfo data={basicdata} setData={setBasicData} />}
        {projectTab === 2 && <Funding data={fundingData} setData={setFundingData} />}
        {projectTab === 3 && <Gift data={giftData} setData={setGiftData} date={fundingData.payDate}/>}
        {projectTab === 4 && <CreatorInfo />}
    
    </>
}

export default CreateProject;