import React from "react";
import {southernSurfaceSample} from "../Data/SouthernSurfaceSample";
import {mountGrand} from "../Data/MountGrand";
import {mosgiel} from "../Data/Mosgiel";
import {portChalmers} from "../Data/PortChalmers";
import {southernMountGrand} from "../Data/Southern-MountGrand";

const Alert = () => {

    for(let i = 0; i < mosgiel; i++){
        let test;
        if(mosgiel.result > 0.003){
            test = "ALERT! Mosgiel";
        }
        return test;
    }

    return (
        <div>{test}</div>
    )
}

export default Alert;