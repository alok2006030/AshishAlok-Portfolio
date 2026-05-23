import React, { useContext } from "react";
import "./Intro.css";

import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";

import FloatinDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";

import { motion } from "framer-motion";
import { Link } from "react-scroll";

import Github from "@iconscout/react-unicons/icons/uil-github";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import Mail from "@iconscout/react-unicons/icons/uil-envelope";

const Intro = () => {
  const transition = { duration: 2, type: "spring" };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const accentColor = darkMode ? "#00ff9d" : "#f5c32c";

  return (
    <div className="Intro">
      <div className="i-left glass-panel intro-panel">
        <p className="intro-terminal">
          <span className="terminal-prompt">&gt;</span> init portfolio.exe
        </p>

        <div className="i-name">
          <span className="i-greeting">Hy! I Am</span>
          <span className="i-title glitch-text">Ashish Alok</span>
          <span className={`i-bio ${darkMode ? "" : "light"}`}>
            B.Tech CSE — National Institute of Technology Patna, India.
            <br />
            Full-stack developer · frontend · backend · clean code architect.
          </span>
        </div>

        <Link
          to="contact"
          smooth={true}
          spy={true}
          offset={-70}
          duration={500}
        >
          <button type="button" className="button i-button">
            Hire me
          </button>
        </Link>

        <div className="i-icons">
          <a
            href="https://github.com/alok2006030"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
            aria-label="GitHub"
          >
            <Github color={accentColor} size="3rem" />
          </a>
          <a
            href="https://www.linkedin.com/in/the-ashishalok/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
            aria-label="LinkedIn"
          >
            <LinkedIn color={accentColor} size="3rem" />
          </a>
          <a
            href="mailto:ashishalok01@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
            aria-label="Email"
          >
            <Mail color={accentColor} size="3rem" />
          </a>
        </div>
      </div>

      <div className="i-right">
        <div className="boy-avatar-wrap">
          <div className="boy-frame-ring boy-frame-ring-2" aria-hidden="true" />
          <div className="boy-frame-ring" aria-hidden="true" />

          <div className="boy-frame">
            <img src={boy} alt="Ashish Alok" className="boy-img" />
          </div>

          <motion.img
            initial={{ left: "-36%" }}
            whileInView={{ left: "-18%" }}
            transition={transition}
            src={glassesimoji}
            alt=""
            className="glasses-img"
          />
        </div>

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div-wrap"
        >
          <FloatinDiv img={crown} text1="Full Stack" text2="Developer" />
        </motion.div>

        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div-wrap second-floating"
        >
          <FloatinDiv img={thumbup} text1="Clean Code" text2="Advocate" />
        </motion.div>

        <div className="blur blur-neon-green" aria-hidden="true" />
        <div className="blur blur-neon-cyan" aria-hidden="true" />
      </div>
    </div>
  );
};

export default Intro;
