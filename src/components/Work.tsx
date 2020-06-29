import React from "react";
import Project from "./Project";
import CtgyBtn from "./CategoryBtn";
import Modal from "./Modal";
import taeyoungImg from "../projects/taeyoung_erp_img.png";
import "../style/work.scss";

class Work extends React.Component {
  componentDidMount() {
    filterProjects();
    openModal("abc");
    closeModal("abc");
  }

  render() {
    return (
      <section id='work'>
        <Modal />
        <div className='work__h1'>My Works</div>
        <div className='work__categories'>
          <CtgyBtn text='All' count={4} clas='active' dataFilter='*' />
          <CtgyBtn text='Projects' count={1} clas='' dataFilter='Projects' />
          <CtgyBtn text='Sub Projects' count={1} clas='' dataFilter='Sub Projects' />
          <CtgyBtn text='etc' count={2} clas='' dataFilter='etc' />
        </div>
        <div className='work__projects'>
          <Project key='0' title='taeyoung' img={`${taeyoungImg}`} dataType='Projects' />
          <Project key='1' title='abc' img={`${taeyoungImg}`} dataType='Sub Projects' />
          <Project key='2' title='def' img={`${taeyoungImg}`} dataType='etc' />
          <Project key='3' title='ghi' img={`${taeyoungImg}`} dataType='etc' />
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

/**
 * * openModal
 * * : 프로젝트 클릭시 호출된다.
 * @return void
 */
export const openModal = (title: string): void => {
  const modal = document.querySelector(".modal");
  const projects = document.querySelectorAll(".project");
  projects.forEach((project) => {
    project.addEventListener("click", () => {
      modal?.classList.add("active");
    });
  });
};

/**
 * * closeModal
 * * : 프로젝트 클릭시 호출된다.
 * @return void
 */
export const closeModal = (title: string): void => {
  const closeBtn = document.querySelector(".modal .close");
  const modal = document.querySelector(".modal");
  closeBtn?.addEventListener("click", () => {
    modal?.classList.remove("active");
  });
};
export default Work;
