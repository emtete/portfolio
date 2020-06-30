import React from "react";
import Project from "./Project";
import CtgyBtn from "./CategoryBtn";
import Modal from "./Modal";
import taeyoungImg from "../projects/taeyoung_erp_img.png";
import "../style/work.scss";

interface WorkState {
  [key: string]: string;
}

interface Props {}

class Work extends React.Component<{}, WorkState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      activeModal: "",
    };
  }

  componentDidMount() {
    filterProjects();
    this.openModal();
    this.closeModal();
  }

  /**
   * * openModal
   * * : modal을 연다
   * @return void
   */
  openModal = (): void => {
    const modal = document.querySelector(".modal");
    const projects = document.querySelectorAll(".project");
    projects.forEach((project) => {
      project.addEventListener("click", (e) => {
        const clasName = (e.target as Element).className.split(" ")[1].replace("project", "modal");
        const target = document.querySelector(`.${clasName}`);
        this.setState({ activeModal: clasName });
        modal?.classList.add("active");
        target?.classList.remove("deactive");
      });
    });
  };

  /**
   * * closeModal
   * * : modal을 닫는다.
   * @return void
   */
  closeModal = (): void => {
    const closeBtn = document.querySelector(".modal .close");
    const modal = document.querySelector(".modal");
    closeBtn?.addEventListener("click", (e) => {
      const clasName = this.state.activeModal;
      const target = document.querySelector(`.${clasName}`);
      modal?.classList.remove("active");
      target?.classList.add("deactive");
    });
  };

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
          <Project name='project__taeyoung' img={`${taeyoungImg}`} dataType='Projects' />
          <Project name='project__abc' img={`${taeyoungImg}`} dataType='Sub Projects' />
          <Project name='project__movieApp' img={`${taeyoungImg}`} dataType='etc' />
          <Project name='project__ghi' img={`${taeyoungImg}`} dataType='etc' />
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
