import React from "react";
import { useState } from "react/cjs/react.development";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import classes from "./rightArrow.module.css";

const RightArrow = ({ data, title }) => {
  const [arrowManage, setArrowManage] = useState(0);

  console.log(title);

  return (
    <div>
      {title.map((all) => {
        return all.id;
      })}
    </div>
  );
};

export default RightArrow;
