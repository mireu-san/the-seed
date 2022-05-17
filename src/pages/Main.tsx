import React from 'react'
import Navbar from '../pages/Navbar'
import MainText from '../pages/MainText'

import styles from "./Picture.module.css";
import MainPanel from "../image/mainPanel.jpg";



const Main = () => {
  return (
    // wallpaper background area
    <article className={styles.article}>
    
      <picture className={styles.picture}>
        <img src={MainPanel} className={styles.picture} />
      </picture>
        
      {/* Text Area */}
      
      <h1 className={styles.header}>
        {/* Navbar is in Main variable to let it return in Main.tsx */}
        <MainText />
        <Navbar />
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
