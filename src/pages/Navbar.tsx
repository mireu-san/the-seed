// import { render } from '@testing-library/react';
import React from 'react'
import { Link } from 'react-router-dom';

import styles from '../pages/Navbar.module.css'; 

import { motion } from 'framer-motion';

// Refactor motion.li - repeatitive!

export default class Navbar extends React.Component {
    render() {
        return (
            // Here. This nav, navbar is the main wrapper of this Navbar.
            <nav className="navbar">
                <div className='Navbar__menu'>
                    {/* <ul className='Navbar__menu-wrapper'> */}
                        <motion.li 
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            className='Navbar__menu-item-title'>
                                <Link className={styles.navLink} to="/">
                                    ESC
                                </Link>
                        </motion.li>    
                        <motion.li 
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            className='Navbar__menu-item-main'>
                            <Link className={styles.navLink} to="/main">Admin Panel</Link>
                        </motion.li>
                        <motion.li 
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className='Navbar__menu-item-about'>
                            <Link className={styles.navLink} to="/about">Author</Link>
                        </motion.li>
                        <motion.li 
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className='Navbar__menu-item-project'>
                            <Link className={styles.navLink} to="/project">Project</Link>
                        </motion.li>
                </div>
            </nav>
        )
    }
}
