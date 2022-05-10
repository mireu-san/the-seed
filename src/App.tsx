import React from 'react';
import './App.css';
import ImageLogo from "./image/logo.jpg";

function App() {
  return (
    <div className="App">
        <header className="App-header">
            <img src={ImageLogo} alt="logo" />
            Face The Fear, Build The Future.
        </header>
    </div>
  );
}

export default App;
