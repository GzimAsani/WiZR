import React from "react";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";

const Arrows = ({ prevSlide, nextSlide }) => {
  return (
    <>
      <span onClick={prevSlide}>
        <FaRegArrowAltCircleLeft className="arrow-left" />
      </span>
      <span onClick={nextSlide}>
        <FaRegArrowAltCircleRight className="arrow-right" />
      </span>
    </>
  );
};

export default Arrows;
