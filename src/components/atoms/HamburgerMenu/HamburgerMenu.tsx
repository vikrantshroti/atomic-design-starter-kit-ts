import React from "react";
import { IProps } from "./types";

const HamburgerMenu = ({ width, height, style, color }: IProps) => {
  const fillColor = { fill: `${color}` };
  return (
    <svg viewBox="0 0 100 80" width={width} height={height} className={style}>
      <rect width="100" height="20" rx="8" style={fillColor}></rect>
      <rect y="30" width="100" height="20" rx="8" style={fillColor}></rect>
      <rect y="60" width="100" height="20" rx="8" style={fillColor}></rect>
    </svg>
  );
};

export default HamburgerMenu;
