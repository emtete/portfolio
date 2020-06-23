/// <reference types="cypress" />
import * as About from "/Users/victor/dev/portfolio/src/components/About";

describe("App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("check getListElement", () => {
    cy.document().then((doc) => {
      const lis = About.getListElement(doc.documentElement);
      expect(lis.length).to.equal(5);
    });
  });

  it("check setActive", () => {
    cy.get(".about_about__content__3Zl7G li:nth-child(2)").click();
    cy.document().then((doc) => {
      const li = doc.documentElement.querySelector(".about_about__content__3Zl7G li:nth-child(2)");
      const clas = li.getAttribute("class");
      expect(clas).to.contain("about_active__1IkPv");
    });
  });
});
