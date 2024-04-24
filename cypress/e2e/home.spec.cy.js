describe("Home Page Tests", () => {
    beforeEach(() => {
        cy.visit("localhost:3000")
    })

    it("has the title", () => {
        cy.title().should("contain", "BookWisePick")
    })

    it("has the description", () => {
        cy.get("head meta[name='description']").should('have.attr', 'content', "The next generation book picker for choosing the next book for you to read.")
    })

    // Hero Section
    it("has the h1 tag", () => {
        cy.get("h1").should("contain", "Find the right book to Read!")
    })

    it("Has the right text on button", () => {
        cy.get("button").should("contain", "Explore the Books!")
    })

})
