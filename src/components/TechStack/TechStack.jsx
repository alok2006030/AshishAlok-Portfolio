import React, { useContext } from "react";
import "./TechStack.css";
import { themeContext } from "../../Context";

const skills = [
  { name: "React / Next.js", level: 92, tag: "frontend" },
  { name: "JavaScript / TypeScript", level: 90, tag: "core" },
  { name: "Node.js / Express", level: 88, tag: "backend" },
  { name: "HTML / CSS / Tailwind", level: 95, tag: "frontend" },
  { name: "MongoDB / SQL", level: 82, tag: "database" },
  { name: "Git / GitHub / CI", level: 88, tag: "devops" },
  { name: "REST APIs / GraphQL", level: 85, tag: "backend" },
  { name: "UI/UX & Responsive Design", level: 90, tag: "design" },
];

const TechStack = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <section className="tech-stack-section" id="tech-stack">
      <p className="section-tag">{"// tech_stack.load()"}</p>
      <h2 className="section-heading">Arsenal & Skills</h2>
      <p className={`section-desc ${darkMode ? "" : "light"}`}>
        Tools I use to build secure, scalable web applications
      </p>

      <div className="stack-layout">
        <div className={`stack-code-block glass-panel ${darkMode ? "" : "light"}`}>
          <pre>
            <code>
              {`class Developer {
  constructor() {
    this.name = "Ashish Alok";
    this.role = "Full Stack";
    this.focus = ["React", "Node", "APIs"];
  }
  ship(feature) {
    return deploy(feature);
  }
}`}
            </code>
          </pre>
        </div>

        <div className="stack-skills">
          {skills.map((skill) => (
            <div key={skill.name} className="skill-row">
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-pct">{skill.level}%</span>
              </div>
              <div className="skill-track">
                <div
                  className="skill-fill"
                  style={{ width: `${skill.level}%` }}
                  data-tag={skill.tag}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="stack-tags">
        {[
          "React",
          "Node.js",
          "JavaScript",
          "MongoDB",
          "Git",
          "REST",
          "CSS3",
          "NIT Patna",
        ].map((tag) => (
          <span key={tag} className={`stack-tag glass-panel ${darkMode ? "" : "light"}`}>
            #{tag}
          </span>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
