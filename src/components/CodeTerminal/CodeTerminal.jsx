import React, { useContext, useEffect, useRef, useState } from "react";
import "./CodeTerminal.css";
import { themeContext } from "../../Context";

const TERMINAL_LINES = [
  { prefix: "$ ", text: "whoami", className: "cmd" },
  { prefix: "> ", text: "Ashish Alok — Full Stack Developer", className: "out" },
  { prefix: "$ ", text: "cat skills.json", className: "cmd" },
  {
    prefix: "> ",
    text: '["React", "Node.js", "JavaScript", "MongoDB", "Git"]',
    className: "json",
  },
  { prefix: "$ ", text: "npm run deploy --portfolio", className: "cmd" },
  { prefix: "> ", text: "Building modules... OK", className: "success" },
  { prefix: "> ", text: "Optimizing assets... OK", className: "success" },
  { prefix: "> ", text: "Deploy complete ✓ https://ashishalok.dev", className: "highlight" },
  { prefix: "$ ", text: "_", className: "cursor-line" },
];

const CodeTerminal = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [visibleCount, setVisibleCount] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [phase, setPhase] = useState("typing");
  const sectionRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsActive(true);
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isActive) return undefined;

    const currentLine = TERMINAL_LINES[visibleCount];
    if (!currentLine) return undefined;

    const fullText = currentLine.prefix + currentLine.text;

    if (phase === "typing" && charIndex < fullText.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), 28);
      return () => clearTimeout(t);
    }

    if (phase === "typing" && charIndex >= fullText.length) {
      const t = setTimeout(() => {
        if (visibleCount < TERMINAL_LINES.length - 1) {
          setVisibleCount((v) => v + 1);
          setCharIndex(0);
        } else {
          setPhase("done");
        }
      }, 400);
      return () => clearTimeout(t);
    }

    return undefined;
  }, [isActive, visibleCount, charIndex, phase]);

  const renderLines = () => {
    const lines = [];

    for (let i = 0; i <= visibleCount && i < TERMINAL_LINES.length; i++) {
      const line = TERMINAL_LINES[i];
      const full = line.prefix + line.text;
      const display =
        i < visibleCount
          ? full
          : i === visibleCount
          ? full.slice(0, charIndex)
          : "";

      if (!display && i > visibleCount) break;

      lines.push(
        <div key={i} className={`terminal-line ${line.className}`}>
          {display}
          {i === visibleCount && (phase === "typing" || phase === "done") && (
            <span className="term-cursor">▌</span>
          )}
        </div>
      );
    }

    return lines;
  };

  return (
    <section className="code-terminal-section" id="terminal" ref={sectionRef}>
      <p className="section-tag">{"// live_terminal"}</p>
      <h2 className="section-heading">Running Code</h2>
      <p className={`section-desc ${darkMode ? "" : "light"}`}>
        Real-time build log — the way I ship projects
      </p>

      <div className={`terminal-window glass-panel ${darkMode ? "" : "light"}`}>
        <div className="terminal-titlebar">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
          <span className="terminal-title">ashish@portfolio:~</span>
        </div>
        <div className="terminal-body">
          <pre className="terminal-pre">{renderLines()}</pre>
        </div>
      </div>

      <div className="terminal-side-grid">
        <div className={`terminal-info-card glass-panel ${darkMode ? "" : "light"}`}>
          <span className="info-label">STATUS</span>
          <span className="info-value blink">ONLINE</span>
        </div>
        <div className={`terminal-info-card glass-panel ${darkMode ? "" : "light"}`}>
          <span className="info-label">MODE</span>
          <span className="info-value">FULL STACK</span>
        </div>
        <div className={`terminal-info-card glass-panel ${darkMode ? "" : "light"}`}>
          <span className="info-label">SECURE</span>
          <span className="info-value">HTTPS ✓</span>
        </div>
      </div>
    </section>
  );
};

export default CodeTerminal;
