import "@testing-library/cypress/add-commands";

Cypress.Commands.add("clickLink", (text: string) =>
  cy.findByRole("link", { name: new RegExp(text, "i") }).click()
);
