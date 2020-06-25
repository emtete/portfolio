import React from "react";
import Project from "./Project";
import CtgyBtn from "./CategoryBtn";
import taeyoungImg from "../projects/taeyoung_erp_img.png";
import "../style/work.scss";

class Work extends React.Component {
  render() {
    return (
      <section id='work'>
        <div className='work__h1'>My Works</div>
        <div className='work__categories'>
          <CtgyBtn text='All' count={4} clas='active' />
          <CtgyBtn text='Projects' count={1} clas='' />
          <CtgyBtn text='Sub Projects' count={1} clas='' />
          <CtgyBtn text='etc' count={2} clas='' />
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
