describe("My First Test", () => {
  it("renders the Home Page", () => {
    cy.visit("/");

    cy.get("h1").should("have.text", "Our Story");
  });
});
