import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import "./style/initialization.scss";

type Elements = {
  [key: string]: HTMLElement;
};

interface iProps {}
interface iState {
  [key: string]: string;
  beforeSec: string;
}

class App extends React.Component<iProps, iState> {
  constructor(props: iProps) {
    super(props);
    this.state = {
      beforeSec: "home",
    };
  }

  componentDidMount() {
    const SE = getSectionsElement();
    const NavBtnElements = document.querySelectorAll(".nav__btn");

    // scroll 이벤트 바인딩
    window.addEventListener("scroll", () => {
      const sec = getCurrentSection(SE, getPosition);
      const { beforeSec } = this.state;

      if (sec !== beforeSec) {
        this.setState({ beforeSec: sec });
        attachNavbar(sec, SE);
        setActive(sec, SE);
      }
    });

    // Nav btn Click 이벤트 바인딩
    NavBtnElements.forEach((element) => {
      element.addEventListener("click", (e) => {
        const section = element.id.split("__")[1];
        goTo(section, SE);
      });
    });
  }

  render() {
    return (
      <div>
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
export const goTo = (section: string, SE: Elements): void => {
  const top: number = SE[section]!.getBoundingClientRect().top + window.pageYOffset - 50;

  window.scrollTo({
    top: top,
    behavior: "smooth",
  });
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
  const navList: Array<Element> = Array.from((SE.nav?.querySelector("ul") as any).children);
  navList.forEach((element) => {
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
  } else if (gp(SE.skills!, "bottom") - 53 < pageY && pageY < gp(SE.work!, "bottom") - 553) {
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
export const getPosition = (element: Element, direction: string & ("bottom" | "top")): number => {
  const bcr = element.getBoundingClientRect();
  return bcr[direction] + window.pageYOffset;
};

/**
 * * getSectionsElement
 * * : 각 섹션의 Html Element를 담은 객체를 반환한다.
 * @param element
 * @return Elements
 */
export const getSectionsElement = (): Elements => {
  const SE: Elements = {
    home: document.querySelector("#home") as HTMLElement,
    nav: document.querySelector("#navbar") as HTMLElement,
    about: document.querySelector("#about") as HTMLElement,
    skills: document.querySelector("#skills") as HTMLElement,
    work: document.querySelector("#work") as HTMLElement,
    contact: document.querySelector("#contact") as HTMLElement,
  };
  return SE;
};

export default App;
