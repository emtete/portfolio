import React from "react";
import Hexagon from "./Hexagon";

require("../style/skills.css");

class Skills extends React.Component {
  render() {
    return (
      <section id='skills' className='flex_column_center'>
        <h1 className='skills__h1'>Skills</h1>
        <div className='hex_wrap3'>
          <div className='hex_wrap2'>
            <Hexagon icon='fab fa-html5' h2='HTML' h4='HTML, CSS' />
            <Hexagon icon='fab fa-react' h2='FrontEnd' h4='Javascript, React, Typescript' />
          </div>

          <div className='hex_wrap2'>
            <Hexagon icon='fas fa-leaf' h2='Java' h4='Java, Spring, Servlet, Jsp, Mybatis, Maven' />
            <Hexagon icon='fas fa-server' h2='DBMS' h4='Oracle, MySql, Stored Procedure' />
          </div>
        </div>

        <div className='skills__set'>
          <div className='skills__progress flex_column_center'>
            <h4 className='skills__h4'>Skills</h4>
            <div className='skills__one_set'>
              <div className='skills__description'>
                <span>HTML</span>
                <span>99%</span>
              </div>
              <div className='skills__bar'>
                <div className='skills__value' style={{ width: "99%" }}></div>
              </div>
            </div>

            <div className='skills__one_set'>
              <div className='skills__description'>
                <span>CSS</span>
                <span>90%</span>
              </div>
              <div className='skills__bar'>
                <div className='skills__value' style={{ width: "90%" }}></div>
              </div>
            </div>

            <div className='skills__one_set'>
              <div className='skills__description'>
                <span>JavaScript</span>
                <span>80%</span>
              </div>
              <div className='skills__bar'>
                <div className='skills__value' style={{ width: "80%" }}></div>
              </div>
            </div>

            <div className='skills__one_set'>
              <div className='skills__description'>
                <span>React</span>
                <span>70%</span>
              </div>
              <div className='skills__bar'>
                <div className='skills__value' style={{ width: "70%" }}></div>
              </div>
            </div>

            <div className='skills__one_set'>
              <div className='skills__description'>
                <span>Java</span>
                <span>60%</span>
              </div>
              <div className='skills__bar'>
                <div className='skills__value' style={{ width: "60%" }}></div>
              </div>
            </div>

            <div className='skills__one_set'>
              <div className='skills__description'>
                <span>SQL</span>
                <span>50%</span>
              </div>
              <div className='skills__bar'>
                <div className='skills__value' style={{ width: "50%" }}></div>
              </div>
            </div>
          </div>
          <div className='skills__side_set flex_column_center'>
            <div className='skills__detail flex_column_center'>
              <h4 className='skills__h4'>Details</h4>
              <span>abcdefghijklmn</span>
            </div>
            <div className='skills__tools flex_column_center'>
              <h4 className='skills__h4'>Tools</h4>
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
}

export default Skills;
