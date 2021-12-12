import React from "react";
import NavBar from "../../organisms/NavBar";
import CardCarousel from "../../organisms/CardCarousel";
import CategoryList from "../../organisms/CategoryList";
import ContentList from "../../organisms/ContentList";
import { IProps } from "./types";
import "./styles.css";

const Home = ({ data }: IProps) => {
  return (
    <div className={`home-container`}>
      <NavBar data={data.navBar} className={`home-navbar`} />
      <CardCarousel data={data.carousel} className={`home-carousel`} />
      <CategoryList
        data={data.category_list}
        classNameContainer={`home-category-list-container`}
        classNameCard={`home-category-list-card`}
      />
      <ContentList data={data.content_list} />
      <ContentList data={data.content_list} />
      <ContentList data={data.content_list} />
    </div>
  );
};

export default Home;
