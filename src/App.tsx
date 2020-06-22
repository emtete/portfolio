import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import home_style from "./style/home.module.css";
import nav_style from "./style/navbar.module.css";
import about_style from "./style/about.module.css";
import skills_style from "./style/skills.module.css";
import work_style from "./style/work.module.css";
import contact_style from "./style/contact.module.css";

require("./style/initialization.css");

type Elements = {
  [key: string]: Element | null;
};

interface iProps {}
interface iState {}

class App extends React.Component<iProps, iState> {
  private sec_homeRef = React.createRef<Home>();
  private sec_aboutRef = React.createRef<About>();
  private sec_skillsRef = React.createRef<Skills>();
  private sec_workRef = React.createRef<Work>();
  private sec_contactRef = React.createRef<Contact>();

  beforeSec: string = "home";

  componentDidMount() {
    const SE = getSectionsElement();
    const NavBtnElements = getNavBtnsElement();

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
        let section = (event.target as Element).id.split("__")[1];
        if (!SE[section]) throw new Error("Called before rendering");
        goTo(section, SE);
      });
    });
  }

  render() {
    return (
      <div>
        <Home ref={this.sec_homeRef} />
        <About ref={this.sec_aboutRef} />
        <Skills ref={this.sec_skillsRef} />
        <Work ref={this.sec_workRef} />
        <Contact ref={this.sec_contactRef} />
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
const goTo = (section: string, SE: Elements): void => {
  const top: number = SE[section]!.getBoundingClientRect().top + window.pageYOffset - 50;
  const navList: Array<Element> = Array.from((SE.nav!.querySelector("ul") as any).children);

  window.scrollTo({
    top: top,
    behavior: "smooth",
  });
  navList.forEach((element) => element.classList.remove("active"));
  document.querySelector("#nav__about")!.classList.add("active");
};

/**
 * * attachNavbar
 * * : 스크롤이 홈 영역 밖에 있을 때, 네비게이션 바를 화면 상단에 고정한다.
 * @param SE
 * @param sec
 * @return void
 */
const attachNavbar = (sec: string, SE: Elements): void => {
  if (sec !== "home" && SE.nav !== null) {
    SE.nav.classList.add(`${nav_style.fixed}`);
    SE.nav.classList.remove(`${nav_style.notFixed}`);
  } else if (sec === "home" && SE.nav !== null) {
    SE.nav.classList.remove(`${nav_style.fixed}`);
    SE.nav.classList.add(`${nav_style.notFixed}`);
  }
};

/**
 * * setActive
 * * : 매개변수로 받은 section을 활성화시킨다.
 * @param SE
 * @param sec
 * @return void
 */
const setActive = (sec: string, SE: Elements): void => {
  const navList: Array<Element> = Array.from((SE.nav?.querySelector("ul") as any).children);
  navList.forEach((element) => {
    const target = element.id.split("__")[1];
    element.classList.remove(`${nav_style.active}`);
    if (sec === target) element.classList.add(`${nav_style.active}`);
  });
};

/**
 * * getCurrentSection
 * * : 현재 스크롤이 있는 섹션을 리턴한다.
 * @param SE
 * @param getPosition
 * @return string
 */
const getCurrentSection = (SE: Elements, getPosition: Function): string => {
  const pageY = window.pageYOffset;
  const gp = getPosition;
  let sec: string;

  if (pageY < gp(SE.home!, "bottom") - 53) {
    sec = "home";
  } else if (gp(SE.home!, "bottom") - 53 < pageY && pageY < gp(SE.about!, "bottom") - 53) {
    sec = "about";
  } else if (gp(SE.about!, "bottom") - 53 < pageY && pageY < gp(SE.skills!, "bottom") - 53) {
    sec = "skills";
  } else if (
    gp(SE.skills!, "bottom") - 53 < pageY &&
    pageY < gp(SE.work!, "bottom") - 53 &&
    pageY !== gp(SE.contact!, "bottom") - window.innerHeight
  ) {
    sec = "work";
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
const getPosition = (element: Element, direction: string & ("bottom" | "top")): number => {
  if (!element) throw new Error("Element is null or undefined");
  const bcr = element.getBoundingClientRect();
  return bcr[direction] + window.pageYOffset;
};

/**
 * * getSectionsElement
 * * : 각 섹션의 Html Element를 담은 객체를 반환한다.
 * TODO 가끔씩 객체를 가져올 때 에러가 난다. ref를 통해서 가져오는게 안정적일것 같다.
 * @return Elements
 */
const getSectionsElement = (): Elements => {
  const home = document.querySelector(`#${home_style.home}`);
  if (!home) throw new Error("Called before rendering");

  const SE: Elements = {
    home: document.querySelector(`#${home_style.home}`),
    nav: document.querySelector(`#${nav_style.navbar}`),
    about: document.querySelector(`#${about_style.about}`),
    skills: document.querySelector(`#${skills_style.skills}`),
    work: document.querySelector(`#${work_style.work}`),
    contact: document.querySelector(`#${contact_style.contact}`),
  };
  return SE;
};

/**
 * * getNavBtnsElement
 * * : 각 섹션에 있는 Nav버튼 Html Element를 담은 Html Element를 반환한다.
 * @return Elements
 */
export const getNavBtnsElement = (): NodeListOf<Element> => {
  const btns = document.querySelector(".nav__btn");
  if (!btns) throw new Error("Called before rendering");

  return document.querySelectorAll(".nav__btn")!;
};

export default App;
