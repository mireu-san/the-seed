import React from 'react'
import MainPanel from "../image/mainPanel.jpg";

function Main() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={MainPanel} alt="main-page" />
{/* If displaying text up on the image is NOT POSSIBLE, Then split image (north, east, west, south). Leave centre as blank for text. */}
{/* https://www.upbeatcode.com/react/how-to-write-text-on-image-in-react-js/ */}

      </header>
    </div>
  )
}

export default Main