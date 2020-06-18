import React from "react";
import Navbar from "./Navbar";
import style from "../style/home.module.css";

class Home extends React.Component {
  render() {
    return (
      <section id={`${style.home}`} className={`${style.flex_column_center}`}>
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
