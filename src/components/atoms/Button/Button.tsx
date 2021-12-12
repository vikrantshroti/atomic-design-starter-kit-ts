import React from "react";
import "./styles.css";
import { IProps } from "./types";

const Button = ({ label, className }: IProps) => {
  return <button className={className}>{label}</button>;
};
export default Button;
