import React from "react";
import "./Hero.css";
import xyz from "../../assets/Logo/xyz.jpg";

const Hero: React.FC = () => {
  return (
    <div className="hero-container">
      <div className="hero-image-container">
        <img src={xyz} alt="Hero" className="hero-img" />
      </div>

      {/* Right Side - Form */}
      <div className="hero-form-container">
        <form className="hero-form">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfWLdyrx4Rec0f3FxzUOj5XKaAuxR3z8z1IKJbUh-Ajc7Xv3A/viewform?embedded=true"
            width="640"
            height="500"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe>
        </form>
      </div>
    </div>
  );
};

export default Hero;
