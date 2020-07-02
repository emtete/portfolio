import React from "react";
import "../style/categorybtn.scss";

interface iProps {
  [key: string]: string | number;
  text: string;
  count: number;
  clas: string;
  dataFilter: string;
}
class CategoryBtn extends React.Component<iProps, {}> {
  componentDidMount() {
    bindingEventToBtn();
  }
  render() {
    const { text, count, clas, dataFilter } = this.props;
    return (
      <button className={`category__btn ${clas}`} data-filter={dataFilter}>
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

  // category button click event binding
  btnArr.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const activeBtn = document.querySelector(".category__btn.active");
      const t = event.target as Element;
      // 클릭한 노드가 span 일 경우 제대로 작동 안하는걸 방지하기 위함
      const ctgrBtn = t.nodeName === "SPAN" ? t.parentElement : t;

      // button 활성화 / 비활성화
      if (activeBtn) activeBtn.classList.remove("active");
      if (ctgrBtn) ctgrBtn.classList.add("active");
    });
  });
};

export default CategoryBtn;
