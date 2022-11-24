/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('home page renders properly', () => {
  it('should render the page', () => {
    cy.visit('./')
    cy.contains("Let's code naap").should('exist')
  })
})
