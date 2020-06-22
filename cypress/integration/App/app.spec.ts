/// <reference types="cypress" />
import React from "react";
import { getNavBtnsElement } from "/Users/victor/dev/portfolio/src/App";

describe("App E2E", () => {
  it("should assert that true is equal to true", () => {
    expect(true).to.equal(true);
    console.log(getNavBtnsElement());
  });
});
