import React from "react";
import "./Hero.css";

const Hero = ({ imageSrc }) => {
  return (
    <div className="hero">
      {/* <img src={imageSrc} alt="hero__dev" className="hero__image" /> */}
      {/* <video src={imageSrc} className="hero__image" controls></video> */}
      <video
        className="hero__image"
        src={imageSrc}
        type="video/mp4"
        autoPlay
        loop
        muted
      ></video>
      <h1 className="hero__title">
        Maximize your business with <br /> Web Development
      </h1>
    </div>
  );
};

export default Hero;
