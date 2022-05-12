import React from 'react'
import ImageLogo from "../image/logo.jpg";
import { Link } from 'react-router-dom';

function Welcome() {
  return (
    <div className="App">
        <header className="App-header">
            <img src={ImageLogo} alt="logo" />
            <Link to="/main">
                <button type="button">
                    Start
                </button>
            </Link>

            {/* <span>"Add button here with transition such as move to main.tsx"</span> */}
        </header>
    </div>
  )
}

export default Welcome