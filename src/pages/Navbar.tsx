import { render } from '@testing-library/react';
import React from 'react'
import { Link } from 'react-router-dom';

export default class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar">
                <div className='Navbar__container'>
                    <Link to='/' className='Navbar__brand'>
                        <img src="" className="Navbar__logo" />
                    </Link>

                <div className='Navbar__menu'>
                    <ul className='Navbar__menu-wrapper'>
                        <li className='Navbar__menu-item'>
                            <Link className="Nav__link" to="/">Title Menu</Link>
                        </li>
                        <li className='Navbar__menu-item'>
                            <Link className="Nav__link" to="/main">Admin Panel</Link>
                        </li>
                        <li className='Navbar__menu-item'>
                            <Link className="Nav__link" to="/about">About</Link>
                        </li>
                        <li className='Navbar__menu-item'>
                            <Link className="Nav__link" to="/project">Project</Link>
                        </li>
                    </ul>
                </div>
                </div>
            </nav>
        )
    }
}
