"use strict";

/* Navbar Fixed setting */
const home = document.getElementById("home");
const nav = document.getElementById("navbar");
const about = document.getElementById("about");
const skills = document.getElementById("skills");
const work = document.getElementById("work");
const contact = document.getElementById("contact");
const nav_items = Array.from(
  document.querySelector(".navbar__menu ul").children
);

const homeBottom =
  home.getBoundingClientRect().bottom - 53 + window.pageYOffset;
const aboutBottom = about.getBoundingClientRect().bottom + window.pageYOffset;
const skillsBottom = skills.getBoundingClientRect().bottom + window.pageYOffset;
const workBottom = work.getBoundingClientRect().bottom + window.pageYOffset;
const contactBottom =
  contact.getBoundingClientRect().bottom + window.pageYOffset;

let navActiveFlag = "";
let isFixed = false;

window.addEventListener("scroll", () => {
  attachNavbar();
  addActiveByScrolling(window.pageYOffset);
});

function attachNavbar() {
  if (homeBottom < window.pageYOffset) {
    if (!isFixed) {
      isFixed = true;
      nav.classList.add("fixed");
      nav.classList.remove("notFixed");
    }
  } else if (homeBottom > window.pageYOffset) {
    if (isFixed) {
      isFixed = false;
      nav.classList.remove("fixed");
      nav.classList.add("notFixed");
    }
  }
}

function addActiveByScrolling(pageY) {
  if (pageY < homeBottom) {
    addAndRemove(".navbar__home");
  } else if (homeBottom < pageY && pageY < aboutBottom) {
    addAndRemove(".navbar__about");
  } else if (aboutBottom < pageY && pageY < skillsBottom) {
    addAndRemove(".navbar__skills");
  } else if (
    skillsBottom < pageY &&
    pageY < workBottom &&
    pageY !== contactBottom - window.innerHeight
  ) {
    addAndRemove(".navbar__work");
  } else if (pageY === contactBottom - window.innerHeight) {
    addAndRemove(".navbar__contact");
  }

  function addAndRemove(selector) {
    if (navActiveFlag !== selector) {
      navActiveFlag = selector;
      let node = document.querySelector(selector);
      removeActive();
      node.classList.add("active");
    }
  }

  function removeActive() {
    nav_items.forEach((element) => element.classList.remove("active"));
  }
}
