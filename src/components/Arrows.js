import React from "react";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";

const Arrows = ({ prevSlide, nextSlide }) => {
  return (
    <>
      <span className="prev" onClick={prevSlide}>
        <FaRegArrowAltCircleLeft className="arrow-left" />
      </span>
      <span className="next" onClick={nextSlide}>
        <FaRegArrowAltCircleRight className="arrow-right" />
      </span>
    </>
  );
};

export default Arrows;
