/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Home from "./Home";
import data from "./data.json";

export const Default = () => <Home data={data} />;

export default {
  title: "Pages/Home",
  component: Home,
};
