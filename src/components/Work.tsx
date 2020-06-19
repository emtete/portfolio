import React from "react";
import style from "../style/work.module.css";
import taeyoungImg from "../projects/taeyoung_erp_img.png";

class Work extends React.Component {
  private workRef = React.createRef<HTMLDivElement>();

  getWorkPosition = (): number => {
    const relY = this.workRef.current?.getBoundingClientRect();

    if (relY) {
      return relY.bottom + window.pageYOffset;
    } else {
      throw new Error("work bottom position is null");
    }
  };

  getWork = (): any => {
    const work = this.workRef.current;
    if (work) {
      return work;
    } else {
      throw new Error("work is null");
    }
  };

  render() {
    return (
      <section
        id={`${style.work}`}
        className={`${style.flex_column_center}`}
        ref={this.workRef}
      >
        <div className={`${style.work__h1}`}>My Works</div>
        <div className={`${style.work__categories}`}>
          <button className={`${style.category__btn}`}>
            All<span className={`${style.category__count}`}>4</span>
          </button>
          <button className={`${style.category__btn}`}>
            Projects<span className={`${style.category__count}`}>1</span>
          </button>
          <button className={`${style.category__btn}`}>
            Sub Projects<span className={`${style.category__count}`}>1</span>
          </button>
          <button className={`${style.category__btn}`}>
            etc<span className={`${style.category__count}`}>2</span>
          </button>
        </div>
        <div className={`${style.work__img__set}`}>
          <div className={`${style.work__img__one_set}`}>
            <img src={taeyoungImg} alt='' className={`${style.work__img}`} />
          </div>

          <div className={`${style.work__img__one_set}`}>
            <img src={taeyoungImg} alt='' className={`${style.work__img}`} />
          </div>

          <div className={`${style.work__img__one_set}`}>
            <img src={taeyoungImg} alt='' className={`${style.work__img}`} />
          </div>

          <div className={`${style.work__img__one_set}`}>
            <img src={taeyoungImg} alt='' className={`${style.work__img}`} />
          </div>
        </div>
      </section>
    );
  }
}

export default Work;
