import React from "react";
import style from "../style/about.module.css";

class About extends React.Component {
  private aboutRef = React.createRef<HTMLDivElement>();

  getAboutPosition = (): number | null => {
    const relY = this.aboutRef.current?.getBoundingClientRect();

    if (relY) {
      return relY.bottom + window.pageYOffset;
    } else {
      console.log("about bottom position is null");
      return null;
    }
  };

  render() {
    return (
      <section
        id={`${style.about}`}
        className={`${style.flex_column_center}`}
        ref={this.aboutRef}
      >
        <h1 className={`${style.about__h1}`}>About Me</h1>
        <p>hi, 저는 현재 서울 관악구 신림동에 거주중이며,...</p>
        <div className={`${style.about__content}`}>
          <div className={`${style.about__menu__warp}`}>
            <ul className={`${style.about__menu}`}>
              <li>2008 ~ 2009 : 군 입대sssss</li>
              <li>2008 ~ 2009 : 군 입대</li>
              <li>2008 ~ 2009 : 군 입대</li>
              <li>2008 ~ 2009 : 군 입대</li>
              <li>2008 ~ 2009 : 군 입대</li>
            </ul>
          </div>
          <div className={`${style.about__detail}`}>
            <p>
              가나다라마바사가나다라마바사가나다라마바사가나다라마바
              사가나다라마바사가나다라마바사가나다라마바사가나다라마
              바사가나다라마바사가나다라마바사가나다라마바사가나다라
              마바사가나다라마바사가나다라마바사
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
