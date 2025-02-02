/// <reference types="cypress" />

describe("Page Render Smoke Tests", () => {
  it("renders the Home Page", () => {
    cy.visit("/");

    cy.get("h1").should("have.text", "Our Story");
  });
  it("renders the Music Page", () => {
    cy.visit("/music");

    cy.get("h1").should("have.text", "Music");
  });
  it("renders the Press Page", () => {
    cy.visit("/press");

    cy.get("h1").should("have.text", "Press");
  });
  it("renders the Booking Page", () => {
    cy.visit("/booking");

    cy.get("h1").should("have.text", "Booking");
  });
  it("renders the 404 Page", () => {
    const url = "/some-random-string";
    cy.visit(url);

    const baseUrlWithoutProtocol = Cypress.config("baseUrl").split("://")[1];
    const fullUrl = baseUrlWithoutProtocol + url;

    cy.findByTestId("does-not-exist").should(
      "have.text",
      `${fullUrl} does not exist.`,
    );
  });
});
