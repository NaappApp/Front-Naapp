/* eslint-disable no-undef */
/// <reference types="cypress" />

import { App } from '../../src/App'

describe('<App>', () => {
  it('should mounts the App component', () => {
    cy.mount(<App />)
  })
})
