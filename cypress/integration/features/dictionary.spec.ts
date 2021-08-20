describe("dictionary", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("User can search for a definition", () => {
    cy.clickLink("dictionary");
    cy.findByRole("heading", { name: /Dictionary/i }).should("exist");

    cy.findByLabelText(/Search/i).type("hello{enter}");
    cy.findByTestId("loading-spinner").should("exist");
    cy.findByText(/No Results Found!/i).should("not.exist");
    cy.findByText(/used as a greeting/i).should("exist");
    cy.findByTestId("loading-spinner").should("not.exist");
  });

  it("User can see error on failure", () => {
    cy.intercept("GET", "*/api.dictionaryapi.dev/api/v2/entries/en/*", {
      body: {},
      statusCode: 500,
    });

    cy.clickLink("dictionary");
    cy.findByLabelText(/Search/i).type("hello{enter}");
    cy.findByText(/Something went wrong!/i, { timeout: 10000 }).should("exist");

    cy.findByText(/No Results Found!/i).should("not.exist");
  });

  it("User can see no results found message.", () => {
    cy.clickLink("dictionary");
    cy.findByLabelText(/Search/i).type("abcdefghi{enter}");
    cy.findByText(/No Results Found!/i).should("exist");

    cy.findByText(/Something went wrong!/i).should("not.exist");
  });
});
