import React from 'react'
import styles from '../pages/Navbar.module.css'; 

export default function MainText() {
  return (
    <div className={styles.text}>
        <span>
            <p>Hello, X.</p>
            <p>Welcome to Mimatomy Corporation.</p>
            <p>You are now viewing the main control panel.</p>
            <p>More permission would be granted soon.</p>
        </span>
    </div>    
  )
}
