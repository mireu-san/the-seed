import React from 'react'
import styles from "./Picture.module.css";
// import story from "../components/image/story.jpg";
import Navbar from '../pages/Navbar'

import deco from "../pages/Deco.module.css"

// import { motion } from "framer-motion"

// Author page

const About = () => {
  return (
    <article className={styles.article}>
        {/* <picture className={styles.picture}> */}
          <div className={styles.container}>

            <img className={styles.story} alt="mainimage" />  
                <section className={deco.record}>
                  {/* This is the about page. May present some brief history from Python to current react and typescript frontend enthusiast. This time, I won't include picture but more details. */}
                  <h1 className={deco.justTitle}>Jongwan Kim</h1>
                  <h3 className={deco.justTitle}>React & TypeScript Web Developer Enthusiast</h3>
                  <p className={deco.justText}>
                    Mainly use stacks with JavaScript base. React / TypeScript are my preference to use nowadays.
                  </p>
                  <p className={deco.justText}>
                    Face the fear, Build the future. That's what I'm here for.
                  </p>

                <p className={deco.recordBottom}>
                  <h1 className={deco.aboutBottom}>External Links</h1>
                    <section className={deco.externalLink}>
                      <a href="https://github.com/mireu-san" className={deco.link}>Github</a>
                      <a href="https://www.linkedin.com/in/jongwan-kim-89500a194/" className={deco.link}>LinkedIn</a>
                      <a href="https://silverlibrary.tistory.com/" className={deco.link}>Blog</a>
                      <a href="mailto:starmireu@gmail.com" className={deco.link}>Email</a>
                    </section>
                </p>

                </section>
                {/* This area suppose to be located - bottom */}

              
          </div>
        {/* </picture> */}

        <h1 className={styles.header}>
          <Navbar />
        </h1>


    </article>
  )
}


export default About