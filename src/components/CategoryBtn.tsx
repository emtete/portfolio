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
    bindingEventToBtn();
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

/**
 * * bindingEventToBtn
 * * : 카테고리 버튼 이벤트 바인딩
 * @return void
 */
export const bindingEventToBtn = (): void => {
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
};

export default CategoryBtn;
