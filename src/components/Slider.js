import SliderContent from "./SliderContent";
import React from "react";
import { useState } from "react/cjs/react.development";
import classes from "./api.module.scss";
import Arrows from "./Arrows";
import Icons from "./Icons";

const Slider = ({ data, length }) => {
  console.log(length);
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className={classes.slider}>
      <h1 className={classes.h1}>MASTER WIZR Modules</h1>
      <Icons
        activeIndex={activeIndex}
        data={data}
        onclick={(activeIndex) => setActiveIndex(activeIndex)}
      />
      <SliderContent
        activeIndex={activeIndex}
        data={data}
        prevSlide={() =>
          setActiveIndex(activeIndex < 1 ? length : activeIndex - 1)
        }
        nextSlide={() =>
          setActiveIndex(activeIndex === length ? 0 : activeIndex + 1)
        }
      >
        <Arrows
          prevSlide={() =>
            setActiveIndex(activeIndex < 1 ? length : activeIndex - 1)
          }
          nextSlide={() =>
            setActiveIndex(activeIndex === length ? 0 : activeIndex + 1)
          }
        />
      </SliderContent>
    </div>
  );
};

export default Slider;
