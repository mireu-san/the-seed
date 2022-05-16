import { render } from '@testing-library/react';
import React from 'react'
import { Link } from 'react-router-dom';

import '../pages/Navbar.module.css'; 

export default class Navbar extends React.Component {
    render() {
        return (
            // Here. This nav, navbar is the main wrapper of this Navbar.
            <nav className="navbar">
                <div className='Navbar__menu'>
                    {/* <ul className='Navbar__menu-wrapper'> */}
                        <li className='Navbar__menu-item-title'>
                            <Link className="Nav__link" to="/">Title Menu</Link>
                        </li>
                        <li className='Navbar__menu-item-main'>
                            <Link className="Nav__link" to="/main">Admin Panel</Link>
                        </li>
                        <li className='Navbar__menu-item-about'>
                            <Link className="Nav__link" to="/about">About</Link>
                        </li>
                        <li className='Navbar__menu-item-project'>
                            <Link className="Nav__link" to="/project">Project</Link>
                        </li>
                    {/* </ul> */}
                </div>
                {/* </div> */}
            </nav>
        )
    }
}
