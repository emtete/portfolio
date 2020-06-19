import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";

require("./style/initialization.css");

interface iConst {
  homeBottom: number;
  aboutBottom: number;
  skillsBottom: number;
  workBottom: number;
  contactBottom: number;
}

interface iProps {}
interface iState {}

class App extends React.Component<iProps, iState> {
  private sec_homeRef = React.createRef<Home>();
  private sec_aboutRef = React.createRef<About>();
  private sec_skillsRef = React.createRef<Skills>();
  private sec_workRef = React.createRef<Work>();
  private sec_contactRef = React.createRef<Contact>();

  CV = {
    homeBottom: 0,
    aboutBottom: 0,
    skillsBottom: 0,
    workBottom: 0,
    contactBottom: 0,
  };

  componentDidMount() {
    this.CV = {
      homeBottom: this.sec_homeRef.current?.getHomePosition()!,
      aboutBottom: this.sec_aboutRef.current?.getAboutPosition()!,
      skillsBottom: this.sec_skillsRef.current?.getSkillsPosition()!,
      workBottom: this.sec_workRef.current?.getWorkPosition()!,
      contactBottom: this.sec_contactRef.current?.getContactPosition()!,
    };
  }

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
    } else (pageY === CV.contactBottom - window.innerHeight) {
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
