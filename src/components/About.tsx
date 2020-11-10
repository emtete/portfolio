import React from "react";
import "../style/about.scss";

class About extends React.Component {
  componentDidMount() {
    const listElements = document.querySelectorAll(
      ".about__menu-text li"
    ) as NodeListOf<Element>;
    const selectElement = document.querySelector(
      ".about__menu-select"
    ) as HTMLSelectElement;

    // li click 이벤트 바인딩
    listElements.forEach((li, index) => {
      li.addEventListener("click", () => {
        setActive(li, listElements);
        bindingContent(listElements, li);
        //select box 의 선택된 값을 변경한다.
        selectElement.value = index + "";
      });
    });

    // select box click 이벤트 바인딩
    selectElement.addEventListener("change", (e) => {
      const target = e.target as HTMLSelectElement;
      const index = target.selectedIndex;
      // 선택된 select box 의 값에 해당하는 li 요소를 변수에 할당한다.
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
            모니터링시스템 중 네이버 기사 크롤링 구현
              <br /> 신한 O2O 프로젝트 중 각 화면구현과 이미지 업로드 구현
              <br /> 그리드 순서변경 구현
            </p>
            <p className='ct_deactive'>
              간간히 책을 읽으면서
              <br />
              레노버 콜센터에서 3개월
              <br /> 인조대리석 1년
              <br /> 구매자재팀에서 창고관리 1년
              <br /> 그렇게 일해보니 개발일이 저에게 제일 잘 맞았다고
              생각됐습니다.
            </p>

            <p className='ct_deactive'>
              위쉬정보기술에 취직하였습니다.
              <br />
              태영건설에 파견되었습니다.
              <br />
              2019년 4월부터 2020년 4월까지 1년 1개월동안
              <br />
              차세대 ERP 프로젝트에서 구매자재 업무 중 구매를 담당했습니다.
            </p>

            <p className='ct_deactive'>
              구직활동을 하기도 했지만 리액트로 sub project를 해야겠다는 생각이 들었습니다.
              <br />
              그래서 포트폴리오 사이트와 블로그를 개발했습니다.
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
export const setActive = (
  target: Element,
  listElements: NodeListOf<Element>
): void => {
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
export const bindingContent = (
  lis: NodeListOf<Element>,
  clickedElement: Element
): void => {
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
