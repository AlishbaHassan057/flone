import React from "react";
import Navbar from "./navbar/Navbar";
import Slider from "./slider/Slider";
import Logos from "./logos/Logos";
import Footer from "./footer/Footer";
import Collects from "./collects/Collects";
import Cards from "./cards/Cards";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Logos />
      <Collects />
      <Cards />
      <Footer />
    </div>
  );
};

export default HomePage;
