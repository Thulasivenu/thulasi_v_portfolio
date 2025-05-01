// NavBar.js
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import hamburgerIcon from "../../assets/images/hamBurger.svg";
import closeIcon from "../../assets/images/closeIcon.svg";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [showModalPopup, setShowModalPopup] = useState(false);

  return (
    <>
       {/* Modal Popup for mobile nav */}
       <div
        className={`modalPopup ${open ? "open" : ""}`}
        onClick={() => setOpen(false)}
      >
        <div
          className="modalContent"
          onClick={(e) => e.stopPropagation()} // prevent modal close on inner click
        >
          <ul className="mobileView">
            <li>
              <NavLink to="/" onClick={() => setOpen(false)} end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={() => setOpen(false)}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/skills" onClick={() => setOpen(false)}>
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" onClick={() => setOpen(false)}>
                Projects
              </NavLink>
            </li>
          </ul>
        </div>

    </div>

      {/* <div className="navContainer"> */}
      <header className="mainHeader">
        <div className="myProfile">
          <NavLink to="/" style={{ background: "none" }}>
            <span className="profileIcon">TV</span>
            <span className="profileName">Thulasi V</span>
          </NavLink>
        </div>
        {/* <nav> */}
        <nav className="navLinks">
          <div className="hamburgerBtn">
            <button
              className="hamBurger"
              onClick={() => {
                console.log("Hamburger clicked");
                setOpen(!open);
              }}
            >
              {/* <img src={hamburgerIcon} alt="Menu" style={{ width: "30px" }} /> */}
              <img src={open ? closeIcon : hamburgerIcon} alt="Menu" style={{ width: "30px" }} />
              </button>
          </div>
          {/* <div className={`${open && "modalPopup"}`}></div> */}

          <ul className="links">
            <li>
              <NavLink to="/" end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/skills">Skills</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
          </ul>
        </nav>
      </header>

      {/* </div> */}
    </>
  );
};

export default NavBar;
