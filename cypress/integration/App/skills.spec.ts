/// <reference types="cypress" />
import * as Skills from "/Users/victor/dev/portfolio/src/components/Skills";

describe("App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("check getTitleElements", () => {
    cy.document().then((doc) => {
      const span = Skills.getTitleElements(doc.documentElement);
      expect(span.length).to.equal(6);
    });
  });

  it("check setActive", () => {
    cy.get(".skills__description span:nth-child(1)").eq(4).click();
    cy.document().then((doc) => {
      const span = doc.documentElement.querySelectorAll(
        ".skills__description span:nth-child(1)"
      )[4];
      const clas = span.getAttribute("class").split(" ");
      expect(clas).to.contain("active");
    });
  });
});
