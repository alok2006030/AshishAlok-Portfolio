import React, { useContext } from "react";
import "./Portfolio.css";
import Shopping from "../../img/shopping_web_app.png";
import Personal_Portfolio from "../../img/personal_portfolio.png";
import ToDo from "../../img/to_do_list.png";
import Landing_Page from "../../img/landing_page_sundarpichai.png";
import IRCTC from "../../img/IRCTC.png";
import College_Listing from "../../img/college_listing.png";
import Resume from "../../img/Resume.png";
import { themeContext } from "../../Context";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? 'white' : '' }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* grid */}
      <div className="portfolio-grid">
        <div className="portfolio-grid-item">
          <a href="https://github.com/alok2006030/Pocket-Shop" target="_blank" rel="noopener noreferrer">
            <img src={Shopping} alt="Shopping Web App" />
          </a>
        </div>
        <div className="portfolio-grid-item">
          <a href="https://ashish-alok.vercel.app/" target="_blank" rel="noopener noreferrer">
            <img src={Personal_Portfolio} alt="Personal Portfolio" />
          </a>
        </div>
        <div className="portfolio-grid-item">
          <a href="https://college-listing.vercel.app/" target="_blank" rel="noopener noreferrer">
            <img src={College_Listing} alt="College Listing Page" />
          </a>
        </div>
        <div className="portfolio-grid-item">
          <a href="https://sundar-pichai.vercel.app/" target="_blank" rel="noopener noreferrer">
            <img src={Landing_Page} alt="Landing Page Sundar Pichai" />
          </a>
        </div>
        <div className="portfolio-grid-item">
          <a href="https://alok2006030.github.io/OIBSIP/OIB_Task_3/" target="_blank" rel="noopener noreferrer">
            <img src={ToDo} alt="To-Do List" />
          </a>
        </div>
        <div className="portfolio-grid-item">
          <a href="https://alok2006030.github.io/ixigo-clone/" target="_blank" rel="noopener noreferrer">
            <img src={IRCTC} alt="IRCTC Booking" />
          </a>
        </div>
        <div className="portfolio-grid-item">
          <a href="https://alok2006030.github.io/Resume/" target="_blank" rel="noopener noreferrer">
            <img src={Resume} alt="About Me" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
