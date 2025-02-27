import "./WhyChooseUs.css";

const WhyChooseUs: React.FC = () => {
  return (
    <div className="why-choose-us">
      <h2 className="section-title">Why Choose Us?</h2>
      <div className="features-container">
        <div className="feature-card">
          <h3>Zero Brokerage</h3>
          <p>
            Office Link is India’s fastest-growing space discovery platform that
            doesn’t charge any brokerage from customers.
          </p>
        </div>

        <div className="feature-card">
          <h3>100% Offline Support</h3>
          <p>
            We provide complete offline support, from giving you multiple space
            options to scheduling site visits and after-sales assistance.
          </p>
        </div>

        <div className="feature-card">
          <h3>Verified Spaces</h3>
          <p>
            All spaces listed on Office Link are verified and regularly
            inspected to ensure quality and authenticity.
          </p>
        </div>

        <div className="feature-card">
          <h3>Best Price Guarantee</h3>
          <p>
            We ensure you get the best deals and prices in the market, offering
            unmatched affordability.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
