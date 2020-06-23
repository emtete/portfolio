import React from "react";
import taeyoungImg from "../projects/taeyoung_erp_img.png";

require("../style/work.css");

class Work extends React.Component {
  render() {
    return (
      <section id='work' className='flex_column_center'>
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
        <div className='work__img__set'>
          <div className='work__img__one_set'>
            <img src={taeyoungImg} alt='' className='work__img' />
          </div>

          <div className='work__img__one_set'>
            <img src={taeyoungImg} alt='' className='work__img' />
          </div>

          <div className='work__img__one_set'>
            <img src={taeyoungImg} alt='' className='work__img' />
          </div>

          <div className='work__img__one_set'>
            <img src={taeyoungImg} alt='' className='work__img' />
          </div>
        </div>
      </section>
    );
  }
}

export default Work;
