import React from "react";
import style from "../style/about.module.css";

function About() {
  return (
    <section id={`${style.about}`} className={`${style.flex_column_center}`}>
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

export default About;
