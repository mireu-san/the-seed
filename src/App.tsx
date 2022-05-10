import React from 'react';
import './App.css';
import ImageLogo from "./image/logo.jpg";

function App() {
  return (
    <div className="App">
        <header className="App-header">
            <img src={ImageLogo} alt="logo" />
            Click/Touch the image to move on to the main page.
        </header>
    </div>
  );
}

export default App;
