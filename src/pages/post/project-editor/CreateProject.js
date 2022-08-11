import React, { useState } from "react";
import BasicInfo from "../../../components/post/createProject/BasicInfo";
import ManageHeader from "../../../components/post/management/ManageHeader";
import Funding from '../../../components/post/createProject/Funding';
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
        profileIMG : "",
        video : "",
        webAddress : "",
        searchTag : ""
    });

    return <>
        <ManageHeader tabHandler={tabHandler} />
        {projectTab === 1 && <BasicInfo data={basicdata} setData={setBasicData} />}
        {projectTab === 2 && <Funding />}
    
    </>
}

export default CreateProject;