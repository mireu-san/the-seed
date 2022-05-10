import React from 'react';
import './App.css';
import Image from "./image";

function App() {
  return (
    <div className="App">
        <header className="App-header">
          <Image imageUrl= {
            "https://static.wikia.nocookie.net/lobotomycorp/images/d/d5/Wikibanner.png/revision/latest/scale-to-width-down/600?cb=20170720162653"} 
            />
            Face The Fear, Build The Future.
        </header>
    </div>
  );
}

export default App;
