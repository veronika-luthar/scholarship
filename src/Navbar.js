import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/graph'>Graph</Link>
            </li>
            <li>
                <Link to='/alert'>Alert</Link>
            </li>
            <li>
                <Link to='/info'>Info</Link>
            </li>

        </ul>
    )
}

export default Navbar;