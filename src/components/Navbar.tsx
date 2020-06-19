import React from "react";
import style from "../style/navbar.module.css";
import { iConst } from "./Const";

interface NavProps {
  // home: HTMLElement,
  // homeBtn: HTMLElement,
  // nav: HTMLElement,
  // about: HTMLElement,
  // skills: HTMLElement,
  // work: HTMLElement,
  // contact: HTMLElement,
  // nav_items: Array<HTMLElement>,
  // homeBottom: number,
  // aboutBottom: number,
  // skillsBottom: number,
  // workBottom: number,
  // contactBottom: number
}

interface NavState {
  navActiveFlag: string;
  isFixed: boolean;
}

class Navbar extends React.Component<NavProps, NavState> {
  constructor(props: NavProps) {
    super(props);
    this.state = {
      navActiveFlag: "",
      isFixed: false,
    };
    // this.getPosition = this.getPosition.bind(this);
    // this.abc = this.abc.bind(this);
  }

  // C: iConst = require("./Const.ts");

  // attachNavbar(C: iConst) {
  //   console.log(window.pageYOffset);
  //   console.log("a");
  //   const { isFixed } = this.state;
  //   if (C.homeBottom < window.pageYOffset) {
  //     if (!this.state.isFixed) {
  //       this.setState({ isFixed: true });
  //       C.nav.classList.add("fixed");
  //       C.nav.classList.remove("notFixed");
  //     }
  //   } else if (C.homeBottom > window.pageYOffset) {
  //     if (this.state.isFixed) {
  //       this.setState({ isFixed: false });
  //       C.nav.classList.remove("fixed");
  //       C.nav.classList.add("notFixed");
  //     }
  //   }
  // }

  // addActiveByScrolling(C: iConst, pageY: number) {
  //   if (pageY < C.homeBottom) {
  //     this.addAndRemove(".navbar__home", C);
  //   } else if (C.homeBottom < pageY && pageY < C.aboutBottom - 53) {
  //     this.addAndRemove(".navbar__about", C);
  //   } else if (C.aboutBottom - 53 < pageY && pageY < C.skillsBottom - 53) {
  //     this.addAndRemove(".navbar__skills", C);
  //   } else if (
  //     C.skillsBottom - 53 < pageY &&
  //     pageY < C.workBottom - 53 &&
  //     pageY !== C.contactBottom - window.innerHeight
  //   ) {
  //     this.addAndRemove(".navbar__work", C);
  //   } else if (pageY === C.contactBottom - window.innerHeight) {
  //     this.addAndRemove(".navbar__contact", C);
  //   }
  // }

  // getPosition = (C: iConst): string => {
  //   // const { C } = this;
  //   const pageY: number = window.pageYOffset;
  //   console.log(C.homeBottom);
  //   let position: string = "";
  //   if (pageY < C.homeBottom) {
  //     position = "home";
  //   } else if (C.homeBottom < pageY && pageY < C.aboutBottom - 53) {
  //     position = "about";
  //   } else if (C.aboutBottom - 53 < pageY && pageY < C.skillsBottom - 53) {
  //     position = "skills";
  //   } else if (
  //     C.skillsBottom - 53 < pageY &&
  //     pageY < C.workBottom - 53 &&
  //     pageY !== C.contactBottom - window.innerHeight
  //   ) {
  //     position = "work";
  //   } else if (pageY === C.contactBottom - window.innerHeight) {
  //     position = "contact";
  //   }

  //   return position;
  // };

  // addAndRemove(selector: string, C: iConst) {
  //   const { navActiveFlag } = this.state;
  //   if (navActiveFlag !== selector) {
  //     this.setState({ navActiveFlag: selector });
  //     let node: HTMLElement = document.querySelector(selector) as HTMLElement;
  //     this.removeActive(C);
  //     node.classList.add("active");
  //   }
  // }

  // removeActive(C: iConst) {
  //   C.nav_items.forEach((element) => element.classList.remove("active"));
  // }

  componentDidMount() {
    // const C = require("./Const.ts");
    // window.addEventListener("scroll", this.onScroll.bind(this, this.C));
    // console.log(this.abc());
  }

  // onScroll = (C: iConst): void => {
  //   // console.log("a");
  //   console.log(this.getPosition(C));
  //   // console.log(this.abc());
  // };

  // abc = (): string => {
  //   return "1";
  // };

  render() {
    return (
      <nav id={`${style.navbar}`} className={`${style.notFixed}`}>
        <div className={`${style.navbar__menu}`}>
          <ul>
            <li className={`${style.navbar__home} ${style.active}`}>Home</li>
            <li className={`${style.navbar__about}`}>About</li>
            <li className={`${style.navbar__skills}`}>Skills</li>
            <li className={`${style.navbar__work}`}>My Work</li>
            <li className={`${style.navbar__contact}`}>Contact</li>
          </ul>
        </div>
      </nav>
    );
  }
}

// let navActiveFlag = "";
// let isFixed = false;

// function attachNavbar(C: iConst) {
//   const nav = Navbar;
//   if (C.homeBottom < window.pageYOffset) {
//     if (!nav.state.isFixed) {
//       ns.isFixed = true;
//       C.nav.classList.add("fixed");
//       C.nav.classList.remove("notFixed");
//     }
//   } else if (C.homeBottom > window.pageYOffset) {
//     if (ns.isFixed) {
//       ns.isFixed = false;
//       C.nav.classList.remove("fixed");
//       C.nav.classList.add("notFixed");
//     }
//   }
// }

// function addActiveByScrolling(C: iConst, ns: NavStatus, pageY: number) {
//   if (pageY < C.homeBottom) {
//     addAndRemove(".navbar__home", ns);
//   } else if (C.homeBottom < pageY && pageY < C.aboutBottom - 53) {
//     addAndRemove(".navbar__about", ns);
//   } else if (C.aboutBottom - 53 < pageY && pageY < C.skillsBottom - 53) {
//     addAndRemove(".navbar__skills", ns);
//   } else if (
//     C.skillsBottom - 53 < pageY &&
//     pageY < C.workBottom - 53 &&
//     pageY !== C.contactBottom - window.innerHeight
//   ) {
//     addAndRemove(".navbar__work", ns);
//   } else if (pageY === C.contactBottom - window.innerHeight) {
//     addAndRemove(".navbar__contact", ns);
//   }

//   function addAndRemove(selector: string, ns: NavStatus) {
//     if (ns.navActiveFlag !== selector) {
//       ns.navActiveFlag = selector;
//       let node: HTMLElement = document.querySelector(selector) as HTMLElement;
//       removeActive();
//       node.classList.add("active");
//     }
//   }

//   function removeActive() {
//     C.nav_items.forEach((element) => element.classList.remove("active"));
//   }
// }

export default Navbar;
