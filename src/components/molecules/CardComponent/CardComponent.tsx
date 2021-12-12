import React from "react";
import classNames from "classnames";
import Image from "../../atoms/Image";
import Text from "../../atoms/Text";
import "./styles.css";
import { IProps } from "./types";

const CardComponent = ({ src, className, text }: IProps) => {
  const style = classNames(`cc-container`, className);
  return (
    <div className={style}>
      <Image src={src} className={`cc-image`} />
      {text && <Text text={text} className={`cc-text`} />}
    </div>
  );
};

export default CardComponent;
