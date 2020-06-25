import React from "react";
import "../style/categorybtn.scss";

interface iProps {
  [key: string]: string | number;
  text: string;
  count: number;
  clas: string;
}
class CategoryBtn extends React.Component<iProps, {}> {
  componentDidMount() {
    const btnArr = document.querySelectorAll(".category__btn, .category__count");
    btnArr.forEach((btn) => {
      btn.addEventListener("click", (event) => {
        const activeBtn = document.querySelector(".category__btn.active");
        const t = event.target as Element;
        const target = t.nodeName === "SPAN" ? t.parentElement : t;

        if (activeBtn) activeBtn.classList.remove("active");
        if (target) target.classList.add("active");
      });
    });
  }
  render() {
    const { text, count, clas } = this.props;
    return (
      <button className={`category__btn ${clas}`}>
        {text}
        <span className='category__count'>{count}</span>
      </button>
    );
  }
}
export default CategoryBtn;
