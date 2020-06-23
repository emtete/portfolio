import React from "react";
import Navbar from "./Navbar";

require("../style/home.css");

class Home extends React.Component {
  render() {
    return (
      <section id='home' className='flex_column_center'>
        <div className='home__box flex_column_center'>
          <div className='home__title'>
            Full stack web developer.
            <br />
            최종호
          </div>
          <div id='goTo__about' className={"home__button nav__btn"}>
            View my work <i className='fas fa-arrow-right'></i>
          </div>
        </div>
        <Navbar />
      </section>
    );
  }
}

export default Home;
