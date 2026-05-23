import React, { useContext } from "react";
import "./CodeMarquee.css";
import { themeContext } from "../../Context";

const snippets = [
  "const dev = new FullStackDeveloper('Ashish Alok');",
  "await deploy({ stack: ['React', 'Node', 'MongoDB'] });",
  "git commit -m 'feat: hacker portfolio live'",
  "if (passion) build(cleanCode);",
  "console.log('// NIT Patna · CSE · Web Dev');",
  "npm run hack-the-planet",
  "export default function innovate() { return true; }",
];

const CodeMarquee = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const text = [...snippets, ...snippets].join("   ///   ");

  return (
    <div
      className={`code-marquee ${darkMode ? "dark" : "light"}`}
      aria-hidden="true"
    >
      <div className="code-marquee-track">
        <span>{text}</span>
        <span>{text}</span>
      </div>
    </div>
  );
};

export default CodeMarquee;
