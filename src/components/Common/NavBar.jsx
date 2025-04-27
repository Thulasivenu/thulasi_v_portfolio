import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./NavBar.css";
import hamburgerIcon from "../../assets/images/hamBurger.svg";

const NavBar = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="navContainer">
      <div className="modalPopup"></div>
      <div className="myProfile">
        <span className="profileIcon ">TV</span>
        <span className="profileName ">Thulasi V</span>
      </div>
      <button className="hamBurger" onClick={() => setOpen((o) => !o)}>
        <img src={hamburgerIcon} />
      </button>
      <nav className={`navLinks ${open ? "open" : ""}`}>
        <ul>
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/skills"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Projects
            </NavLink>
          </li>
        </ul>
      </nav>
     
    </div>
  );
}

export default NavBar

