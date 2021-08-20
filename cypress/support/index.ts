/// <reference types="cypress" />
import "./commands";

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Clicks link with the provided text.
       * @example cy.dataCy('about')
       */
      clickLink(value: string): Chainable;
    }
  }
}
