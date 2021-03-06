import React from 'react'
import styles from "./Picture.module.css";
// import story from "../components/image/story.jpg";
import Navbar from '../pages/Navbar'

import deco from "../pages/Deco.module.css"

import { motion } from 'framer-motion'

// react-chartjs-2
import {Chart, Tooltip, Title, ArcElement, Legend} from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
Chart.register(
  Tooltip, Title, ArcElement, Legend
)

const data = {
  labels: [
    'JavaScript, Reactjs',
    'Reactjs, Typescript',
    'HTML'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [26, 4, 9],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
  }]
};

// Project.tsx
const Project = () => {
  return (
    <article className={styles.article}>

          <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={styles.container}>
            <img className={styles.story} alt="" />  
              {/* Input area to display it - content, text */}
              <p className={deco.recordProject}>
                <p className={deco.justTitleProject}>Project</p>
                  {/* This is the Project page. Need 6 grid spaces to display the project in order. From latest to representative one. */}
                  <span className={deco.justTextProject}>Stack used in repositories</span>
                    <Doughnut data={data} />
                  {/* ✅deco.record is the core to let text to be displayed on wallpaper */}
              </p>
              {/* Temporary tag - change div to something else later if necessary. */}
              <div className={deco.recordRight}>
                <h1 className={deco.justTitleProject}>Featured Repositories</h1>
                  <div className={deco.repository}>
                    <article className={deco.anchor}>
                      <div className={deco.spaceAnchor}>
                        <div className={deco.grayColour}>01 React & Typescript </div> <a href="https://github.com/mireu-san/the-seed" className={deco.repoLink}>Repo - The Seed</a>  
                      </div>
                      <div className={deco.spaceAnchor}>
                        <div className={deco.grayColour}>02 React & TypeScript </div> <a href="https://github.com/mireu-san/sandbox-todolist" className={deco.repoLink}>Repo - To do list with Typescript</a>
                      </div>
                      <div className={deco.spaceAnchor}>
                        <div className={deco.grayColour}>03 JavaScript</div> <a href="https://github.com/mireu-san/the-greenhouse" className={deco.repoLink}>Repo - The Greenhouse</a>
                      </div>
                      <div className={deco.spaceAnchor}>
                        <div className={deco.grayColour}>04 JavaScript</div> <a href="https://github.com/mireu-san/js-mireu" className={deco.repoLink}>Repo - js Mireu</a>
                      </div>
                      <div className={deco.spaceAnchor}>
                        <div className={deco.grayColour}>05 HTML</div> <a href="https://github.com/mireu-san/Kokoa-Clone-2020" className={deco.repoLink}>Repo - Kokoatalk</a>
                      </div>
                    </article>
                  </div>
              </div>

        <h1>
          <Navbar />
        </h1>
          </motion.div>
    </article>
  )
}

export default Project