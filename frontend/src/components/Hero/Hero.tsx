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
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSfWLdyrx4Rec0f3FxzUOj5XKaAuxR3z8z1IKJbUh-Ajc7Xv3A/viewform?embedded=true"
        width="640"
        height="500"
        frameBorder={0 as unknown as number} // ✅ TypeScript Fix
        marginHeight={0 as unknown as number} // ✅ TypeScript Fix
        marginWidth={0 as unknown as number} // ✅ TypeScript Fix
      >
        Loading…
      </iframe>
    </div>
  );
};

export default Hero;
