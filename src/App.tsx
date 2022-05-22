import React from 'react';
import './App.css';
// import ImageLogo from "./image/logo.jpg";

import { HashRouter as Router, Routes, Route } from "react-router-dom"


import Main from './pages/Main';
import About from './pages/About';
import Project from './pages/Project';
import Welcome from './pages/Welcome';


function App() {
  return (

    <div className="App">
        <header className="App-header">
            <Router>
              <Routes>

                <Route path="/" element={<Welcome />} />

                <Route path="/main" element={<Main />} />

                <Route path="/about" element={<About />} />

                <Route path="/project" element={<Project />} />
              
              </Routes>
            </Router>
            {/* Do not leave any content here. Only to work as the link platform. */}
            {/* App.tsx Click/Touch the image to move on to the main page. */}
        </header>
    </div>
  );
}

export default App;
