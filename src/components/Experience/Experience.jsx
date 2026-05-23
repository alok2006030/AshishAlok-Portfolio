import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
import { motion } from "framer-motion";

const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const achievements = [
    {
      number: "1.5+",
      label: "years",
      sublabel: "Experience"
    },
    {
      number: "6+",
      label: "completed",
      sublabel: "Projects"
    },
    {
      number: "2+",
      label: "companies",
      sublabel: "Work"
    }
  ];

  return (
    <div className="experience" id="experience">
      {achievements.map((achievement, index) => (
        <motion.div
          key={index}
          className="achievement"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          viewport={{ once: true }}
        >
          <div className="circle" style={{ color: darkMode ? 'var(--orange)' : '#f5c32c' }}>
            {achievement.number}
          </div>
          <span style={{ color: darkMode ? 'white' : '#f5f0e0' }}>{achievement.label}</span>
          <span>{achievement.sublabel}</span>
        </motion.div>
      ))}
    </div>
  );
};

export default Experience;