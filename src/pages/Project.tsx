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
    'JavaScript',
    'Typescript',
    'React'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [300, 50, 100],
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
              <h1>Project</h1>
              <p className={deco.record}>
                {/* This is the Project page. Need 6 grid spaces to display the project in order. From latest to representative one. */}
                <span>test</span>
                  <Doughnut data={data} />
                {/* ✅deco.record is the core to let text to be displayed on wallpaper */}
              </p>
              {/* Temporary tag - change div to something else later if necessary. */}
              <section>
                {/* <Pie data={data} />; */}
                <p>test</p>
                {/* make a circle, and display the proportion of stack */}
                {/* https://www.chartjs.org/docs/latest/charts/doughnut.html#pie
                https://www.youtube.com/watch?v=UwlaPofs5cA
                https://codesandbox.io/s/github/reactchartjs/react-chartjs-2/tree/master/sandboxes/pie/default?from-embed */}
              </section>
          </div>
        </picture>

        <h1 className={styles.header}>
          <Navbar />
        </h1>


    </article>
  )
}

export default Project