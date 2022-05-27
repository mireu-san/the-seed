import React from 'react';
import './App.css';
// import ImageLogo from "./image/logo.jpg";

import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom"


import Main from './pages/Main';
import About from './pages/About';
import Project from './pages/Project';
import Welcome from './pages/Welcome';

// import { AnimatePresence } from 'framer-motion';

// interface LocationState {
//   from: {
//     pathname: string;
//   };
// }


function App() {

  return (
    <div className="App">
        {/* <header className="App-header"> */}

          {/* <AnimatePresence exitBeforeEnter> */}
            <Router>
              <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/main" element={<Main />} />
                <Route path="/about" element={<About />} />
                <Route path="/project" element={<Project />} />
              </Routes>
            </Router>
          {/* </AnimatePresence> */}
        {/* </header> */}
    </div>
  );
}

export default App;
