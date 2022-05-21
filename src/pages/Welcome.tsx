import React from 'react'
import ImageLogo from "../image/logo.jpg";
import { Link } from 'react-router-dom';

import styles from "../pages/Navbar.module.css";
// import logo from "../pages/Picture.module.css";


function Welcome() {
  return (
    <div className="App">
        <header className="App-header">
            <img src={ImageLogo} alt="" />
            <Link to="/main">
                <button className={styles.btn}>
                    <p className={styles.alert}>Start</p>
                </button>
            </Link>
        </header>
    </div>
  )
}

export default Welcome