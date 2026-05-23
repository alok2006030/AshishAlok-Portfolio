import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from "./resume.pdf";
import {
  FaCode,
  FaLaptopCode,
  FaUserSecret,
  FaShieldAlt,
  FaPalette,
  FaCloudUploadAlt,
} from "react-icons/fa";

const SERVICES = [
  {
    id: "web-dev",
    emoji: Glasses,
    heading: "Web Developer",
    detail:
      "Responsive sites with React, HTML5, CSS3, Tailwind & modern JavaScript — fast, accessible, pixel-perfect.",
    tag: "core",
  },
  {
    id: "full-stack",
    icon: <FaCode />,
    heading: "Full Stack Coder",
    detail:
      "End-to-end apps: Node.js, Express, REST APIs, MongoDB & MERN architecture built for scale.",
    tag: "build",
  },
  {
    id: "hacker",
    icon: <FaUserSecret />,
    heading: "Hacker Mindset",
    detail:
      "Security-first development — auth flows, input validation, OWASP awareness & clean secure code.",
    tag: "secure",
  },
  {
    id: "cyber",
    icon: <FaShieldAlt />,
    heading: "Cyber Security",
    detail:
      "Vulnerability-aware coding, HTTPS, JWT sessions, role-based access & production hardening.",
    tag: "defense",
  },
  {
    id: "dsa",
    emoji: HeartEmoji,
    heading: "DSA & Logic",
    detail:
      "Arrays, trees, graphs, sorting & searching — optimized algorithms for real-world problems.",
    tag: "logic",
  },
  {
    id: "database",
    emoji: Humble,
    heading: "Database Engineer",
    detail:
      "SQL schemas, indexing, joins, queries & data modeling for reliable backend systems.",
    tag: "data",
  },
  {
    id: "uiux",
    icon: <FaPalette />,
    heading: "UI/UX Engineering",
    detail:
      "Glass morphism, dark/light themes, animations & mobile-first layouts that feel premium.",
    tag: "design",
  },
  {
    id: "devops",
    icon: <FaCloudUploadAlt />,
    heading: "DevOps & Deploy",
    detail:
      "Git workflows, CI/CD basics, build pipelines & cloud deployment for live production apps.",
    tag: "ship",
  },
];

const cardMotion = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5, type: "spring" },
};

const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="services" id="services">
      <div className="awesome">
        <p className="services-tag">{"// services.load()"}</p>
        <span style={{ color: darkMode ? "white" : "#f5f0e0" }}>Professional</span>
        <span>Services</span>
        <span className="services-desc">
          Coder · Web Developer · Hacker-style security — I build digital
          products that look sharp and run secure. From frontend polish to
          backend logic and deployment.
        </span>
        <a href={Resume} download aria-label="Download Resume">
          <button type="button" className="button s-button">
            Download CV
          </button>
        </a>
        <div className="services-badges">
          <span>
            <FaLaptopCode aria-hidden="true" /> Web Dev
          </span>
          <span>
            <FaCode aria-hidden="true" /> Full Stack
          </span>
          <span>
            <FaUserSecret aria-hidden="true" /> Hacker UI
          </span>
        </div>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }} />
      </div>

      <div className="cards">
        <div className="services-grid">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.id}
              className="service-card-wrap"
              {...cardMotion}
              transition={{ ...cardMotion.transition, delay: i * 0.06 }}
            >
              <Card
                emoji={service.emoji}
                icon={service.icon}
                heading={service.heading}
                detail={service.detail}
                tag={service.tag}
              />
            </motion.div>
          ))}
        </div>
        <div className="blur s-blur2" style={{ background: "var(--purple)" }} />
      </div>
    </div>
  );
};

export default Services;
