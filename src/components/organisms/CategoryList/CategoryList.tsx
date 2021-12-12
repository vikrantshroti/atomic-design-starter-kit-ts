import React from "react";
import classNames from "classnames";
import CardComponent from "../../molecules/CardComponent";
import "./styles.css";
import { IProps } from "./types";

const CategoryList = ({ classNameContainer, classNameCard, data }: IProps) => {
  const listStyle = classNames(`category-list-container`, classNameContainer);
  return (
    <div className={listStyle}>
      {data.map((item, index) => {
        return (
          <CardComponent
            src={item.src}
            text={item.text}
            className={classNameCard}
          />
        );
      })}
    </div>
  );
};

export default CategoryList;
