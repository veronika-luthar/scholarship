import React from "react";
import {southernSurfaceSample} from "../Data/SouthernSurfaceSample";
import {mountGrand} from "../Data/MountGrand";
import {mosgiel} from "../Data/Mosgiel";
import {portChalmers} from "../Data/PortChalmers";
import {southernMountGrand} from "../Data/Southern-MountGrand";

const Alert = () => {
let alertText="";

function areaAlert (area) {
    for(let i = 0; i < area.length; i++){
        if(area[i].result > 0.005){
            alertText += "High levels of " + area[i].name + " in <br>"
        }
    }
}

areaAlert(mountGrand);

    return (
        <div dangerouslySetInnerHTML={{ __html:alertText }}></div>
    )
}

export default Alert;