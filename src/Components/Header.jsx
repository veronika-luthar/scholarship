import React from "react";
import water from '../images/water.jpg'

const Header = () => {
    return (
        <div class='parent'>
            <div class='header'>
                <img src= {water} alt="water image" class="image"/>
            </div>
        </div>
    )
}

export default Header;