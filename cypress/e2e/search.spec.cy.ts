describe("Search Page Tests", () => {

    beforeEach(() => {
        cy.visit("http://localhost:3000/app/search")
    })

    it("should have a search bar", () => {
        cy.get('input[data-cy="search-bar"]').should("be.visible")
    })

    it("should give result after searching", () => {
        // Search for Game of Thrones
        cy.get('input[data-cy="search-bar"]').type("Game of thrones")
        cy.get('button[data-cy="search"]').click()

        // See if there is twenty results
        cy.get('div[data-cy="book-card"]', { timeout: 10000 }).should("be.visible")
    })

})
