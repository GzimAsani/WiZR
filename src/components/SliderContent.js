import React from "react";
import classes from "./sliderContent.module.scss";

const SliderContent = ({
  activeIndex,
  data,
  nextSlide,
  prevSlide,
  children,
}) => {
  const start = (e) => {
    console.log(e.touches[0].clientX);
    if (e.touches[0].clientX > 200) {
      nextSlide();
    } else {
      prevSlide();
    }
  };

  return (
    <section className={classes.slider}>
      {data.map((slide, index) => (
        <div
          key={index}
          style={{ position: "relative" }}
          className={`${classes.imageContainer} ${
            index === activeIndex ? "" : classes.inactive
          } ${classes.sliderRight} animation`}
        >
          <div className={classes.itemWrapp}>
            <div></div>
            <img
              className={classes.image}
              src={slide.image}
              alt={slide.name}
              onTouchStart={start}
            />
            <div className={classes.hiddenObjectWrapp}>
              <div onClick={prevSlide} className={classes.hiddenObject} />
              <div onClick={nextSlide} className={classes.hiddenObject} />
            </div>
          </div>
        </div>
      ))}
      {children}
    </section>
  );
};

export default SliderContent;
