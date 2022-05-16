import React from 'react'
import styles from "./Picture.module.css";
import story from "../image/story.jpg";
import Navbar from '../pages/Navbar'

import deco from "../pages/Deco.module.css"

const Project = () => {
  return (
    <article className={styles.article}>
        <picture className={styles.picture}>
          <div className={styles.container}>
            <img src={story} className={styles.story} />  
              <h1>Project</h1>
              <p className={deco.record}>
                This is the Project page. Need 6 grid spaces to display the project in order. From latest to representative one.

              </p>
          </div>
        </picture>

        <h1 className={styles.header}>
          <Navbar />
        </h1>


    </article>
  )
}

export default Project