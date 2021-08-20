describe("navigation", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Basic site navigation works correctly", () => {
    cy.findByRole("heading", { name: /Welcome to Next.js!/i }).should("exist");
    cy.findByRole("link", { name: /about/i }).click();
    cy.findByRole("heading", { name: /About/i }).should("exist");
  });
});
