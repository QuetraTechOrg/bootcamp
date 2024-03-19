import React, { Fragment } from "react";
import "./navbar.css";
const NavBar = () => {
  return (
    <Fragment>
      <nav>
        <div className="left">
          <img src="../public/Group 11.png" alt="logo" />
        </div>
        <div className="right">
          <ul>
            <li>
              <a href="#home">About me</a>
            </li>
            <li>
              <a href="#frontSkills">Front-end skills</a>
            </li>
            <li>
              <a href="#backskills">Back-end skills</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};

export default NavBar;
