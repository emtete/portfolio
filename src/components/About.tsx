import React from "react";

require("../style/about.css");

class About extends React.Component {
  private aboutRef = React.createRef<HTMLDivElement>();
  componentDidMount() {
    const rootElement = this.getElement();
    const listElements = getListElement(rootElement);

    // click 이벤트 바인딩
    listElements.forEach((element) => {
      element.addEventListener("click", (event) => {
        setActive(event.target as Element, listElements);
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
      <section id='about' className='flex_column_center' ref={this.aboutRef}>
        <h1 className='about__h1'>About Me</h1>
        <p>현재 서울 관악구 신림동에 거주중입니다.</p>
        <div className='about__content'>
          <div className='about__menu__warp'>
            <ul className='about__menu'>
              <li className='li_active'>2008 ~ 2009 : 군 입대sssss</li>
              <li>2008 ~ 2009 : 군 입대</li>
              <li>2008 ~ 2009 : 군 입대</li>
              <li>2008 ~ 2009 : 군 입대</li>
              <li>2008 ~ 2009 : 군 입대</li>
            </ul>
          </div>
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
    element.classList.remove(".active");
  });
  target.classList.add(".active");
};

/**
 * * getListElement
 * * : li Element를 담은 Html Element를 반환한다.
 * @param element
 * @return Elements
 */
export const getListElement = (element: Element): NodeListOf<Element> => {
  const lis = element.querySelectorAll(".about_about__content__3Zl7G li");
  if (!lis) throw new Error("Called before rendering");

  return lis;
};

export default About;
