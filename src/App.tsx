import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import "./style/initialization.scss";

// require("./style/initialization.css");

type Elements = {
  [key: string]: Element | null;
};

interface iProps {}
interface iState {}
//
class App extends React.Component<iProps, iState> {
  private appRef = React.createRef<HTMLDivElement>();

  beforeSec: string = "home";

  componentDidMount() {
    const rootElement = this.getElement();
    const SE = getSectionsElement(rootElement);
    const NavBtnElements = getNavBtnsElement(rootElement);
    // scroll 이벤트 바인딩
    window.addEventListener("scroll", () => {
      const sec = getCurrentSection(SE, getPosition);
      if (sec !== this.beforeSec) {
        this.beforeSec = sec;
        attachNavbar(sec, SE);
        setActive(sec, SE);
      }
    });

    // Nav btn Click 이벤트 바인딩
    NavBtnElements.forEach((element) => {
      element.addEventListener("click", (event) => {
        let section = element.id.split("__")[1];
        if (!SE[section]) throw new Error("Called before rendering");
        goTo(section, SE, rootElement);
      });
    });
  }

  getElement = (): HTMLDivElement => {
    const app = this.appRef.current;
    if (app) {
      return app;
    } else {
      throw new Error("app is null");
    }
  };

  render() {
    return (
      <div ref={this.appRef}>
        <Home />
        <About />
        <Skills />
        <Work />
        <Contact />
      </div>
    );
  }
}

/**
 * * goTo
 * * : 매개변수로 입력받은 section(home, navbar ..)로 이동시킨다.
 * @param section
 * @param SE
 * @return void
 */
export const goTo = (section: string, SE: Elements, rootElement: Element): void => {
  const top: number = SE[section]!.getBoundingClientRect().top + window.pageYOffset - 50;
  const navList: Array<Element> = Array.from((SE.nav!.querySelector("ul") as any).children);
  const dotNavList: Array<Element> = Array.from(
    (SE.nav?.querySelector(".navbar__dot") as any).children
  );

  window.scrollTo({
    top: top,
    behavior: "smooth",
  });
  navList.forEach((element) => element.classList.remove("active"));
  dotNavList.forEach((element) => element.classList.remove("active"));
  rootElement.querySelector("#nav__about")!.classList.add("active");
};

/**
 * * attachNavbar
 * * : 스크롤이 홈 영역 밖에 있을 때, 네비게이션 바를 화면 상단에 고정한다.
 * @param SE
 * @param sec
 * @return void
 */
export const attachNavbar = (sec: string, SE: Elements): void => {
  if (sec !== "home" && SE.nav !== null) {
    SE.nav.classList.add("fixed");
    SE.nav.classList.remove("notFixed");
  } else if (sec === "home" && SE.nav !== null) {
    SE.nav.classList.remove("fixed");
    SE.nav.classList.add("notFixed");
  }
};

/**
 * * setActive
 * * : 매개변수로 받은 section을 활성화시킨다.
 * @param SE
 * @param sec
 * @return void
 */
export const setActive = (sec: string, SE: Elements): void => {
  const navList: Array<Element> = Array.from(
    (SE.nav?.querySelector(".navbar__text") as any).children
  );
  const dotNavList: Array<Element> = Array.from(
    (SE.nav?.querySelector(".navbar__dot") as any).children
  );
  navList.forEach((element) => {
    const target = element.id.split("__")[1];
    element.classList.remove("active");
    if (sec === target) element.classList.add("active");
  });

  dotNavList.forEach((element) => {
    const target = element.id.split("__")[1];
    element.classList.remove("active");
    if (sec === target) element.classList.add("active");
  });
};

/**
 * * getCurrentSection
 * * : 현재 스크롤이 있는 섹션을 리턴한다.
 * @param SE
 * @param getPosition
 * @return string
 */
export const getCurrentSection = (SE: Elements, getPosition: Function): string => {
  const pageY = window.pageYOffset;
  const gp = getPosition;
  let sec: string;

  if (pageY < gp(SE.home!, "bottom") - 53) {
    sec = "home";
  } else if (gp(SE.home!, "bottom") - 54 < pageY && pageY < gp(SE.about!, "bottom") - 53) {
    sec = "about";
  } else if (gp(SE.about!, "bottom") - 53 < pageY && pageY < gp(SE.skills!, "bottom") - 53) {
    sec = "skills";
  } else if (
    gp(SE.skills!, "bottom") - 53 < pageY &&
    pageY < gp(SE.work!, "bottom") - 53 &&
    pageY !== document.body.scrollHeight - window.innerHeight
  ) {
    sec = "work";
  } else if (pageY === document.body.scrollHeight - window.innerHeight) {
    sec = "contact";
  } else {
    sec = "contact";
  }

  return sec;
};

/**
 * * getPosition
 * * : 매개변수로 받은 element의 top | bottom Y 좌표를 리턴한다.
 * @param element
 * @param direction
 * @return number
 */
export const getPosition = (element: Element, direction: string & ("bottom" | "top")): number => {
  if (!element) throw new Error("Element is null or undefined");
  const bcr = element.getBoundingClientRect();
  return bcr[direction] + window.pageYOffset;
};

/**
 * * getSectionsElement
 * * : 각 섹션의 Html Element를 담은 객체를 반환한다.
 * @param element
 * @return Elements
 */
export const getSectionsElement = (element: Element): Elements => {
  const SE: Elements = {
    home: element.querySelector("#home"),
    nav: element.querySelector("#navbar"),
    about: element.querySelector("#about"),
    skills: element.querySelector("#skills"),
    work: element.querySelector("#work"),
    contact: element.querySelector("#contact"),
  };
  return SE;
};

/**
 * * getNavBtnsElement
 * * : 각 섹션에 있는 Nav버튼 Html Element를 담은 Html Element를 반환한다.
 * @param element
 * @return Elements
 */
export const getNavBtnsElement = (element: Element): NodeListOf<Element> => {
  const btns = element.querySelector(".nav__btn");
  if (!btns) throw new Error("Called before rendering");

  return element.querySelectorAll(".nav__btn")!;
};

export default App;
