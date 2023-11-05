import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./nav.css";
function Navbar() {
  const [home, nothome] = useState(true);

  return (
    <div>
      <nav className={home ? "navbar background" : "navbar background"}>
        <div className="navlist">
          <div className="logo">
            <img src={require("./omback.png")} alt="Pictur"></img>
            <h1>DIVINE AI</h1>
          </div>
          <li className={home ? "active" : ""} onClick={() => nothome(true)}>
            <NavLink to="/Home">Talk</NavLink>
          </li>
          <li className={!home ? "active" : ""} onClick={() => nothome(false)}>
            <NavLink to="/">Home</NavLink>
          </li>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
