import React from "react";
import { Navbar } from "react-bootstrap";
import {NavLink} from "react-router-dom";
import "../../index.css"

function Navigation(props) {
  return (
    <div>
      <Navbar className="nav-container" expand="lg"  sticky="top">
        {/* I want this to be green  */}
        <NavLink className="nav-link" to="/">
          <div class="text-light">
            <h4 class="nav-title-font">Sabrina LeMay</h4>
          </div>
        </NavLink>
        <ul class="navbar-nav ml-auto navitem-indent">
          <li class="nav-item">
            <NavLink to="/about">
              <div class="nav-font text-light">About Me</div>
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink to="/portfolio">
              <div class="nav-font text-light">Portfolio</div>
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink to="/contact">
              <div class="nav-font text-light">Contact</div>
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink to="/resume">
              <div class="nav-font text-light">Resume</div>
            </NavLink>
          </li>
        </ul>
      </Navbar>
    </div>
  );
}

export default Navigation;