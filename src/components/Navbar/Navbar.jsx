import React, { useState } from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="n-wrapper" id="Navbar" role="banner">
      {/* left */}
      <div className="n-left">
        <Link to="Navbar" spy={true} smooth={true} onClick={closeMenu}>
          <div className="n-name" role="link" tabIndex={0} aria-label="Navigate to home">Ashish</div>
        </Link>
        <Toggle />
      </div>

      {/* right */}
      <div className="n-right">
        {/* Desktop Navigation */}
        <div className="n-list">
          <ul style={{ listStyleType: "none" }} role="menubar">
            <li role="none">
              <Link 
                activeClass="active" 
                to="Navbar" 
                spy={true} 
                smooth={true}
                role="menuitem"
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li role="none">
              <Link 
                to="terminal" 
                spy={true} 
                smooth={true}
                offset={-80}
                role="menuitem"
                onClick={closeMenu}
              >
                Terminal
              </Link>
            </li>
            <li role="none">
              <Link 
                to="tech-stack" 
                spy={true} 
                smooth={true}
                offset={-80}
                role="menuitem"
                onClick={closeMenu}
              >
                Stack
              </Link>
            </li>
            <li role="none">
              <Link 
                to="code-playground" 
                spy={true} 
                smooth={true}
                offset={-80}
                role="menuitem"
                onClick={closeMenu}
              >
                Editor
              </Link>
            </li>
            <li role="none" className="nav-hide-md">
              <Link 
                to="stats" 
                spy={true} 
                smooth={true}
                offset={-80}
                role="menuitem"
                onClick={closeMenu}
              >
                Stats
              </Link>
            </li>
            <li role="none">
              <Link 
                to="services" 
                spy={true} 
                smooth={true}
                role="menuitem"
                onClick={closeMenu}
              >
                Services
              </Link>
            </li>
            <li role="none">
              <Link 
                to="works" 
                spy={true} 
                smooth={true}
                role="menuitem"
                onClick={closeMenu}
              >
                Experience
              </Link>
            </li>
            <li role="none">
              <Link 
                to="portfolio" 
                spy={true} 
                smooth={true}
                role="menuitem"
                onClick={closeMenu}
              >
                Portfolio
              </Link>
            </li>
            <li role="none">
              <Link 
                to="testimonial" 
                spy={true} 
                smooth={true}
                role="menuitem"
                onClick={closeMenu}
              >
                Testimonial
              </Link>
            </li>
            <li role="none">
              <Link 
                to="travel-map" 
                spy={true} 
                smooth={true}
                offset={-80}
                role="menuitem"
                onClick={closeMenu}
              >
                Travel Map
              </Link>
            </li>
            <li role="none">
              <Link 
                to="photos" 
                spy={true} 
                smooth={true}
                offset={-80}
                role="menuitem"
                onClick={closeMenu}
              >
                Photos
              </Link>
            </li>
          </ul>
        </div>
        
        <Link to="contact" spy={true} smooth={true} onClick={closeMenu}>
          <button className="button n-button" aria-label="Contact me">Contact</button>
        </Link>

        {/* Mobile Menu Toggle */}
        <div className="mobile-menu-toggle" onClick={toggleMenu} onKeyDown={(e) => e.key === 'Enter' && toggleMenu()} role="button" tabIndex={0} aria-label="Toggle menu" aria-expanded={menuOpen}>
          <span className={`hamburger ${menuOpen ? 'open' : ''}`}></span>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
        <ul className="mobile-menu-list">
          <li>
            <Link 
              to="Navbar" 
              spy={true} 
              smooth={true}
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="terminal" 
              spy={true} 
              smooth={true}
              offset={-80}
              onClick={closeMenu}
            >
              Terminal
            </Link>
          </li>
          <li>
            <Link 
              to="tech-stack" 
              spy={true} 
              smooth={true}
              offset={-80}
              onClick={closeMenu}
            >
              Stack
            </Link>
          </li>
          <li>
            <Link 
              to="code-playground" 
              spy={true} 
              smooth={true}
              offset={-80}
              onClick={closeMenu}
            >
              Editor
            </Link>
          </li>
          <li>
            <Link 
              to="stats" 
              spy={true} 
              smooth={true}
              offset={-80}
              onClick={closeMenu}
            >
              Stats
            </Link>
          </li>
          <li>
            <Link 
              to="services" 
              spy={true} 
              smooth={true}
              onClick={closeMenu}
            >
              Services
            </Link>
          </li>
          <li>
            <Link 
              to="works" 
              spy={true} 
              smooth={true}
              onClick={closeMenu}
            >
              Experience
            </Link>
          </li>
          <li>
            <Link 
              to="portfolio" 
              spy={true} 
              smooth={true}
              onClick={closeMenu}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link 
              to="testimonial" 
              spy={true} 
              smooth={true}
              onClick={closeMenu}
            >
              Testimonial
            </Link>
          </li>
          <li>
            <Link 
              to="travel-map" 
              spy={true} 
              smooth={true}
              offset={-80}
              onClick={closeMenu}
            >
              Travel Map
            </Link>
          </li>
          <li>
            <Link 
              to="photos" 
              spy={true} 
              smooth={true}
              offset={-80}
              onClick={closeMenu}
            >
              Photos
            </Link>
          </li>
          <li>
            <Link 
              to="contact" 
              spy={true} 
              smooth={true}
              onClick={closeMenu}
            >
              <button className="button">Contact</button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;