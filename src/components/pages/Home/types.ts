export interface IProps {
  data: {
    navBar: NavBarType;
    carousel: Array<CarouselType>;
    category_list: Array<CategoryListType>;
    content_list: ContentListType;
  };
}

interface NavBarType {
  logo: string;
  navData: Array<string>;
  buttonText: string;
}

interface CarouselType {
  src: string;
  title: string;
  subTitle: string;
  label1: string;
  label2: string;
}

interface CategoryListType {
  src: string;
  text: string;
}

interface ContentListType {
  title: string;
  actionText: string;
  data: Array<ContentListDataType>;
}

interface ContentListDataType {
  src: string;
}
