import React from "react";

require("../style/progressbar.css");

interface iProps {
  [key: string]: string; // | boolean | undefined;
  title: string;
  per: string;
  clas: string;
  // isActive?: boolean | undefined;
}
class ProgressBar extends React.Component<iProps> {
  private progressRef = React.createRef<HTMLDivElement>();

  componentDidMount() {
    // const rootElement = this.getElement();
    // const targetElement = getTitleElement(rootElement);
    // const activeElement: Element | null = getActiveElement(rootElement);
    // if (targetElement)
    //   targetElement.addEventListener("click", (event) => {
    //     console.log(1);
    //     setActive(targetElement, activeElement);
    //   });
  }

  /**
   * * getElement
   * * : ProgressBar의 root Element를 반환한다.
   * @return HTMLDivElement
   */
  getElement = (): HTMLDivElement => {
    const progress = this.progressRef.current;
    if (progress) {
      return progress;
    } else {
      throw new Error("progress is null");
    }
  };

  render() {
    return (
      <div className='skills__one_set' ref={this.progressRef}>
        <div className='skills__description'>
          <span className={this.props.clas}>{this.props.title}</span>
          <span>{this.props.per}</span>
        </div>
        <div className='skills__bar'>
          <div className='skills__value' style={{ width: this.props.per }}></div>
        </div>
      </div>
    );
  }
}

/**
 * * getTitleElement
 * * : title의 span Element를 반환한다.
 * @param element
 * @return Element
 */
// export const getTitleElement = (element: Element): Element => {
//   // const span = element.querySelector(".skills__description span");
//   const span = element.querySelector("span:nth-child(1)");
//   if (!span) throw new Error("Called before rendering");
//   return span;
// };

/**
 * * getActiveElement
 * * : Active 상태인 title의 span Element를 반환한다.
 * @param element
 * @return Element
 */
// export const getActiveElement = (element: Element): Element | null => {
//   const span = element.querySelector("span:nth-child(1).active");
//   return span;
// };

/**
 * * setActive
 * * : 매개변수로 받은 section을 활성화시킨다.
 * @param activeElement
 * @param targetElement
 * @return void
 */
// export const setActive = (targetElement: Element, activeElement: Element | null): void => {
// const navList: Array<Element> = Array.from((SE.nav?.querySelector("ul") as any).children);
// navList.forEach((element) => {
//   const target = element.id.split("__")[1];
//   element.classList.remove("active");
//   if (sec === target) element.classList.add("active");
// });
//   console.log(activeElement);
//   targetElement.classList.add("active");
//   if (activeElement) activeElement.classList.remove("active");
// };

export default ProgressBar;
