import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Importing routing components

// Importing components
import Home from "./components/Home.jsx";
import Hero from "./components/Hero.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import WhyChoose from "./components/WhyChooseUs.jsx";
import Adventure from "./components/Adventure.jsx";
import Travelform from "./components/Travelform.jsx";
import Timeline from "./components/Timeline.jsx";
import About from "./components/About.jsx";

const App = () => {
  return (
    <Router basename="my-project">
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/why-choose" element={<WhyChoose />} />
          <Route path="/adventure" element={<Adventure />} />
          <Route path="/travelform" element={<Travelform />} />
          <Route path="/timeline" element={<Timeline />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
