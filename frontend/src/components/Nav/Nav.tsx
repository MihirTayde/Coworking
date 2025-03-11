import React, { useState } from "react";
import "./Nav.css";
import { FiMenu, FiX } from "react-icons/fi";
import abc from "../../assets/Logo/abc.png";
import { Link } from "react-scroll"; // Import Link and scroll

const Nav: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <img src={abc} alt="OfficeLink Logo" className="logo-img" />
        </div>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <Link
              to="mail" // Match the 'name' of the Element
              spy={true}
              smooth={true}
              offset={-70} // Adjust as needed for your header height
              duration={500}
            >
              Mail
            </Link>
          </li>
          <li>
            <Link
              to="about-us-section"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="hero" // Match the 'name' of the Element
              spy={true}
              smooth={true}
              offset={-70} // Adjust as needed for your header height
              duration={500}
            >
              Contact Us
            </Link>
          </li>

          <li>
            <Link
              to="list-space" // Match the 'name' of the Element
              spy={true}
              smooth={true}
              offset={-70} // Adjust as needed for your header height
              duration={500}
              className="cta-button" // Apply your button class
            >
              List Your Space
            </Link>
          </li>
        </ul>

        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
