import React, { useEffect, useState } from "react";
import BasicInfo from "../../../components/post/createProject/BasicInfo";
import ManageHeader from "../../../components/post/management/ManageHeader";
import Funding from '../../../components/post/createProject/Funding';
import Gift from "../../../components/post/createProject/Gift";
import CreatorInfo from "../../../components/post/createProject/CreatorInfo";

const CreateProject = () => {
    const [projectTab, setProjectTab] = useState(1);
    const [totalData, setTotalData] = useState({})

    const tabHandler = (num) => {
        setProjectTab(num);
    }

    useEffect(() => {
        console.log(totalData);
    },[totalData])

    return <>
        <ManageHeader tabHandler={tabHandler} />
        {projectTab === 1 && <BasicInfo />}
        {projectTab === 2 && <Funding />}
        {projectTab === 3 && <Gift />}
        {projectTab === 4 && <CreatorInfo />}
    
    </>
}

export default CreateProject;