import React from 'react'
import styles from "./Picture.module.css";
import story from "../image/story.jpg";
import Navbar from '../pages/Navbar'

const About = () => {
  return (
    <article className={styles.article}>
        <picture className={styles.picture}>
          <div className={styles.container}>
            <img src={story} className={styles.story} />  
              <h1>About</h1>
              <p>
                This is the about page.
              </p>
          </div>
        </picture>

        <h1 className={styles.header}>
          <Navbar />
        </h1>


    </article>
  )
}


export default About