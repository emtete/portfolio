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
      <nav
        id={`${style.navbar}`}
        className={`${style.notFixed}`}
        ref={this.navRef}
      >
        <div className={`${style.navbar__menu}`}>
          <ul>
            <li id='home' className={`${style.navbar__home} ${style.active}`}>
              Home
            </li>
            <li id='about' className={`${style.navbar__about}`}>
              About
            </li>
            <li id='skills' className={`${style.navbar__skills}`}>
              Skills
            </li>
            <li id='work' className={`${style.navbar__work}`}>
              My Work
            </li>
            <li id='contact' className={`${style.navbar__contact}`}>
              Contact
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
