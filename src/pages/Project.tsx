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
                <h1>Project</h1>
                  {/* This is the Project page. Need 6 grid spaces to display the project in order. From latest to representative one. */}
                  <span>Stack used in repositories</span>
                    <Doughnut data={data} />
                  {/* ✅deco.record is the core to let text to be displayed on wallpaper */}
              </p>
              {/* Temporary tag - change div to something else later if necessary. */}
              <p className={deco.recordRight}>
                <h1>Featured Repositories</h1>
                  <div className={deco.repository}>
                    <article>
                      <a href="" className={deco.anchor}>Box 1</a>

                      <a href="" className={deco.anchor}>Box 2</a>

                      <a href="" className={deco.anchor}>Box 2</a>
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