import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import home_style from "./style/home.module.css";
import nav_style from "./style/navbar.module.css";

require("./style/initialization.css");

interface iConst {
  homeBottom: number;
  aboutBottom: number;
  skillsBottom: number;
  workBottom: number;
  contactBottom: number;
  home: any;
  nav: any;
  about: any;
  skills: any;
  work: any;
  contact: any;
}

interface iProps {}
interface iState {}

class App extends React.Component<iProps, iState> {
  private sec_homeRef = React.createRef<Home>();
  private sec_aboutRef = React.createRef<About>();
  private sec_skillsRef = React.createRef<Skills>();
  private sec_workRef = React.createRef<Work>();
  private sec_contactRef = React.createRef<Contact>();

  beforeSec: string = "home";

  CV = {
    homeBottom: 0,
    aboutBottom: 0,
    skillsBottom: 0,
    workBottom: 0,
    contactBottom: 0,
    home: document.querySelector(`#${home_style.home}`), // 임시값
    nav: document.querySelector(`#${home_style.home}`), // 임시값
    about: document.querySelector(`#${home_style.home}`), // 임시값
    skills: document.querySelector(`#${home_style.home}`), // 임시값
    work: document.querySelector(`#${home_style.home}`), // 임시값
    contact: document.querySelector(`#${home_style.home}`), // 임시값
  };

  componentDidMount() {
    this.CV = {
      homeBottom: this.sec_homeRef.current?.getHomePosition()!,
      aboutBottom: this.sec_aboutRef.current?.getAboutPosition()!,
      skillsBottom: this.sec_skillsRef.current?.getSkillsPosition()!,
      workBottom: this.sec_workRef.current?.getWorkPosition()!,
      contactBottom: this.sec_contactRef.current?.getContactPosition()!,

      home: this.sec_homeRef.current?.getHome()!,
      nav: this.sec_homeRef.current?.getNav()!,
      about: this.sec_aboutRef.current?.getAbout()!,
      skills: this.sec_skillsRef.current?.getSkills()!,
      work: this.sec_workRef.current?.getWork()!,
      contact: this.sec_contactRef.current?.getContact()!,
    };

    window.addEventListener("scroll", () => {
      const sec = this.getCurrentSection();
      if (sec !== this.beforeSec) {
        this.beforeSec = sec;
        this.attachNavbar(sec);
        this.setActive(sec);
      }
    });
  }

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
    const navList: Array<Element> = Array.from(
      (this.CV.nav?.querySelector("ul") as any).children
    );
    navList.forEach((element) => {
      element.classList.remove(`${nav_style.active}`);
      if (sec === element.id) element.classList.add(`${nav_style.active}`);
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
    const { CV } = this;
    let sec: string;

    if (pageY < CV.homeBottom) {
      sec = "home";
    } else if (CV.homeBottom < pageY && pageY < CV.aboutBottom - 53) {
      sec = "about";
    } else if (CV.aboutBottom - 53 < pageY && pageY < CV.skillsBottom - 53) {
      sec = "skills";
    } else if (
      CV.skillsBottom - 53 < pageY &&
      pageY < CV.workBottom - 53 &&
      pageY !== CV.contactBottom - window.innerHeight
    ) {
      sec = "work";
    } else {
      // (pageY === CV.contactBottom - window.innerHeight)
      sec = "contact";
    }

    return sec;
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
