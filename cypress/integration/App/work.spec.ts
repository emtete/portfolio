/// <reference types="cypress" />
import * as Work from "/Users/victor/dev/portfolio/src/components/Work";

describe("Work", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("check getBtns", () => {
    // cy.get(".category__btn").eq(1).click();
    cy.document().then((doc) => {
      const btns = Work.getBtns(doc.documentElement);
      expect(btns.length).to.equal(8);
    });
  });

  it("check getProjects", () => {
    // cy.get(".category__btn").eq(1).click();
    cy.document().then((doc) => {
      const btns = Work.getProjects(doc.documentElement);
      expect(btns.length).to.equal(4);
    });
  });
});
