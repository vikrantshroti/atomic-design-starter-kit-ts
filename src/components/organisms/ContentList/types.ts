import { IProps as CardComponentType } from "../../molecules/CardComponent";

export interface IProps {
  data: {
    title: string;
    actionText: string;
    data: Array<CardComponentType>;
  };
}
