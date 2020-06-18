import React from "react";
import Navbar from "./Navbar";
import style from "../style/home.module.css";

function Home() {
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

export default Home;
