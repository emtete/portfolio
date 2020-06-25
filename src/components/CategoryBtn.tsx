import React from "react";
import "../style/categorybtn.scss";

interface iProps {
  [key: string]: string | number;
  text: string;
  count: number;
}
class CategoryBtn extends React.Component<iProps, {}> {
  render() {
    const { text, count } = this.props;
    return (
      <button className='category__btn'>
        {text}
        <span className='category__count'>{count}</span>
      </button>
    );
  }
}
export default CategoryBtn;
