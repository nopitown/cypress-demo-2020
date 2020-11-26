describe("App", () => {
  it("add todo", () => {
    cy.visit("/");
    cy.findByPlaceholderText("Enter a new todo").type("Clean your room{enter}");
    cy.findByText("Clean your room");
  });

  it("delete todo", () => {
    cy.visit("/");
    cy.findByPlaceholderText("Enter a new todo").type("Clean your room{enter}");
    cy.findAllByText("Remove").last().click();
    cy.findByText("Clean your room").should("not.exist");
  });
});
