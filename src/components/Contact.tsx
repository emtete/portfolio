import React from "react";
import style from "../style/contact.module.css";

class Contact extends React.Component {
  private contactRef = React.createRef<HTMLDivElement>();

  getContactPosition = (): number => {
    const relY = this.contactRef.current?.getBoundingClientRect();

    if (relY) {
      return relY.bottom + window.pageYOffset;
    } else {
      throw new Error("contact bottom position is null");
    }
  };

  render() {
    return (
      <section
        id={`${style.contact}`}
        className={`${style.flex_column_center}`}
        ref={this.contactRef}
      >
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
}

export default Contact;
