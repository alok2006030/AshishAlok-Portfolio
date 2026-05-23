import React, { useContext, useEffect, useRef, useState } from "react";
import "./HackerStats.css";
import { themeContext } from "../../Context";

const stats = [
  { label: "Projects Built", value: 25, suffix: "+" },
  { label: "Technologies", value: 15, suffix: "+" },
  { label: "Years Coding", value: 4, suffix: "+" },
  { label: "Commits Pushed", value: 500, suffix: "+" },
];

const HackerStats = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const ref = useRef(null);
  const [started, setStarted] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStarted(true);
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return undefined;

    const duration = 1800;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setCounts(
        stats.map((s) => Math.floor(s.value * eased))
      );

      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [started]);

  return (
    <section className="hacker-stats-section" id="stats" ref={ref}>
      <p className="section-tag">// system_metrics</p>
      <h2 className="section-heading">Hacker Dashboard</h2>
      <p className={`section-desc ${darkMode ? "" : "light"}`}>
        Numbers behind the code — professional delivery at scale
      </p>

      <div className="stats-grid">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`stat-card glass-panel ${darkMode ? "" : "light"}`}
          >
            <span className="stat-index">0{i + 1}</span>
            <span className="stat-value">
              {counts[i]}
              {stat.suffix}
            </span>
            <span className="stat-label">{stat.label}</span>
            <div className="stat-bar">
              <div
                className="stat-bar-fill"
                style={{ width: started ? "100%" : "0%" }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HackerStats;
