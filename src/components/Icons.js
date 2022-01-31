import React from "react";
import classes from "./icons.module.scss";

const Icons = ({ activeIndex, onclick, data }) => {
  return (
    <div className={classes.section}>
      {data.map((slide, index) => {
        let name = slide.name;
        let title = name.match(/^(\S+)\s(.*)/).slice(1);

        return (
          <section
            className={classes.section2}
            key={slide.id}
            onClick={() => onclick(index)}
          >
            <div className={classes.image}>
              <button
                className={`${
                  activeIndex === index
                    ? `${classes.active}`
                    : `${classes.active2}`
                }`}
              >
                <div>{<img src={slide.icon} alt={slide.name} />}</div>
              </button>
            </div>
            <div className={classes.center}>
              <h3 className={classes.capitalize} key={slide.id}>
                {title[0]}
              </h3>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default Icons;
