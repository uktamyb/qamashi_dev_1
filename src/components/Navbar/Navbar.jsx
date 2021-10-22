import React, { useState } from "react";
import "./Navbar.css";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = ({ navbarLinks }) => {
  const [menuClicked, setMenuClicked] = useState(false);

  const toggleMenuClick = () => {
    setMenuClicked(!menuClicked);
  };
  return (
    <nav className="navbar">
      {/* Logo */}
      <span className="navbar__logo">
        Qamashi_Devs
        {/* <span className="q">
          Q <span className="qamashi">amashi</span>
        </span>
        <span className="d">
          D <span className="devs">evs</span>
        </span> */}
      </span>
      {/* Navbar */}
      {menuClicked ? (
        <FiX size={25} className="navbar__menu" onClick={toggleMenuClick} />
      ) : (
        <FiMenu size={25} className="navbar__menu" onClick={toggleMenuClick} />
      )}
      <ul
        className={
          menuClicked ? "navbar__list navbar__list--active" : "navbar__list"
        }
      >
        {navbarLinks.map((item) => {
          return (
            <li className="navbar__item" key={item.title}>
              <a className="navbar__link" href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
