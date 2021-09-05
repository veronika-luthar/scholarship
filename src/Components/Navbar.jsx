import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <h1 class="header">Water-Supply <br/>Testing Results <br/>Dunedin</h1>
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
        </nav>
    )
}

export default Navbar;