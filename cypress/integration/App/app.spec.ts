/// <reference types="cypress" />
import * as App from "/Users/victor/dev/portfolio/src/App";

describe("App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("check getSectionsElement", () => {
    cy.document().then((doc) => {
      const section = getSectionElement(doc);
      expect(Object.keys(section).length).to.equal(6);
    });
  });

  it("check getNavBtnsElement", () => {
    cy.document().then((doc) => {
      const btns = App.getNavBtnsElement(doc.documentElement);
      expect(btns.length).to.equal(6);
    });
  });

  // dependency : getPosition, getSectionElement
  it("check getCurrentSection", () => {
    cy.document().then((doc) => {
      const section = getSectionElement(doc);
      const curruntSection = App.getCurrentSection(section, App.getPosition);
      expect(curruntSection).to.equal("home");
    });
  });

  // dependency: getCurruntSection, getSectionElement;
  it("check setActive", () => {
    cy.document().then((doc) => {
      const section = getSectionElement(doc);
      App.setActive("skills", section);
      const nav__skills = doc.documentElement.querySelector("#nav__skills");
      const navClass = nav__skills.getAttribute("class").split(" ");
      expect(navClass).to.contain("active");
    });
  });

  // dependency : getCurruntSection, getSectionElement
  it("check attachNavbar", () => {
    cy.get("#work").scrollIntoView({ easing: "linear" });
    cy.document().then((doc) => {
      const navbar = doc.documentElement.querySelector("#navbar");
      const navY = navbar.getBoundingClientRect().top;

      expect(navY).to.equal(-1229);
    });
  });

  // dependency : getCurruntSection, getSectionElement
  // it("check goTo", () => {
  //   // cy.document().then((doc) => {
  //   // expect(false).to.equal(true);
  //   // });
  // });
});

function getSectionElement(doc) {
  const root = doc.documentElement.querySelector("#root");
  const section = App.getSectionsElement(root);
  return section;
}
