import React, { useEffect, useState } from "react";
import BasicInfo from "../../../components/post/createProject/BasicInfo";
import ManageHeader from "../../../components/post/management/ManageHeader";
import Funding from '../../../components/post/createProject/Funding';
import Gift from "../../../components/post/createProject/Gift";
import CreatorInfo from "../../../components/post/createProject/CreatorInfo";

const CreateProject = () => {
    const [projectTab, setProjectTab] = useState(1);

    const tabHandler = (num) => {
        setProjectTab(num);
    }

    const [basicdata, setBasicData] = useState({
        category : state.categoryState,
        detailcategory : "",
        longTitle : "",
        shortTitle : "",
        summary : state.isSummery,
        profileIMG : "",
        video : "",
        webAddress : "",
        searchTag : ""
    });

    const [fundingData, setFundingData] = useState({
        goalprice: 0,
        startDate: new Date(),
        endDate: new Date(),
        startTime: "12시 00분"
    })

    return <>
        <ManageHeader tabHandler={tabHandler} basic={basicdata} funding={fundingData} />
        {projectTab === 1 && <BasicInfo data={basicdata} setData={setBasicData} />}
        {projectTab === 2 && <Funding data={fundingData} setData={setFundingData} />}
        {projectTab === 3 && <Gift />}
        {projectTab === 4 && <CreatorInfo />}
    
    </>
}

export default CreateProject;