import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (

        <div className='nav'>
        <nav>
            <div className='container'>
            <h1 className='logo-text'>Water-Supply Testing Results Dunedin</h1>
            {/* Links to pages */}
            <ul>
                <li className="nav-buttons">
                    <Link to='/'>Home</Link>
                </li>
                <li className="nav-buttons">
                    <Link to='/alert'>Alert</Link>
                </li >
                <li className="nav-buttons">
                    <Link to='/info'>Info</Link>
                </li>

            </ul>
            </div>
        </nav>

        </div>

    )
}

export default Navbar;