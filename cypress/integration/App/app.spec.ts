/// <reference types="cypress" />
import React from "react";
import { mount } from "cypress-react-unit-test";
import App, { getNavBtnsElement, getSectionsElement } from "/Users/victor/dev/portfolio/src/App";
import home_style from "./style/home.module.css";

describe("App E2E", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("check getSectionsElement", () => {
    cy.document().then((doc) => {
      const root = doc.documentElement.querySelector("#root");
      const section = getSectionsElement(root);
      expect(Object.keys(section).length).to.equal(6);
    });
  });

  it("check getNavBtnsElement", () => {
    cy.document().then((doc) => {
      let btns;
      btns = doc.documentElement.querySelectorAll(".nav__btn");
      expect(btns.length).to.equal(6);
    });
  });
});
