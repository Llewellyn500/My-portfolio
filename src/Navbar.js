import React from "react";
import Logo from "./logo.png";
import "./Navbar.css";

function Navbar() {
  return(
    <div className="nav">
      <nav>
        <div>
          <img className="navbar__logo" src={Logo} alt="My logo" />
        </div>
        
        <ul className="navbar__links">
          <li><a>Home</a></li>
          <li><a>About Me</a></li>
          <li><a>Projects</a></li>
          <li><a>Contact Me</a></li>
        </ul>
      </nav>
    </div>
    );
}

export default Navbar;