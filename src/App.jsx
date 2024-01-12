import Header from "./components/Header";
import HomeSec from "./components/HomeSec";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/react";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <HomeSec />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
      <SpeedInsights />
    </>
  );
}

export default App;
