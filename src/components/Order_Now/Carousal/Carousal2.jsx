import React, { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./car2.css";

const Carousal2 = ({ data }) => {
  let [slide, updateSlide] = useState(0);
  const imgCount = data.length - 1;

  const nextSlide = () => {
    updateSlide((slide = slide + 1));
    if (slide > imgCount) {
      updateSlide((slide = 0));
    }
  };
  const prevSlide = () => {
    updateSlide((slide = slide - 1));
    if (slide < 0) {
      updateSlide((slide = imgCount));
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      {data.map((data, idx) => {
        return (
          <img
            src={data.src}
            alt={data.alt}
            key={idx}
            className={slide === idx ? "slide" : "slide slide-hidden"}
          />
        );
      })}
      <span className="indicators">
        {data.map((_, idx) => {
          return (
            <button
              key={idx}
              onClick={() => updateSlide(idx)}
              className={
                slide === idx ? "indicator" : "indicator indicator-inactive"
              }
            ></button>
          );
        })}
      </span>
    </div>
  );
};

export default Carousal2;
