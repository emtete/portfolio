import React from "react";
import style from "../style/contact.module.css";

function Contact() {
  return (
    <section id={`${style.contact}`} className={`${style.flex_column_center}`}>
      <h1 className={`${style.contact__title}`}>CONTACT</h1>
      <h2 className={`${style.contact__email}`}>victor_77@naver.com</h2>
      <div className={`${style.contact__icons}`}>
        <i className='fab fa-github-square'></i>
      </div>
      <span className={`${style.contact__copylight}`}>
        2020 choi jongho - All right reserved
      </span>
    </section>
  );
}

export default Contact;
