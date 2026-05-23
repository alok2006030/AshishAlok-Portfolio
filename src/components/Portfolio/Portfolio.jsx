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

  const projects = [
    {
      img: Shopping,
      alt: "Shopping Web App",
      url: "https://github.com/alok2006030/Pocket-Shop",
    },
    {
      img: Personal_Portfolio,
      alt: "Personal Portfolio Website",
      url: "https://ashish-alok.vercel.app/",
    },
    {
      img: College_Listing,
      alt: "College Listing Platform",
      url: "https://college-listing.vercel.app/",
    },
    {
      img: Landing_Page,
      alt: "Landing Page - Sundar Pichai",
      url: "https://sundar-pichai.vercel.app/",
    },
    {
      img: ToDo,
      alt: "To-Do List Application",
      url: "https://alok2006030.github.io/OIBSIP/OIB_Task_3/",
    },
    {
      img: IRCTC,
      alt: "IRCTC Booking Clone",
      url: "https://alok2006030.github.io/ixigo-clone/",
    },
    {
      img: Resume,
      alt: "Resume Builder",
      url: "https://alok2006030.github.io/Resume/",
    },
  ];

  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <div className="portfolio-heading">
        <span style={{ color: darkMode ? 'white' : '#f5f0e0' }}>Recent Projects</span>
        <span>Portfolio</span>
      </div>

      {/* grid */}
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div className="portfolio-grid-item" key={index}>
            <a 
              href={project.url} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={`View ${project.alt} project`}
            >
              <img 
                src={project.img} 
                alt={project.alt}
                loading="lazy"
              />
              <div className="portfolio-overlay">
                <span className="portfolio-overlay-text">{project.alt}</span>
                <span className="portfolio-overlay-icon">→</span>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;