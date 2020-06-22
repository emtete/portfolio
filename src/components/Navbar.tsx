import React from "react";
import style from "../style/navbar.module.css";
import { iConst } from "./Const";
import { exception } from "console";

interface NavProps {}

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
  }
  private navRef = React.createRef<HTMLDivElement>();

  componentDidMount() {}

  getNavItems = (): Array<Element> => {
    const ul = this.navRef.current?.querySelector(`.${style.navbar__menu} ul`);
    if (ul) {
      return Array.from(ul.children);
    } else {
      throw new Error("Navbar items are null");
    }
  };

  getNav = (): any => {
    const nav = this.navRef.current;
    if (nav) {
      return nav;
    } else {
      throw new Error("Navbar items are null");
    }
  };

  render() {
    return (
      <nav id={`${style.navbar}`} className={`${style.notFixed}`} ref={this.navRef}>
        <div className={`${style.navbar__menu}`}>
          <ul>
            <li id='nav__home' className={`${style.navbar__home} ${style.active} nav__btn`}>
              Home
            </li>
            <li id='nav__about' className={`${style.navbar__about} nav__btn`}>
              About
            </li>
            <li id='nav__skills' className={`${style.navbar__skills} nav__btn`}>
              Skills
            </li>
            <li id='nav__work' className={`${style.navbar__work} nav__btn`}>
              My Work
            </li>
            <li id='nav__contact' className={`${style.navbar__contact} nav__btn`}>
              Contact
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
