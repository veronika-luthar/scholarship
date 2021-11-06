import React from "react";
import {southernMetal} from "../Data/Southern";
import {mountGrandMetal, mountGrandChlorine} from "../Data/MountGrand";
import {mosgielMetal} from "../Data/Mosgiel";
import {portChalmersMetal} from "../Data/PortChalmers";
import {southernMountGrandMetal} from "../Data/Southern-MountGrand";

const Alert = () => {
let alertText="";

function areaAlert (area) {
    let areaName="";
    let last= "";
    
    switch(area) {
        case mountGrandMetal || mountGrandChlorine:
            areaName = "Mount Grand";
            break;
        case southernMetal:
            areaName = "Southern";
            break;
        case mosgielMetal:
            areaName = "Mosgiel";
            break;
        case southernMountGrandMetal:
            areaName = "Southern/Mount Grand";
            break;
        case portChalmersMetal:
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


    areaAlert(mountGrandMetal);
    areaAlert(southernMountGrandMetal);
    areaAlert(southernMetal);
    areaAlert(portChalmersMetal);
    areaAlert(mosgielMetal);


    return (
        <div className='alert' dangerouslySetInnerHTML={{ __html:alertText }}></div>
    )

}
export default Alert;