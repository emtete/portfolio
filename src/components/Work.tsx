import React from "react";
import Project from "./Project";
import taeyoungImg from "../projects/taeyoung_erp_img.png";
import "../style/work.scss";

class Work extends React.Component {
  render() {
    return (
      <section id='work'>
        <div className='work__h1'>My Works</div>
        <div className='work__categories'>
          <button className='category__btn'>
            All<span className='category__count'>4</span>
          </button>
          <button className='category__btn'>
            Projects<span className='category__count'>1</span>
          </button>
          <button className='category__btn'>
            Sub Projects<span className='category__count'>1</span>
          </button>
          <button className='category__btn'>
            etc<span className='category__count'>2</span>
          </button>
        </div>
        <div className='work__img-container'>
          <Project img={`${taeyoungImg}`} />
          <Project img={`${taeyoungImg}`} />
          <Project img={`${taeyoungImg}`} />
          <Project img={`${taeyoungImg}`} />
        </div>
      </section>
    );
  }
}

export default Work;
