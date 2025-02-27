import React, { useState } from "react";
import "./Nav.css";
import { FiMenu, FiX } from "react-icons/fi";
import abc from "../../assets/Logo/abc.png";

const Nav: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <img src={abc} alt="OfficeLink Logo" className="logo-img" />
        </div>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><a href="#mail">Mail</a></li>
          <li><a href="#about" >About Us</a></li>
          <li><a href="#contact">Contact Us</a></li>
          <li><a href="#coworking">Coworking</a></li>
          <li><a href="#virtual-office">Virtual Office</a></li>
          <li><a href="#list-space" className="cta-button">List Your Space</a></li>
        </ul>

        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
