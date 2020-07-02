import React from "react";
import "../style/about.scss";

class About extends React.Component {
  componentDidMount() {
    const listElements = document.querySelectorAll(".about__menu-text li") as NodeListOf<Element>;
    const selectElement = document.querySelector(".about__menu-select") as HTMLSelectElement;

    // li click 이벤트 바인딩
    listElements.forEach((li, index) => {
      li.addEventListener("click", () => {
        setActive(li, listElements);
        bindingContent(listElements, li);
        selectElement.value = index + "";
      });
    });

    // select box click 이벤트 바인딩
    selectElement.addEventListener("change", (e) => {
      const target = e.target as HTMLSelectElement;
      const index = target.selectedIndex;
      const li = listElements[index];
      setActive(li, listElements);
      bindingContent(listElements, li);
    });
  }

  render() {
    return (
      <section id='about'>
        <h1 className='about__h1'>About Me</h1>
        <p>현재 서울 관악구 신림동에 거주중입니다.</p>
        <div className='about__container'>
          <ul className='about__menu-text'>
            <li className='li_active'>2014 ~ 2015 : 학원 수료</li>
            <li>2015 ~ 2016 : 회사 뉴테크 근무</li>
            <li>2016 ~ 2019 : 타 직업 종사</li>
            <li>2019 ~ 2020 : ERP 프로젝트</li>
            <li>2020 ~ </li>
          </ul>
          <select className='about__menu-select'>
            <option value='0'>2014 ~ 2015 : 학원 수료</option>
            <option value='1'>2015 ~ 2016 : 회사 뉴테크 근무</option>
            <option value='2'>2016 ~ 2019 : 타 직업 종사</option>
            <option value='3'>2019 ~ 2020 : ERP 프로젝트</option>
            <option value='4'>2020 ~ </option>
          </select>
          <div id='content' className='about__detail'>
            <p>약 6개월, 비트컴퓨터 학원 수료했습니다.</p>
            <p className='ct_deactive'>
              1년간 여러가지 업무를 했지만
              <br /> 딱히 기억나는것도 없고 실력도 별로였습니다.
              <br /> 경영악화로 퇴사했습니다.
            </p>
            <p className='ct_deactive'>
              간간히 책을 읽으면서
              <br />
              레노버 콜센터에서 3개월
              <br /> 인조대리석 1년
              <br /> 구매자재팀에서 창고관리 1년
              <br /> 그렇게 일해보니 개발일이 저에게 제일 잘 맞았다고 생각됐습니다.
            </p>
            <p className='ct_deactive'>
              인력파견업체에 취직하였습니다.
              <br />
              그리고 6년차 과장으로 태영건설에 파견되었습니다.
              <br />
              2019년 4월부터 2020년 4월까지 1년 1개월동안
              <br />
              차세대 ERP 프로젝트에서 구매자재 업무 중 구매를 담당했습니다.
            </p>
            <p className='ct_deactive'>
              프로젝트 철수 후, 한달동안 구직활동을 했습니다.
              <br />
              붙은곳도 있었고 입사해서 1주일동안 일하기도 했습니다.
              <br />
              그런데 지금까지 나온 새로운 기술들도 많았고 자바만 계속 하긴 싫었습니다.
              <br />
              그래서 현재는 프론트엔드 개발자로 일하기 위해 React로 이것저것 만들어보는 중입니다.
            </p>
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
 * * bindingContent
 * * : 매개변수로 전달된 li와 매칭되는 p태그의 display 속성을 바꾼다.
 * @param element
 * @param lis
 * @param clickedElement
 * @return void
 */
export const bindingContent = (lis: NodeListOf<Element>, clickedElement: Element): void => {
  const text = clickedElement.textContent;
  lis.forEach((ele, index) => {
    const p = document.querySelectorAll(".about__detail p");
    if (ele.textContent === text) {
      p[index].classList.remove("ct_deactive");
    } else {
      p[index].classList.add("ct_deactive");
    }
  });
};

export default About;
