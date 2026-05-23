import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import "./App.css";
import Experience from "./components/Experience/Experience";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonial from "./components/Testimonials/Testimonial";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Photos from "./components/Photos/Photos";
import TravelMap from "./components/TravelMap/TravelMap";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import CodeMarquee from "./components/CodeMarquee/CodeMarquee";
import CodeTerminal from "./components/CodeTerminal/CodeTerminal";
import HackerStats from "./components/HackerStats/HackerStats";
import TechStack from "./components/TechStack/TechStack";
import CodePlayground from "./components/CodePlayground/CodePlayground";

import { useContext, useEffect, useState } from "react";
import { themeContext } from "./Context";

function scrollToHome() {
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Clear hash so refresh always lands on home, not a section anchor
    if (window.location.hash) {
      window.history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search
      );
    }

    scrollToHome();

    const scrollTimer = setTimeout(scrollToHome, 50);
    const loadTimer = setTimeout(() => {
      scrollToHome();
      setIsLoading(false);
    }, 400);

    return () => {
      clearTimeout(scrollTimer);
      clearTimeout(loadTimer);
    };
  }, []);

  if (isLoading) {
    return (
      <div
        className={`loading-screen ${darkMode ? "hacker-dark" : "hacker-light"}`}
      >
        <div className="loader">
          <div className="loader-spinner" />
          <span>Booting portfolio...</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`App ${darkMode ? "hacker-dark" : "hacker-light"}`}>
      <div id="home">
        <Navbar />
        <Intro />
        <CodeMarquee />
      </div>

      <div id="services">
        <Services />
      </div>

      <CodeTerminal />
      <HackerStats />
      <TechStack />

      <CodePlayground />

      <div id="experience">
        <Experience />
      </div>

      <div id="works">
        <Works />
      </div>

      <div id="portfolio">
        <Portfolio />
      </div>

      <div id="testimonial">
        <Testimonial />
      </div>

      <TravelMap />

      <div id="photos">
        <Photos />
      </div>

      <div id="contact">
        <Contact />
      </div>

      <Footer />

      <ScrollToTop />
    </div>
  );
}

export default App;
