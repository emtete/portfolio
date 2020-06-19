import React from "react";
import style from "../style/navbar.module.css";
import { iConst } from "./Const";

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

  getNavItems = (): Array<Element> | null => {
    const ul = this.navRef.current?.querySelector(`.${style.navbar__menu} ul`);
    if (ul) {
      return Array.from(ul.children);
    } else {
      console.log("Navbar items are null");
      return null;
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

export default Navbar;
