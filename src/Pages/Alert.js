import React from "react";
import {southernSurfaceSample} from "../Data/SouthernSurfaceSample";
import {mountGrand} from "../Data/MountGrand";
import {mosgiel} from "../Data/Mosgiel";
import {portChalmers} from "../Data/PortChalmers";
import {southernMountGrand} from "../Data/Southern-MountGrand";

const Alert = () => {
let alertText="";

function areaAlert (area) {
    let areaName="";
    let last= "";
    
    switch(area) {
        case mountGrand:
            areaName = "Mount Grand";
            break;
        case southernSurfaceSample:
            areaName = "Southern";
            break;
        case mosgiel:
            areaName = "Mosgiel";
            break;
        case southernMountGrand:
            areaName = "Southern/Mount Grand";
            break;
        case portChalmers:
            areaName = "Port Chalmers";
            break;
    }

    for(let i = 0; i < area.length; i++){
        if(area[i].result > 0.005){
            if(last != areaName) {
                alertText+= "<h2>" + areaName + "</h2>" + "High levels of " + area[i].name + "<br>";
            }
            else {
                alertText+= "High levels of " + area[i].name + "<br>";
            }
            last = areaName;
            }
        }
    }


    areaAlert(mountGrand);
    areaAlert(southernMountGrand);
    areaAlert(southernSurfaceSample);
    areaAlert(portChalmers);
    areaAlert(mosgiel);


    return (
        <div dangerouslySetInnerHTML={{ __html:alertText }}></div>
    )

}
export default Alert;