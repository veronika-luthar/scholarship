import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <h1 class="header">Water-Supply <br/>Testing Results <br/>Dunedin</h1>
            <ul>
                <button class="button">
                    <a>
                        <Link to='/'>Home</Link>
                    </a>
                </button>
                
                <button class="button">
                    <li>
                        <Link to='/graph'>Graph</Link>
                    </li>
                </button>
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