import React, { useState } from 'react'
import Navbar from '../pages/Navbar'
import MainText from '../pages/MainText' 
import styles from "./Picture.module.css";

import { motion } from 'framer-motion'

const Main = () => {

  return (
    // wallpaper background area
    <article className={styles.article}>
    <motion.div
      animate={{ scale: 1 }}
      transition={{ duration: 1 }}
    >
      <picture className={styles.picture}>
        <img className={styles.picture} alt="" />
      </picture>
    </motion.div>
      {/* Text Area */}
      
      <h1 className={styles.header}>
        {/* Navbar is in Main variable to let it return in Main.tsx */}
        <Navbar />
        <MainText />
      </h1>
    </article>
  )
}

function MainPage() {
  return (
    <div className="App">
      <header className="App-header">
        <Main />
      </header>
    </div>
  )
}

export default MainPage
