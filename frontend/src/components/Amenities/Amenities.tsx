import "./Amenities.css";
import coffee_cup from "../../assets/Logo/coffee_cup.gif";
import housekeeping from "../../assets/Logo/housekeeping.gif";
import free_wifi from "../../assets/Logo/free_wifi.gif";
import printer from "../../assets/Logo/printer.gif";
import reception from "../../assets/Logo/reception.gif";
import workspace from "../../assets/Logo/workspace.gif";
import cctv from "../../assets/Logo/cctv.gif";
import couch from "../../assets/Logo/couch.gif";

const amenitiesData = [
  { img: coffee_cup, label: "Refreshments" },
  { img: free_wifi, label: "Wifi" },
  { img: workspace, label: "Workspace" },
  { img: couch, label: "Lounge" },
  { img: housekeeping, label: "Housekeeping" },
  { img: cctv, label: "CCTV" },
  { img: reception, label: "Reception" },
  { img: printer, label: "Printer" },
];

const Amenities: React.FC = () => {
  return (
    <div className="amenities-container">
      <h2 className="amenities-title">Our Amenities</h2>
      <div className="amenities-grid">
        {amenitiesData.map((item, index) => (
          <div key={index} className="amenity-card">
            <img src={item.img} alt={item.label} className="amenity-icon" />
            <p className="amenity-text">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Amenities;
