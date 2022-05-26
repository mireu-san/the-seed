import React from 'react'
import ImageLogo from "../image/logo.jpg";
import { Link } from 'react-router-dom';

import styles from "../pages/Navbar.module.css";
// import logo from "../pages/Picture.module.css";

import { motion } from 'framer-motion'


function Welcome() {
  return (
    <div className="App">
        <header className="App-header">
            <img src={ImageLogo} alt="" />

            <Link to="/main">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}

                  className={styles.btn}>
                    <p className={styles.alert}>Start</p>
                </motion.button>
            </Link>

        </header>
    </div>
  )
}

export default Welcome