import React from "react";
import Project from "./Project";
import CtgyBtn from "./CategoryBtn";
import taeyoungImg from "../projects/taeyoung_erp_img.png";
import "../style/work.scss";

import "../style/modal.scss";

class Work extends React.Component {
  componentDidMount() {
    filterProjects();
  }

  render() {
    return (
      <section id='work'>
        <div className='work__h1'>My Works</div>
        <div className='work__categories'>
          <CtgyBtn text='All' count={4} clas='active' dataFilter='*' />
          <CtgyBtn text='Projects' count={1} clas='' dataFilter='Projects' />
          <CtgyBtn text='Sub Projects' count={1} clas='' dataFilter='Sub Projects' />
          <CtgyBtn text='etc' count={2} clas='' dataFilter='etc' />
        </div>
        <div className='work__projects'>
          <Project img={`${taeyoungImg}`} dataType='Projects' />
          <Project img={`${taeyoungImg}`} dataType='Sub Projects' />
          <Project img={`${taeyoungImg}`} dataType='etc' />
          <Project img={`${taeyoungImg}`} dataType='etc' />
        </div>

        {/* The Modal */}
        <div id='myModal' className='modal'>
          {/* Modal content */}
          <div className='modal-content'>
            <div className='modal-header'>
              <span className='close'>&times;</span>
              <h2>Modal Header</h2>
            </div>
            <div className='modal-body'>
              <p>Some text in the Modal Body</p>
              <p>Some other text...</p>
            </div>
            <div className='modal-footer'>
              <h3>Modal Footer</h3>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

/**
 * * filterProjects
 * * : 카테고리에 맞는 프로젝트를 노출시킨다.
 * @return void
 */
export const filterProjects = (): void => {
  const projectContainer = document.querySelector(".work__projects");
  const projects = document.querySelectorAll(".project");
  const btns = document.querySelector(".work__categories");

  btns!.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;
    const filter =
      target.getAttribute("data-filter") || target?.parentElement?.getAttribute("data-filter");

    if (filter === null) return;

    projectContainer?.classList.add("anime-out");
    projects.forEach((project) => {
      const type = project.getAttribute("data-type");
      if (filter !== type && filter !== "*") {
        project.classList.add("deactive");
      } else {
        project.classList.remove("deactive");
      }
    });

    setTimeout(() => {
      projectContainer?.classList.remove("anime-out");
    }, 300);
  });
};

export default Work;
