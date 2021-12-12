import React from "react";
import Text from "../../atoms/Text";
import CategoryList from "../CategoryList";
import "./styles.css";
import { IProps } from "./types";

const ContentList = ({ data }: IProps) => {
  return (
    <div className="content-list-container">
      <div className="content-list-text-container">
        <Text text={data.title} className={`content-list-heading`} />
        <Text text={data.actionText} className={`content-list-action-text`} />
      </div>
      <CategoryList
        data={data.data}
        classNameContainer={`content-list-item-container`}
        classNameCard={`content-list-item-card`}
      />
    </div>
  );
};

export default ContentList;
