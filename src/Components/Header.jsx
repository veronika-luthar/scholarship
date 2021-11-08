import React from "react";
import water from '../images/water.jpg'

const Header = () => {

    const url = window.location.href.split('/').pop();
    let header ="";

    switch(url) {
        case "MG":
            header = "Mount Grand";
            break;
        case "ST":
            header = "Southern";
            break;
        case "ML":
            header = "Mosgiel";
            break;
        case "SMG":
            header = "Southern/Mount Grand";
            break;
        case "PC":
            header = "Port Chalmers";
            break;
        case "alert":
            header = "Alerts";
            break;
        case "":
            header = "Zones";
            break;
        case "info":
            header = "Information";
            break;
    }

    return (

            <div className='header'>
                <h1 className="header-text">{header}</h1>
                <img src= {water} alt="water image" className="image"/>
                
            </div>

    )
}

export default Header;