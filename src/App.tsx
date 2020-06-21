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

type iConst = {
  [key: string]: Element | null;

  home: Element | null;
  nav: Element | null;
  about: Element | null;
  skills: Element | null;
  work: Element | null;
  contact: Element | null;
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
    const CV = getCV();
    window.addEventListener("scroll", () => {
      const sec = getCurrentSection(CV, getPosition);
      if (sec !== this.beforeSec) {
        this.beforeSec = sec;
        attachNavbar(CV, sec);
        setActive(CV, sec);
      }
    });

    document.addEventListener("click", (event) => {
      let section = (event.target as Element).id.split("__")[1];
      if (!isNavBtn(section)) return;
      if (!CV[section]) throw new Error("Called before rendering");
      goTo(section, CV);
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
 * * isNavBtn
 * * : section 매개변수가 navigation button인지 확인합니다.
 * TODO 다른 element 의 id의 결과가 true인 경우도 생길것같은 생각이 든다.
 * @param section
 */
const isNavBtn = (section: string) => {
  const keys = Object.keys(getCV());
  for (const key in keys) {
    if (keys[key] === section) return true;
  }
  return false;
};

/**
 * * goTo
 *
 * @param section
 * @param CV
 */
const goTo = (section: string, CV: iConst): void => {
  const top: number = CV[section]!.getBoundingClientRect().top + window.pageYOffset - 50;
  const navList: Array<Element> = Array.from((CV.nav!.querySelector("ul") as any).children);

  window.scrollTo({
    top: top,
    behavior: "smooth",
  });
  navList.forEach((element) => element.classList.remove("active"));
  document.querySelector("#nav__about")!.classList.add("active");
};

/**
 *
 * @param CV
 * @param sec
 */
const attachNavbar = (CV: iConst, sec: string): void => {
  if (sec !== "home" && CV.nav !== null) {
    CV.nav.classList.add(`${nav_style.fixed}`);
    CV.nav.classList.remove(`${nav_style.notFixed}`);
  } else if (sec === "home" && CV.nav !== null) {
    CV.nav.classList.remove(`${nav_style.fixed}`);
    CV.nav.classList.add(`${nav_style.notFixed}`);
  }
};

/**
 *
 * @param CV
 * @param sec
 */
const setActive = (CV: iConst, sec: string): void => {
  switch (sec) {
    case "home":
      addAndRemove(CV, sec);
      break;
    case "about":
      addAndRemove(CV, sec);
      break;
    case "skills":
      addAndRemove(CV, sec);
      break;
    case "work":
      addAndRemove(CV, sec);
      break;
    case "contact":
      addAndRemove(CV, sec);
      break;
  }
};

/**
 * * addAndRemove
 * * : add and remove className to Html Element
 * @param CV
 * @param sec
 * @return void
 */
const addAndRemove = (CV: iConst, sec: string): void => {
  const navList: Array<Element> = Array.from((CV.nav?.querySelector("ul") as any).children);
  navList.forEach((element) => {
    const target = element.id.split("__")[1];
    element.classList.remove(`${nav_style.active}`);
    if (sec === target) element.classList.add(`${nav_style.active}`);
  });
};

/**
 *
 * @param CV
 * @param getPosition
 */
const getCurrentSection = (CV: iConst, getPosition: Function): string => {
  const pageY = window.pageYOffset;
  const gp = getPosition;
  let sec: string;

  if (pageY < gp(CV.home!, "bottom") - 53) {
    sec = "home";
  } else if (gp(CV.home!, "bottom") - 53 < pageY && pageY < gp(CV.about!, "bottom") - 53) {
    sec = "about";
  } else if (gp(CV.about!, "bottom") - 53 < pageY && pageY < gp(CV.skills!, "bottom") - 53) {
    sec = "skills";
  } else if (
    gp(CV.skills!, "bottom") - 53 < pageY &&
    pageY < gp(CV.work!, "bottom") - 53 &&
    pageY !== gp(CV.contact!, "bottom") - window.innerHeight
  ) {
    sec = "work";
  } else {
    sec = "contact";
  }

  return sec;
};

/**
 *
 * @param element
 * @param direction
 */
const getPosition = (element: Element, direction: string & ("bottom" | "top")): number => {
  if (!element) throw new Error("Element is null or undefined");
  const bcr = element.getBoundingClientRect();
  return bcr[direction] + window.pageYOffset;
};

/**
 *
 */
const getCV = (): iConst => {
  const home = document.querySelector(`#${home_style.home}`);
  if (!home) throw new Error("Called before rendering");

  let CV: iConst = {
    home: document.querySelector(`#${home_style.home}`),
    nav: document.querySelector(`#${nav_style.navbar}`),
    about: document.querySelector(`#${about_style.about}`),
    skills: document.querySelector(`#${skills_style.skills}`),
    work: document.querySelector(`#${work_style.work}`),
    contact: document.querySelector(`#${contact_style.contact}`),
  };
  return CV;
};

export default App;
