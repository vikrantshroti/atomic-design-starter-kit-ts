import React from "react";
import { IProps } from "./types";

const Text = ({ text, className, onClick }: IProps) => {
  if (!text) return null;

  function createMarkup() {
    if (text) return { __html: text };
    else return { __html: "" };
  }
  return (
    <div
      className={className}
      dangerouslySetInnerHTML={createMarkup()}
      onClick={onClick}
    />
  );
};

export default Text;
