import React from "react";
import { IProps } from "./types";

const Image = ({ src, altText, className, height, width }: IProps) => {
  return (
    <img
      alt={altText}
      src={src}
      className={className}
      width={width}
      height={height}
    />
  );
};

export default Image;
