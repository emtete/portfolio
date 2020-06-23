import React from "react";

require("../style/contact.css");

class Contact extends React.Component {
  render() {
    return (
      <section id='contact' className='flex_column_center'>
        <h1 className='contact__title'>CONTACT</h1>
        <h2 className='contact__email'>victor_77@naver.com</h2>
        <div className='contact__icons'>
          <i className='fab fa-github-square'></i>
        </div>
        <span className='contact__copylight'>2020 choi jongho - All right reserved</span>
      </section>
    );
  }
}

export default Contact;
