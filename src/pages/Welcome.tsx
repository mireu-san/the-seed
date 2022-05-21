import React from 'react'
import ImageLogo from "../components/image/logo.jpg";
import { Link } from 'react-router-dom';

import styles from "../pages/Navbar.module.css";



function Welcome() {
  return (
    <div className="App">
        <header className="App-header">
            <img src={ImageLogo} alt="logo" />
            <Link to="/main">
                <button className={styles.btn}>
                    <p className={styles.alert}>Start</p>
                </button>
            </Link>

            {/* <span>"Add button here with transition such as move to main.tsx"</span> */}
        </header>
    </div>
  )
}

export default Welcome