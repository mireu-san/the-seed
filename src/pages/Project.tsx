import React from 'react'
import styles from "./Picture.module.css";
import story from "../image/story.jpg";
import Navbar from '../pages/Navbar'

import deco from "../pages/Deco.module.css"

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
        <picture className={styles.picture}>
          <div className={styles.container}>
            <img src={story} className={styles.story} />  
              {/* Input area to display it - content, text */}
              <p className={deco.record}>
                <h1 className={deco.justTitle}>Project</h1>
                  {/* This is the Project page. Need 6 grid spaces to display the project in order. From latest to representative one. */}
                  <span>Stack used in repositories</span>
                    <Doughnut data={data} />
                  {/* ✅deco.record is the core to let text to be displayed on wallpaper */}
              </p>
              {/* Temporary tag - change div to something else later if necessary. */}
              <p className={deco.recordRight}>
                <h1 className={deco.justTitle}>Featured Repositories</h1>
                  <div className={deco.repository}>
                    <article className={deco.anchor}>
                      <a href="" className={deco.repoLink}>

                          <div className={deco.spaceAnchor}>
                            <div className={deco.grayColour}>01 React</div> Repo - repo title
                          </div>

                          <div className={deco.spaceAnchor}>
                            <div className={deco.grayColour}>02 React & TypeScript </div> Repo - repo title
                          </div>

                          <div className={deco.spaceAnchor}>
                            <div className={deco.grayColour}>03 JavaScript</div> Repo - repo title
                          </div>

                          <div className={deco.spaceAnchor}>
                            <div className={deco.grayColour}>04 HTML</div> Repo - repo title
                          </div>

                          <div className={deco.spaceAnchor}>
                            <div className={deco.grayColour}>05 HTML</div> Repo - repo title
                          </div>

                      </a>
                    </article>
                  </div>
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