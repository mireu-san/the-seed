import React from 'react'

// import styles from "./Background.module.css";
import styles from "./Picture.module.css";

import MainPanel from "../image/mainPanel.jpg";

const Main = () => {
  return (
    <article className={styles.article}>
      <picture className={styles.picture}>
        <source media="(min-width: 0px)" srcSet={MainPanel} />
        <img src={MainPanel} alt="main-panel" />
      </picture>
      <h1 className={styles.header}>test, mainpanel</h1>
    </article>
  )
}

// function Main() {
//   return (
//     <div className="App">
//       <header className="App-header">
//       <img src={MainPanel} alt="main-page" />
// {/* If displaying text up on the image is NOT POSSIBLE, Then split image (north, east, west, south). Leave centre as blank for text. */}
// {/* https://www.upbeatcode.com/react/how-to-write-text-on-image-in-react-js/ */}

//       </header>
//     </div>
//   )
// }

export default Main