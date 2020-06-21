import React from "react";
import Navbar from "./Navbar";
import style from "../style/home.module.css";

class Home extends React.Component {
  private homeRef = React.createRef<HTMLDivElement>();
  private sec_navRef = React.createRef<Navbar>();

  getHomePosition = (): number => {
    const relY = this.homeRef.current?.getBoundingClientRect();

    if (relY) {
      return relY.bottom - 53 + window.pageYOffset;
    } else {
      throw new Error("home bottom position is null");
    }
  };

  getHome = (): any => {
    const home = this.homeRef.current;
    if (home) {
      return home;
    } else {
      throw new Error("home is null");
    }
  };

  getNavItems = () => {
    return this.sec_navRef.current?.getNavItems();
  };

  getNav = () => {
    return this.sec_navRef.current?.getNav();
  };

  render() {
    return (
      <section id={`${style.home}`} className={`${style.flex_column_center}`} ref={this.homeRef}>
        <div className={`${style.home__box} ${style.flex_column_center}`}>
          <div className={`${style.home__title}`}>
            Full stack web developer.
            <br />
            최종호
          </div>
          <div id='buttonTo__about' className={`${style.home__button}`}>
            View my work <i className='fas fa-arrow-right'></i>
          </div>
        </div>
        <Navbar ref={this.sec_navRef} />
      </section>
    );
  }
}

export default Home;
