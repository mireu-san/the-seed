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
                            <Link className="Nav__link" to="/">Link 1</Link>
                        </li>
                        <li className='Navbar__menu-item'>
                            <Link className="Nav__link" to="/">Link 2</Link>
                        </li>
                        <li className='Navbar__menu-item'>
                            <Link className="Nav__link" to="/">Link 3</Link>
                        </li>
                    </ul>
                </div>
                </div>
            </nav>
        )
    }
}
