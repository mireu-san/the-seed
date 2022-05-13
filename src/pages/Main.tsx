import React from 'react'
import Navbar from '../pages/Navbar'

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
      
      <h1 className={styles.header}>
       <p>You are now viewing admin's panel. (test, mainpanel, from Main.tsx)</p>
        <Navbar />
          {/* This navbar should be moved to right side. Try to use own UI instead CSS for this. Make underline invisible. */}
          {/* Urgent: Make background size to 100%. To not let it exceed by itself. */}
      </h1>
    </article>
  )
}

// const Navbar = () => {
//   return (
//     <nav className={styles.navbar}>
//       <ul className={styles.navbarList}>
//         <li className={styles.navbarListItem}>
//           <a href="#" className={styles.navbarListItemLink}>
//             Home
//           </a>
//         </li>
//         <li className={styles.navbarListItem}>
//           <a href="#" className={styles.navbarListItemLink}>
//             About
//           </a>
//         </li>
//         <li className={styles.navbarListItem}>
//           <a href="#" className={styles.navbarListItemLink}>
//             Contact
//           </a>
//         </li>
//       </ul>
//     </nav>
//   )
// }

function MainPage() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Navbar /> */}
        <Main />
      </header>
    </div>
  )
}

export default MainPage


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

// export default Main