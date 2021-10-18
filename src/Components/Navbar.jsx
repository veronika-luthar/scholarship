import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (

        <div className='nav'>
        <nav>
            <div className='container'>
            <h1 className='logo-text'>Water-Supply Testing Results Dunedin</h1>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/alert'>Alert</Link>
                </li>
                <li>
                    <Link to='/info'>Info</Link>
                </li>

            </ul>
            </div>
        </nav>

        </div>

    )
}

export default Navbar;