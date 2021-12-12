import React from "react";
import Image from "../../atoms/Image";
import Text from "../../atoms/Text";
import Button from "../../atoms/Button";
import PlayIcon from "../../atoms/PlayIcon";
import "./styles.css";
import { IProps } from "./types";

const CardWithTextComponent = ({
  title,
  subTitle,
  label1,
  label2,
  src,
}: IProps) => {
  return (
    <div className="cwtc-container">
      <div className="cwtc-text-container">
        <Text text={title} className={`cwtc-title`} />
        <Text text={subTitle} className={`cwtc-subTitle`} />
        <div className="cwtc-button-container">
          <Button label={label1} className={`cwtc-button-1`} />
          <Button label={label2} className={`cwtc-button-2`} />
        </div>
        <div className="cwtc-play-container">
          <PlayIcon height={30} width={30} className={`cwtc-play-icon`} />
          <Text text={"Play"} className={`cwtc-play-text`} />
        </div>
      </div>
      <Image src={src} className={`cwtc-image`} />
    </div>
  );
};

export default CardWithTextComponent;
