import React from "react";
import "../style/contact.scss";

class Contact extends React.Component {
  render() {
    return (
      <section id='contact'>
        <h1 className='contact__title'>CONTACT</h1>
        <h2 className='contact__email'>victor_77@naver.com</h2>
        <div className='contact__icons'>
          <a href='https://github.com/emtete' target='_blank'>
            <i className='fab fa-github-square'></i>
          </a>
        </div>
        <span className='contact__copylight'>2020 choi jongho - All right reserved</span>
      </section>
    );
  }
}

export default Contact;
