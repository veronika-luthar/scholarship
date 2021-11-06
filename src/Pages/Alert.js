import React from "react";
import {southernSurfaceSample} from "../Data/Southern/Metal";
import {mountGrand} from "../Data/MountGrand/Metal";
import {mosgiel} from "../Data/Mosgiel/Metal";
import {portChalmers} from "../Data/PortChalmers/Metal";
import {southernMountGrand} from "../Data/Southern-MountGrand/Metal";

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
        if(area[i].result > 0.008){
            if(last != areaName) {
                alertText+= "<h2 class='alertArea'>" + areaName + "</h2>" + " High levels of " + area[i].name + "<br>";
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
        <div className='alert' dangerouslySetInnerHTML={{ __html:alertText }}></div>
    )

}
export default Alert;