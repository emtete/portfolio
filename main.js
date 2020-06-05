"use strict";

/* Navbar Fixed setting */
// const home = document.getElementById("home");
const home = document.querySelector("#home");
const homeBtn = document.querySelector(".home__button");
const nav = document.querySelector("#navbar");
const about = document.querySelector("#about");
const skills = document.querySelector("#skills");
const work = document.querySelector("#work");
const contact = document.querySelector("#contact");
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
  } else if (homeBottom < pageY && pageY < aboutBottom - 53) {
    addAndRemove(".navbar__about");
  } else if (aboutBottom - 53 < pageY && pageY < skillsBottom - 53) {
    addAndRemove(".navbar__skills");
  } else if (
    skillsBottom - 53 < pageY &&
    pageY < workBottom - 53 &&
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
}

/* Navbar Scrolling by click element */
nav.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") scrollAndAppendClass("nav");
});

homeBtn.addEventListener("click", (event) => {
  scrollAndAppendClass("homeBtn");
});

function scrollAndAppendClass(element) {
  let append_target = "";
  let sec_target = "";

  switch (element) {
    case "nav":
      append_target = `.${event.target.classList.value}`;
      sec_target = `#${event.target.classList.value.split("__")[1]}`;
      break;
    case "homeBtn":
      append_target = ".navbar__about";
      sec_target = "#about";
      break;
  }

  let topOfSection =
    document.querySelector(sec_target).getBoundingClientRect().top +
    window.pageYOffset -
    50;
  window.scrollTo({
    top: topOfSection,
    behavior: "smooth",
  });
  removeActive();
  document.querySelector(append_target).classList.add("active");
}

function removeActive() {
  nav_items.forEach((element) => element.classList.remove("active"));
}
