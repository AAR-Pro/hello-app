describe("Hello App", () => {
  it("shows backend message after clicking the button", () => {
    cy.visit("http://localhost:5173");

    cy.contains("Get Message").click();

    cy.contains("Hello from the backend!").should("be.visible");
  });
});
