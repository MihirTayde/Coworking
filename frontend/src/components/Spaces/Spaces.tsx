import "./Spaces.css";
import Private_Office from "../../assets/Logo/Private_Office.jpg";
import Meeting_Room from "../../assets/Logo/Meeting_Room.jpg";
import Desicated_Desks from "../../assets/Logo/Dedicated_Desks.jpg";
import Day_Pass from "../../assets/Logo/Day_Pass.jpg";
import { motion } from "framer-motion";

const spacesData = [
  {
    title: "Managed Office",
    description:
      "Fully furnished and customizable office spaces tailored to your business needs.",
    image: Private_Office,
  },
  {
    title: "Coworking Dedicated Desk",
    description:
      "Your own dedicated workspace in a vibrant and collaborative environment.",
    image: Desicated_Desks,
  },
  {
    title: "Meeting Room",
    description:
      "Fully equipped meeting rooms with high-speed internet and conferencing facilities.",
    image: Meeting_Room,
  },
  {
    title: "Day Pass",
    description:
      "Flexible workspace access for a day, perfect for remote work or business travelers.",
    image: Day_Pass,
  },
];

const Spaces: React.FC = () => {
  return (
    <motion.div
      className="spaces-container"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="spaces-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Spaces We Provide
      </motion.h2>

      <motion.div className="spaces-grid">
        {spacesData.map((space, index) => (
          <motion.div
            key={index}
            className="space-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.img
              src={space.image}
              alt={space.title}
              className="space-image"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.h3 className="space-title">{space.title}</motion.h3>
            <motion.p className="space-description">{space.description}</motion.p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Spaces;
