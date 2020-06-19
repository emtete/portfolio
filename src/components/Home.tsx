import React from "react";
import Navbar from "./Navbar";
import style from "../style/home.module.css";

class Home extends React.Component {
  homeRef = React.createRef<HTMLDivElement>();

  getHomePosition = () => {
    const relY = this.homeRef.current?.getBoundingClientRect();
    let homeBtm: number;
    if (relY) {
      homeBtm = relY.bottom - 53 + window.pageYOffset;
      console.log(homeBtm);
    }
  };

  render() {
    return (
      <section
        id={`${style.home}`}
        className={`${style.flex_column_center}`}
        ref={this.homeRef}
      >
        <div className={`${style.home__box} ${style.flex_column_center}`}>
          <div className={`${style.home__title}`}>
            Full stack web developer.
            <br />
            최종호
          </div>
          <div className={`${style.home__button}`}>
            View my work <i className='fas fa-arrow-right'></i>
          </div>
        </div>
        <Navbar />
      </section>
    );
  }
}

export default Home;
