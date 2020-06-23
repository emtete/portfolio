import React from "react";

require("../style/skills.css");
require("../style/hexagon.css");

class Skills extends React.Component {
  render() {
    return (
      <section id='skills' className='flex_column_center'>
        <h1 className='skills__h1'>Skills</h1>
        <div className='hex_wrap3'>
          <div className='hex_wrap2'>
            <div className='hex_wrap1 flex_column_center'>
              <div className='hex_wrap'>
                <div className='hexagon.hexagon'>
                  <i className='fab fa-html5 hexagon__icon'></i>
                </div>
              </div>
              <h2 className='skills__h2'>HTML</h2>
              <h4 className='skills__h4'>HTML, CSS</h4>
            </div>
            <div className='hex_wrap1 flex_column_center'>
              <div className='hex_wrap'>
                <div className='hexagon.hexagon'>
                  <i className='fab fa-react hexagon__icon'></i>
                </div>
              </div>
              <h2 className='skills__h2'>React</h2>
              <h4 className='skills__h4'>JavaScript, React, TypeScript</h4>
            </div>
          </div>

          <div className='hex_wrap2'>
            <div className='hex_wrap1 flex_column_center'>
              <div className='hex_wrap'>
                <div className='hexagon.hexagon'>
                  <i className='fas fa-leaf hexagon__icon'></i>
                </div>
              </div>
              <h2 className='skills__h2'>JAVA</h2>
              <h4 className='skills__h4'>
                Java, Spring, Servlet,
                <br />
                Jsp, Mybatis, Maven
              </h4>
            </div>
            <div className='hex_wrap1 flex_column_center'>
              <div className='hex_wrap'>
                <div className='hexagon.hexagon'>
                  <i className='fas fa-server hexagon__icon'></i>
                </div>
              </div>
              <h2 className='skills__h2'>DBMS</h2>
              <h4 className='skills__h4'>
                Oracle, MySql, <br />
                Stored Procedure
              </h4>
            </div>
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
