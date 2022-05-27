import React from 'react'
import Navbar from '../pages/Navbar'
import MainText from '../pages/MainText' 
import styles from "./Picture.module.css";

import { motion } from 'framer-motion'
// import { useLocation } from 'react-router-dom'

const Main = () => {
  // const location = useLocation()
  

  return (
    // wallpaper background area
    
    <article className={styles.article}>
      <motion.div 
        className={styles.main}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
      {/* <picture className={styles.picture}> */}
        {/* lobotomy main.tsx background image */}
        <img className={styles.picture} alt="" />
            <Navbar />
            <MainText />
          {/* <h1> */}
          {/* </h1> */}
      {/* </picture> */}
      {/* Text Area */}
      
      {/* h1, header in main.tsx no longer chained with navbar */}
      </motion.div>
    </article>
  )
}

function MainPage() {
  return (
    <div className="App">
      <header className={styles.AppHeader}>
        <Main />
      </header>
    </div>
  )
}

export default MainPage
