import React from "react";
import AboutUs from "./components/AboutUs/AboutUs";
import Amenities from "./components/Amenities/Amenities";
import Blog from "./components/Blog/Blog";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Nav from "./components/Nav/Nav";
import Spaces from "./components/Spaces/Spaces";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import { Element } from 'react-scroll'; // Import Element

const App: React.FC = () => {
  return (
    <div>
      <Nav />
      <Element name="about-us-section">
        <AboutUs />
      </Element>
      <Element name="hero">
        <Hero />
      </Element>
     
      <Element name="spaces">
        <Spaces />
      </Element>
      <Element name="amenities">
        <Amenities />
      </Element>
      <Element name="why-choose-us">
        <WhyChooseUs />
      </Element>
      <Element name="blog">
        <Blog />
      </Element>
      <Element name="faq">
        <FAQ />
      </Element>
      <Element name="footer">
        <Footer />
      </Element>
    </div>
  );
};

export default App;
