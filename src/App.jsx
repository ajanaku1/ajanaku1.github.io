import { useEffect, useState } from "react";
import Header from "./components/Header";
import HomeSec from "./components/HomeSec";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/react";

import litMode from "./assets/litmode.png";
import drkMode from "./assets/drkmode.png";

import "./App.css";

function App() {
  const savedDarkMode = JSON.parse(localStorage.getItem("darkMode")) || false;
  const [darkMode, setDarkMode] = useState(savedDarkMode);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", JSON.stringify(newDarkMode));
  };

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <main className={`${darkMode && "dark"}`}>
      <img
        src={darkMode ? litMode : drkMode}
        className="fixed top-5 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full cursor-pointer z-50 transition-transform duration-200"
        onClick={toggleDarkMode}
      />
      <Header />
      <HomeSec />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
      <SpeedInsights />
    </main>
  );
}

export default App;
