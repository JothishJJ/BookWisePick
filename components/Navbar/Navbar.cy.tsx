import React from 'react'
import Navbar from './Navbar'

describe('<Navbar />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Navbar />)
  })

  beforeEach(() => {
    cy.mount(<Navbar />)
  })

  it("Contains Links", () => {
    cy.get('[data-cy="about-us-link"]').should("be.visible")
    cy.get('[data-cy="about-us-link"]').should("be.visible")

    cy.get('[data-cy="home-link"]').should("be.visible")
  })

})
