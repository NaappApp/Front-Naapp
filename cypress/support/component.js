/* eslint-disable no-undef */

// Import commands.js using ES2015 syntax:
import "./commands";

import { mount } from "cypress/react18";

Cypress.Commands.add("mount", mount);

// Example use:
// cy.mount(<MyComponent />)
