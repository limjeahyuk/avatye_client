import React, { useState } from "react";
import BasicInfo from "../../../components/post/createProject/BasicInfo";

const CreateProject = () => {
    const [basicData, setBasicData] = useState({});

    const basicHandler = (data) => {
        setBasicData(data);
    }

    return <>
    <BasicInfo dataHandler={basicHandler} />
    </>
}

export default CreateProject;