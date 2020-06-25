/// <reference types="cypress" />
import * as CtgrBtn from "/Users/victor/dev/portfolio/src/components/CategoryBtn";

describe("CategoryBtn", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("check getListElement", () => {
    cy.get(".category__btn").eq(1).click();
    expect(true).to.equal(true);
    cy.document().then((doc) => {
      const txt = doc.querySelectorAll(".category__btn")[1].textContent;
      expect(txt.indexOf("Projects")).to.not.equal(5);
    });
  });
});
