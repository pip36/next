describe("general", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Basic site navigation works correctly", () => {
    cy.findByRole("heading", { name: /Welcome to Next.js!/i }).should("exist");
    cy.clickLink("about");
    cy.findByRole("heading", { name: /About/i }).should("exist");
  });
});
