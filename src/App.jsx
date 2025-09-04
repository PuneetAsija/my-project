import React from "react";
import Hero from "./components/Hero.jsx"; // Adjust the path based on your folder structure
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import WhyChoose from "./components/WhyChooseUs.jsx";
import Adventure from "./components/Adventure.jsx";
import Travelform from "./components/Travelform.jsx";
import Timeline from "./components/Timeline.jsx";
import About from "./components/About.jsx";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <WhyChoose />
      <Adventure />
      <Travelform />
      <Timeline />
      <Footer />
    </div>
  );
};

export default App;
