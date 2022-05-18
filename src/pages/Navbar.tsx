import { render } from '@testing-library/react';
import React from 'react'
import { Link } from 'react-router-dom';

import styles from '../pages/Navbar.module.css'; 


export default class Navbar extends React.Component {
    render() {
        return (
            // Here. This nav, navbar is the main wrapper of this Navbar.
            <nav className="navbar">
                <div className='Navbar__menu'>
                    {/* <ul className='Navbar__menu-wrapper'> */}
                        <li className='Navbar__menu-item-title'>
                            <Link className={styles.navLink} to="/">ESC</Link>
                        </li>
                        <li className='Navbar__menu-item-main'>
                            <Link className={styles.navLink} to="/main">Admin Panel</Link>
                        </li>
                        <li className='Navbar__menu-item-about'>
                            <Link className={styles.navLink} to="/about">About</Link>
                        </li>
                        <li className='Navbar__menu-item-project'>
                            <Link className={styles.navLink} to="/project">Project</Link>
                        </li>
                </div>
            </nav>
        )
    }
}
