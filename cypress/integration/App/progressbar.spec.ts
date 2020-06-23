/// <reference types="cypress" />
import * as ProgressBar from "/Users/victor/dev/portfolio/src/components/ProgressBar";

describe("App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  // it("check getTitleElement", () => {
  //   cy.document().then((doc) => {
  //     const span = ProgressBar.getTitleElement(doc.documentElement);
  //     expect(span.textContent).to.equal("HTML");
  //   });
  // });

  // it("check getActiveElement", () => {
  //   cy.document().then((doc) => {
  //     const span = ProgressBar.getActiveElement(doc.documentElement);
  //     expect(span.textContent).to.equal("HTML");
  //   });
  // });
});
