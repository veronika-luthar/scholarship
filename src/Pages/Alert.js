import React from "react";
import {southernEColi} from "../Data/Southern";
import {mountGrandEColi} from "../Data/MountGrand";
import {mosgielEColi} from "../Data/Mosgiel";
import {portChalmersEColi} from "../Data/PortChalmers";
import {southernMountGrandEColi} from "../Data/Southern-MountGrand";

const Alert = () => {
let alertText="";

function areaAlert (area) {
    let areaName="";
    let last= "";
    
    switch(area) {
        case mountGrandEColi:
            areaName = "Mount Grand";
            break;
        case southernEColi:
            areaName = "Southern";
            break;
        case mosgielEColi:
            areaName = "Mosgiel";
            break;
        case southernMountGrandEColi:
            areaName = "Southern/Mount Grand";
            break;
        case portChalmersEColi:
            areaName = "Port Chalmers";
            break;
    }

    for(let i = 0; i < area.length; i++){
        if(area[i].result > 0){
            if(last != areaName) {
                alertText+= "<h1 class='white-text'> Boil Water alert</h1><h2 class='white-text'>" + areaName + "</h2>" + " High levels of " + area[i].name + "<br>";
            }
            else {
                alertText+= "High levels of " + area[i].name + "<br>";
            }
            last = areaName;
            }      
        }
    }
    
    areaAlert(mountGrandEColi);
    areaAlert(southernMountGrandEColi);
    areaAlert(southernEColi);
    areaAlert(portChalmersEColi);
    areaAlert(mosgielEColi);
    
    if(alertText=="") {
        alertText = "<h1 class='white-text'> No Boil Water alerts to show</h1>";
    }

    return (
        <div className='alert' dangerouslySetInnerHTML={{ __html:alertText }}></div>
    )

}
export default Alert;