import React from "react";
import style from "../style/navbar.module.css";

function Navbar() {
  return (
    <nav id={`${style.navbar}`} className={`${style.notFixed}`}>
      <div className={`${style.navbar__menu}`}>
        <ul>
          <li className={`${style.navbar__home} ${style.active}`}>Home</li>
          <li className={`${style.navbar__about}`}>About</li>
          <li className={`${style.navbar__skills}`}>Skills</li>
          <li className={`${style.navbar__work}`}>My Work</li>
          <li className={`${style.navbar__contact}`}>Contact</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
