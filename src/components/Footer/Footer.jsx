import React from "react";
import "./Footer.css";
import Fiverr from "../../img/fiverr.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faUpwork, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="f-content">
        <div className="f-social">
          <div className="f-name">Ashish Alok</div>
          <div className="f-tagline">Web Developer & Designer</div>
          <div className="f-icons">
            <a 
              href="https://www.instagram.com/ashishalok01/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a 
              href="https://www.facebook.com/ashishalok01" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Facebook Profile"
            >
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a 
              href="https://www.fiverr.com/aalokdeveloper?up_rollout=true" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Fiverr Profile"
            >
              <img src={Fiverr} alt="Fiverr" className="fiverr-icon" />
            </a>
            <a 
              href="https://www.upwork.com/freelancers/~0189d8ce1ff86560ce" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Upwork Profile"
            >
              <FontAwesomeIcon icon={faUpwork} size="2x" />
            </a>
            <a 
              href="https://x.com/AshishAlok01" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Twitter Profile"
            >
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
          </div>
        </div>
        <div className="f-copyright">
          <span>© {currentYear} Ashish Alok. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;