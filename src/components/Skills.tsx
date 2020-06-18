import React from "react";
import style from "../style/skills.module.css";
import hexagon from "../style/hexagon.module.css";

function Skills() {
  return (
    <section id={`${style.skills}`} className={`${style.flex_column_center}`}>
      <h1 className={`${style.skills__h1}`}>Skills</h1>
      <div className={`${style.hex_wrap3}`}>
        <div className={`${style.hex_wrap2}`}>
          <div className={`${style.hex_wrap1} ${style.flex_column_center}`}>
            <div className={`${style.hex_wrap}`}>
              <div className={`${hexagon.hexagon}`}>
                <i className={`fab fa-html5 ${style.hexagon__icon}`}></i>
              </div>
            </div>
            <h2 className={`${style.skills__h2}`}>HTML</h2>
            <h4 className={`${style.skills__h4}`}>HTML, CSS</h4>
          </div>
          <div className={`${style.hex_wrap1} ${style.flex_column_center}`}>
            <div className={`${style.hex_wrap}`}>
              <div className={`${hexagon.hexagon}`}>
                <i className={`fab fa-react ${style.hexagon__icon}`}></i>
              </div>
            </div>
            <h2 className={`${style.skills__h2}`}>React</h2>
            <h4 className={`${style.skills__h4}`}>
              JavaScript, React, TypeScript
            </h4>
          </div>
        </div>

        <div className={`${style.hex_wrap2}`}>
          <div className={`${style.hex_wrap1} ${style.flex_column_center}`}>
            <div className={`${style.hex_wrap}`}>
              <div className={`${hexagon.hexagon}`}>
                <i className={`fas fa-leaf ${style.hexagon__icon}`}></i>
              </div>
            </div>
            <h2 className={`${style.skills__h2}`}>JAVA</h2>
            <h4 className={`${style.skills__h4}`}>
              Java, Spring, Servlet,
              <br />
              Jsp, Mybatis, Maven
            </h4>
          </div>
          <div className={`${style.hex_wrap1} ${style.flex_column_center}`}>
            <div className={`${style.hex_wrap}`}>
              <div className={`${hexagon.hexagon}`}>
                <i className={`fas fa-server ${style.hexagon__icon}`}></i>
              </div>
            </div>
            <h2 className={`${style.skills__h2}`}>DBMS</h2>
            <h4 className={`${style.skills__h4}`}>
              Oracle, MySql, <br />
              Stored Procedure
            </h4>
          </div>
        </div>
      </div>

      <div className={`${style.skills__set}`}>
        <div
          className={`${style.skills__progress} ${style.flex_column_center}`}
        >
          <h4 className={`${style.skills__h4}`}>Skills</h4>
          <div className={`${style.skills__one_set}`}>
            <div className={`${style.skills__description}`}>
              <span>HTML</span>
              <span>99%</span>
            </div>
            <div className={`${style.skills__bar}`}>
              <div
                className={`${style.skills__value}`}
                style={{ width: "99%" }}
              ></div>
            </div>
          </div>

          <div className={`${style.skills__one_set}`}>
            <div className={`${style.skills__description}`}>
              <span>CSS</span>
              <span>90%</span>
            </div>
            <div className={`${style.skills__bar}`}>
              <div
                className={`${style.skills__value}`}
                style={{ width: "90%" }}
              ></div>
            </div>
          </div>

          <div className={`${style.skills__one_set}`}>
            <div className={`${style.skills__description}`}>
              <span>JavaScript</span>
              <span>80%</span>
            </div>
            <div className={`${style.skills__bar}`}>
              <div
                className={`${style.skills__value}`}
                style={{ width: "80%" }}
              ></div>
            </div>
          </div>

          <div className={`${style.skills__one_set}`}>
            <div className={`${style.skills__description}`}>
              <span>React</span>
              <span>70%</span>
            </div>
            <div className={`${style.skills__bar}`}>
              <div
                className={`${style.skills__value}`}
                style={{ width: "70%" }}
              ></div>
            </div>
          </div>

          <div className={`${style.skills__one_set}`}>
            <div className={`${style.skills__description}`}>
              <span>Java</span>
              <span>60%</span>
            </div>
            <div className={`${style.skills__bar}`}>
              <div
                className={`${style.skills__value}`}
                style={{ width: "60%" }}
              ></div>
            </div>
          </div>

          <div className={`${style.skills__one_set}`}>
            <div className={`${style.skills__description}`}>
              <span>SQL</span>
              <span>50%</span>
            </div>
            <div className={`${style.skills__bar}`}>
              <div
                className={`${style.skills__value}`}
                style={{ width: "50%" }}
              ></div>
            </div>
          </div>
        </div>
        <div
          className={`${style.skills__side_set} ${style.flex_column_center}`}
        >
          <div
            className={`${style.skills__detail} ${style.flex_column_center}`}
          >
            <h4 className={`${style.skills__h4}`}>Details</h4>
            <span>abcdefghijklmn</span>
          </div>
          <div className={`${style.skills__tools} ${style.flex_column_center}`}>
            <h4 className={`${style.skills__h4}`}>Tools</h4>
            <ul>
              <li>git</li>
              <li>VSCode</li>
              <li>STS</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
