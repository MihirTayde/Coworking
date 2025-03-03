import React from "react";
import "./Hero.css";
import xyz from "../../assets/Logo/xyz.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Meeting_Room from "../../assets/Logo/Meeting_Room.jpg";
import w from "../../assets/Logo/w.jpg";


const Hero: React.FC = () => {
  interface ImageObject {
    img1: string;
    imageName: string;
  }

  const ImageArray: ImageObject[] = [
    {
      img1: Meeting_Room,
      imageName: "Meeting_Room",
    },
    {
      img1: xyz,
      imageName: "xyz",
    },
    {
      img1: w,
      imageName: "w",
    },
  ];

  return (
    <div className="hero-container">
      <div
        style={{
          maxWidth: "50%",
          maxHeight: "50%",

        }}
      >
        <Carousel autoPlay infiniteLoop showStatus={false} interval={10000}>
          {ImageArray.map((image) => (
            <img
              key={image.imageName}
              src={image.img1}
              alt="hero_carousel_image"
            />
          ))}
        </Carousel>
      </div>

      <div className="hero-form-container">
        
      </div>
    </div>
  );
};

export default Hero;
