import s_about from "../style/about.module.css";
import s_contact from "../style/contact.module.css";
import s_hexagon from "../style/hexagon.module.css";
import s_home from "../style/home.module.css";
import s_navbar from "../style/navbar.module.css";
import s_skills from "../style/skills.module.css";
import s_work from "../style/work.module.css";
import React from "react";

export interface iConst {
  home: HTMLElement;
  homeBtn: HTMLElement;
  nav: HTMLElement;
  about: HTMLElement;
  skills: HTMLElement;
  work: HTMLElement;
  contact: HTMLElement;
  nav_items: Array<HTMLElement>;

  homeBottom: number;
  aboutBottom: number;
  skillsBottom: number;
  workBottom: number;
  contactBottom: number;
  // navActiveFlag: number;
  // isFixed: boolean;
}

const home: HTMLElement = document.querySelector(
  `#${s_home.home}`
) as HTMLElement;
const homeBtn: HTMLElement = document.querySelector(
  `.${s_home.home__button}`
) as HTMLElement;
const nav: HTMLElement = document.querySelector(
  `#${s_navbar.navbar}`
) as HTMLElement;
const about: HTMLElement = document.querySelector(
  `#${s_about.about}`
) as HTMLElement;
const skills: HTMLElement = document.querySelector(
  `#${s_skills.skills}`
) as HTMLElement;
const work: HTMLElement = document.querySelector(
  `#${s_work.work}`
) as HTMLElement;
const contact: HTMLElement = document.querySelector(
  `#${s_contact.contact}`
) as HTMLElement;
const nav_ul: any = document.querySelector(`.${s_navbar.navbar__menu} ul`);
const nav_items: Array<HTMLElement> = nav_ul
  ? Array.from(nav_ul.children)
  : [contact]; // 임시값
const homeBottom = home
  ? home.getBoundingClientRect().bottom - 53 + window.pageYOffset
  : 1;
const aboutBottom = about
  ? about.getBoundingClientRect().bottom + window.pageYOffset
  : 1;
const skillsBottom = skills
  ? skills.getBoundingClientRect().bottom + window.pageYOffset
  : 1;
const workBottom = work
  ? work.getBoundingClientRect().bottom + window.pageYOffset
  : 1;
const contactBottom = contact
  ? contact.getBoundingClientRect().bottom + window.pageYOffset
  : 1;

const Const = {
  home,
  homeBtn,
  nav,
  about,
  skills,
  work,
  contact,
  nav_items,
  homeBottom,
  aboutBottom,
  skillsBottom,
  workBottom,
  contactBottom,
  // navActiveFlag: "",
  // isFixed: false,
};

export default Const;
