import React from "react";
import { useLocation } from 'react-router-dom';
import water from '../images/water.jpg'

const Header = () => {
    
    //gets end of url
    const { pathname } = useLocation();

    let header ="";

    //switch case to determine what page the user is on
    switch(pathname) {
        case "/MG":
            //sets header to full page title
            header = "Mount Grand";
            break;
        case "/ST":
            header = "Southern";
            break;
        case "/ML":
            header = "Mosgiel";
            break;
        case "/SMG":
            header = "Southern/Mount Grand";
            break;
        case "/PC":
            header = "Port Chalmers";
            break;
        case "/alert":
            header = "Alerts";
            break;
        case "/info":
            header = "Information";
            break;
        default: header = "Zones";
    }


    return (

            <div className='header'>
                <h1 className="header-text">{header}</h1>
                <img src= {water} alt="water image" className="image"/>
                
            </div>

    )
}

export default Header;