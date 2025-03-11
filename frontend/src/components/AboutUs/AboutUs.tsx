import React from "react";
import "./AboutUs.css";
import r from "../../assets/Logo/r.jpg";

const AboutUs: React.FC = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <h2 className="about-title">
          About <span>Office Link</span>
        </h2>
        <p className="about-description">
          At <strong>Office Link</strong>, we bridge the gap between
          professionals and premium coworking spaces. Whether you're a
          freelancer, a startup, or a growing enterprise, we provide
          **tailored** workspace solutions that enhance productivity and
          flexibility.
        </p>

        <div className="about-highlights">
          <div className="highlight-card">
            <h3>✔ Tailored Solutions</h3>
            <p>Custom workspaces designed to fit your business needs.</p>
          </div>
          <div className="highlight-card">
            <h3>✔ Premium Listings</h3>
            <p>Access top-rated coworking spaces in prime locations.</p>
          </div>
          <div className="highlight-card">
            <h3>✔ Hassle-Free Process</h3>
            <p>We manage everything, from search to final setup.</p>
          </div>
          <div className="highlight-card">
            <h3>✔ Cost-Effective Plans</h3>
            <p>Affordable workspace solutions without compromise.</p>
          </div>
        </div>

       
      </div>

      <div className="about-image">
        <img src={r} alt="Coworking Space" />
      </div>
    </section>
  );
};

export default AboutUs;
