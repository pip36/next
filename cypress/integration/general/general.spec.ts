describe("general", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Basic site navigation works correctly", () => {
    cy.findByRole("heading", { name: /Welcome to Next.js!/i }).should("exist");
    cy.clickLink("about");
    cy.findByRole("heading", { name: /About/i }).should("exist");

    cy.clickLink("articles");
    cy.findByRole("heading", { name: /Articles/i }).should("exist");

    cy.clickLink("How to make a dynamic page.");
    cy.findByRole("heading", { name: /How to make a dynamic page/i }).should(
      "exist"
    );

    cy.clickLink("Home");
    cy.findByRole("heading", { name: /Welcome to Next.js!/i }).should("exist");
  });
});
