import React from "react";
import Hexagon from "./Hexagon";
import ProgressBar from "./ProgressBar";
import "../style/skills.scss";

class Skills extends React.Component {
  render() {
    return (
      <section id='skills'>
        <h1 className='skills__h1'>Skills</h1>
        <div className='hex_wrap3'>
          <div className='hex_wrap2'>
            <Hexagon icon='fab fa-html5' h2='HTML' h4='HTML,\n CSS' />
            <Hexagon icon='fab fa-react' h2='FrontEnd' h4='Javascript, React,\n Typescript' />
          </div>

          <div className='hex_wrap2'>
            <Hexagon
              icon='fas fa-leaf'
              h2='Java'
              h4='Java, Spring, Servlet,\n Jsp, Mybatis, Maven'
            />
            <Hexagon icon='fas fa-server' h2='DBMS' h4='Oracle, MySql,\n Stored Procedure' />
          </div>
        </div>

        <div className='skills__container'>
          <div className='skills__progress'>
            <h3 className='skills__h3'>Skills</h3>
            <ProgressBar title='HTML' per='72%' clas='' />
            <ProgressBar title='CSS' per='62%' clas='' />
            <ProgressBar title='ES5 / ES6 / TypeScript' per='75%' clas='' />
            <ProgressBar title='React' per='70%' clas='' />
            <ProgressBar title='Java / Spring' per='80%' clas='' />
            <ProgressBar title='SQL' per='70%' clas='' />
          </div>
          <div className='skills__right-wrap'>
            <div className='skills__detail'>
              <div className='skills__detail-wrap'>
                <h3 className='skills__h3'>Tools</h3>
                <ul>
                  <li>VSCode</li>
                  <li>STS</li>
                  <li>DBeaver</li>
                  <li></li>
                </ul>
              </div>
            </div>
            <div className='skills__tools'>
              <div className='skills__detail-wrap'>
                <h3 className='skills__h3'>ETC</h3>
                <ul>
                  <li>Git</li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Skills;
