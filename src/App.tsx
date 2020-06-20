import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import home_style from "./style/home.module.css";
import nav_style from "./style/navbar.module.css";

require("./style/initialization.css");

type iConst = {
  [key: string]: number | Element | null;
  // homeBottom: number;
  // aboutBottom: number;
  // skillsBottom: number;
  // workBottom: number;
  // contactBottom: number;

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

  CV: iConst = {
    // homeBottom: 0,
    // aboutBottom: 0,
    // skillsBottom: 0,
    // workBottom: 0,
    // contactBottom: 0,
    home: null,
    nav: null,
    about: null,
    skills: null,
    work: null,
    contact: null,
  };

  componentDidMount() {
    this.CV = {
      // homeBottom: this.sec_homeRef.current?.getHomePosition()!,
      // aboutBottom: this.sec_aboutRef.current?.getAboutPosition()!,
      // skillsBottom: this.sec_skillsRef.current?.getSkillsPosition()!,
      // workBottom: this.sec_workRef.current?.getWorkPosition()!,
      // contactBottom: this.sec_contactRef.current?.getContactPosition()!,

      home: this.sec_homeRef.current!.getHome(),
      nav: this.sec_homeRef.current!.getNav(),
      about: this.sec_aboutRef.current!.getAbout(),
      skills: this.sec_skillsRef.current!.getSkills(),
      work: this.sec_workRef.current!.getWork(),
      contact: this.sec_contactRef.current!.getContact(),
    };
    const homeBtn = this.CV.home?.querySelector(`.${home_style.home__button}`)!;

    window.addEventListener("scroll", () => {
      const sec = this.getCurrentSection();
      if (sec !== this.beforeSec) {
        this.beforeSec = sec;
        this.attachNavbar(sec);
        this.setActive(sec);
      }
    });

    document.addEventListener("click", (event) => {
      const section = event.target as Element;
      // this.goTo(section);
    });
  }

  // goAbout = (element): void => {
  goTo = (section: Element): void => {
    let append_target = "";
    // let sec_target = "";
    let targetId = section.id.split("__")[1];
    // switch (element) {
    //   case "nav":
    //     append_target = `.${event.target.classList.value}`;
    //     sec_target = `#${event.target.classList.value.split("__")[1]}`;
    //     break;
    //   case "homeBtn":
    //     append_target = ".navbar__about";
    //     sec_target = "#about";
    //     break;
    // }
    let topOfSection = this.CV[targetId] as Element;
    // if (topOfSection !== null) {
    //   topOfSection!.getBoundingClientRect().top + window.pageYOffset - 50;
    // }
    console.log(topOfSection);
    // const navList: Array<Element> = Array.from(
    //   (this.CV.nav!.querySelector("ul") as any).children
    // );

    // window.scrollTo({
    //   top: topOfSection,
    //   behavior: "smooth",
    // });
    // navList.forEach((element) => element.classList.remove("active"));
    // document.querySelector("#nav__about")!.classList.add("active");
  };

  setActive = (sec: string): void => {
    switch (sec) {
      case "home":
        this.addAndRemove(sec);
        break;
      case "about":
        this.addAndRemove(sec);
        break;
      case "skills":
        this.addAndRemove(sec);
        break;
      case "work":
        this.addAndRemove(sec);
        break;
      case "contact":
        this.addAndRemove(sec);
        break;
    }
  };

  addAndRemove = (sec: string): void => {
    const navList: Array<Element> = Array.from((this.CV.nav?.querySelector("ul") as any).children);
    navList.forEach((element) => {
      const target = element.id.split("__")[1];
      element.classList.remove(`${nav_style.active}`);
      if (sec === target) element.classList.add(`${nav_style.active}`);
    });
  };

  attachNavbar = (sec: string): void => {
    const { CV } = this;
    if (sec !== "home" && CV.nav !== null) {
      CV.nav.classList.add(`${nav_style.fixed}`);
      CV.nav.classList.remove(`${nav_style.notFixed}`);
    } else if (sec === "home" && CV.nav !== null) {
      CV.nav.classList.remove(`${nav_style.fixed}`);
      CV.nav.classList.add(`${nav_style.notFixed}`);
    }
  };

  getCurrentSection = (): string => {
    const pageY = window.pageYOffset;
    const { CV, getPosition } = this;
    const gp = getPosition;
    let sec: string;

    if (pageY < gp(CV.home!, "bottom")) {
      sec = "home";
    } else if (gp(CV.home!, "bottom") < pageY && pageY < gp(CV.about!, "bottom") - 53) {
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
      // (pageY === CV.contactBottom - window.innerHeight)
      sec = "contact";
    }

    return sec;
  };

  // direction : top or bottom
  getPosition = (element: Element, direction: string & ("bottom" | "top")): number => {
    if (!element) throw new Error("Element is null or undefined");
    const bcr = element.getBoundingClientRect();
    return bcr[direction] + window.pageYOffset;
  };

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

export default App;
