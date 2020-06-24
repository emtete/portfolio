import React from "react";
import Navbar from "./Navbar";
import "../style/home.scss";

class Home extends React.Component {
  render() {
    return (
      <section id='home'>
        <div className='home__container'>
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
