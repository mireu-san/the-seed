import React from 'react';
import './App.css';
// import ImageLogo from "./image/logo.jpg";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


import Main from './pages/Main';
import About from './pages/About';
import Project from './pages/Project';
import Welcome from './pages/Welcome';

function App() {
  return (
    <div className="App">
        <header className="App-header">
            {/* <img src={ImageLogo} alt="logo" /> */}
            {/* <img src={MainPanel} alt="main-page" /> */}
            <Router>
              <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/main" element={<Main />} />
                <Route path="/about" element={<About />} />
                <Route path="/project" element={<Project />} />
              </Routes>
            </Router>
            App.tsx Click/Touch the image to move on to the main page.
        </header>
    </div>
  );
}

// const renderProjects = () => {
//     return projects.map((project, index) => {
//       return posts && posts.map( (post: Post) =>  <PostCard title={post.title} description={post.description} readable_publish_date={post.readable_publish_date} url={post.url} />
//     )
// }


// class mainPanel extends React.Component {
//   render() {
//     return (
//       <div className="mainPanel">
//         <header className="mainPanel-header">
//           <h1>Welcome to the main page!</h1>
//         </header>
//         <p>
//           This is the main page.
//         </p>
//       </div>
//     );
//   }
// }

export default App;
