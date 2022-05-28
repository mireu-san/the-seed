import React from 'react'
import styles from "./Picture.module.css";
// import story from "../components/image/story.jpg";
import Navbar from '../pages/Navbar'

import deco from "../pages/Deco.module.css"

import { motion } from "framer-motion"

// Author page

const About = () => {
  return (
    <article className={styles.article}>
        {/* <picture className={styles.picture}> */}
          <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={styles.container}>

            <img className={styles.story} alt="" />  
                <section className={deco.record}>
                  <p className={deco.justTitle}>Jongwan Kim</p>
                  <p className={deco.justTitle}>React & TypeScript Web Developer Enthusiast</p>
                  <p className={deco.justText}>
                    Mainly use stacks with JavaScript base. React / TypeScript are my preference to use nowadays.
                  </p>
                  <p className={deco.justText}>
                    Face the fear, Make the future. That's my motto as well.
                  </p>

                <p className={deco.recordBottom}>
                  <p className={deco.aboutBottom}>External Links</p>
                    <section className={deco.externalLink}>
                      <a href="https://github.com/mireu-san" className={deco.link}>Github</a>
                      <a href="https://www.linkedin.com/in/jongwan-kim-89500a194/" className={deco.link}>LinkedIn</a>
                      <a href="https://silverlibrary.tistory.com/" className={deco.link}>Blog</a>
                      <a href="mailto:starmireu@gmail.com" className={deco.link}>Email</a>
                    </section>
                </p>

                </section>
                {/* This area suppose to be located - bottom */}

        <h1>
          <Navbar />
        </h1>
              
          </motion.div>
        {/* </picture> */}



    </article>
  )
}


export default About