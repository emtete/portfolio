import React from "react";
import Hexagon from "./Hexagon";
import ProgressBar from "./ProgressBar";

require("../style/skills.css");

class Skills extends React.Component {
  private skillsRef = React.createRef<HTMLDivElement>();

  componentDidMount() {
    const rootElement = this.getElement();
    const spans = getTitleElements(rootElement);

    spans.forEach((element) => {
      element.addEventListener("click", (event) => {
        setActive(event.target as Element, spans);
      });
    });
  }

  /**
   * * getElement
   * * : Skills의 root Element를 반환한다.
   * @return HTMLDivElement
   */
  getElement = (): HTMLDivElement => {
    const skills = this.skillsRef.current;
    if (skills) {
      return skills;
    } else {
      throw new Error("skills is null");
    }
  };

  render() {
    return (
      <section id='skills' className='flex_column_center' ref={this.skillsRef}>
        <h1 className='skills__h1'>Skills</h1>
        <div className='hex_wrap3'>
          <div className='hex_wrap2'>
            <Hexagon icon='fab fa-html5' h2='HTML' h4='HTML, CSS' />
            <Hexagon icon='fab fa-react' h2='FrontEnd' h4='Javascript, React, Typescript' />
          </div>

          <div className='hex_wrap2'>
            <Hexagon icon='fas fa-leaf' h2='Java' h4='Java, Spring, Servlet, Jsp, Mybatis, Maven' />
            <Hexagon icon='fas fa-server' h2='DBMS' h4='Oracle, MySql, Stored Procedure' />
          </div>
        </div>

        <div className='skills__set'>
          <div className='skills__progress flex_column_center'>
            <h4 className='skills__h4'>Skills</h4>
            <ProgressBar title='HTML' per='99%' clas='' />
            <ProgressBar title='CSS' per='90%' clas='' />
            <ProgressBar title='JavaScript' per='80%' clas='' />
            <ProgressBar title='React' per='70%' clas='' />
            <ProgressBar title='Java' per='60%' clas='' />
            <ProgressBar title='SQL' per='50%' clas='' />
          </div>
          <div className='skills__side_set flex_column_center'>
            <div className='skills__detail'>
              <div className='skills__detail-wrap flex_column_center'>
                <h4 className='skills__h4'>Tools</h4>
                <ul>
                  <li>VSCode</li>
                  <li>STS</li>
                  <li>DBeaver</li>
                  <li></li>
                </ul>
              </div>
            </div>
            <div className='skills__tools'>
              <div className='skills__detail-wrap flex_column_center'>
                <h4 className='skills__h4'>ETC</h4>
                <ul>
                  <li>Git</li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

/**
 * * getTitleElements
 * * : Progressbar의 title span Element들을 반환한다.
 * @param element
 * @return Element
 */
export const getTitleElements = (element: Element): NodeListOf<Element> => {
  const span = element.querySelectorAll(".skills__description span:nth-child(1)");
  if (!span) throw new Error("Called before rendering");
  return span;
};

/**
 * * setActive
 * * : 매개변수로 받은 section을 활성화시킨다.
 * @param target
 * @param nodeList
 * @return void
 */
export const setActive = (target: Element, nodeList: NodeListOf<Element>): void => {
  nodeList.forEach((element) => {
    element.classList.remove("active");
  });
  target.classList.add("active");
};

export default Skills;
