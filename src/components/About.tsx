import React from "react";
import "../style/about.scss";

class About extends React.Component {
  private aboutRef = React.createRef<HTMLDivElement>();
  componentDidMount() {
    const rootElement = this.getElement();
    const listElements = getListElement(rootElement);

    // click 이벤트 바인딩
    listElements.forEach((li) => {
      li.addEventListener("click", () => {
        setActive(li, listElements);
        bindingContent(rootElement, listElements, li);
      });
    });
  }

  getElement = (): HTMLDivElement => {
    const about = this.aboutRef.current;
    if (about) {
      return about;
    } else {
      throw new Error("about is null");
    }
  };

  render() {
    return (
      <section id='about' ref={this.aboutRef}>
        <h1 className='about__h1'>About Me</h1>
        <p>현재 서울 관악구 신림동에 거주중입니다.</p>
        <div className='about__container'>
          <ul className='about__menu'>
            <li className='li_active'>2014 ~ 2015 : 학원 수료</li>
            <li>2015 ~ 2016 : 회사 뉴테크 근무</li>
            <li>2016 ~ 2019 : 타 직업 종사</li>
            <li>2019 ~ 2020 : ERP 프로젝트</li>
            <li>2020 ~ </li>
          </ul>
          <div id='content' className='about__detail'>
            <p>내용1</p>
            <p className='ct_deactive'>내용2</p>
            <p className='ct_deactive'>내용3</p>
            <p className='ct_deactive'>내용4</p>
            <p className='ct_deactive'>내용5</p>
          </div>
        </div>
      </section>
    );
  }
}

/**
 * * setActive
 * * : 매개변수로 받은 element을 활성화시킨다.
 * @param target
 * @param liElement
 * @return void
 */
export const setActive = (target: Element, listElements: NodeListOf<Element>): void => {
  listElements.forEach((element) => {
    element.classList.remove("li_active");
  });
  target.classList.add("li_active");
};

/**
 * * getListElement
 * * : li Element를 담은 Html Element를 반환한다.
 * @param element
 * @return Elements
 */
export const getListElement = (element: Element): NodeListOf<Element> => {
  const lis = element.querySelectorAll(".about__menu li");
  if (!lis) throw new Error("Called before rendering");

  return lis;
};

/**
 * * bindingContent
 * * : 매개변수로 전달된 li와 매칭되는 p태그의 display 속성을 바꾼다.
 * @param element
 * @param lis
 * @param clickedElement
 * @return void
 */
export const bindingContent = (
  element: Element,
  lis: NodeListOf<Element>,
  clickedElement: Element
): void => {
  const text = clickedElement.textContent;
  lis.forEach((ele, index) => {
    const p = element.querySelectorAll(".about__detail p");
    if (ele.textContent === text) {
      p[index].classList.remove("ct_deactive");
    } else {
      p[index].classList.add("ct_deactive");
    }
  });
};

export default About;
