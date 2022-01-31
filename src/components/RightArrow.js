import React from "react";
import { useState } from "react/cjs/react.development";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";

const RightArrow = ({ data, title }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section>
      {title.map((all, index) => (
        <div key={index}>
          {console.log(all)}
          <img src={all.image} alt="s" />
        </div>
      ))}
    </section>
  );
};

export default RightArrow;
